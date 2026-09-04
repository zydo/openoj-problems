# Town Celebrity

## Description

A town has `n` residents labeled `1` through `n`, and rumors say one of them
is a **celebrity**. A resident qualifies as the celebrity only when both of
these hold:

- They trust no one.
- Every other resident trusts them.

The trust relationships are listed in an array `trust`, where
`trust[i] = [a, b]` means resident `a` trusts resident `b`. A pair that is
absent from the array means no trust of that direction exists. At most one
resident can satisfy both conditions, so the celebrity — when one exists at
all — is unique.

Return the celebrity's label, or `-1` if the town has none.

### Example 1

```text
Input: n = 4, trust = [[2,4],[1,4],[3,4]]
Output: 4
Explanation: Residents 1, 2 and 3 all trust 4, and 4 trusts nobody, so 4
is the celebrity.
```

### Example 2

```text
Input: n = 3, trust = [[2,1],[3,1],[1,3]]
Output: -1
Explanation: Resident 1 is trusted by both others, but 1 also trusts 3,
which disqualifies them; nobody else is trusted by everyone.
```

### Example 3

```text
Input: n = 5, trust = [[1,3],[2,3],[4,3],[5,2]]
Output: -1
Explanation: Resident 5 trusts 2 rather than 3, leaving 3 one trust short
of unanimous; no other resident is trusted widely either.
```

### Example 4

```text
Input: n = 1, trust = []
Output: 1
Explanation: The lone resident trusts nobody and is trusted by everyone
else — of whom there are none — so they are the celebrity.
```

### Constraints

- `1 <= n <= 1000`
- `0 <= trust.length <= 10⁴`
- `trust[i].length == 2`
- Every pair in `trust` is distinct.
- `a != b` for each pair `[a, b]` in `trust`.
- `1 <= a, b <= n`
