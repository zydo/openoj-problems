# Cookie Contentment

## Description

Each child wants at most one cookie. Child `i` is content with any cookie of
size at least `g[i]`; cookie `j` has size `s[j]`. Assign cookies to maximize
the number of content children, and return that maximum.

It is possible that there are no cookies at all, while there is always at
least one child.

### Example 1

```text
Input: g = [2,3,4], s = [1,2,4]
Output: 2
Explanation: The cookie of size 2 satisfies the child with greed 2, and the
cookie of size 4 satisfies the child with greed 3.
```

### Example 2

```text
Input: g = [1,2,3], s = [2,2]
Output: 2
```

### Example 3

```text
Input: g = [1,2], s = []
Output: 0
Explanation: With no cookies, no child can be satisfied.
```

### Constraints

- `1 <= g.length <= 3 * 10⁴`
- `0 <= s.length <= 3 * 10⁴`
- `1 <= g[i], s[j] <= 2³¹ - 1`
