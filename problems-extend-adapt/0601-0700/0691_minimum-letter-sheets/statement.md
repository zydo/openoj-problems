# Minimum Letter Sheets

## Description

You have unlimited copies of each word in `stickers`. Treat a word as a
letter sheet: you may cut out any of its individual lowercase letters,
discarding any letters you do not need. After cutting letters from one or
more sheets, you may rearrange the kept letters freely.

Find the fewest sheets required to assemble the string `target`. Return
`-1` if the available sheet words cannot supply all of its letters.

### Example 1

```text
Input: stickers = ["ab","bc"], target = "abcb"
Output: 2
Explanation: Cut `a` and `b` from one "ab" sheet, then `b` and `c` from
one "bc" sheet. Those four letters can be rearranged as "abcb".
```

### Example 2

```text
Input: stickers = ["ab","cd"], target = "ace"
Output: -1
Explanation: No supplied sheet contains `e`, so no selection of sheets
can make the target.
```

### Constraints

- `n == stickers.length`
- `1 <= n <= 50`
- `1 <= stickers[i].length <= 10`
- `1 <= target.length <= 15`
- Every sticker word and `target` use lowercase English letters only.

## Hints

### Hint 1

A state can record which target-character positions have already received
a cut letter. Since using one sheet only adds positions, a shortest-path
search over those states can count sheets layer by layer.

### Hint 2

Letters that do not occur in `target` need not be represented in a
sheet's useful inventory.

### Hint 3

Once a search state has been reached using no more sheets than another
route would use, the later route cannot improve the answer.

### Hint 4

If one sheet has at least as many copies of every useful letter as another,
the weaker sheet can never be a better choice for a single step.
