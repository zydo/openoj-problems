# Word Groups By Even-Odd Rotation

## Description

You are given an array of strings, `words`.

One _spin_ of a string `s` works like this:

- Collect the letters at even indices into a strip `E`, and the letters
  at odd indices into a strip `O`.
- Rotate `E` cyclically to the right by any amount you like, and rotate
  `O` cyclically to the right by any amount — the two amounts are chosen
  independently, and either may be zero.
- Write the rotated `E` back into the even slots and the rotated `O`
  back into the odd slots, reconstructing a string of the same shape.

Two strings are kindred when a single spin turns one of them into the
other. Split `words` into as few buckets as possible so that every
string lands in exactly one bucket and every pair of strings inside a
bucket is kindred. Return the number of buckets.

### Example 1

```text
Input: words = ["abcd","cdab","badc"]
Output: 2
Explanation:
    "abcd" has even-slot strip "ac" and odd-slot strip "bd". Turning
    each strip one step right gives "ca" and "db", which refill the
    slots as "cdab" — so "abcd" and "cdab" are kindred and share a
    bucket. No right-rotation of "bc" (the even strip of "badc") is
    "ac", so "badc" cannot join them and needs a bucket of its own.
```

### Example 2

```text
Input: words = ["cab","bca","acb","bac"]
Output: 2
Explanation:
    "cab" (strips "cb" and "a") matches "bac" (strips "bc" and "a"),
    and "bca" (strips "ba" and "c") matches "acb" (strips "ab" and
    "c") — each pair is one spin apart. The two pairs are unrelated, so
    two buckets suffice.
```

### Example 3

```text
Input: words = ["abab","baba","aa","a","aa"]
Output: 4
Explanation:
    "abab" and "baba" look like rotations of each other, but a spin
    never swaps strips between parities: "abab" has strips "aa" and
    "bb", and no rotation of "aa" is ever "bb". The identical copies of
    "aa" share a bucket, and the length-one "a" (whose odd strip is
    empty) stands alone. That yields four buckets.
```

### Example 4

```text
Input: words = ["zzz","zzz","zz","z"]
Output: 3
Explanation:
    The two copies of "zzz" share a bucket. "zz" has strips "z" and "z"
    while "zzz" has strips "zz" and "z", and no rotation changes a
    strip's length, so neither matches the other — and "z" keeps its
    empty odd strip to itself.
```

### Constraints

- `1 <= words.length <= 10⁵`
- `1 <= words[i].length <= 5 * 10⁵`
- The combined length of all strings does not exceed `5 * 10⁵`.
- `words[i]` consists only of lowercase English letters.

## Hints

### Hint 1

A spin never moves a letter across parity: even-slot letters stay in
even slots. So only same-length strings can be kindred, and then only
when their even strips are cyclic rotations of each other and their odd
strips are too.

### Hint 2

"Being cyclic rotations of each other" is an equivalence relation, so a
bucket is exactly a set of words whose even strips all fall in one
rotation class and whose odd strips all fall in one rotation class.

### Hint 3

Give every strip a rotation-proof canonical form, such as its
lexicographically smallest rotation — Booth's or Duval's algorithm
produces it in linear time, and comparing rotations of a doubled string
works as well.

### Hint 4

Reduce each word to the pair (canonical even strip, canonical odd
strip). The answer is how many distinct pairs occur.
