# A Palindrome From Two Half Shuffles

## Description

You are given a string `s` of even length `n`, and a list of queries
`queries[i] = [a, b, c, d]`.

Split `s` at its middle: positions `0` through `n/2 - 1` form the left
half, positions `n/2` through `n - 1` form the right half. Characters
never move across the middle. Each query grants exactly two shuffles:

- the characters inside `s[a:b]`, where `0 <= a <= b < n / 2`, may be
  rearranged among those positions in any order;
- the characters inside `s[c:d]`, where `n / 2 <= c <= d < n`, may be
  rearranged among those positions in any order.

Every position outside the two ranges keeps its character. A range holding
a single character is effectively fixed.

Answer each query independently: can the two shuffles leave `s` reading
the same forwards and backwards? Return a boolean array `answer` with
`answer[i]` giving the verdict for query `i`.

A range `s[x:y]` covers the characters at indices `x` through `y`, both
inclusive.

### Example 1

```text
Input: s = "cababc", queries = [[0,2,3,5],[1,1,4,4]]
Output: [true,false]
Explanation: First query: the left range s[0:2] = "cab" shuffles into
"cba", and the right range s[3:5] = "abc" needs no change. The string
becomes "cbaabc", which reads the same both ways. Second query: both
ranges hold a single character, so nothing can move, and the untouched
middle pair 'b' and 'a' stays unequal — no palindrome is reachable.
```

### Example 2

```text
Input: s = "abcdez", queries = [[0,2,3,5]]
Output: [false]
Explanation: Both shuffles cover their halves completely, yet shuffling
never carries a character across the middle. The left half holds only
a, b, c while the right half holds only d, e, z, so the mirrored
positions can never all become equal.
```

### Example 3

```text
Input: s = "myxxmy", queries = [[0,1,3,4]]
Output: [true]
Explanation: Shuffle s[0:1] = "my" into "ym"; the right range s[3:4] =
"xm" can stay as it is. The string becomes "ymxxmy", a palindrome.
```

### Constraints

- `2 <= n == s.length <= 10⁵`
- `1 <= queries.length <= 10⁵`
- `queries[i].length == 4`
- `0 <= queries[i][0] <= queries[i][1] < n / 2`
- `n / 2 <= queries[i][2] <= queries[i][3] < n`
- `n` is even.
- `s` consists of only lowercase English letters.

## Hints

### Hint 1

Walk the mirrored pairs `(x, n-1-x)` and sort each pair into four cases by
which side's granted range covers it: neither side, the left only, the
right only, or both.

### Hint 2

A pair covered by neither range must already match. A pair covered on one
side only forces the shuffled range on that side to hold the fixed
character facing it — that character is spent from the range's multiset.

### Hint 3

A pair covered on both sides consumes one character from each range, and
the two consumed characters must equal each other. After all forced
consumptions, the two ranges must be left holding identical multisets.

### Hint 4

Prefix sums over letter counts answer every range multiset in `O(26)`, and
a second prefix array counting mismatched mirrored pairs checks the
untouched pairs with plain range arithmetic.
