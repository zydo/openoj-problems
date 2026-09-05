# One-Side Champions

## Description

Call an element of `nums` a **champion** when it outclasses every value on at
least one side of itself:

- strictly greater than each element that comes before it, or
- strictly greater than each element that comes after it.

The two ends of the array are champions automatically — an end has nothing
to beat on its outer side.

List every champion in the order the array presents them.

### Example 1

```text
Input: nums = [3,9,4,9,1]
Output: [3,9,9,1]
Explanation: The 3 leads the array and the trailing 1 is an end, so both
qualify. Each 9 tops everything before or after it (the 9 at index 3 only
needs to beat the 1 behind it). The interior 4 is beaten by 9 on both
sides, so it is left out.
```

### Example 2

```text
Input: nums = [7,7,7]
Output: [7,7]
Explanation: Equal neighbors never count as beaten, so the middle 7 wins
neither side. Only the two ends survive.
```

### Example 3

```text
Input: nums = [2]
Output: [2]
Explanation: A lone element is both ends at once, so it qualifies.
```

### Example 4

```text
Input: nums = [1,5,2,6,3,4]
Output: [1,5,6,4]
Explanation: The 1 and the final 4 are ends. The 5 beats everything to its
left and the 6 beats the 1 and 5 before it. The interior 2 and 3 are each
outclassed on both sides.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Track the running maximum from the left and from the right; an interior
element is a champion exactly when it strictly exceeds one of those two
values.

### Hint 2

The two ends never need a comparison at all — collect them unconditionally.
