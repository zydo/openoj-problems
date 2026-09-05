# Song Replay Schedules

## Description

A listening queue of `goal` plays is built from a library of `n` distinct
songs, and every song in the library must be heard at least once. A song may
not return too soon: once a song plays, at least `k` plays of _other_ songs
must pass before that same song may play again.

Two queues are different as soon as any position plays a different song.
Return the number of distinct queues that satisfy both rules, modulo 10⁹ + 7.

### Example 1

```text
Input: n = 2, goal = 4, k = 1
Output: 2
Explanation: The only valid queues are [1,2,1,2] and [2,1,2,1]: a song can
never play twice in a row, and both songs must appear.
```

### Example 2

```text
Input: n = 3, goal = 3, k = 2
Output: 6
Explanation: With no room for a replay, every valid queue is simply one of
the six orderings of the three songs.
```

### Example 3

```text
Input: n = 1, goal = 4, k = 0
Output: 1
Explanation: The library's only song fills the whole queue, and with k = 0
an immediate replay is allowed.
```

### Constraints

- `0 <= k < n <= goal <= 100`
