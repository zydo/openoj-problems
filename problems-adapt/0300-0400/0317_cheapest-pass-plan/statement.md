# Cheapest Pass Plan

## Description

A transit operator sells exactly three kinds of pass. A pass activated on some
calendar day stays valid for a fixed run of consecutive days starting there:
`prices[0]` buys one day of validity, `prices[1]` buys seven, and `prices[2]`
buys thirty. Activating a pass on day `9` with seven days of validity, for
instance, leaves you free to ride on days `9` through `15`.

You are given the calendar days you intend to ride, as a strictly increasing
array `days` of numbers between `1` and `365`. Buy any number of passes of any
kinds, activating each on any calendar day you like; the only requirement is
that every day in `days` falls inside the validity of at least one pass you
bought. Return the smallest total you can spend.

### Example 1

```text
Input: days = [2,3,9,10,11,25], prices = [4,11,40]
Output: 23
Explanation: Cover days 2 and 3 with a single-day pass each, 8 in all — the
seven-day pass would cost 11 to catch only those two. For days 9, 10 and 11 the
arithmetic flips: three single-day passes cost 12, so one seven-day pass
activated on day 9 is better at 11. Day 25 takes a last single-day pass for 4.
That is 8 + 11 + 4 = 23, while one thirty-day pass covering everything
would run to 40.
```

### Example 2

```text
Input: days = [3,5,12,18,22,28,29,30,31], prices = [6,20,45]
Output: 45
Explanation: Nine riding days would cost 54 one day at a time, and they are
spread too thinly for seven-day passes to bunch usefully. But days 3 through 31
span twenty-nine days, so one thirty-day pass activated on day 3 covers the
whole plan for 45.
```

### Example 3

```text
Input: days = [7], prices = [9,9,2]
Output: 2
Explanation: Nothing forces the longer passes to be the dearer ones. Here the
thirty-day pass is the cheapest item on sale, so buy it for a single day of
riding.
```

### Constraints

- `1 <= days.length <= 365` and each entry satisfies `1 <= days[i] <= 365`
- The entries of `days` appear in strictly increasing order.
- `prices` holds exactly three values, each in the range `1` to `1000`.

## Hints

### Hint 1

Work along the calendar rather than along `days`. Define one number per
calendar day: the least you could have spent so that every riding day up to and
including that one is covered.

### Hint 2

A day you do not ride adds no decision, so its number simply repeats the
previous day's. A day you do ride must sit inside some pass, and that pass has
one of three lengths.

### Hint 3

You never lose by imagining the covering pass as ending on today rather than
later. So for a riding day `d`, try each length `u` in turn: pay that pass's
price on top of the number already computed for day `d - u`, clamping the index
at day zero, and keep the smallest of the three.
