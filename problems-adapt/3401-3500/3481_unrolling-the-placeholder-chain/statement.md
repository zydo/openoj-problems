# Unrolling The Placeholder Chain

## Description

You are handed a set of named snippets and a text that references them.
Each snippet is given as a pair `[key, value]`: the `key` is a single
uppercase letter and the `value` is a short string. A reference to a
snippet is written as a placeholder — `%key%` — and the `text` is built
by joining one placeholder per key with underscores. A snippet's value
may itself reference other snippets, which reference further snippets,
and so on; the reference structure never loops back on itself.

Resolving a placeholder means replacing it with its snippet's value, and
that value's own placeholders must be resolved in turn until none remain.
Apply this everywhere in the text and return the finished string, which
by then contains no `%` signs at all.

### Example 1

```text
Input: replacements = [["X","lo"],["Y","hi"]], text = "%X%_%Y%"
Output: "lo_hi"
Explanation: The X snippet holds "lo" and the Y snippet holds "hi", so
the two placeholders resolve directly and the underscore survives
verbatim.
```

### Example 2

```text
Input: replacements = [["A","1"],["B","2%A%"],["C","3%B%"]], text = "%C%_%B%_%A%"
Output: "321_21_1"
Explanation: C expands to "3" followed by B's expansion; B expands to
"2" followed by A's expansion; A is the literal "1". The chain resolves
to "321", the next placeholder to "21", and the last to "1".
```

### Example 3

```text
Input: replacements = [["P","pp"],["Q","q%P%q%P%"]], text = "%Q%_%P%"
Output: "qppqpp_pp"
Explanation: Q's value references P twice, so Q expands to
"q" + "pp" + "q" + "pp"; P itself is the literal "pp".
```

### Example 4

```text
Input: replacements = [["M","m%N%"],["N","n"]], text = "%N%_%M%"
Output: "n_mn"
Explanation: N is the literal "n" while M expands to "m" followed by
N's expansion, giving "mn".
```

### Constraints

- `1 <= replacements.length <= 10`
- Each element of `replacements` is a pair `[key, value]` where:
    - `key` is a single uppercase English letter.
    - `value` is a non-empty string of at most 8 characters that may
      contain zero or more placeholders written `%key%`.
- All replacement keys are distinct.
- The `text` concatenates exactly one placeholder per key, in some
  order, separated by underscores.
- `text.length == 4 * replacements.length - 1`
- Every placeholder appearing in the text or in any value names one of
  the given keys.
- The references between keys never form a cycle.

## Hints

### Hint 1

The references sketch a small graph — an edge from a key to each key it
names — and the no-cycle promise makes it a DAG; ordering keys by that
graph (a topological sort) gives a safe resolution order.

### Hint 2

Work each key once: resolve its value first from keys that need nothing
else, and by the time you reach any key its dependencies are already
finished strings.
