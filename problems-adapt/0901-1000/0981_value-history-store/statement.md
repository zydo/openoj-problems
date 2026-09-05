# Value History Store

## Description

Build a container that remembers not just what a key holds, but what it held
at every moment in the past. A write stamps a key with a value and a moment; a
read names a key and a moment, and must answer with the value that key carried
then.

Writes arrive with strictly increasing moments. Reads may name any moment at
all — earlier than every write, sitting between two of them, or far past the
last one.

Implement the `HistoryStore` class:

- `HistoryStore()` — begin with nothing recorded.
- `void set(String key, String value, int timestamp)` — record that `key`
  carried `value` from moment `timestamp` onward.
- `String get(String key, int timestamp)` — of the writes made for `key` at
  moments no later than `timestamp`, return the value from the latest one.
  Return `""` when no such write exists.

### Example 1

```text
Input:
["HistoryStore", "set", "get", "get", "set", "get", "get"]
[[], ["ip", "west", 2], ["ip", 2], ["ip", 6], ["ip", "east", 7], ["ip", 7], ["ip", 40]]
Output: [null, null, "west", "west", null, "east", "east"]
Explanation:
HistoryStore store = new HistoryStore();
store.set("ip", "west", 2); // "ip" carries "west" starting at moment 2
store.get("ip", 2);         // exactly the writing moment: "west"
store.get("ip", 6);         // moments 3..6 saw no write, so "west" still stands
store.set("ip", "east", 7); // "ip" switches to "east" at moment 7
store.get("ip", 7);         // "east"
store.get("ip", 40);        // nothing since moment 7, so still "east"
```

### Example 2

```text
Input:
["HistoryStore", "set", "get", "get"]
[[], ["r2", "on", 9], ["r2", 8], ["r9", 9]]
Output: [null, null, "", ""]
Explanation: The first read asks about moment 8, one tick before the only
write to `r2`, so there is nothing to report. The second read names `r9`,
which was never written at all. Both answer with the empty string.
```

### Constraints

- `1 <= key.length <= 100` and `1 <= value.length <= 100`
- Both consist only of lowercase English letters and digits.
- `1 <= timestamp <= 10⁷`
- Across the `set` calls, `timestamp` strictly increases.
- `set` and `get` are called at most `2 * 10⁵` times in total.

## Hints

### Hint 1

Reads about one key never depend on any other key, so split the store by key
first: give each key its own list of what was written to it. A read then works
inside a single list instead of the whole store.

### Hint 2

Since the moments handed to `set` only ever grow, appending to a key's list
leaves it ordered by moment for free. An ordered list is exactly what lets a
read skip straight to the relevant entry instead of walking the history.

### Hint 3

"Latest entry at or before `t`" is one step away from "first entry after `t`",
which a halving search locates. Back up one position from that boundary; if
there is no position to back up into, the key has no entry old enough and the
answer is `""`.
