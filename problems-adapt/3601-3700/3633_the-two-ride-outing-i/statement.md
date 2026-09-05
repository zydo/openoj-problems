# The Two-Ride Outing I

## Description

A park splits its rides into two groups: land rides and water rides. Land
ride `i` opens at time `landStartTime[i]` and runs for `landDuration[i]`
minutes; water ride `j` opens at time `waterStartTime[j]` and runs for
`waterDuration[j]` minutes.

An outing consists of exactly two rides — one land ride and one water ride,
taken in either order. Riding works like this:

- A ride may be boarded at its opening time or at any later moment.
- A ride boarded at time `t` finishes at time `t + duration`.
- The moment one ride ends, the guest may board the other one; if it has not
  opened yet, they wait until its opening time.

Return the earliest moment at which both rides of the outing are finished.

### Example 1

```text
Input: landStartTime = [3,7], landDuration = [5,2], waterStartTime = [4], waterDuration = [6]
Output: 12
Explanation: Riding the water ride first wins. It opens at time 4 and
finishes at time 10; land ride 1 has been open since time 7, so the guest
boards immediately and finishes at 10 + 2 = 12. The land-first plans are
slower — land rides 0 and 1 end at times 8 and 9, pushing the water ride to
finishes at 14 and 15 — and pairing the water-first order with land ride 0
finishes at 15.
```

### Example 2

```text
Input: landStartTime = [9], landDuration = [1], waterStartTime = [2], waterDuration = [3]
Output: 10
Explanation: The water ride opens at time 2 and finishes at time 5, well
before the land ride opens. The guest waits until time 9, boards the land
ride, and finishes at 9 + 1 = 10. Taking the land ride first would finish
it at time 10 and delay the water ride to 10 + 3 = 13.
```

### Example 3

```text
Input: landStartTime = [1,6], landDuration = [4,3], waterStartTime = [5,9], waterDuration = [2,7]
Output: 7
Explanation: Land ride 0 runs from time 1 to time 5, and water ride 0 opens
at exactly time 5, so the guest transfers with no wait and finishes at
5 + 2 = 7. Every other plan finishes at time 10 or later.
```

### Constraints

- `1 <= landStartTime.length == landDuration.length <= 100`
- `1 <= waterStartTime.length == waterDuration.length <= 100`
- `1 <= landStartTime[i], landDuration[i], waterStartTime[j], waterDuration[j] <= 1000`

### Hint 1

There are few rides on each side, so checking every pair is cheap. Once the
two rides and their order are fixed, the guest never gains by idling —
reason out when the second ride can actually start.
