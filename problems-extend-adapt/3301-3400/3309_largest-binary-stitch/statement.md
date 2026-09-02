# The Largest Binary Stitch

## Description

You are handed exactly three positive integers. Write each of them in binary
(no number's representation starts with a zero), then stitch the three
representations together end to end in whichever order you choose. The
stitched bit string is read back as one big integer.

Return the largest integer that can be produced this way.

### Example 1

```text
Input: nums = [1,5,2]
Output: 54
Explanation: The pieces are "1", "101", and "10". Laying them out in the
order 1, 5, 2 gives "110110", which reads back as 54. No other order
reaches a larger value.
```

### Example 2

```text
Input: nums = [6,12,9]
Output: 1737
Explanation: The order 6, 12, 9 stitches "110" + "1100" + "1001" =
"11011001001", the binary form of 1737.
```

### Example 3

```text
Input: nums = [7,7,1]
Output: 127
Explanation: "111" + "111" + "1" = "1111111", which is 127.
```

### Constraints

- `nums.length == 3`
- `1 <= nums[i] <= 127`

## Hints

### Hint 1

Three pieces can be arranged in only six ways. The winner depends on the
actual bit patterns, not just on which number is biggest — so checking
every arrangement is both correct and trivially cheap.
