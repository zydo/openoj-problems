# String List Packing

## Description

Design a way to pack a list of strings into one single string, and to
unpack that single string back into the original list.

Implement the `StringPacker` class:

- `encode(strs)` packs the string array `strs` into one string.
- `decode(s)` unpacks a string produced by `encode` back into the
  original array of strings.

You may not rely on any built-in serialization helper (no `eval` or
equivalent).

Because many different packing schemes could round-trip correctly, a
specific one is pinned here so the answer is checkable exactly: encode
each string as its decimal length, a colon, then the string's own
characters, and concatenate the pieces back to back in order. Under this
scheme `encode(["Rust", "Go"])` is `"4:Rust2:Go"`, and `encode([""])` is
`"0:"`. `encode` must return exactly this packing, and `decode` always
receives a string already in this form.

### Example 1

```text
Input:
["StringPacker", "encode", "decode"]
[[], [["Rust", "Go"]], ["4:Rust2:Go"]]
Output: [null, "4:Rust2:Go", ["Rust", "Go"]]
Explanation:
StringPacker packer = new StringPacker();
packer.encode(["Rust", "Go"]); // returns "4:Rust2:Go"
packer.decode("4:Rust2:Go");   // returns ["Rust", "Go"]
```

### Example 2

```text
Input:
["StringPacker", "encode", "decode"]
[[], [[""]], ["0:"]]
Output: [null, "0:", [""]]
```

### Constraints

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` may contain any of the 256 possible ASCII byte values.

### Follow-up

Could your scheme generalize to alphabets beyond ASCII?
