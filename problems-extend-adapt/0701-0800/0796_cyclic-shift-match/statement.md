# Cyclic Shift Match

## Description

You are given two strings `s` and `goal` of the same alphabet. A single
cyclic shift of a string removes its first character and appends that
character to the end — for instance, one shift turns `"abcde"` into
`"bcdea"`.

Determine whether `goal` can be produced by applying zero or more cyclic
shifts to `s`, in sequence. Return `true` if some number of shifts turns
`s` into exactly `goal`, and `false` otherwise.

### Example 1

```text
Input: s = "waterfall", goal = "fallwater"
Output: true
```

### Example 2

```text
Input: s = "waterfall", goal = "waterfull"
Output: false
```

### Constraints

- `1 <= s.length, goal.length <= 100`
- `s` and `goal` consist of lowercase English letters.
