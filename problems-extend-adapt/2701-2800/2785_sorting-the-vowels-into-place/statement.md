# Sorting The Vowels Into Place

## Description

You are given a string `s`, indexed from `0`. Rearrange its characters
into a new string `t` that satisfies both of these rules:

- Every consonant stays where it started: whenever `s[i]` is a
  consonant, `t[i]` must equal `s[i]`.
- Reading only the positions that hold vowels, the characters of `t`
  there must be in nondecreasing ASCII order: for any two vowel
  positions `i < j` of `s`, `t[i]` must not carry a higher ASCII value
  than `t[j]`.

Return the resulting string `t`.

The vowels are `a`, `e`, `i`, `o`, and `u`, each allowed in lowercase or
uppercase form. Every remaining letter of the alphabet is a consonant.

### Example 1

```text
Input: s = "aLpAcA"
Output: "ALpAca"
Explanation: The vowel positions 0, 3, and 5 hold a, A, and A. Sorted by
ASCII value the pool is A, A, a — every uppercase letter sorts before any
lowercase one — so the two uppercase A's take the first two vowel slots
and the lowercase a takes the last. The consonants L, p, and c do not
move.
```

### Example 2

```text
Input: s = "OpEnAgE"
Output: "ApEnEgO"
Explanation: The vowels collected from s are O, E, A, E; sorted by ASCII
value they read A, E, E, O, and they are poured back into the four vowel
slots in that order. All consonants keep their original positions.
```

### Example 3

```text
Input: s = "Rhythm"
Output: "Rhythm"
Explanation: No character of s is a vowel — y counts as a consonant
here — so the string comes back exactly as it arrived.
```

### Constraints

- `1 <= s.length <= 10^5`
- `s` contains only letters of the English alphabet, in either case.

### Hint 1

The consonants pin themselves down; the permutation is decided entirely
by which vowel values exist. Gather all of the vowels into one pool and
sort it.

### Hint 2

Walk the string again and, each time a vowel slot appears, hand it the
next unused vowel from the sorted pool.
