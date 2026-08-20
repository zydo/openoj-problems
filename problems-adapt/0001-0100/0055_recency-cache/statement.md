# Recency Cache

## Description

Build a fixed-size key-value store that, when it runs out of room, discards
whichever key has gone longest without being touched.

Implement the `RecencyCache` class:

- `RecencyCache(int capacity)` — start empty, able to hold `capacity` keys.
- `int get(int key)` — return the stored value for `key`, or `-1` if the cache
  does not hold it.
- `void put(int key, int value)` — store `value` under `key`, replacing any
  value already there. If storing a *new* key would exceed `capacity`, first
  discard the least recently touched key.

Both `get` and `put` count as touching a key, including a `put` that merely
replaces an existing value. A `get` that misses touches nothing.

Both operations must run in `O(1)` average time.

### Example 1

```text
Input:
["RecencyCache", "put", "put", "get", "put", "get", "get", "put", "get", "put", "get", "get"]
[[2], [5, 50], [6, 60], [5], [7, 70], [6], [5], [5, 55], [5], [8, 80], [7], [8]]
Output: [null, null, null, 50, null, -1, 50, null, 55, null, -1, 80]
Explanation:
RecencyCache cache = new RecencyCache(2);
cache.put(5, 50);  // holds {5}
cache.put(6, 60);  // holds {5, 6}; 5 is the stale one
cache.get(5);      // returns 50, and now 6 is the stale one
cache.put(7, 70);  // room needed: 6 is discarded, holds {5, 7}
cache.get(6);      // returns -1, and changes nothing
cache.get(5);      // returns 50
cache.put(5, 55);  // 5 already present: value replaced, nothing discarded
cache.get(5);      // returns 55
cache.put(8, 80);  // 7 is now the stale one and is discarded, holds {5, 8}
cache.get(7);      // returns -1
cache.get(8);      // returns 80
```

### Example 2

```text
Input:
["RecencyCache", "put", "get", "put", "get", "get"]
[[1], [1, 9], [1], [2, 8], [1], [2]]
Output: [null, null, 9, null, -1, 8]
Explanation: With room for one key, every new key displaces the previous one.
```

### Constraints

- `1 <= capacity <= 3000`
- `0 <= key <= 10⁴`
- `0 <= value <= 10⁵`
- At most `2 * 10⁵` calls to `get` and `put` in total.

### Follow-up

Can you hold the ordering in a doubly linked list threaded through the entries
themselves, with a hash map jumping straight to any entry?

## Hints

### Hint 1

The ordering changes on every single operation, so pick a structure where
moving one element to the front is cheap. In a doubly linked list, unlinking a
node and relinking it touches only its two neighbours. Put the freshest entry
at one end and the stalest at the other.

### Hint 2

A list cannot find a key without walking it, so keep a hash map from key to the
node holding it. The map turns `get` into one jump; the list then moves that
node to the fresh end, or when room is needed, surrenders the node at the stale
end — whose key is what the map must forget.

### Hint 3

Give the list permanent head and tail sentinels. An empty cache, a cache with
one entry, and discarding the final entry then all run the same unlink-relink
code with no special cases. Watch that `put` on a key already present replaces
and refreshes but never discards.
