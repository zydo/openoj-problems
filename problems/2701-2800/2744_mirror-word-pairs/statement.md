# Mirror Word Pairs

## Description

You are given an array `words` of distinct strings, each exactly two
letters long.

Two entries can be paired when they sit at indices `i` and `j` with
`i < j` and `words[i]` reads the same as `words[j]` written backwards.
Every entry may join at most one pair.

Return the largest number of pairs that can be formed.

### Example 1

```text
Input: words = ["go","og","do","od","up"]
Output: 2
Explanation: Pair "go" with "og" and "do" with "od" — each later word
is the earlier one reversed. "up" has no reversal to match, so the
answer is 2.
```

### Example 2

```text
Input: words = ["kt","tk","tt","kk"]
Output: 1
Explanation: Only "kt" and "tk" reverse into one another, so they form
the single pair. The palindromes "tt" and "kk" read the same backwards
and can never pair with anything, because every word is distinct.
```

### Example 3

```text
Input: words = ["aa","bb","cc"]
Output: 0
Explanation: All three words are palindromes, and no word can pair
with itself, so no pair exists.
```

### Constraints

- `1 <= words.length <= 50`
- `words[i].length == 2`
- All the strings in `words` are distinct.
- `words[i]` consists of lowercase English letters.

## Hints

### Hint 1

All the strings are distinct, so any word's only conceivable partner —
its reversal — occurs at most once in the array.

### Hint 2

Try every pair of indices `i < j`; the two words pair exactly when
reversing `words[j]` produces `words[i]`.
