# Rotating Price Tags

## Description

A shop lines up `n` distinct chocolates in a row, one per slot. The
chocolate sitting in slot `i` can be taken home for `nums[i]`, and every
chocolate carries its own type — initially the chocolate in slot `i` is
the type-`i` chocolate, so the type of a chocolate is what changes, never
its price.

One operation costs `x` and retypes every chocolate simultaneously: the
type-`i` chocolate becomes the type-`(i + 1) mod n` chocolate, so all the
type labels slide over by one slot and wrap around the end.

Your goal is to walk away with one chocolate of every type. You choose
when to buy each chocolate, paying the price of the slot it occupies at
that moment, and you may perform operations any number of times whenever
you like. Return the smallest achievable total cost — purchases plus
operation fees.

### Example 1

```text
Input: nums = [4,9,2,7], x = 3
Output: 15
Explanation: Buy the type-0 chocolate (4) and the type-2 chocolate (2) at their opening slots, then pay 3 for one operation. The type-1 chocolate now sits at a 4 slot and the type-3 chocolate at a 2 slot; buying both brings purchases to 12, and 12 + 3 = 15.
```

### Example 2

```text
Input: nums = [5,1,6], x = 10
Output: 12
Explanation: An operation costs 10, while every plan that rotates can shave at most 9 off the purchase total, so the fees never pay for themselves. Buying all three chocolates at their opening slots costs 5 + 1 + 6 = 12.
```

### Example 3

```text
Input: nums = [3,4,5,1,2], x = 2
Output: 12
Explanation: Moves are cheap here. After two operations the cheapest slot each type has visited is at most 3, so purchases drop to 1 + 2 + 3 + 1 + 1 = 8; with 4 paid in fees the total is 12, and no plan does better.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10⁹`
- `1 <= x <= 10⁹`

## Hints

### Hint 1

Never rotate more than `n - 1` times: after a full cycle every chocolate
has visited every slot, so further operations change nothing.

### Hint 2

For a fixed number of operations `k`, the cheapest plan buys each type at
the lowest slot price it has seen across the first `k` rotations. Sweep
`k` from `0` to `n - 1`, extending each type's running minimum by one slot
per step, and minimize purchases plus `k * x`.
