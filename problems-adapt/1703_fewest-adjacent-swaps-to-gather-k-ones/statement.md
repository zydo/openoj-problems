# Fewest Adjacent Swaps to Gather K Ones

## Description

You hold a binary array `nums` — every entry is `0` or `1` — and an
integer `k`. One move swaps the values of two neighboring positions.

Return the fewest moves needed until `k` ones sit in `k` consecutive
positions somewhere in the array.

### Example 1

```text
Input: nums = [1,0,1,0,0,1], k = 2
Output: 1
Explanation: One move slides the leading 1 right by one, giving
[0,1,1,0,0,1] — two ones side by side.
```

### Example 2

```text
Input: nums = [1,0,0,0,1,0,0,1], k = 3
Output: 5
Explanation: Gather around the middle 1: the rightmost one shifts two
places left and the leftmost shifts three places right (one move per
position crossed), five moves in all, ending at [0,0,0,1,1,1,0,0].
```

### Example 3

```text
Input: nums = [1,1,1,0,1], k = 3
Output: 0
Explanation: The array opens with three consecutive ones already.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `nums[i]` is `0` or `1`.
- `1 <= k <= sum(nums)`

## Hints

### Hint 1

Only the ones' positions matter. Which `k` of them would a thrifty
solution gather, and where would it meet?

### Hint 2

The chosen ones should be neighbors in the position list, and the
natural meeting spot sits in the middle of the chosen stretch — then
track that stretch as it slides across the list.

### Hint 3

As the window slides to later ones, the meeting point only ever moves
right; update the move count from that fact instead of recomputing it.
