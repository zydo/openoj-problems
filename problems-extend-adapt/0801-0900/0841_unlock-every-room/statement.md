# Unlock Every Room

## Description

A building has `n` numbered rooms, from `0` through `n - 1`. Room `0` starts
unlocked, while all other rooms require their matching key. Whenever you enter
a room, you may collect every key stored there and use those keys later.

The array `rooms` describes this layout: `rooms[i]` contains the distinct room
numbers whose keys are found in room `i`. Return `true` if beginning in room
`0` lets you eventually enter every room; otherwise return `false`.

### Example 1

```text
Input: rooms = [[1,2],[3],[3],[]]
Output: true
Explanation: From room 0, collect keys 1 and 2. Either route supplies key 3,
so all four rooms become reachable.
```

### Example 2

```text
Input: rooms = [[1],[],[3],[]]
Output: false
Explanation: Rooms 2 and 3 cannot be reached from room 0.
```

### Example 3

```text
Input: rooms = [[1],[0]]
Output: true
```

### Constraints

- `n == rooms.length`
- `rooms` contains between `2` and `1000` entries.
- Each `rooms[i]` contains from `0` to `1000` keys, and there are at most
  `3000` keys in total.
- Every key value is in `[0, n)`, and no key appears twice in one room.
