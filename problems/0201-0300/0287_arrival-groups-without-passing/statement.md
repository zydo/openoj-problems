# Arrival Groups Without Passing

## Description

Several travelers move along the same one-dimensional road toward coordinate
`destination`. Their distinct starting coordinates are given by `starts`, and
`velocities[i]` is the constant speed of the traveler beginning at
`starts[i]`.

No traveler may pass another. When a faster traveler catches the traveler or
group ahead, they continue together at the slower speed. A single traveler is
also considered a group. Catching up exactly at `destination` counts as
joining that group.

Return the number of distinct groups that arrive at the destination.

### Example 1

```text
Input: destination = 20, starts = [18,15,10,5], velocities = [1,5,2,4]
Output: 2
Explanation: The traveler at 15 joins the one at 18, while the traveler at 5 joins the one at 10.
```

### Example 2

```text
Input: destination = 30, starts = [25,20], velocities = [1,2]
Output: 1
Explanation: Both would arrive after five time units, so they meet at the destination.
```

### Example 3

```text
Input: destination = 25, starts = [20,10,0], velocities = [5,2,1]
Output: 3
```

### Constraints

- `starts.length == velocities.length`
- `1 <= starts.length <= 10^5`
- `0 < destination <= 10^6`
- `0 <= starts[i] < destination`
- All values in `starts` are distinct.
- `0 < velocities[i] <= 10^6`

## Hints

### Hint 1

Sort travelers by starting coordinate from nearest to farthest from the
destination.

### Hint 2

Compute how long each traveler would take to arrive if unobstructed.

### Hint 3

Scanning backward along the road, a traveler joins the group ahead when its
unobstructed arrival time is no later than that group's arrival time.
