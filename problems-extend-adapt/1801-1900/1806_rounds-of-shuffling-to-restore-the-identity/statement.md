# Rounds of Shuffling to Restore the Identity

## Description

An even integer `n` is given, along with the identity arrangement
`perm` of size `n`: `perm[i] == i` for every `i` (0-indexed).

One round of shuffling builds a fresh array `arr` from `perm` and then
adopts it:

- for even `i`, `arr[i] = perm[i / 2]`;
- for odd `i`, `arr[i] = perm[n / 2 + (i - 1) / 2]`.

The round ends with `perm` replaced by `arr`, and the next round shuffles
that array the same way again.

Return the smallest non-zero number of rounds after which `perm` is the
identity arrangement once more. Even when a single round already restores
it, one round must be applied and counted.

### Example 1

```text
Input: n = 8
Output: 3
Explanation: Starting from [0,1,2,3,4,5,6,7], one round yields
[0,4,1,5,2,6,3,7], a second round yields [0,2,4,6,1,3,5,7], and a third
round restores [0,1,2,3,4,5,6,7].
```

### Example 2

```text
Input: n = 10
Output: 6
Explanation: Six identical rounds of the interleaving shuffle above are
needed before every element is back at its own index.
```

### Example 3

```text
Input: n = 1000
Output: 36
Explanation: Even at the largest allowed size the shuffle cycles back to
the identity after 36 rounds.
```

### Constraints

- `2 <= n <= 1000`
- `n` is even.

## Hints

### Hint 1

Every round applies the same fixed reshuffle, so the answer depends only
on `n` — it is the number of times the shuffle must repeat to reproduce
its input.

### Hint 2

Follow a single element instead of the whole array. An entry sitting at
position `p` moves to slot `2p` when `2p < n` and to slot `2p - n + 1`
otherwise; positions `0` and `n - 1` never move. Counting the steps until
the element that started at position `1` returns home answers the problem.

### Hint 3

That one-element chase terminates quickly: for interior positions the move
is `2p mod (n - 1)`, so the return time is the multiplicative order of 2
modulo `n - 1`, which is at most `n - 2`. Watch the degenerate size
`n = 2`, where position `1` is the pinned endpoint.
