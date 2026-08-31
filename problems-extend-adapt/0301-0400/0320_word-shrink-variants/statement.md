# Word Shrink Variants

## Description

A _shrink_ of a word replaces some collection of its characters with a
number naming how many characters were replaced. The characters chosen for
each replacement must sit next to each other (a contiguous run), and no two
separate runs may touch or overlap — there always has to be at least one
untouched letter separating one replaced run from the next.

For instance, `"abcde"` has these shrinks among others:

- `"a3e"` (the middle run `"bcd"` becomes `"3"`)
- `"1bcd1"` (the single letters `"a"` and `"e"` each become `"1"`)
- `"5"` (the whole word becomes `"5"`)
- `"abcde"` (nothing is replaced)

By contrast, `"23"` is not a valid shrink of `"abcde"` — the runs behind
the two numbers (`"ab"` and `"cde"`) are adjacent, so the numbers end up
touching. Neither is `"22de"`, because the runs behind its two `"2"`s
(`"ab"` and `"bc"`) share the letter `"b"`.

Given a string `word`, return every valid shrink of `word`.

Because many shrinks exist for a single word, this judge fixes the order
in which they must be listed: walk `word` from left to right, and at each
letter first try folding it into a run that is still open, then try
closing that run (writing its length) and keeping the letter as-is. A
shrink is emitted once the walk reaches the end of the word. Example 1
lists its output in exactly this order.

### Example 1

```text
Input: word = "cat"
Output: ["3","2t","1a1","1at","c2","c1t","ca1","cat"]
```

### Example 2

```text
Input: word = "z"
Output: ["1","z"]
```

### Constraints

- `1 <= word.length <= 15`
- `word` consists of only lowercase English letters.
