# Vetting Every Friend Request

## Description

A network has `n` people labeled `0` to `n - 1`, and nobody is friends
with anyone yet.

Some pairings are off-limits: you are given the array `restrictions`,
where `restrictions[i] = [x_i, y_i]` forbids person `x_i` and person
`y_i` from ever being friends — directly or through any chain of
intermediate friends.

Friendships then grow one request at a time. The array `requests` lists
them in the order they arrive, with `requests[j] = [u_j, v_j]` asking
whether person `u_j` and person `v_j` may become friends. Granting a
request would merge the two people's entire friend circles, so it may be
granted only if doing so puts no restricted pair into the same circle. A
granted request makes `u_j` and `v_j` direct friends for the rest of the
process; a denied request changes nothing. A request between two people
who are already direct friends is still granted.

Return the boolean array `result`, where `result[j]` says whether the
`j`th request was granted.

### Example 1

```text
Input: n = 4, restrictions = [[1,3]], requests = [[0,2],[2,3],[1,2],[0,3]]
Output: [true,true,false,true]
Explanation:
Request 0: 0 and 2 are granted and become direct friends.
Request 1: 2 and 3 are granted; no restricted pair ends up together, and
now {0,2,3} form one circle.
Request 2: 1 and 2 would be denied anyway — granting it would pull 3 into
1's circle, and 1 and 3 are directly restricted.
Request 3: 0 and 3 already sit in the same circle, so the request stands.
```

### Example 2

```text
Input: n = 6, restrictions = [[0,5],[2,4]], requests = [[1,5],[0,1],[3,4],[4,5]]
Output: [true,false,true,true]
Explanation:
Request 0: 1 and 5 are granted.
Request 1: granting 0 with 1 would land 0 in the same circle as 5, but 0
and 5 are restricted — denied.
Request 2: 3 and 4 are granted; restriction [2,4] is untouched since 2
lives elsewhere.
Request 3: 4's circle {3,4} and 5's circle {1,5} violate no restriction,
so they merge.
```

### Example 3

```text
Input: n = 2, restrictions = [], requests = [[0,1],[1,0]]
Output: [true,true]
Explanation: With no restrictions both requests are granted; the second
one merely re-asks for an existing friendship.
```

### Constraints

- `2 <= n <= 1000`
- `0 <= restrictions.length <= 1000`
- `restrictions[i].length == 2`
- `0 <= x_i, y_i <= n - 1`
- `x_i != y_i`
- `1 <= requests.length <= 1000`
- `requests[j].length == 2`
- `0 <= u_j, v_j <= n - 1`
- `u_j != v_j`

## Hints

### Hint 1

Checking every restriction for every request works but is wasteful. What
if you could ask "which circle does this person belong to?" in nearly
constant time?

### Hint 2

A disjoint-set union over granted friendships answers exactly that; a
request is grantable precisely when no restricted pair straddles the two
circles about to merge.
