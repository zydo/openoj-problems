# Keeping Requests Under The Rate Cap

## Description

A log of traffic arrives as a 2D integer array `requests`, where
`requests[i] = [userᵢ, timeᵢ]` says that `userᵢ` issued a request at time
`timeᵢ`.

Alongside it you get two integers `k` and `window`. A user breaks the rate
cap when some integer `t` exists for which that user issues strictly more
than `k` requests inside the closed span `[t, t + window]`.

Requests are disposable: you may delete any subset of them.

Return the largest number of requests that can survive the deletion while
leaving every user within the cap.

### Example 1

```text
Input: requests = [[3,4],[1,4],[3,10],[1,12],[3,20]], k = 1, window = 6
Output: 4
Explanation: User 3's requests at times 4 and 10 sit exactly window = 6
apart, so a single span holds both and one of them must go. User 3 keeps
4 and 20 (16 apart) and user 1 keeps both of its requests (8 apart), for
4 surviving requests.
```

### Example 2

```text
Input: requests = [[5,1],[5,2],[5,3],[5,4],[5,5],[5,6]], k = 2, window = 3
Output: 4
Explanation: User 5 fires at every time from 1 through 6, and no span of
length 3 may carry more than 2 of them. Dropping the requests at times 3
and 4 leaves [1, 2, 5, 6], where every length-3 span covers at most 2 —
so 4 requests survive and 2 must be sacrificed.
```

### Example 3

```text
Input: requests = [[1,5],[2,5],[1,6],[2,6],[3,7]], k = 1, window = 2
Output: 3
Explanation: With k = 1 each user may keep only one request per length-2
span. Users 1 and 2 each hold the pair (5, 6) whose gap of 1 fits inside
the window, so each drops one; user 3's lone request stays. Total kept: 3.
```

### Constraints

- `1 <= requests.length <= 10⁵`
- `requests[i] = [userᵢ, timeᵢ]`
- `1 <= k <= requests.length`
- `1 <= userᵢ, timeᵢ, window <= 10⁵`

## Hints

### Hint 1

Users never interact — the cap is checked per user — so the log falls
apart into independent per-user problems whose answers simply add up.

### Hint 2

Collect each user's times, sort them, and decide left to right whether a
time can join the survivors.

### Hint 3

A new time is safe exactly when its k-th surviving predecessor sits
strictly more than `window` behind it; that single comparison is the
whole greedy, and it squeezes out the maximum per user.
