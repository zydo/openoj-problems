#!/usr/bin/env python3
"""Generate every starter.* file for a problem bundle from its problem.json.

Starters are derived code: never edit them by hand — change problem.json and
re-run this script. The file extension selects the language (py, javascript,
typescript, java, cpp, go, rust, sql) and the set of generated starters
defines the languages the problem offers. Function problems generate all seven
languages; sql a single starter.sql; design (class) and interactive (oracle)
problems python3 + java only — the typed wrappers do not implement the
actions/params or oracle protocols.

Usage:
  gen_starters.py problems/0001_two-sum [problems/… …]   # default: all
  gen_starters.py --check problems/…                     # diff, write nothing
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from format import format_content  # noqa: E402 — same pinned toolchain as CI

FUNCTION_LANGUAGES = ("python3", "javascript", "typescript", "java", "cpp", "go", "rust")
EXTENSIONS = {
    "python3": "py",
    "javascript": "js",
    "typescript": "ts",
    "java": "java",
    "cpp": "cpp",
    "go": "go",
    "rust": "rust",
    "sql": "sql",
}


def _kind(spec: dict) -> str:
    if spec["kind"] == "integer":
        return "integer32" if int(spec.get("bits", 32)) == 32 else "integer64"
    return spec["kind"]


def _uses_structs(invocation: dict) -> set[str]:
    found: set[str] = set()

    def walk(spec) -> None:
        if not isinstance(spec, dict):
            return
        if spec.get("kind") == "linked_list":
            found.add("list")
        if spec.get("kind") == "binary_tree":
            found.add("tree")
        walk(spec.get("items"))

    for parameter in invocation.get("parameters", []):
        walk(parameter.get("value_type"))
    walk(invocation.get("return_type"))
    return found


def _struct_item_type(invocation: dict) -> str:
    for parameter in invocation.get("parameters", []):
        spec = parameter.get("value_type")
        if isinstance(spec, dict) and spec.get("kind") in ("linked_list", "binary_tree"):
            if spec.get("items", {}).get("bits") == 64:
                return "i64"
    spec = invocation.get("return_type")
    if isinstance(spec, dict) and spec.get("kind") in ("linked_list", "binary_tree"):
        if spec.get("items", {}).get("bits") == 64:
            return "i64"
    return "i32"


def _entry(invocation: dict, language: str) -> str:
    method = invocation.get("method")
    entry = invocation.get("entrypoints", {}).get(language)
    name = entry or method
    if language == "rust" and not entry:
        parts = re.findall(r"[A-Z]+(?![a-z])|[A-Z][a-z0-9]*|[a-z0-9]+", method or "")
        name = "_".join(part.lower() for part in parts)
    return name


# --- per-language type rendering -------------------------------------------------


def python_type(spec: dict) -> str:
    kind = _kind(spec)
    return {
        "integer32": "int",
        "integer64": "int",
        "number": "float",
        "boolean": "bool",
        "string": "str",
        "linked_list": "Optional[ListNode]",
        "binary_tree": "Optional[TreeNode]",
    }.get(kind) or f"List[{python_type(spec['items'])}]"


def javascript_type(spec: dict) -> str:
    kind = _kind(spec)
    return {
        "integer32": "number",
        "integer64": "number",
        "number": "number",
        "boolean": "boolean",
        "string": "string",
        "linked_list": "ListNode",
        "binary_tree": "TreeNode",
    }.get(kind) or f"{javascript_type(spec['items'])}[]"


def typescript_type(spec: dict) -> str:
    kind = _kind(spec)
    scalar = {
        "integer32": "number",
        "integer64": "number",
        "number": "number",
        "boolean": "boolean",
        "string": "string",
        "linked_list": "ListNode | null",
        "binary_tree": "TreeNode | null",
    }.get(kind)
    if scalar:
        return scalar
    item = typescript_type(spec["items"])
    if " | " in item:  # postfix [] binds tighter than a union — parenthesize
        item = f"({item})"
    return f"{item}[]"


def _contains_struct(spec: dict) -> bool:
    if not isinstance(spec, dict):
        return False
    if spec.get("kind") in ("linked_list", "binary_tree"):
        return True
    return _contains_struct(spec.get("items"))


def java_type(spec: dict) -> str:
    kind = _kind(spec)
    scalar = {
        "integer32": "int",
        "integer64": "long",
        "number": "double",
        "boolean": "boolean",
        "string": "String",
        "linked_list": "ListNode",
        "binary_tree": "TreeNode",
    }.get(kind)
    if scalar:
        return scalar
    # pure-scalar nesting stays primitive arrays (int[][]); a struct anywhere
    # in the item tree switches that level to a boxed List
    if _contains_struct(spec["items"]):
        return f"List<{java_type(spec['items'])}>"
    return f"{java_type(spec['items'])}[]"


def cpp_type(spec: dict, reference: bool = False) -> str:
    kind = _kind(spec)
    base = {
        "integer32": "int",
        "integer64": "long long",
        "number": "double",
        "boolean": "bool",
        "string": "string",
        "linked_list": "ListNode*",
        "binary_tree": "TreeNode*",
    }.get(kind) or f"vector<{cpp_type(spec['items'])}>"
    if reference and kind == "array":
        return base + "&"
    return base


def go_type(spec: dict) -> str:
    kind = _kind(spec)
    return {
        "integer32": "int",
        "integer64": "int64",
        "number": "float64",
        "boolean": "bool",
        "string": "string",
        "linked_list": "*ListNode",
        "binary_tree": "*TreeNode",
    }.get(kind) or f"[]{go_type(spec['items'])}"


def rust_type(spec: dict) -> str:
    kind = _kind(spec)
    return {
        "integer32": "i32",
        "integer64": "i64",
        "number": "f64",
        "boolean": "bool",
        "string": "String",
        "linked_list": "Option<Box<ListNode>>",
        "binary_tree": "Option<Box<TreeNode>>",
    }.get(kind) or f"Vec<{rust_type(spec['items'])}>"


PY_LIST_NODE = """class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
"""

PY_TREE_NODE = """class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
"""

RUST_LIST_NODE = """#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: {item},
    pub next: Option<Box<ListNode>>,
}
"""

RUST_TREE_NODE = """#[derive(PartialEq, Eq, Clone, Debug)]
pub struct TreeNode {
    pub val: {item},
    pub left: Option<Box<TreeNode>>,
    pub right: Option<Box<TreeNode>>,
}
"""


def _parameters(invocation: dict) -> list[tuple[str, dict]]:
    return [(parameter["name"], parameter["value_type"]) for parameter in invocation.get("parameters", [])]


def generate(invocation: dict, language: str) -> str:
    if invocation.get("type", "function") == "sql":
        return "-- TODO: write a single SELECT query\nSELECT 'TODO';\n"
    if invocation.get("type", "function") == "design":
        return _generate_design(invocation, language)
    if invocation.get("type", "function") == "interactive":
        return _generate_interactive(invocation, language)
    parameters = _parameters(invocation)
    return_type = invocation.get("return_type") or {"kind": "boolean"}
    structs = _uses_structs(invocation)
    name = _entry(invocation, language)

    if language == "python3":
        blocks = ["from typing import List, Optional\n\n\n"]
        if "list" in structs:
            blocks.append(PY_LIST_NODE + "\n\n")
        if "tree" in structs:
            blocks.append(PY_TREE_NODE + "\n\n")
        signature = ", ".join(
            [f"self", *(f"{parameter}: {python_type(spec)}" for parameter, spec in parameters)]
        )
        blocks.append(f"class Solution:\n    def {name}({signature}) -> {python_type(return_type)}:\n")
        blocks.append('        raise NotImplementedError("TODO")\n')
        return "".join(blocks)

    if language == "javascript":
        lines = ["/**"]
        lines += [f" * @param {{{javascript_type(spec)}}} {parameter}" for parameter, spec in parameters]
        lines.append(f" * @return {{{javascript_type(return_type)}}}")
        lines.append(" */")
        arguments = ", ".join(parameter for parameter, _ in parameters)
        lines.append(f"var {name} = function({arguments}) {{")
        lines.append('    throw new Error("TODO");')
        lines.append("};")
        return "\n".join(lines) + "\n"

    if language == "typescript":
        signature = ", ".join(f"{parameter}: {typescript_type(spec)}" for parameter, spec in parameters)
        return (
            f"function {name}({signature}): {typescript_type(return_type)} {{\n"
            '    throw new Error("TODO");\n'
            "}\n"
        )

    if language == "java":
        chunks = []
        body_types = [java_type(spec) for _, spec in parameters] + [java_type(return_type)]
        if any(type_name.startswith("List<") for type_name in body_types):
            chunks.append("import java.util.List;\n\n")
        signature = ", ".join(f"{java_type(spec)} {parameter}" for parameter, spec in parameters)
        chunks.append("class Solution {\n")
        chunks.append(f"    public {java_type(return_type)} {name}({signature}) {{\n")
        chunks.append('        throw new UnsupportedOperationException("TODO");\n')
        chunks.append("    }\n}\n")
        return "".join(chunks)

    if language == "cpp":
        signature = ", ".join(f"{cpp_type(spec, reference=True)} {parameter}" for parameter, spec in parameters)
        return (
            "class Solution {\n"
            "public:\n"
            f"    {cpp_type(return_type)} {name}({signature}) {{\n"
            '        throw logic_error("TODO");\n'
            "    }\n"
            "};\n"
        )

    if language == "go":
        signature = ", ".join(f"{parameter} {go_type(spec)}" for parameter, spec in parameters)
        return f"func {name}({signature}) {go_type(return_type)} {{\n    panic(\"TODO\")\n}}\n"

    if language == "rust":
        chunks = []
        item = _struct_item_type(invocation)
        if "list" in structs:
            chunks.append(RUST_LIST_NODE.replace("{item}", item) + "\n")
        if "tree" in structs:
            chunks.append(RUST_TREE_NODE.replace("{item}", item) + "\n")
        signature = ", ".join(f"{parameter}: {rust_type(spec)}" for parameter, spec in parameters)
        chunks.append("impl Solution {\n")
        chunks.append(f"    pub fn {name}({signature}) -> {rust_type(return_type)} {{\n")
        chunks.append('        panic!("TODO")\n')
        chunks.append("    }\n}\n")
        return "".join(chunks)

    raise ValueError(f"Unsupported language: {language}")


def _generate_design(invocation: dict, language: str) -> str:
    """Design (class) problems: only python3 and java — the typed wrappers do
    not implement the actions/params protocol. Schema:
        {"type": "design", "class_name": "NumArray",
         "constructor": {"parameters": [...]},          # same shape as function
         "methods": [{"name": ..., "parameters": [...], # return_type omitted
                      "return_type": {...}}]}           # → void / None
    """
    if language not in ("python3", "java"):
        raise ValueError(f"Design problems support python3 and java, not {language}")
    class_name = invocation["class_name"]
    constructor = invocation.get("constructor", {}).get("parameters", [])
    methods = invocation.get("methods", [])
    all_specs = [spec.get("value_type") for spec in constructor]
    all_specs += [spec for method in methods for spec in method.get("parameters", [])]
    all_specs += [method.get("return_type") for method in methods if method.get("return_type")]

    if language == "python3":
        blocks = ["from typing import List, Optional\n\n\n"]
        blocks.append(f"class {class_name}:\n")
        ctor_signature = ", ".join(
            ["self", *(f"{parameter['name']}: {python_type(parameter['value_type'])}" for parameter in constructor)]
        )
        blocks.append(f"    def __init__({ctor_signature}) -> None:\n")
        blocks.append('        raise NotImplementedError("TODO")\n')
        for method in methods:
            signature = ", ".join(
                ["self", *(f"{parameter['name']}: {python_type(parameter['value_type'])}" for parameter in method.get("parameters", []))]
            )
            returns = python_type(method["return_type"]) if method.get("return_type") else "None"
            blocks.append(f"\n    def {method['name']}({signature}) -> {returns}:\n")
            blocks.append('        raise NotImplementedError("TODO")\n')
        return "".join(blocks)

    # java
    chunks = []
    if any(_contains_struct(spec) for spec in all_specs if spec):
        chunks.append("import java.util.List;\n\n")
    chunks.append(f"class {class_name} {{\n")
    ctor_signature = ", ".join(
        f"{java_type(parameter['value_type'])} {parameter['name']}" for parameter in constructor
    )
    chunks.append(f"    public {class_name}({ctor_signature}) {{\n")
    chunks.append('        throw new UnsupportedOperationException("TODO");\n')
    chunks.append("    }\n")
    for method in methods:
        signature = ", ".join(
            f"{java_type(parameter['value_type'])} {parameter['name']}"
            for parameter in method.get("parameters", [])
        )
        returns = java_type(method["return_type"]) if method.get("return_type") else "void"
        chunks.append(f"\n    public {returns} {method['name']}({signature}) {{\n")
        chunks.append('        throw new UnsupportedOperationException("TODO");\n')
        chunks.append("    }\n")
    chunks.append("}\n")
    return "".join(chunks)


# Interactive oracle table: the python type is injected into the submission
# module by runner/python_harness.py; the java type is the judge-classpath
# class (GridMaster is top-level, later oracles nest in InteractiveOracles).
# "parameter" names the oracle argument; oracles whose LeetCode signature
# takes extra data (wordlist / target / pattern) declare it in
# invocation["parameters"], rendered after the oracle argument.
INTERACTIVE_ORACLES = {
    "GridMaster": {"python": "GridMaster", "java": "GridMaster", "parameter": "master"},
    "Robot": {"python": "Robot", "java": "InteractiveOracles.Robot", "parameter": "robot"},
    "Master": {"python": "Master", "java": "InteractiveOracles.Master", "parameter": "master"},
    "MountainArray": {
        "python": "MountainArray",
        "java": "InteractiveOracles.MountainArray",
        "parameter": "mountainArr",
    },
    "BinaryMatrix": {
        "python": "BinaryMatrix",
        "java": "InteractiveOracles.BinaryMatrix",
        "parameter": "binaryMatrix",
    },
    "ArrayReader": {
        "python": "ArrayReader",
        "java": "InteractiveOracles.ArrayReader",
        "parameter": "reader",
    },
    "InfiniteStream": {
        "python": "InfiniteStream",
        "java": "InteractiveOracles.InfiniteStream",
        "parameter": "stream",
    },
}


def _generate_interactive(invocation: dict, language: str) -> str:
    """Interactive problems: the solution method receives an oracle object
    (the judge constructs it from the case data), plus any auxiliary
    arguments declared in invocation["parameters"]. python3 + java only.
    Schema: {"type": "interactive", "class_name", "method", "oracle":
    "GridMaster", "oracle_methods": [{name, parameters, return_type?}],
    "parameters": [...auxiliary args...], "return_type", "query_limit"?}.
    A void method declares {"kind": "void"}."""
    if language not in ("python3", "java"):
        raise ValueError(f"Interactive problems support python3 and java, not {language}")
    oracle = invocation.get("oracle")
    if oracle not in INTERACTIVE_ORACLES:
        raise ValueError(f"Unsupported interactive oracle: {oracle}")
    types = INTERACTIVE_ORACLES[oracle]
    class_name = invocation["class_name"]
    method = invocation["method"]
    auxiliary = [
        (parameter["name"], parameter["value_type"])
        for parameter in invocation.get("parameters", [])
    ]
    returns = invocation.get("return_type") or {"kind": "integer", "bits": 32}
    if returns.get("kind") == "void":
        python_return, java_return = "None", "void"
    else:
        python_return, java_return = python_type(returns), java_type(returns)

    if language == "python3":
        oracle_argument = f"{types['parameter']}: {types['python']}"
        signature = ", ".join(
            ["self", oracle_argument, *(f"{name}: {python_type(spec)}" for name, spec in auxiliary)]
        )
        blocks = ["from typing import List, Optional\n\n\n"]
        blocks.append(f"class {class_name}:\n")
        blocks.append(f"    def {method}({signature}) -> {python_return}:\n")
        blocks.append('        raise NotImplementedError("TODO")\n')
        return "".join(blocks)

    # java — the oracle API is documented in the statement; the starter's
    # signature references the oracle type from the judge classpath.
    oracle_argument = f"{types['java']} {types['parameter']}"
    signature = ", ".join(
        [oracle_argument, *(f"{java_type(spec)} {name}" for name, spec in auxiliary)]
    )
    chunks = [f"class {class_name} {{\n"]
    chunks.append(f"    public {java_return} {method}({signature}) {{\n")
    chunks.append('        throw new UnsupportedOperationException("TODO");\n')
    chunks.append("    }\n}\n")
    return "".join(chunks)


def starter_files(invocation: dict) -> dict[str, str]:
    invocation_type = invocation.get("type", "function")
    if invocation_type == "sql":
        return {"sql": generate(invocation, "sql")}
    if invocation_type == "design":
        return {language: generate(invocation, language) for language in ("python3", "java")}
    if invocation_type == "interactive":
        return {language: generate(invocation, language) for language in ("python3", "java")}
    return {language: generate(invocation, language) for language in FUNCTION_LANGUAGES}


def main() -> None:
    arguments = sys.argv[1:]
    check_only = "--check" in arguments
    targets = [Path(argument) for argument in arguments if not argument.startswith("--")]
    if not targets:
        targets = sorted(Path(__file__).resolve().parent.parent.glob("problems/*"))
    failures = 0
    for bundle in targets:
        problem = json.loads((bundle / "problem.json").read_text(encoding="utf-8"))
        expected = starter_files(problem["invocation"])
        for language, content in expected.items():
            # post-generation formatting with the pinned toolchain (see
            # FORMAT.md); tolerant so generation works without every tool
            # installed — CI's format check is the hard gate
            content = format_content(EXTENSIONS[language], content, tolerant=True)
            path = bundle / f"starter.{EXTENSIONS[language]}"
            if check_only:
                if not path.exists() or path.read_text(encoding="utf-8") != content:
                    failures += 1
                    print(f"STALE {path}")
            else:
                path.write_text(content, encoding="utf-8")
        # remove generated starters that no longer belong (language removed)
        for stale in bundle.glob("starter.*"):
            language = {extension: key for key, extension in EXTENSIONS.items()}.get(stale.name[len("starter.") :])
            if language is None or language not in expected:
                if not check_only:
                    stale.unlink()
                print(f"REMOVED {stale}")
        if not check_only:
            print(f"OK   {bundle.name}: {len(expected)} starters")
    raise SystemExit(1 if failures else 0)


if __name__ == "__main__":
    main()
