# Decomposed Power Range Products

## Description

Every positive integer `n` can be written as a sum of powers of two, and
the minimal such representation is unique: it uses exactly the powers
`1, 2, 4, ...` named by the set bits of `n`. Collect those powers in
non-decreasing order into a list called `powers`.

You are given a 2D integer array `queries`, where each `queries[i] =
[left, right]` asks for the product of every `powers[j]` with `left <= j
<= right`.

Return an array `answers` such that `answers[i]` is the answer to
`queries[i]`. Because a product of powers of two can grow enormous, each
answer must be reduced modulo `10⁹ + 7`.

### Example 1

```text
Input: n = 13, queries = [[0,1],[1,2],[0,2]]
Output: [4,32,32]
Explanation: The binary form of 13 is 1101, so powers = [1,4,8].
- queries[0] = [0,1]: powers[0] * powers[1] = 1 * 4 = 4.
- queries[1] = [1,2]: powers[1] * powers[2] = 4 * 8 = 32.
- queries[2] = [0,2]: powers[0] * powers[1] * powers[2] =
  1 * 4 * 8 = 32.
No value exceeds 10⁹ + 7, so [4,32,32] is returned.
```

### Example 2

```text
Input: n = 7, queries = [[0,0],[2,2]]
Output: [1,4]
Explanation: The binary form of 7 is 111, so powers = [1,2,4]. The two
queries ask for powers[0] = 1 and powers[2] = 4 respectively.
```

### Example 3

```text
Input: n = 21, queries = [[0,2],[2,2]]
Output: [64,16]
Explanation: The binary form of 21 is 10101, so powers = [1,4,16].
- queries[0] = [0,2]: 1 * 4 * 16 = 64.
- queries[1] = [2,2]: powers[2] = 16.
```

### Constraints

- `1 <= n <= 10⁹`
- `1 <= queries.length <= 10⁵`
- `0 <= left <= right < powers.length`

## Hints

### Hint 1

Read the powers of two straight off the binary representation of `n`: the
chosen powers are exactly `2` raised to each set-bit position.

### Hint 2

Products over a contiguous slice of `powers` can be answered with prefix
products and one modular inverse per query, replacing a per-query loop
that walks the whole slice.
