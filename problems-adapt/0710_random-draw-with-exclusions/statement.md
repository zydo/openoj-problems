# Random Draw With Exclusions

## Description

The integers `0` through `n - 1` are candidates, except that the distinct
values listed in `excluded` are off limits. Build an object that hands back one
of the surviving candidates on demand, every survivor equally likely.

Implement the `RandomDrawWithExclusions` class:

- `RandomDrawWithExclusions(int n, int[] excluded)` — fix the candidate range
  `[0, n - 1]` and the values that are barred from it.
- `int pick()` — return a candidate that is inside the range and not barred,
  drawn uniformly.

There is a second requirement beyond correctness: each `pick` should consume as
few calls to your language's random generator as you can manage.

### How the draws are judged

One returned value proves nothing about a distribution, so `pick` is judged by
repetition instead. Each judged call is run thousands of times — up to about
300000 draws. Every value that comes back must be a legal candidate, and the
share of the draws taken by each legal candidate must sit inside a tolerance
band around `1 / (n - b)`, writing `b` for the number of barred values. Any
honestly uniform sampler clears this.

Collecting that many observations per candidate limits the statistically judged
cases to roughly 200 legal candidates, with `n` up to about `2 * 10⁴`. The
declared bounds go much further — `n` as large as `10⁹`, `b` as large as `10⁵`
— and no frequency table could ever be built at that size; the construction
below is why the algorithm does not care, since its cost depends on `b` alone.

### Example 1

```text
Input:
["RandomDrawWithExclusions", "pick"]
[[9, [1, 4, 6, 7]], []]
Output: [null, <pick>]
Explanation:
RandomDrawWithExclusions drawer = new RandomDrawWithExclusions(9, [1, 4, 6, 7]);
drawer.pick();  // one of 0, 2, 3, 5, 8 — each returned about a fifth of the time
```

### Example 2

```text
Input:
["RandomDrawWithExclusions", "pick"]
[[4, [0, 2]], []]
Output: [null, <pick>]
Explanation:
RandomDrawWithExclusions drawer = new RandomDrawWithExclusions(4, [0, 2]);
drawer.pick();  // only 1 and 3 survive, so each comes up about half the time
```

### Constraints

- `1 <= n <= 10⁹`
- `0 <= excluded.length <= min(10⁵, n - 1)`
- `0 <= excluded[i] < n`
- The values in `excluded` are pairwise distinct
- `pick` is called at most `2 * 10⁴` times

## Hints

### Hint 1

Drawing from the whole range and re-drawing whenever the draw is barred is
correct, but the number of retries blows up once the barred values dominate.
Since exactly `n - b` candidates survive, the draw itself should target the
short range `[0, n - b)` and never be repeated.

### Hint 2

Some positions of that short range are themselves barred, so they need a
stand-in. Every stand-in has to come from the tail `[n - b, n)`, which holds
`b` positions of which at most `b` are barred — count them and you will find
there are always enough survivors up there to cover the barred positions down
here. Fix the pairing once, in a hash map.

### Hint 3

`pick` becomes one random call over `[0, n - b)` followed by one lookup, which
returns the drawn position unchanged unless the map has a stand-in for it. That
is the single random call the problem asks for, and building the map touches
`b` values, never `n` of them.
