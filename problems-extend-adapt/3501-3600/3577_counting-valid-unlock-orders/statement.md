# Counting Valid Unlock Orders

## Description

A row of `n` locked machines carries labels `0` through `n - 1`, and
`complexity[i]` is the complexity of machine `i`'s password. Only
machine `0` starts out open — its password is already in hand.

Any other machine `i` opens by piggybacking on a machine that is already
open: some `j` with `j < i` and `complexity[j] < complexity[i]` can
decrypt `i`'s password. Nothing else opens a machine.

Count the permutations of `[0, 1, ..., n - 1]` that read as a legitimate
order to open every machine, given that machine `0` is the only one open
before the first move. The count can be huge, so report it modulo
`10⁹ + 7`.

Note that the machine that starts open is the one labeled `0`, not
whichever machine happens to stand first in the permutation.

### Example 1

```text
Input: complexity = [5,9,7]
Output: 2
Explanation: Machine 0 holds the strict minimum 5, so the two remaining
machines may be opened in either order: [0,1,2] works (machine 1 then
machine 2, each decrypted through machine 0's weaker password), and so
does [0,2,1].
```

### Example 2

```text
Input: complexity = [4,4,8]
Output: 0
Explanation: Machine 1 can only be decrypted through machine 0, yet 4 is
not below 4 — the very second machine is stuck, so no order exists.
```

### Example 3

```text
Input: complexity = [2,6,10,5]
Output: 6
Explanation: The strict minimum 2 sits at label 0, and after that the
weakness condition is satisfied by machine 0 no matter which unlocked
machine does the decrypting — the three remaining machines arrange
freely, giving 3! = 6 orders.
```

### Constraints

- `2 <= complexity.length <= 10⁵`
- `1 <= complexity[i] <= 10⁹`

## Hints

### Hint 1

Look at the smallest complexity anywhere in the array. If it sits at any
label other than `0` — or if the value `complexity[0]` is ever matched
later — some machine can never find a strictly weaker earlier opener.

### Hint 2

Once label `0` holds the strict minimum, the ordering rule stops
binding: whatever machine you try to open next, machine `0` is open,
earlier, and strictly weaker.

### Hint 3

So the whole count collapses to arranging labels `1` through `n - 1` in
any order — multiply out `(n − 1)!` under the modulus.
