# The Memory Map

## Description

You are handed `n` — the size of a zero-indexed memory array whose
units all start free. A manager works on this array:

- Reserving a block claims `size` consecutive free units — always the
  leftmost such run — and stamps them with an id.
- Releasing an id wipes every unit carrying it, wherever the units sit.

Two details matter: one id may own several separate blocks, and a
release sweeps them all in one go.

Implement the `MemoryMap` class:

- `MemoryMap(int n)` initializes the map with `n` free units.
- `int allocate(int size, int mID)` reserves the leftmost run of `size`
  consecutive free units and stamps it `mID`, returning the run's first
  index — or `-1` if no such run exists.
- `int freeMemory(int mID)` releases every unit stamped `mID` and
  returns how many units were released.

### Example 1

```text
Input:
["MemoryMap", "allocate", "allocate", "allocate", "freeMemory", "allocate", "allocate", "freeMemory", "allocate", "allocate", "freeMemory", "allocate", "freeMemory"]
[[20], [10, 1], [5, 2], [8, 3], [2], [6, 3], [8, 3], [1], [5, 3], [2, 3], [3], [7, 3], [9]]
Output: [null, 0, 10, -1, 5, 10, -1, 10, 0, 5, 13, 0, 0]
Explanation:
MemoryMap mem = new MemoryMap(20); // units 0-19, all free.
mem.allocate(10, 1); // reserves units 0-9 for id 1, return 0.
mem.allocate(5, 2);  // reserves units 10-14 for id 2, return 10.
mem.allocate(8, 3);  // only 5 free units remain (15-19), return -1.
mem.freeMemory(2);   // releases units 10-14, return 5.
mem.allocate(6, 3);  // reserves units 10-15 for id 3, return 10.
mem.allocate(8, 3);  // only 4 free units remain (16-19), return -1.
mem.freeMemory(1);   // releases units 0-9, return 10.
mem.allocate(5, 3);  // id 3 may own several blocks: reserves units
                     // 0-4, return 0.
mem.allocate(2, 3);  // reserves units 5-6 for id 3, return 5.
mem.freeMemory(3);   // releases units 0-6 and 10-15, return 13.
mem.allocate(7, 3);  // reserves units 0-6 for id 3, return 0.
mem.freeMemory(9);   // no unit carries id 9, return 0.
```

### Constraints

- `1 <= n, size, mID <= 1000`
- At most `1000` calls in total are made to `allocate` and
  `freeMemory`.

## Hints

### Hint 1

A direct simulation is fast enough: with at most 1000 calls over at
most 1000 units, every scan is cheap.

### Hint 2

For `allocate`, walk the array looking for the first run of `size`
free units; for `freeMemory`, sweep the whole array and clear every
unit matching `mID`, counting as you go.
