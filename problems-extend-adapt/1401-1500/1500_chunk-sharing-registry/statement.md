# Chunk Sharing Registry

## Description

A file is split into numbered chunks and swapped between participants.
Each participant owns some set of chunks, may drop out at any time, and
can ask who else currently holds a particular chunk.

Implement the `ChunkRegistry` class:

- `ChunkRegistry(int chunks)` initializes the registry for a file of
  `chunks` numbered chunks with no participants yet.
- `int join(int[] ownedChunks)` admits a new participant who owns exactly
  the given (unique) chunks, and assigns them the smallest unused user id
  (ids start at 1).
- `void leave(int userID)` removes the participant and frees their id for
  reuse.
- `int[] request(int userID, int chunkID)` returns, in increasing order,
  the ids of every current participant — the requester included — whose
  owned chunks contain `chunkID`.

### Example 1

```text
Input:
["ChunkRegistry","join","join","request","join","request","leave","request"]
[[5],[[0,1]],[[2,3]],[2,0],[[3,4]],[3,3],[2],[1,2]]
Output: [null,1,2,[1],3,[2,3],null,[]]
Explanation: For a 5-chunk file, the first participant (id 1) owns chunks
0 and 1, the second (id 2) owns 2 and 3. Asking on behalf of user 2 for
chunk 0 returns [1]. A third participant (id 3) joins with chunks 3 and
4, so a request for chunk 3 returns both holders, [2,3]. User 2 then
leaves — their chunks 2 and 3 are simply no longer available — so a
request for chunk 2 finds nobody and returns [].
```

### Constraints

- `1 <= chunks <= 10⁵`
- `0 <= ownedChunks.length <= min(100, chunks)`
- `1 <= ownedChunks[i] <= chunks`
- The values of `ownedChunks` are unique.
- `1 <= chunkID <= chunks`
- `userID` is guaranteed to be a current participant.
- At most `10⁴` calls are made to `join`, `leave`, and `request`.
- Every `leave` matches an earlier `join`.

## Hints

### Hint 1

Recycled ids call for a min-heap (or sorted set) of freed ids alongside a
counter for fresh ones.

### Hint 2

For `request`, keep a map from chunk id to the set of participants
holding it, and maintain both directions on join and leave.
