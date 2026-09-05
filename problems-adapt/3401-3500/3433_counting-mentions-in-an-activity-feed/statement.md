# Counting Mentions In An Activity Feed

## Description

A platform has `numberOfUsers` accounts, numbered `0` to `numberOfUsers -
1`, and an activity log `events` with `n` entries. Every entry is one of
two kinds:

- A message: `["MESSAGE", "timestampi", "mentions_stringi"]` — at time
  `timestampi` a message went out naming some accounts. The mention string
  is a whitespace-separated list of tokens, each one of:
    - `id<number>` — account `<number>` directly, where the number is in
      `[0, numberOfUsers - 1]`. The list may repeat a token, may name
      several accounts, and reaches offline accounts too.
    - `ALL` — every account, online or not.
    - `HERE` — exactly the accounts online at that moment.
- A sign-out: `["OFFLINE", "timestampi", "idi"]` — account `idi` went
  offline at `timestampi` and comes back automatically 60 time units
  later, at `timestampi + 60`.

Produce an array `mentions` whose `i`-th entry is how many times account
`i` was named, summed over every message in the log.

Everyone starts online, and a status flip that shares a timestamp with a
message is applied before that message is processed. One message may name
the same account several times, and each naming counts.

### Example 1

```text
Input: numberOfUsers = 3, events = [["MESSAGE","5","id0 id0 id2"],["OFFLINE","20","1"],["MESSAGE","80","ALL"]]
Output: [3,1,2]
Explanation: At time 5 the message names id0 twice and id2 once, giving
[2,0,1]. At time 20 account 1 signs out. By time 80 it has returned, and
the ALL message adds one mention to everyone: [3,1,2].
```

### Example 2

```text
Input: numberOfUsers = 4, events = [["OFFLINE","7","2"],["MESSAGE","30","HERE id3"],["OFFLINE","40","3"],["MESSAGE","100","HERE"]]
Output: [2,2,1,3]
Explanation: Account 2 is out from time 7 until 67, so the HERE at time 30
skips it and names accounts 0, 1, 3, plus id3 again directly. Account 3 is
out from 40 until 100; at time 100 it has just returned, so that HERE
reaches all four accounts.
```

### Example 3

```text
Input: numberOfUsers = 2, events = [["MESSAGE","50","HERE"],["OFFLINE","10","0"],["MESSAGE","61","id1 id1"]]
Output: [0,3]
Explanation: The log is not in chronological order — after sorting by
timestamp, account 0 is out from 10 to 70, the HERE at time 50 reaches
only account 1, and the message at 61 names id1 twice more.
```

### Constraints

- `1 <= numberOfUsers <= 100`
- `1 <= events.length <= 100`
- `events[i].length == 3`
- `events[i][0]` is either `MESSAGE` or `OFFLINE`.
- `1 <= int(events[i][1]) <= 10⁵`
- Each `MESSAGE` carries between 1 and 100 `id<number>` tokens.
- Every mentioned id is a valid account number.
- An `OFFLINE` entry never names an account that is already offline.

## Hints

### Hint 1

Process the log in timestamp order; when timestamps tie, let sign-outs go
first.

### Hint 2

For each account, remember the moment it comes back. A HERE message at
time `t` names exactly the accounts whose return moment is at most `t`.
