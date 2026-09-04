# The Two-Ride Outing II

## Description

A park splits its rides into two groups: land rides and water rides. There
are `n` land rides and `m` water rides. Land ride `i` opens at time
`landStartTime[i]` and runs for `landDuration[i]` minutes; water ride `j`
opens at time `waterStartTime[j]` and runs for `waterDuration[j]` minutes.

An outing consists of exactly two rides — one land ride and one water ride,
taken in either order:

- A ride may be boarded at its opening time or at any later moment.
- A ride boarded at time `t` finishes at time `t + duration`.
- The moment one ride ends, the guest may board the other one; if it has not
  opened yet, they wait until its opening time.

Return the earliest moment at which both rides of the outing are finished.

### Example 1

```text
Input: landStartTime = [4,12,7], landDuration = [6,2,5], waterStartTime = [3,9], waterDuration = [8,1]
Output: 11
Explanation: Ride land 0 first: it opens at time 4 and finishes at
4 + 6 = 10. Water ride 1 opened back at time 9, so the guest boards at once
and finishes at 10 + 1 = 11. The reverse order cannot match it — the water
rides finish at 11 and 10, from which the best land ride still ends at 14 —
and no other pairing does better.
```

### Example 2

```text
Input: landStartTime = [10], landDuration = [3], waterStartTime = [1], waterDuration = [4]
Output: 13
Explanation: The water ride runs from time 1 to time 5, but the land ride
has not opened yet, so the guest waits until time 10 and finishes at
10 + 3 = 13. Starting with the land ride would push the water ride all the
way to 13 + 4 = 17.
```

### Example 3

```text
Input: landStartTime = [6,2,9], landDuration = [3,5,1], waterStartTime = [8,4], waterDuration = [2,6]
Output: 10
Explanation: Land ride 1 runs from time 2 to time 7, water ride 0 opens at
time 8, and boarding it immediately finishes at 8 + 2 = 10. Every other
plan finishes at 11 or later.
```

### Constraints

- `1 <= n, m <= 5 * 10⁴`
- `landStartTime.length == landDuration.length == n`
- `waterStartTime.length == waterDuration.length == m`
- `1 <= landStartTime[i], landDuration[i], waterStartTime[j], waterDuration[j] <= 10⁵`

### Hint 1

A slower first ride never helps the second one: the second ride starts at
`max(first finish, its opening)`, which only grows as the hand-off gets
later.

### Hint 2

So in the first category only one number matters — the smallest
opening-plus-duration across all its rides. Pair that hand-off moment
against every ride of the other category.

### Hint 3

Price both orders this way and keep the smaller result.
