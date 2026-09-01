# Pattern Permutation

## Description

Take the string `s` of length `n` whose every character is `'I'` (higher)
or `'D'` (lower). A permutation `perm` of all the integers in `[0, n]`
follows the pattern of `s` when, for every position `i`:

- `perm[i] < perm[i + 1]` wherever `s[i] == 'I'`, and
- `perm[i] > perm[i + 1]` wherever `s[i] == 'D'`.

Given `s`, build such a permutation. The same pattern usually fits many
different permutations, so this judge expects one canonical answer,
produced this way: walk `s` from left to right; at each `'I'` place the
smallest value not used yet, and at each `'D'` place the largest value not
used yet; when the walk ends, put the one value still unused in the last
position.

### Example 1

```text
Input: s = "DI"
Output: [2,0,1]
Explanation: The leading 'D' takes the largest unused value 2, the 'I'
then takes the smallest unused value 0, and the leftover 1 closes the
permutation.
```

### Example 2

```text
Input: s = "IDDD"
Output: [0,4,3,2,1]
Explanation: The 'I' places the smallest value 0; each of the three 'D'
characters then takes what is currently largest — 4, then 3, then 2 —
and the final slot receives the remaining 1.
```

### Example 3

```text
Input: s = "DDII"
Output: [4,3,0,1,2]
Explanation: Two 'D' steps spend the largest values 4 and 3, then two 'I'
steps spend the smallest values 0 and 1, leaving 2 for the end.
```

### Constraints

- `1 <= s.length <= 10⁵`
- every character of `s` is `'I'` or `'D'`
