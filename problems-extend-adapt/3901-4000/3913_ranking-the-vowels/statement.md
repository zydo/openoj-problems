# Ranking The Vowels

## Description

You are handed a string `s` of lowercase English letters. Leave every
consonant exactly where it is, but re-deal the vowels: collect them all, line
them up so that the most frequent vowel kinds come first, and pour them back
into the vowel positions in that order.

Within the line-up, a vowel kind that ties with another on frequency stands
earlier if its first appearance in `s` comes first. The five vowel letters
are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`; a letter's frequency is simply how
many times it occurs in `s`.

Return the string after the re-deal.

### Example 1

```text
Input: s = "cacophony"
Output: "cocophany"
Explanation: The vowels are a, o, o — `o` occurs twice, `a` once, so the
vowel stream becomes o, o, a. Pouring it back into the three vowel slots
gives "cocophany".
```

### Example 2

```text
Input: s = "audiology"
Output: "oodauligy"
Explanation: Frequencies are o = 2, and a = u = i = 1. The tie among the
singles resolves by first appearance, which is a, then u, then i, so the
stream is o, o, a, u, i and the result is "oodauligy".
```

### Example 3

```text
Input: s = "sequoia"
Output: "sequoia"
Explanation: All five vowels occur exactly once, so they keep their
first-appearance order and the string is unchanged.
```

### Example 4

```text
Input: s = "aerial"
Output: "aareil"
Explanation: Frequencies are a = 2, e = i = 1, with e's first appearance
before i's. The stream a, a, e, i replaces the vowels of "aerial",
producing "aareil".
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of lowercase English letters.

## Hints

### Hint 1

Only five vowel kinds exist, so counting them is a fixed-size tally; the
ordering work never depends on the string length.

### Hint 2

Build the reordered vowel stream once, then sweep `s` and swap in the next
stream character at each vowel position while consonants pass through.
