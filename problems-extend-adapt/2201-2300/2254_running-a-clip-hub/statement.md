# Running A Clip Hub

## Description

A clip hub stores short videos. Every video is a string of digits, and
the digit at position `i` is the content shown during minute `i` — the
first digit covers minute `0`, the second covers minute `1`, and so on.
Viewers may like or dislike any stored video, and the hub tracks three
counters per video: views, likes, and dislikes.

Every upload is assigned the smallest integer `videoId` that is not
currently in use, counting from `0`. Deleting a video releases its id,
so a later upload can reuse it.

Implement the `ClipHub` class:

- `ClipHub()` initializes the hub with no videos.
- `int upload(String video)` stores a new video and returns the id
  assigned to it.
- `void remove(int videoId)` deletes the video with id `videoId` if one
  exists; otherwise nothing happens.
- `String watch(int videoId, int startMinute, int endMinute)` if the
  video exists, count one view and return the substring of its content
  from minute `startMinute` through `min(endMinute, video.length - 1)`,
  inclusive. If the video does not exist, return `"-1"`.
- `void like(int videoId)` adds one like to the video with id `videoId`,
  if it exists.
- `void dislike(int videoId)` adds one dislike to the video with id
  `videoId`, if it exists.
- `int[] getLikesAndDislikes(int videoId)` returns `[likes, dislikes]`
  for the video with id `videoId`, or `[-1]` if that id is not in use.
- `int getViews(int videoId)` returns the view count of the video with
  id `videoId`, or `-1` if that id is not in use.

### Example 1

```text
Input:
["ClipHub", "upload", "upload", "upload", "remove", "upload", "watch", "watch", "like", "dislike", "dislike", "getLikesAndDislikes", "getViews", "watch", "getLikesAndDislikes", "getViews", "remove", "getViews"]
[[], ["1102"], ["9"], ["47"], [1], ["55"], [0, 1, 9], [0, 0, 1], [2], [2], [2], [2], [0], [3, 0, 5], [5], [1], [9], [9]]
Output: [null, 0, 1, 2, null, 1, "102", "11", null, null, null, [1, 2], 2, "-1", [-1], 0, null, -1]
Explanation:
ClipHub hub = new ClipHub();
hub.upload("1102");          // the smallest free id is 0, so return 0.
hub.upload("9");             // return 1.
hub.upload("47");            // return 2.
hub.remove(1);               // id 1 becomes free again.
hub.upload("55");            // the smallest free id is now 1, so return 1.
hub.watch(0, 1, 9);          // video 0 is "1102"; minutes 1 through
                             // min(9, 3) = 3 give "102", so return "102".
hub.watch(0, 0, 1);          // minutes 0 through 1 give "11", so return "11".
hub.like(2);                 // video 2 gains a like.
hub.dislike(2);              // video 2 gains a dislike.
hub.dislike(2);              // video 2 gains a second dislike.
hub.getLikesAndDislikes(2);  // 1 like and 2 dislikes, so return [1, 2].
hub.getViews(0);             // video 0 was watched twice, so return 2.
hub.watch(3, 0, 5);          // no video has id 3, so return "-1".
hub.getLikesAndDislikes(5);  // no video has id 5, so return [-1].
hub.getViews(1);             // video 1 exists but was never watched, so return 0.
hub.remove(9);               // no video has id 9, so nothing happens.
hub.getViews(9);             // no video has id 9, so return -1.
```

### Constraints

- `1 <= video.length <= 10⁵`
- The sum of `video.length` over all `upload` calls is at most `10⁵`.
- `video` consists only of digits.
- `0 <= videoId <= 10⁵`
- `0 <= startMinute < endMinute <= 10⁵`
- `startMinute < video.length` holds for every `watch` call on an
  existing video.
- The sum of `endMinute - startMinute` over all `watch` calls is at
  most `10⁵`.
- At most `10⁵` calls in total are made to all functions.

## Hints

### Hint 1

The only nontrivial bookkeeping is the id supply: deleting a video must
make its id available again, and uploads must always take the smallest
free one.

### Hint 2

Collect freed ids in a min-heap. An upload pops from the heap when it is
non-empty and otherwise hands out the next sequential id, since the ids
in use then form exactly `0..size-1`. Every other method is a hash-map
lookup guarded by an existence check.
