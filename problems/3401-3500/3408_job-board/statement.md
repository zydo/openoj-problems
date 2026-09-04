# Job Board

## Description

A board holds jobs for its users. Every job records the user who posted it, a
job id, and a priority.

Implement the `JobBoard` class:

- `JobBoard(int[][] jobs)` creates the board with the given jobs on it. Each
  entry is a triple `[userId, jobId, priority]`.
- `void post(int userId, int jobId, int priority)` puts a new job on the
  board. `jobId` is guaranteed not to be in use.
- `void reprioritize(int jobId, int newPriority)` changes the priority of a
  job already on the board. `jobId` is guaranteed to be on the board.
- `void withdraw(int jobId)` removes a job from the board. `jobId` is
  guaranteed to be on the board.
- `int runTop()` runs the highest-priority job on the board and removes it,
  returning the `userId` of the user who posted it. When several jobs share
  the top priority, the one with the higher `jobId` runs. An empty board
  returns `-1`.

One user may have several jobs on the board at the same time.

### Example 1

```text
Input:
["JobBoard", "runTop", "post", "reprioritize", "runTop", "withdraw", "runTop"]
[[[[2, 21, 40], [1, 12, 40]]], [], [4, 44, 5], [12, 50], [], [44], []]
Output: [null, 2, null, null, 1, null, -1]
Explanation:
JobBoard board = new JobBoard([[2, 21, 40], [1, 12, 40]]);
board.runTop();        // jobs 21 and 12 tie at priority 40; the higher id, 21,
                       // runs — its user 2 is returned.
board.post(4, 44, 5);  // user 4 posts job 44 at priority 5.
board.reprioritize(12, 50);  // job 12 moves to priority 50.
board.runTop();        // job 12 now tops the board — user 1 is returned.
board.withdraw(44);    // job 44 leaves the board without running.
board.runTop();        // nothing is left, so -1 is returned.
```

### Constraints

- `1 <= jobs.length <= 10⁵`
- `0 <= userId <= 10⁵`
- `0 <= jobId <= 10⁵`
- `0 <= priority, newPriority <= 10⁹`
- At most `2 * 10⁵` calls are made in total to `post`, `reprioritize`,
  `withdraw`, and `runTop`.
- Every call is valid: `reprioritize` and `withdraw` name a job on the board,
  and `post` names a job id that is free.

### Follow-up

A `reprioritize` or `withdraw` call strands exactly one entry of the priority
queue. Can you keep the queue correct without ever deleting from it?

## Hints

### Hint 1

Ranking is by the pair `(priority, jobId)`, descending on both, so a max-heap
ordered by that pair serves `runTop` — as long as the entry on top still
describes a live job at its current priority.

### Hint 2

Hold the truth in a hash map from `jobId` to its current
`(priority, userId)`. `post` writes the map and pushes; `reprioritize`
rewrites the map and pushes; `withdraw` only erases the map entry. None of
them ever deletes from the queue.

### Hint 3

`runTop` discards top entries whose job is gone from the map or whose stored
priority disagrees with the map — leftovers from earlier calls. The first
entry to pass is the genuine maximum: erase its job from the map and return
its user.
