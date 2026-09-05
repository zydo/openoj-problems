# Friends At The Finish Line

## Description

A race has just ended. The array `order` of length `n` lists every
participant's ID in the exact sequence they crossed the finish line, and
it is guaranteed to contain each integer from `1` to `n` exactly once.

The array `friends` holds the IDs of the participants you personally
know, given in strictly increasing order; every ID in `friends` appears
somewhere in `order`.

Report your friends' IDs in the sequence they finished the race.

### Example 1

```text
Input: order = [2,4,1,5,3], friends = [3,5]
Output: [5,3]
Explanation: Runner 5 crosses the line before runner 3, so keeping just
the friends in the finishing lineup yields [5,3].
```

### Example 2

```text
Input: order = [6,2,4,1,5,3], friends = [1,2,3]
Output: [2,1,3]
Explanation: Reading the lineup from the winner onward, 2 is the first
friend to finish, then 1, then 3.
```

### Example 3

```text
Input: order = [5,1,4,2,3], friends = [1,2,3,4,5]
Output: [5,1,4,2,3]
Explanation: Everyone in the race is a friend, so the finishing order
comes back unchanged.
```

### Constraints

- `1 <= n == order.length <= 100`
- `order` contains every integer from `1` to `n` exactly once.
- `1 <= friends.length <= min(8, n)`
- `1 <= friends[i] <= n`
- `friends` is sorted in strictly increasing order.

## Hints

### Hint 1

Membership is the only question the scan ever asks, so park the friend
IDs in a hash set first and answer each check in constant time.

### Hint 2

One left-to-right pass over the finishing lineup, keeping every ID found
in the set, already emits the friends in finish order — no sorting pass
is needed afterwards.
