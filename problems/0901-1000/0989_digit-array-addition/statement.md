# Digit-Array Addition

## Description

An integer can be written as a list of its digits in the order they are
normally read: the number `1321` becomes the array `[1,3,2,1]`.

You are given `num`, one integer in that digit-array form, and an ordinary
integer `k`. Add the two and return the sum in the same digit-array form.

### Example 1

```text
Input: num = [9,2,5], k = 176
Output: [1,1,0,1]
Explanation: 925 + 176 = 1101.
```

### Example 2

```text
Input: num = [6,4,0,3], k = 600
Output: [7,0,0,3]
Explanation: 6403 + 600 = 7003.
```

### Example 3

```text
Input: num = [5], k = 7078
Output: [7,0,8,3]
Explanation: 5 + 7078 = 7083.
```

### Constraints

- `1 <= num.length <= 10⁴`
- Each entry of `num` is a single digit, `0` through `9`.
- `num` has no leading zeros — unless it stores the single value `0`.
- `1 <= k <= 10⁴`
