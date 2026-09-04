# Markup Snippet Validator

## Description

You are given a string `code` holding a snippet of markup. Parse it and
report whether the whole snippet forms one valid, fully-closed document.

A document is valid only if every rule below holds:

1. The entire snippet must be one closed tag, from the very first
   character to the very last. Anything outside that outer tag — leading
   text, trailing junk, or a second top-level tag — makes the snippet
   invalid.
2. A closed tag has the exact shape `<TAG_NAME>TAG_CONTENT</TAG_NAME>`:
   a start tag, some content, then an end tag repeating the same name. It
   is valid only if both the name and the content are valid.
3. A valid tag name is 1 to 9 characters long and consists solely of
   upper-case English letters; anything else makes the name invalid.
4. Valid content may hold ordinary characters, CDATA blocks, and other
   valid closed tags nested inside it — but never a stray `<`, a tag
   whose name is invalid, or a start tag whose matching end tag is
   missing (or vice versa). Nesting must also balance: a tag can only
   close after every tag opened inside it has already closed.
5. Reading a `<` (or `</`) always consumes every following character up
   to the next `>` as the tag name, whatever that text looks like — and
   if no `>` ever follows, the `<` itself is unmatched and the document
   is invalid.
6. A CDATA block has the exact shape `<![CDATA[CDATA_CONTENT]]>`, where
   `CDATA_CONTENT` is everything between `<![CDATA[` and the first `]]>`
   that follows it.
7. Nothing inside a CDATA block is parsed as markup — not tags, not a
   stray `<`, nothing — no matter what it looks like; it is always
   treated as plain, literal text.

### Example 1

```text
Input: code = "<TAG>Hello <![CDATA[<TAG>]]></TAG>"
Output: true
Explanation: The document is one closed <TAG>...</TAG> pair. The
CDATA block's contents look like another tag, but CDATA text is never
parsed, so it is just literal characters.
```

### Example 2

```text
Input: code = "<PARENT><CHILD>text</CHILD></PARENT>"
Output: true
Explanation: <CHILD> opens and closes fully inside <PARENT>, so the
nesting balances and both tag names are valid.
```

### Example 3

```text
Input: code = "<X> <Y> </X> </Y>"
Output: false
Explanation: <Y> opens after <X> but closes after <X> already closed,
so the tags cross rather than nest — the document is unbalanced.
```

### Constraints

- `1 <= code.length <= 500`
- `code` consists only of English letters, digits, and the characters
  `<`, `>`, `/`, `!`, `[`, `]`, `.`, and space.
