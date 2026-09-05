# Cutting Into As Many Pieces As Possible

## Description

You are handed an array `nums` whose entries are all non-negative
integers.

Give every contiguous stretch `nums[l..r]` (with `l <= r`) a value: the
bitwise AND of all of its entries, `nums[l] AND nums[l + 1] AND ... AND
nums[r]`.

Now choose a way to cut the array into consecutive pieces so that:

- every entry lands in exactly one piece, and
- the total of the pieces' values is as small as it can be.

Return the largest number of pieces any such cutting can have.

A piece is any single contiguous run of the array.

### Example 1

```text
Input: nums = [5,2,0,8,7]
Output: 3
Explanation: Cut into [5,2], [0] and [8,7]. Their values are 5 AND 2 =
0, 0, and 8 AND 7 = 0, so the total is 0 + 0 + 0 = 0, which is the
smallest total achievable. No cutting into four or more pieces can keep
the total at 0, so 3 is the answer.
```

### Example 2

```text
Input: nums = [3,1,2,6]
Output: 1
Explanation: The AND of the whole array is 3 AND 1 AND 2 AND 6 = 0, yet
the prefix [3,1,2] is the only run that ANDs to 0, and the leftover [6]
would push the total above 0. Merging everything back into the single
piece [3,1,2,6], whose value is 0, is therefore best, and the answer is
1.
```

### Example 3

```text
Input: nums = [1,3,7]
Output: 1
Explanation: Every run here has a positive value — the AND of the whole
array is 1, and any cut would only raise the total above it. One piece
is all we can afford, so the answer is 1.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁶`

## Hints

### Hint 1

AND only ever clears bits as the run gets longer, so no piece can have
a value below the AND of the entire array — and one whole-array piece
meets that bound exactly.

### Hint 2

When that global AND is nonzero, every piece in every cutting scores at
least that much, so more pieces can only inflate the total; the answer
is 1.

### Hint 3

When the global AND is zero, sweep once and end a piece the instant its
running AND drops to zero — each closure is free, and greedily
finish-cutting as early as possible maximizes how many pieces close.
