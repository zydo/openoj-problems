# Most Strings Within Bit Budgets

## Description

You are given a list `strs` of binary strings and two budgets: `m` bounds how
many times the digit `0` may be used in total, and `n` bounds the digit `1`.

Select as many of the strings as possible into one collection, using each
string at most once, so that across the whole collection the digit `0`
appears no more than `m` times and the digit `1` no more than `n` times.
Return the size of the largest such collection.

### Example 1

```text
Input: strs = ["110","01","1110","0","11"], m = 3, n = 5
Output: 4
Explanation: "110", "01", "0", and "11" together contain exactly 3 zeros
and 5 ones, which meets both budgets exactly. The only collection of size 5
is the whole list, and it needs 4 zeros, so 4 is the best possible.
```

### Example 2

```text
Input: strs = ["00","0","1"], m = 2, n = 1
Output: 2
Explanation: "00" and "1" together hold 2 zeros and 1 one. Taking all
three strings would need 3 zeros, which is over budget.
```

### Example 3

```text
Input: strs = ["1","10","11"], m = 1, n = 5
Output: 3
Explanation: The whole list holds just 1 zero and 4 ones, so everything fits.
```

### Constraints

- `1 <= strs.length <= 600`
- `1 <= strs[i].length <= 100`
- each `strs[i]` consists only of the digits `'0'` and `'1'`
- `1 <= m, n <= 100`

## Hints

### Hint 1

The budgets never look at a string's arrangement of digits — only at how
many `0`'s and how many `1`'s it holds. What is left of each string once
you record those two counts?

### Hint 2

Read the task as picking items, each with a two-part cost and a value of
one pick, under two spending caps. Which classical optimization problem
has exactly that shape?

### Hint 3

Keep one table indexed by (zeros, ones) and fold the strings in one at a
time, walking both indices downward so a string can never build on a state
that already includes itself.
