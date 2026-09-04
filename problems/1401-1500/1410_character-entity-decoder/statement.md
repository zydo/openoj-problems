# Character Entity Decoder

## Description

HTML documents spell out certain reserved characters with short escape
sequences called entities instead of writing the character directly. A
decoder for these escapes reads a body of text and substitutes every
entity with the character it stands for.

The six entities this problem cares about, and the character each one
decodes to, are:

- `&quot;` decodes to a double quote `"`.
- `&apos;` decodes to an apostrophe `'`.
- `&amp;` decodes to an ampersand `&`.
- `&gt;` decodes to a greater-than sign `>`.
- `&lt;` decodes to a less-than sign `<`.
- `&frasl;` decodes to a slash `/`.

You are given the string `text`. Decode it and return the result.

Decoding happens in one pass over the input, left to right: each entity
match is replaced exactly once, and characters that a replacement
produces are never fed back through the decoder. So the `&` that
`&amp;` decodes into cannot start a second match, and an ampersand that
does not begin one of the six entities — with or without a closing
semicolon — is left exactly as it appeared.

### Example 1

```text
Input: text = "&gt;stay &amp; listen&lt;"
Output: ">stay & listen<"
Explanation: The three entities at the edges and in the middle each
decode to their own symbol; nothing else in the string changes.
```

### Example 2

```text
Input: text = "visit &frasl;docs &apos;now&apos;"
Output: "visit /docs 'now'"
```

### Example 3

```text
Input: text = "&&amp;;"
Output: "&&;"
Explanation: The first `&` is bare — the character right after it is
another `&`, not a known entity — so it is copied through. The `&amp;`
that follows decodes to `&`, and the trailing `;` is copied through as
an ordinary character.
```

### Example 4

```text
Input: text = "a & p with &legend; symbol"
Output: "a & p with &legend; symbol"
Explanation: A standalone `&` and a semicolon-terminated name that is
not one of the six entities both survive untouched.
```

### Constraints

- `1 <= text.length <= 10⁵`
- `text` may contain any of the 256 ASCII characters, in any
  combination.

## Hints

### Hint 1

Every candidate match begins at an `&`; those are the only positions
worth inspecting.

### Hint 2

At each `&`, try to read one of the six known entities — the name and
its closing `;` must both be present. On a match, emit the decoded
character and jump past the `;`; otherwise emit the `&` itself and move
ahead one character.
