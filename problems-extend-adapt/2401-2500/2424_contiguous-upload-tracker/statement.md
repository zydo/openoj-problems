# Contiguous Upload Tracker

## Description

A server has `n` videos, numbered `1` through `n`, that are uploaded one at a
time in some order. A prefix `i` is complete when every video from `1` through
`i` has arrived. Track the length of the longest complete prefix at any moment.

Implement the `UploadPrefixTracker` class:

- `UploadPrefixTracker(int n)` prepares a stream of `n` videos.
- `void markUploaded(int video)` records that `video` has arrived.
- `int longestReadyPrefix()` returns the largest `i` whose whole prefix is
  uploaded, or `0` when video `1` has not arrived yet.

### Example 1

```text
Input:
["UploadPrefixTracker", "markUploaded", "longestReadyPrefix", "markUploaded", "longestReadyPrefix", "markUploaded", "markUploaded", "longestReadyPrefix"]
[[6], [2], [], [1], [], [4], [3], []]
Output: [null, null, 0, null, 2, null, null, 4]
Explanation: Uploading 2 alone completes no prefix; after 1 arrives the prefix
[1,2] is complete; adding 4 and 3 extends it to [1,2,3,4].
```

### Example 2

```text
Input:
["UploadPrefixTracker", "markUploaded", "markUploaded", "longestReadyPrefix", "markUploaded", "markUploaded", "longestReadyPrefix"]
[[5], [5], [3], [], [1], [2], []]
Output: [null, null, null, 0, null, null, 3]
Explanation: Uploading 5 and 3 first leaves a hole at 1; once 1 and 2 follow,
the prefix [1,2,3] is complete while video 4 is still missing.
```

### Constraints

- `1 <= n <= 10⁵`
- `1 <= video <= n`
- Video numbers are all distinct.
- At most `2 × 10⁵` calls are made in total, including at least one
  `longestReadyPrefix`.

## Hints

### Hint 1

Track which videos have arrived in a boolean array and advance a prefix
pointer whenever its next video appears.
