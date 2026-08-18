# News Board

## Description

Build a message board where each user sees a personal feed: the ten most
recent messages written by themselves or by anyone they follow.

Implement the `NewsBoard` class:

- `NewsBoard()` — start with an empty board.
- `void postMessage(int userId, int messageId)` — user `userId` publishes
  the message `messageId`. Every `messageId` is fresh; no message id is
  ever reused.
- `int[] getFeed(int userId)` — return the ids of the ten most recent
  messages in `userId`'s feed, newest first. A message belongs to the feed
  if its author is `userId` themself or someone `userId` currently
  follows. Fewer than ten qualifying messages may exist.
- `void follow(int followerId, int followeeId)` — user `followerId` begins
  following user `followeeId`.
- `void unfollow(int followerId, int followeeId)` — user `followerId`
  stops following user `followeeId`.

A user's own messages always sit in their feed, whether or not the follow
sets contain the user themself. Following a user who has never posted —
or one never seen before — is legal; their messages simply join the feed
once written. Unfollowing removes an author's messages from later feeds;
it erases nothing.

### Example 1

```text
Input:
["NewsBoard", "postMessage", "getFeed", "follow", "postMessage", "getFeed", "unfollow", "getFeed"]
[[], [3, 11], [3], [3, 7], [7, 12], [3], [3, 7], [3]]
Output: [null, null, [11], null, null, [12, 11], null, [11]]
Explanation:
NewsBoard board = new NewsBoard();
board.postMessage(3, 11); // user 3 writes message 11
board.getFeed(3);         // user 3's feed is [11]
board.follow(3, 7);       // user 3 follows user 7
board.postMessage(7, 12); // user 7 writes message 12
board.getFeed(3);         // [12, 11] — 12 is the newer message
board.unfollow(3, 7);     // user 3 drops user 7
board.getFeed(3);         // back to [11]
```

### Example 2

```text
Input:
["NewsBoard", "postMessage", "postMessage", "getFeed", "follow", "postMessage", "getFeed"]
[[], [2, 21], [5, 22], [2], [2, 5], [5, 23], [2]]
Output: [null, null, null, [21], null, null, [23, 22, 21]]
Explanation:
Following user 5 pulls in user 5's earlier message 22 as well — messages
written before a follow still count.
```

### Example 3

```text
Input:
["NewsBoard", "postMessage", "postMessage", "postMessage", "postMessage", "postMessage",
 "postMessage", "postMessage", "postMessage", "postMessage", "postMessage", "postMessage",
 "getFeed"]
[[], [4, 60], [4, 61], [4, 62], [4, 63], [4, 64], [4, 65], [4, 66], [4, 67], [4, 68],
 [4, 69], [4, 70], [4]]
Output: [null, null, null, null, null, null, null, null, null, null, null, null,
[70, 69, 68, 67, 66, 65, 64, 63, 62, 61]]
Explanation: Eleven messages exist, but a feed holds ten; message 60 is the oldest
and falls off.
```

### Constraints

- `1 <= userId, followerId, followeeId <= 500`
- `0 <= messageId <= 10⁴`
- All message ids are unique.
- At most `3 * 10⁴` calls in total to `postMessage`, `getFeed`,
  `follow`, and `unfollow`.
- A user never follows themself.

## Hints

### Hint 1

Only recency orders the feed, and messages arrive in chronological order —
so a global counter stamped onto each message ranks them all, and each
author's list, appended to as they write, is sorted for free. Building a
feed is then just merging lists that are each already newest-last.

### Hint 2

The feed is the ten largest of "the last ten messages of the user and of
each followee". A min-heap capped at ten does the selection: push every
candidate and pop the smallest whenever the heap grows past ten; the
survivors are exactly the ten most recent.

### Hint 3

Store each user's followees as a hash set, so following and unfollowing
cost constant average time and repeated follows are harmless. In the
merge, only the tail of any author's list (ten entries at most) can reach
the feed, so read the lists backwards.
