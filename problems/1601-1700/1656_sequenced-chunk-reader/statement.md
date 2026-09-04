# Sequenced Chunk Reader

## Description

Chunks of data arrive labeled with the position they belong to, but not
necessarily in position order. Whenever a run of consecutive positions —
starting from the beginning — is filled, that run becomes readable.

Implement the `ChunkStream` class:

- `ChunkStream(int n)` initializes the stream for `n` chunks.
- `String[] insert(int id, String value)` stores the chunk `value` at
  position `id` (each position receives exactly one chunk over the
  stream's life), then returns every newly readable chunk in order: the
  consecutive run starting right after the last previously readable
  position. If the chunk just stored does not complete such a run,
  return an empty list.

### Example 1

```text
Input:
["ChunkStream","insert","insert","insert","insert","insert"]
[[5],[3,"ccccc"],[1,"aaaaa"],[2,"bbbbb"],[5,"eeeee"],[4,"ddddd"]]
Output: [null,[],["aaaaa"],[],[],["bbbbb","ccccc","ddddd","eeeee"]]
Explanation: Chunk 3 arrives first but position 1 is still empty —
nothing readable. Chunk 1 completes a run starting at position 1, so
["aaaaa"] is returned. Chunk 2 leaves position 4 unfilled. Chunk 5 alone
doesn't help. Finally chunk 4 fills the last gap, and the whole tail
["bbbbb","ccccc","ddddd","eeeee"] streams out in order.
```

### Constraints

- `1 <= n <= 1000`
- `1 <= id <= n`
- `value.length == 5`
- `value` consists only of lowercase English letters.
- Each call to `insert` uses a unique `id`.
- Exactly `n` calls are made to `insert`.

## Hints

### Hint 1

Keep the stored chunks in an array by position and one pointer marking
the next readable position.

### Hint 2

After each insert, advance the pointer over consecutive filled slots and
collect what it passes.
