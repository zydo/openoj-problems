# Whole Word Tally

## Description

An array of strings `chunks` is handed to you. Joining every element of
`chunks` in order, with nothing inserted between them, produces a text `s`.

You are also given an array of strings `queries`.

Call a hyphen in `s` a connector when the characters on both sides of it
exist and are lowercase English letters.

A word is a maximal stretch of `s` made up entirely of lowercase English
letters and connectors.

Everything else in `s` — every space, and every hyphen that fails to be a
connector — merely separates words.

Build the array `ans` so that `ans[i]` counts how many words of `s` equal
`queries[i]` exactly.

### Example 1

```text
Input: chunks = ["kiwi plum ki","wi"], queries = ["kiwi","ki","plum"]
Output: [2,0,1]
Explanation:
    Joining the chunks gives s = "kiwi plum kiwi".
    The words of s are "kiwi", "plum", and "kiwi".
    "kiwi" is the concatenation of the chunk boundary "ki" and "wi", yet it
    still forms one word, while the query "ki" never appears as a whole
    word.
```

### Example 2

```text
Input: chunks = ["sun-moon noon--moon"," sun-mo","on"], queries = ["sun-moon","sun","moon","noon"]
Output: [2,0,1,1]
Explanation:
    Joining the chunks gives s = "sun-moon noon--moon sun-moon".
    In "sun-moon" the hyphen has letters on both sides, so it is a
    connector and the whole stretch is one word.
    In "noon--moon" each hyphen touches a hyphen on one side, so neither is
    a connector; the stretch breaks into the two words "noon" and "moon".
    The words of s are "sun-moon", "noon", "moon", and "sun-moon".
```

### Example 3

```text
Input: chunks = ["-cap rain-bo","w- jet"], queries = ["cap","rain-bow","jet","rain"]
Output: [1,1,1,0]
Explanation:
    Joining the chunks gives s = "-cap rain-bow- jet".
    The hyphen before "cap" has no character before it, and the hyphen
    after "rain-bow" is followed by a space, so both are separators.
    Only the hyphen inside "rain-bow" is a connector.
    The words of s are "cap", "rain-bow", and "jet".
```

### Constraints

- `1 <= chunks.length <= 10⁵`
- `1 <= chunks[i].length <= 10⁵`
- The combined length of all strings in `chunks` is at most `10⁵`
- Each element of `chunks` contains only lowercase English letters, spaces,
  and `'-'`
- `1 <= queries.length <= 10⁵`
- `1 <= queries[i].length <= 10⁵`
- The combined length of all strings in `queries` is at most `10⁵`
- Each element of `queries` contains only lowercase English letters and
  `'-'`
- Every element of `queries` is itself a word: it neither begins nor ends
  with `'-'`, and it never holds two hyphens in a row

### Hint 1

Decide for each hyphen whether it is a connector before you split the text
into words; a hyphen with a lowercase letter immediately on each side stays
inside the current word, and any other hyphen ends it.

### Hint 2

Drop the finished words into a hash map as you scan, then answer every
query with one lookup apiece.
