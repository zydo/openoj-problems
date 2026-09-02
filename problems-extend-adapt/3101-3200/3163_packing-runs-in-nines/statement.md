# Packing Runs in Nines

## Description

A string `word` arrives, and it must be squeezed through this loop:

- Start from an empty result `comp`. While `word` still has characters
  left, repeat one step:
    - Peel off the longest prefix made of one repeated character, taking
      at most 9 copies.
    - Write that count followed by the character into `comp`.

The loop ends when `word` is exhausted; return `comp`.

### Example 1

```text
Input: word = "mississippi"
Output: "1m1i2s1i2s1i2p1i"
Explanation:
No two neighbors repeat except within the pairs of s, i, and p, so
each run is emitted with its own count — 1m, 1i, 2s, 1i, 2s, 1i, 2p,
1i — concatenated in order.
```

### Example 2

```text
Input: word = "qqqqqqqqqqqqqqqqqqqqqqq"
Output: "9q9q5q"
Explanation:
The 23 copies of q cannot fit in one chunk, so the run is cut at nine
twice and the remaining five q's close it out.
```

### Example 3

```text
Input: word = "zzz"
Output: "3z"
Explanation:
Three copies of one letter fit well under the cap, so a single chunk
carries them all.
```

### Constraints

- `1 <= word.length <= 2 * 10⁵`
- `word` consists only of lowercase English letters.

## Hints

### Hint 1

Each step removes a run of up to nine equal characters, and taking the
full nine whenever possible is never worse than stopping early.

### Hint 2

One left-to-right sweep suffices: count how far the current character
repeats, emit `min(run, 9)` at a time, and jump past what was emitted.
