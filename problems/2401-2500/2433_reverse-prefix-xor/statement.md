# Reverse Prefix XOR

## Description

You are given an integer array `pref` of length `n`. Find and return the
array `arr` of length `n` that satisfies

- `pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i]`,

where `^` denotes the bitwise xor operation. It can be shown that the
answer is unique.

### Example 1

```text
Input: pref = [7,4,6,2]
Output: [7,3,2,4]
Explanation: Starting from [7,3,2,4]:
- pref[0] = 7.
- pref[1] = 7 ^ 3 = 4.
- pref[2] = 7 ^ 3 ^ 2 = 6.
- pref[3] = 7 ^ 3 ^ 2 ^ 4 = 2.
```

### Example 2

```text
Input: pref = [1,1,0]
Output: [1,0,1]
Explanation: From the output array, pref[1] = 1 ^ 0 = 1 and
pref[2] = 1 ^ 0 ^ 1 = 0.
```

### Example 3

```text
Input: pref = [9]
Output: [9]
Explanation: With a single element, arr[0] must equal pref[0].
```

### Constraints

- `1 <= pref.length <= 10⁵`
- `0 <= pref[i] <= 10⁶`

## Hints

### Hint 1

Given the equation `x ^ a = b`, xoring both sides with `a` isolates `x`
because xor is its own inverse.

### Hint 2

The prefix relation gives `arr[i] = pref[i] ^ pref[i-1]` for every `i`,
with `arr[0] = pref[0]`.
