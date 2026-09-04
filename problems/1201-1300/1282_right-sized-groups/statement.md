# Right-Sized Groups

## Description

`n` people, numbered `0` to `n - 1`, are being divided into groups. You
are given an array `groupSizes` of length `n`: `groupSizes[i]` is the
exact size of the group that person `i` ends up in. So if
`groupSizes[2] = 4`, person 2 must share a group with exactly three
other people.

Split all `n` people into groups so that every person `i` sits in a
group of size `groupSizes[i]`. Each person belongs to exactly one group,
and every person must be placed. The input guarantees at least one valid
splitting exists.

With several valid splittings possible, any one of them is accepted —
the groups may appear in any order and the people inside a group may be
listed in any order.

### Example 1

```text
Input: groupSizes = [1,3,3,2,3,2]
Output: [[0],[1,2,4],[3,5]]
Explanation: Person 0's entry is 1, so they form a group alone. People
1, 2, and 4 each demand a group of size 3, and people 3 and 5 each
demand a group of size 2. Grouping them as [[3,5],[1,2,4],[0]] would be
just as valid.
```

### Example 2

```text
Input: groupSizes = [4,4,4,4,1,2,2]
Output: [[0,1,2,3],[4],[5,6]]
Explanation: The first four people share one group of four, person 4 is
a singleton, and people 5 and 6 pair up.
```

### Constraints

- `groupSizes.length == n`
- `1 <= n <= 500`
- `1 <= groupSizes[i] <= n`

## Hints

### Hint 1

Only people with equal `groupSizes` entries can share a group — collect
each person's id into a bucket per demanded size.

### Hint 2

Cut every bucket into chunks of exactly its size; greedily close a
chunk as soon as it fills up.
