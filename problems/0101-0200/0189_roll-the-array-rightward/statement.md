# Roll The Array Rightward

## Description

An integer array `nums` and a non-negative integer `k` are given. Roll
the array `k` steps to the right — every element slides `k` positions
along, and whatever runs off the right end wraps back in at the left —
and return the array after it has been rolled.

A roll by the array's own length changes nothing, so a `k` larger than
that behaves as `k % n` steps, where `n == nums.length`. Short rolls are
also welcome: `k = 0` leaves the array exactly as it arrived.

### Example 1

```text
Input: nums = [4, 9, 2, 7, 5], k = 2
Output: [7, 5, 4, 9, 2]
```

### Example 2

```text
Input: nums = [13], k = 5
Output: [13]
Explanation: A one-element array looks the same no matter how far it
rolls.
```

### Example 3

```text
Input: nums = [6, 1, 8, 3], k = 9
Output: [3, 6, 1, 8]
Explanation: 9 steps on a length-4 array wrap to a single step, so the
trailing 3 wraps around to the front.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-2³¹ <= nums[i] <= 2³¹ - 1`
- `0 <= k <= 10⁵`

### Follow-up

- There are several genuinely different ways to do this — try to think
  of more than one.
- Can you rewrite the array in place, with `O(1)` extra space?

## Hints

### Hint 1

A scratch array that receives each element at its destination index is
the simplest route, and it is a perfectly good first answer.

### Hint 2

Doing it without the scratch array is where the interesting work is.
Moving every element one slot at a time, repeatedly, is far too slow for
large inputs — you need a way to send each element straight home.

### Hint 3

Reversing the whole array — and then pieces of it — lands the blocks
where you want them. Try a small example and watch where the two
regions end up.

### Hint 4

Another route follows the cycle each element travels: drop an element
into its rightful slot, catch the element you displaced, and keep going
until you arrive back where you started. The positions split into
independent cycles, which is the one wrinkle of this approach.
