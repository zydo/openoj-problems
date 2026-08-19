# Fewest Additions For Full Coverage

## Description

The array `nums` holds positive integers in non-decreasing order. Call a total
*reachable* when some subset of the array's entries adds up to exactly that
total.

You may insert extra positive integers into `nums`, choosing each one freely;
every insertion costs one. Return the smallest number of insertions that leaves
every total from `1` through `n` reachable.

### Example 1

```text
Input: nums = [1,4,9], n = 15
Output: 2
Explanation: With 1 alone, only the total 1 is reachable, so 4 already skips
past a gap. Inserting 2 covers 1 through 3, and then 4 pushes the reach to 7;
inserting 8 covers 1 through 15, which 9 then cannot improve on.
```

### Example 2

```text
Input: nums = [3], n = 5
Output: 2
Explanation: Two small values are missing before 3 becomes usable: insert 1,
then insert 2, and the entries now reach every total up to 6.
```

### Example 3

```text
Input: nums = [1,2,4,8], n = 15
Output: 0
Explanation: Powers of two already spell out every total up to their sum.
```

### Constraints

- `nums` holds at least one and at most `1000` values
- every value satisfies `1 <= nums[i] <= 10^4`
- the values are given sorted from smallest to largest
- `1 <= n <= 2^31 - 1`

## Hints

### Hint 1

Sweep upward rather than searching. Keep the smallest total you cannot reach
yet — every total below it is already settled, so that single number describes
all your progress.

### Hint 2

An entry of `nums` that does not exceed that frontier can be folded in for
free: adding it to each already-reachable total (and to the empty total) slides
the frontier up by exactly the entry's size.

### Hint 3

When the next entry overshoots the frontier, no combination bridges the hole,
so you must insert something. Inserting the frontier value itself is never
worse than any other choice — it is the largest value that still lands on the
hole, and it doubles the settled span.

### Hint 4

Halt as soon as the frontier passes `n`. The frontier can reach roughly `2^32`
before that happens, so hold it in a 64-bit accumulator.
