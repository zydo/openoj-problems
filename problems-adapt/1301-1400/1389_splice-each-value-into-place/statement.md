# Splice Each Value Into Place

## Description

You hold two equally long integer arrays, `nums` and `index`, and use them to
assemble one output list:

- The output list starts out empty.
- Reading the positions left to right, the i-th pass splices `nums[i]` into
  the output list so that it ends up at position `index[i]`, shifting
  everything from that position onward one slot to the right.
- The passes continue until both arrays are exhausted.

Return the finished list.

Every insertion position is guaranteed to be legal at the moment it is used.

### Example 1

```text
Input: nums = [7,3,5,9], index = [0,1,0,2]
Output: [5,7,9,3]
Explanation:
pass   value   at    list so far
1      7       0     [7]
2      3       1     [7,3]
3      5       0     [5,7,3]
4      9       2     [5,7,9,3]
```

### Example 2

```text
Input: nums = [4,2,6], index = [0,1,1]
Output: [4,6,2]
Explanation: The last value lands between the first two, bumping 2 to the
end.
```

### Example 3

```text
Input: nums = [8], index = [0]
Output: [8]
```

### Constraints

- `1 <= nums.length, index.length <= 100`
- `nums.length == index.length`
- `0 <= nums[i] <= 100`
- `0 <= index[i] <= i`

## Hints

### Hint 1

Walk the pairs once, performing each splice exactly as described — no clever
order exists, and none is needed.
