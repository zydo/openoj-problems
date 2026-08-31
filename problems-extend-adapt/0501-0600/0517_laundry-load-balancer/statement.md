# Laundry Load Balancer

## Description

A laundromat has `n` washing machines standing in a single line.
Each machine currently holds some number of dresses, possibly zero.

In one move you pick any number of machines and, simultaneously for
each one you picked, shift a single dress from it to an immediately
adjacent machine.

You are given an integer array `machines`, where `machines[i]` is how
many dresses sit in the `i`-th machine from left to right. Return the
fewest moves needed to end with every machine holding the same number
of dresses. If no sequence of moves can reach that state, return
`-1`.

### Example 1

```text
Input: machines = [2,0,4]
Output: 2
Explanation:
1st move:    2     0 <-- 4    =>    2     1     3
2nd move:    2 --> 1     3    =>    1     2     2
```

### Example 2

```text
Input: machines = [0,4,0,0]
Output: 3
Explanation:
1st move:    0 <-- 4     0     0    =>    1     3     0     0
2nd move:    1     3 --> 0     0    =>    1     2     1     0
3rd move:    1     2 --> 1 --> 0    =>    1     1     1     1
```

### Example 3

```text
Input: machines = [1,3,1]
Output: -1
Explanation: The total number of dresses cannot be split evenly among
three machines, so no target amount is reachable.
```

### Constraints

- `n == machines.length`
- `1 <= n <= 10⁴`
- `0 <= machines[i] <= 10⁵`
