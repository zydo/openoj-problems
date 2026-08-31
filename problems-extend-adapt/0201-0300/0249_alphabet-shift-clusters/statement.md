# Alphabet Shift Clusters

## Description

Define a **shift** of a string as replacing every one of its letters with
the next letter of the alphabet, wrapping `'z'` back to `'a'`. Shifting
`"abc"` gives `"bcd"`; shifting `"xyz"` gives `"yza"`. Shifting can also
run backward (replace every letter with the previous one, wrapping `'a'`
to `'z'`), and repeating either direction sweeps through the same cycle
of 26 strings, always returning to where it started.

Two strings belong to the same **shift cluster** if repeatedly shifting
one, in either direction, ever produces the other (equivalently: both
strings have the same length and every position's letter differs by the
same fixed amount, mod 26).

Given an array `strings`, group its entries into their shift clusters.
Return the groups ordered by each group's first appearance in `strings`,
and list the members of every group in their original input order.

### Example 1

```text
Input: strings = ["abc","bcd","cde","xyz","az","ba","mn","no","q"]
Output: [["abc","bcd","cde","xyz"],["az","ba"],["mn","no"],["q"]]
```

### Example 2

```text
Input: strings = ["m"]
Output: [["m"]]
```

### Constraints

- `1 <= strings.length <= 200`
- `1 <= strings[i].length <= 50`
- `strings[i]` consists of lowercase English letters.

## Hints

### Hint 1

For a string of length `n`, look at how far each letter sits from the
first letter, wrapping mod 26. That sequence of `n` offsets stays the
same no matter how far the whole string is shifted, so it works as a key
for grouping strings into their shift clusters.
