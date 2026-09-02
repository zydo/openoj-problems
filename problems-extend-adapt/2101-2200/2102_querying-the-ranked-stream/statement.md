# Querying The Ranked Stream

## Description

Entries arrive at a ranking service one at a time. Each entry carries a
unique name and an integer score. Entries are ranked best first: a
higher score ranks better, and equal scores are broken by the
lexicographically smaller name ranking better.

The service answers a growing series of queries: the first query asks
for the best entry among everything added so far, the second query asks
for the second best, and in general the `i`th query returns the `i`th
best entry. The data guarantees the number of queries never exceeds the
number of entries added.

Implement the `RankStream` class:

- `RankStream()` initializes the stream with no entries.
- `void add(string name, int score)` adds an entry with the given name
  and score.
- `string get()` returns the `i`th best entry, where `i` is the number
  of times `get` has been called including this call.

### Example 1

```text
Input:
["RankStream", "add", "add", "get", "add", "get", "add", "get", "add", "get", "add", "get", "get"]
[[], ["delta", 5], ["alpha", 7], [], ["beta", 5], [], ["gamma", 7], [], ["epsi", 5], [], ["zeta", 8], [], []]
Output: [null, null, null, "alpha", null, "beta", null, "beta", null, "delta", null, "delta", "epsi"]
Explanation:
RankStream stream = new RankStream();
stream.add("delta", 5);
stream.add("alpha", 7);
stream.get();              // Ranked so far: alpha, delta. This is query 1,
                           // so return the best entry: "alpha".
stream.add("beta", 5);
stream.get();              // Ranked: alpha, beta, delta. Query 2 returns "beta".
stream.add("gamma", 7);
stream.get();              // Ranked: alpha, gamma, beta, delta. Query 3
                           // returns "beta" again.
stream.add("epsi", 5);
stream.get();              // Ranked: alpha, gamma, beta, delta, epsi.
                           // Query 4 returns "delta".
stream.add("zeta", 8);
stream.get();              // Ranked: zeta, alpha, gamma, beta, delta, epsi.
                           // Query 5 returns "delta".
stream.get();              // Query 6 returns "epsi".
```

### Constraints

- `1 <= name.length <= 10`
- `name` consists of lowercase English letters, and all names are
  distinct.
- `1 <= score <= 10⁵`
- At most `10⁴` calls in total are made to `add` and `get`.
- The number of calls to `get` never exceeds the number of calls to
  `add`.

## Hints

### Hint 1

Only one position is ever requested, and it advances by exactly one per
query — think about what happens to the element sitting at that
position when a new entry arrives.

### Hint 2

Two heaps facing each other (a best-side heap and a worst-side heap)
let each `add` shift at most a constant number of elements across the
query boundary, making both operations logarithmic.
