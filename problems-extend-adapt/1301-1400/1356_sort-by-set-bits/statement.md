# Sort by Set Bits

## Description

Take an array of integers and rearrange it by a two-part key: first, the
count of `1` bits in each value's binary form, fewest coming first; then,
among values carrying the same bit count, plain numeric order. Return the
rearranged array.

### Example 1

```text
Input: arr = [10,7,8,15]
Output: [8,10,7,15]
Explanation: In binary, 8 is `1000` (one bit), 10 is `1010` (two bits),
7 is `111` (three bits), and 15 is `1111` (four bits) — each a different
count, so bit count alone decides.
```

### Example 2

```text
Input: arr = [6,1,3,4]
Output: [1,4,3,6]
Explanation: 1 (`1`) and 4 (`100`) each have one bit, so they lead in
numeric order; 3 (`11`) and 6 (`110`) tie at two bits and follow as
3 then 6.
```

### Example 3

```text
Input: arr = [9,0,5]
Output: [0,5,9]
Explanation: 0 has no set bits at all, so it comes first; 5 (`101`) and
9 (`1001`) tie at two bits each.
```

### Constraints

- `1 <= arr.length <= 500`
- `0 <= arr[i] <= 10⁴`

## Hints

### Hint 1

Work straight from the definition: for each value, count the `1` bits in
its binary representation.

### Hint 2

Sorting with the pair (bit count, value) as the comparison key produces
the whole arrangement in one pass.
