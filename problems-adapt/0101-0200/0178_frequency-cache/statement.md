# Frequency Cache

## Description

Build a fixed-size key-value store that, when it runs out of room, discards
the key that has been _used least often_ — and among keys used equally
often, the one used longest ago.

Implement the `FrequencyCache` class:

- `FrequencyCache(int capacity)` — start empty, able to hold `capacity` keys.
- `int get(int key)` — return the stored value for `key`, or `-1` if the
  cache does not hold it.
- `void put(int key, int value)` — store `value` under `key`, replacing any
  value already there. If storing a _new_ key would exceed `capacity`, first
  discard the victim described above.

Every key carries a use counter. A fresh insert sets it to `1`, and each
`get` or `put` that touches the key — including a `put` that only replaces
an existing value — raises it by one. The discard victim is the key with the
smallest counter, with the longest-unused such key breaking ties; replacing
a value counts as a use and never discards anything on its own.

Both operations must run in `O(1)` average time.

### Example 1

```text
Input:
["FrequencyCache", "put", "put", "get", "put", "get", "get", "put", "put", "get", "get", "get"]
[[2], [7, 70], [9, 90], [7], [11, 110], [9], [11], [7, 71], [12, 120], [11], [7], [12]]
Output: [null, null, null, 70, null, -1, 110, null, null, -1, 71, 120]
Explanation:
FrequencyCache cache = new FrequencyCache(2);
cache.put(7, 70);   // uses(7) = 1
cache.put(9, 90);   // uses(9) = 1
cache.get(7);       // returns 70; uses(7) = 2
cache.put(11, 110); // room needed: 9 has the fewest uses, discard 9
cache.get(9);       // returns -1
cache.get(11);      // returns 110; uses(11) = 2
cache.put(7, 71);   // replace-only, counts as a use; uses(7) = 3
cache.put(12, 120); // room needed: 11 (2 uses) loses to nothing — 7 has 3,
                    // so 11 is discarded
cache.get(11);      // returns -1
cache.get(7);       // returns 71
cache.get(12);      // returns 120
```

### Example 2

```text
Input:
["FrequencyCache", "put", "put", "put", "put", "get", "put", "get", "get", "get"]
[[3], [2, 20], [4, 40], [6, 60], [8, 80], [4], [10, 100], [6], [8], [10]]
Output: [null, null, null, null, null, 40, null, -1, 80, 100]
Explanation:
// uses(x) = use counter; on ties the longest-unused key is discarded
cache.put(2, 20);   // uses(2) = 1
cache.put(4, 40);   // uses(4) = 1
cache.put(6, 60);   // uses(6) = 1 — full
cache.put(8, 80);   // three-way tie; 2 is the stalest of them, discard 2
cache.get(4);       // returns 40; uses(4) = 2
cache.put(10, 100); // 6 is now alone at the bottom, discard 6
cache.get(6);       // returns -1
cache.get(8);       // returns 80
cache.get(10);      // returns 100
```

### Example 3

```text
Input:
["FrequencyCache", "put", "get", "put", "get", "get"]
[[1], [5, 50], [5], [9, 90], [5], [9]]
Output: [null, null, 50, null, -1, 90]
Explanation: With room for one key, whatever it holds is always the least
used, so every new key displaces it.
```

### Constraints

- `1 <= capacity <= 10⁴`
- `0 <= key <= 10⁵`
- `0 <= value <= 10⁹`
- At most `2 * 10⁵` calls to `get` and `put` in total.

### Follow-up

Can both operations stay `O(1)` with no scanning anywhere — say, by chaining
the use counts themselves in a linked list so the smallest count and the
next one up are always immediate neighbours?

## Hints

### Hint 1

Eviction reads two properties off a key: how many times it was used, and
when it was last used. Group the keys by use count, and keep the keys inside
each group ordered by that second property — then the victim is always found
at one fixed place.

### Hint 2

A map from key to node reaches any key in one hop. Using a key must bump
its count: detach its node, then attach it as the newest member of the next
count's group — creating that group right beside the old one when it does
not exist. A group that empties vanishes on the spot, so the first group is
always the lowest count, found without searching.

### Hint 3

Fresh inserts land in the count-one group, starting it at the front when
needed; eviction removes the oldest member of the first group. Route hits,
value replacements, and new inserts through the same bump routine and the
three operations collapse into one code path.
