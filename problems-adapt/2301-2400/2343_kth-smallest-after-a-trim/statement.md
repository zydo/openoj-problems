# Kth Smallest After a Trim

## Description

You get an array `nums` of numeric strings that all share one length, and
a list of queries `queries[i] = [k_i, trim_i]`. To answer query `i`,
imagine keeping only the rightmost `trim_i` digits of every string —
chopping away leading digits until the suffix is that long — then rank
those shortened values as numbers and report the index, within the
original `nums`, of the `k_i`th smallest one. When two shortened values
tie, the entry sitting at the lower index counts as the smaller one. The
chopping is hypothetical: after the query, every string is back to full
length for the next one.

Return one index per query, in order.

Notes:

- Strings may start with zeros; a shortened value is read as a plain
  number, so `"05"` means 5.
- Chopping to `x` digits from a string that already has exactly `x` digits
  leaves it alone.

### Example 1

```text
Input: nums = ["5912","2413","8305","6784"],
       queries = [[1,1],[2,1],[1,2],[3,4]]
Output: [0,1,2,3]
Explanation:
1. Keeping the last digit gives 2, 3, 5, 4. The smallest is 2, at
   index 0.
2. With the same last digits, the 2nd smallest is 3, at index 1.
3. Keeping the last two digits gives 12, 13, 05, 84. The smallest is
   "05", read as 5, at index 2.
4. Keeping everything, the order is 2413, 5912, 6784, 8305, so the 3rd
   smallest is 6784, at index 3.
```

### Example 2

```text
Input: nums = ["77","37","07"], queries = [[1,1],[2,1]]
Output: [0,1]
Explanation: All last digits are 7, so ties are broken by position: the
smallest is at index 0 and the 2nd smallest at index 1.
```

### Example 3

```text
Input: nums = ["091","090","400","391"], queries = [[2,2],[1,3]]
Output: [1,1]
Explanation: With two digits kept, the values are 91, 90, 0, 91; the 2nd
smallest is 90 at index 1. At full length the smallest string is "090",
also at index 1.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i].length <= 100`
- `nums[i]` consists of only digits.
- All `nums[i].length` are equal.
- `1 <= queries.length <= 100`
- `queries[i].length == 2`
- `1 <= k_i <= nums.length`
- `1 <= trim_i <= nums[i].length`

### Follow up

If the same set of strings were queried with every possible trim length,
could ordering work in passes over the digits — one pass per digit
position — instead of sorting each query from scratch? What would that
running time look like?

## Hints

### Hint 1

A direct reading of the rules already fits the limits: handle each query
on its own, ordering the entries by their kept suffix and falling back to
the original index on equality.
