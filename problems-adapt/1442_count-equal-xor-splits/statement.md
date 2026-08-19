# Count Equal-XOR Splits

## Description

You are given an array of integers `arr`.

Choose a stretch of consecutive elements of `arr`, then cut that stretch into
two non-empty parts: a left part and a right part. Every choice of stretch and
cut position is a different split.

Count the splits in which the bitwise-xor of the left part equals the
bitwise-xor of the right part. Here `^` denotes bitwise xor.

### Example 1

```text
Input: arr = [5,6,3]
Output: 2
Explanation: The whole stretch [5,6,3] xors to 0, because 5 ^ 6 ^ 3 = 0, so
either cut gives matching halves: 5 = 6 ^ 3 and 5 ^ 6 = 3. No shorter stretch
works.
```

### Example 2

```text
Input: arr = [2,6,4,2,6]
Output: 6
Explanation: Three stretches xor to zero: [2,6,4], [6,4,2] and [4,2,6]. Each
has length 3 and so admits 2 cuts, giving 2 + 2 + 2 = 6 splits.
```

### Example 3

```text
Input: arr = [10,4,10,4]
Output: 3
Explanation: The whole array xors to 0, so the three cuts each give equal
halves: 10 = 4^10^4, 10^4 = 10^4, and 10^4^10 = 4.
```

### Constraints

- `1 <= arr.length <= 300`
- `1 <= arr[i] <= 10^8`

## Hints

### Hint 1

When the two halves xor to the same value, xoring them together gives zero —
so you are really looking for stretches whose total xor is zero, and counting
the cut positions inside each.

### Hint 2

A stretch xors to zero exactly when the running prefix-xor takes the same
value just before the stretch and just after it.

### Hint 3

Scan left to right remembering, per prefix value, how often it has occurred
and the sum of its positions; when the current prefix repeats, the count of
splits it closes can be accumulated without revisiting anything.
