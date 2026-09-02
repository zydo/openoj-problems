# Locating XOR Windows

## Description

A binary string `s` is given along with a list of queries, where the ith
query is a pair `[first_i, second_i]`.

Each query asks for a piece of `s`: among all contiguous chunks whose
digits read as a binary number `val`, find one satisfying
`val ^ first_i == second_i`. Report the chunk's 0-indexed endpoints
`[left_i, right_i]`. If several chunks satisfy the condition, report the
shortest one, breaking remaining ties by the smallest `left_i`. When no
chunk works at all, report `[-1, -1]`.

Return an array `ans` with `ans[i]` holding the answer to the ith query.

A chunk here means any non-empty run of consecutive characters of `s`.

### Example 1

```text
Input: s = "1100", queries = [[3,3]]
Output: [[2,2]]
Explanation: The wanted value is 3 ^ 3 = 0, and the shortest chunk
reading as 0 is the single "0" at index 2.
```

### Example 2

```text
Input: s = "10110", queries = [[4,6],[7,7]]
Output: [[0,1],[1,1]]
Explanation: The first query wants 4 ^ 6 = 2, read by the chunk "10" at
[0,1]. The second wants 7 ^ 7 = 0, read by the "0" at [1,1].
```

### Example 3

```text
Input: s = "00", queries = [[1,0]]
Output: [[-1,-1]]
Explanation: The query wants the value 1, and no chunk of "00" reads as
1.
```

### Constraints

- `1 <= s.length <= 10⁴`
- `s[i] is either '0' or '1'.`
- `1 <= queries.length <= 10⁵`
- `0 <= first_i, second_i <= 10⁹`

## Hints

### Hint 1

The XOR pins the wanted value down exactly: a matching chunk must read as
`first ^ second`. Both operands stay below `10⁹`, under `2³⁰`, so no
chunk longer than 30 characters can ever match.

### Hint 2

Walk every window of length up to 30 once, and record the first (hence
shortest-then-leftmost) endpoints of each decoded value in a dictionary;
after that, every query is a single dictionary lookup.
