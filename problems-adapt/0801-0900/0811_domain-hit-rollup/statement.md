# Domain Hit Rollup

## Description

Each entry in `cpdomains` has a visit count followed by a domain name, such
as `"900 portal.example.com"`. A visit to a domain also counts as a visit to
each of its suffix domains: visiting `portal.example.com` also visits
`example.com` and `com`.

For every domain or suffix that appears this way, add all applicable visit
counts. Return strings in the form `"count domain"`, sorted by domain name in
ascending lexicographic order.

### Example 1

```text
Input: cpdomains = ["3 a.b.c","2 b.c"]
Output: ["3 a.b.c","5 b.c","5 c"]
```

### Example 2

```text
Input: cpdomains = ["7 x.y"]
Output: ["7 x.y","7 y"]
```

### Constraints

- `1 <= cpdomains.length <= 100`
- `1 <= cpdomains[i].length <= 100`
- Each `cpdomains[i]` has either `"count a.b"` or `"count a.b.c"` form.
- Each count is an integer in the range `[1, 10⁴]`.
- Every domain label contains lowercase English letters only.
