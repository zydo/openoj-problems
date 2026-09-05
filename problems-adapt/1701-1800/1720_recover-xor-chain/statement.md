# Recover the XOR Chain

## Description

An array `original` of `n` non-negative integers was scrambled into the
shorter array `encoded` of length `n - 1` by XOR-ing neighbors:
`encoded[i] = original[i] XOR original[i + 1]`. To take a concrete case,
`original = [3,0,2,3]` would scramble into `encoded = [3,2,1]`.

You are handed `encoded` together with `first`, the value of
`original[0]`. Reconstruct and return the whole array `original` — the
seed value pins every later element, so the recovery always succeeds and
is unique.

### Example 1

```text
Input: encoded = [5,3,4], first = 2
Output: [2,7,4,0]
Explanation: 2 XOR 5 = 7, 7 XOR 3 = 4, and 4 XOR 4 = 0, so the chain of
neighbor XORs matches the given encoded array exactly.
```

### Example 2

```text
Input: encoded = [9,12,6,1], first = 8
Output: [8,1,13,11,10]
```

### Constraints

- `2 <= n <= 10⁴`
- `encoded.length == n - 1`
- `0 <= encoded[i] <= 10⁵`
- `0 <= first <= 10⁵`

## Hints

### Hint 1

XOR undoes itself: applying `original[i]` to both sides of
`encoded[i] = original[i] XOR original[i + 1]` cancels it and leaves
`original[i + 1] = encoded[i] XOR original[i]`.

### Hint 2

So walk left to right from the given seed, appending
`encoded[i] XOR original[i]` at every step.
