# Activity Minute Histogram

## Description

An activity tracker records each user action as one log entry
`[user_i, minute_i]`, meaning user `user_i` did something during minute
`minute_i`. You are given all of these entries in a 2D integer array `logs`,
along with an integer `k`.

Activity is noisy by nature: several users may act during the same minute,
and a single user may fire many actions within one minute. Define a user's
activity-minute count as the number of distinct minutes in which that user
performed at least one action — repeat actions inside the same minute only
count that minute once.

Build a 1-indexed histogram `answer` of length `k` such that, for each `j`
(`1 <= j <= k`), `answer[j]` is the number of users whose activity-minute
count equals `j`. Return `answer`.

### Example 1

```text
Input: logs = [[7,10],[3,10],[7,12],[7,10],[9,4]], k = 3
Output: [2,1,0]
Explanation: User 7 acted during minutes 10 and 12 — the duplicate entry at
minute 10 contributes nothing extra — so their count is 2. Users 3 and 9 each
acted during a single minute, so both have count 1. The histogram puts 1 user
in bucket 2 and 2 users in bucket 1.
```

### Example 2

```text
Input: logs = [[5,100],[6,101],[5,100],[7,100]], k = 2
Output: [3,0]
Explanation: Each of the three users acted during exactly one distinct
minute, so all three land in bucket 1 and bucket 2 stays empty.
```

### Example 3

```text
Input: logs = [[2,8],[2,8],[2,9],[4,1],[4,2],[4,3]], k = 4
Output: [0,1,1,0]
Explanation: User 2 acted during minutes 8 and 9, giving a count of 2; user 4
acted during minutes 1, 2, and 3, giving a count of 3. Only buckets 2 and 3
receive a tally.
```

### Constraints

- `1 <= logs.length <= 10⁴`
- `0 <= user_i <= 10⁹`
- `1 <= minute_i <= 10⁵`
- `k` is at least every user's activity-minute count and at most `10⁵`.

### Hint 1

Group the entries by user and collect each user's minutes into a set; the set
size is that user's activity-minute count.

### Hint 2

Once every user's count is known, add one to the histogram slot indexed by
that count and leave the untouched slots at zero.
