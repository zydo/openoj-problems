# Leveling Letter Frequencies

## Description

You are given a string `word` of lowercase English letters and an integer
`k`.

Deleting a character removes one occurrence of that letter from `word`.
Call the string leveled once no two letters that remain in it have counts
differing by more than `k`: for every pair of letters `x` and `y` still
present, the absolute difference between their counts must be at most `k`.

Return the minimum number of deletions needed to make `word` leveled.

### Example 1

```text
Input: word = "abcabc", k = 0
Output: 0
Explanation: each of the three letters occurs exactly twice, so the
counts already agree and nothing has to be removed.
```

### Example 2

```text
Input: word = "mississippi", k = 1
Output: 3
Explanation: drop the lone "m" and trim one "i" plus one "s". The
surviving counts are i = 3, s = 3, and p = 2, all within 1 of each other.
Fewer deletions cannot close the gaps.
```

### Example 3

```text
Input: word = "wwwwaaaaynn", k = 2
Output: 1
Explanation: removing the single "y" leaves counts w = 4, a = 4, and
n = 2, whose widest gap is exactly 2. The counts cannot all fit in a
window of width 2 more cheaply.
```

### Constraints

- `1 <= word.length <= 10⁵`
- `0 <= k <= 10⁵`
- `word` consists only of lowercase English letters.

## Hints

### Hint 1

Only the per-letter counts matter; tally them in one pass.

### Hint 2

Deletions can only shrink a count, so in the final string some letter
still holds its original count — in particular, the letter that ends up
with the smallest surviving count never gives up a character.

### Hint 3

Fix that smallest surviving count as `x`. Every letter you keep must then
land inside the window `[x, x + k]`.

### Hint 4

With `x` fixed, a letter sitting below `x` is cheapest to delete outright,
while a letter above `x + k` sheds exactly its excess. Try every distinct
original count as `x` and keep the cheapest total.
