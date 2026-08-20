# Smallest Spread by Halving and Doubling

## Description

You hold an array `nums` of positive integers. Two moves are available,
each applicable to any entry, any number of times:

- an even entry may be **halved** (`8` becomes `4`);
- an odd entry may be **doubled** (`7` becomes `14`).

The **spread** of the array is the largest gap between two of its
entries, that is, the maximum minus the minimum.

Return the smallest spread reachable by any sequence of moves.

### Example 1

```text
Input: nums = [5,20,6]
Output: 1
Explanation: Halve the 20 twice and the array reads [5,5,6] — the
entries then sit within 1 of each other.
```

### Example 2

```text
Input: nums = [4,12,7]
Output: 3
Explanation: No alignment gets closer than [4,6,7]: the 12 halves to 6,
and the 4 and 7 stay put, leaving a gap of 3.
```

### Example 3

```text
Input: nums = [1,6]
Output: 1
Explanation: Both move types help here: double the 1 up to 2 and halve
the 6 down to 3, giving [2,3].
```

### Constraints

- `2 <= nums.length <= 5·10⁴`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Start every entry from the top of its own reach: double the odd ones
once, and from that point on the only move left anywhere is halving.

### Hint 2

Working from that state, any improvement over the current spread must
either pull the maximum down further or push the minimum up.

### Hint 3

Values only fall now. So repeatedly halve the current maximum while it
is even, carry the smallest value seen on the way, and stop once the
maximum goes odd — nothing can move up again.
