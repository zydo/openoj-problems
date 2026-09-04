# Weighing Words Into A Cipher Line

## Description

You are given an array `words` of lowercase English words and an integer
array `weights` of length 26, where `weights[i]` is the score assigned to
the `i`th letter of the alphabet.

A word's score is the total of the scores of its letters. Each word is
then enciphered into a single letter: take its score modulo 26 and read
the alphabet backwards from that offset, so `0` maps to `'z'`, `1` to
`'y'`, ..., and `25` to `'a'`.

Build the result by giving every word its own letter in the same order
the words appear, then return the concatenation of those letters.

### Example 1

```text
Input: words = ["cat","dog"], weights = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
Output: "bz"
Explanation: Letter scores run a = 1 through z = 26. "cat" scores
3 + 1 + 20 = 24, and offset 24 read from the end of the alphabet is
'b'. "dog" scores 4 + 15 + 7 = 26, which is 0 modulo 26, so it maps to
'z'. The line is "bz".
```

### Example 2

```text
Input: words = ["aaa","bb","c"], weights = [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]
Output: "els"
Explanation: Every letter weighs 7, so a word's score is 7 times its
length: 21, 14, and 7. These give offsets 21, 14, and 7 — the letters
'e', 'l', and 's'.
```

### Example 3

```text
Input: words = ["zzz"], weights = [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1]
Output: "w"
Explanation: Only 'z' weighs 1, so the single word scores 3, and offset
3 read backwards is 'w'.
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 10`
- `weights.length == 26`
- `1 <= weights[i] <= 100`
- Each word consists only of lowercase English letters.

## Hints

### Hint 1

Score a word by walking its characters and adding `weights[c - 'a']`
for each one.

### Hint 2

The letter for a word depends only on its score's residue modulo 26.

### Hint 3

A residue `r` selects the character `'z' - r` — that single expression
implements the reversed-alphabet table without building one.

### Hint 4

Collect one letter per word, preserving input order, and join them.
