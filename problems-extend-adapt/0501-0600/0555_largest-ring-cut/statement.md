# Largest Ring Cut

## Description

You are given an array of strings `strs`. Picture concatenating every
string into a closed loop in the given order, where each string may
independently be used forwards or reversed — an orientation choice made
once per string, before the loop is assembled.

Now make exactly one cut anywhere along the loop's circumference. The cut
may fall between two strings, or partway through one, splitting that
string's characters into a tail that becomes the front of the unrolled
string and a head that becomes its end. Unrolling the loop at that cut
turns it back into an ordinary, non-looped string.

Considering every combination of per-string orientations together with
every possible cut position, return the lexicographically greatest string
that can result.

### Example 1

```text
Input: strs = ["dog","cat"]
Output: "tgodca"
```

### Example 2

```text
Input: strs = ["hello"]
Output: "olleh"
```

### Example 3

```text
Input: strs = ["ab","cd","ef"]
Output: "febadc"
```

### Constraints

- `strs` has between `1` and `1000` strings.
- Each string in `strs` has between `1` and `1000` characters.
- The combined length of every string in `strs` is at most `1000`.
- Every string in `strs` consists only of lowercase English letters.
