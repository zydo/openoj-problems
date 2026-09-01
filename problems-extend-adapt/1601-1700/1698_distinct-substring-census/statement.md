# Distinct Substring Census

## Description

Take a string `s` and count how many different nonempty substrings it
contains. A piece that occurs several times — at different spots, or
overlapping itself — still counts exactly once; two pieces count together
only when they spell different strings.

A substring is what remains after trimming any number of characters
(possibly none) from the front of `s` and any number (possibly none) from
the back.

### Example 1

```text
Input: s = "banana"
Output: 15
Explanation: The 15 distinct substrings are ["a","b","n","ba","an","na",
"ban","ana","nan","bana","anan","nana","banan","anana","banana"]. Pieces
that occur twice, like "an" and "ana", are counted once.
```

### Example 2

```text
Input: s = "zzzz"
Output: 4
Explanation: Every window spells a run of z's, so only "z", "zz", "zzz",
and "zzzz" are distinct.
```

### Example 3

```text
Input: s = "qwerty"
Output: 21
Explanation: No two windows spell the same string, so all 6 * 7 / 2 = 21
of them count.
```

### Constraints

- `1 <= s.length <= 500`
- `s` consists of lowercase English letters.

### Follow-up

Can you get the census in `O(n)` time?

## Hints

### Hint 1

Comparing candidate substrings character by character is far too slow —
each piece needs a fingerprint you can test for equality in constant time.

### Hint 2

Precompute rolling hashes of the prefixes of `s`. The fingerprint of any
single substring then follows in constant time from two prefix values.

### Hint 3

Fingerprint every start/end pair — there are `n * (n + 1) / 2` pieces —
and count the distinct fingerprints.

### Hint 4

One hash can collide. Fingerprinting each piece twice with independent
bases and moduli makes a false match vanishingly unlikely.
