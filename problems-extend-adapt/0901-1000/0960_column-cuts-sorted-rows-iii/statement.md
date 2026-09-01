# Column Cuts for Sorted Rows III

## Description

An array `strs` holds `n` words, every one of them exactly as long as
the others. Stack the words into a character grid, one word per row. A
cut removes one column position from every word at once, and you may cut
any set of positions you like.

After the cuts, each surviving row is judged on its own: reading any
single word from left to right, its remaining letters must never step
down — `strs[i][0] <= strs[i][1] <= ...` for every row `i`. How the rows
compare against one another is nobody's business here; one row may sit
above or below another in the dictionary without any penalty.

Return the smallest number of cuts after which every row is internally
sorted.

### Example 1

```text
Input: strs = ["bab","aba"]
Output: 1
Explanation: The middle column is the sole troublemaker — it turns row
one from b down to a. Cutting just that column leaves ["bb","aa"], and
both rows now read level-or-rising. No single-column cut can be avoided,
because the descent in row one involves the middle column itself.
```

### Example 2

```text
Input: strs = ["fed"]
Output: 2
Explanation: The lone word steps down at every turn. Any two kept
letters would still carry a descent between them, so all but one letter
has to go.
```

### Example 3

```text
Input: strs = ["coop","door"]
Output: 0
Explanation: Both words already read level-or-rising from left to right,
so no cut is needed. The rows ignore each other — "coop" happens to sort
below "door", but only each row's own reading counts.
```

### Constraints

- `n == strs.length`
- `1 <= n <= 100`
- `1 <= strs[i].length <= 100`
- Every character of `strs[i]` is a lowercase English letter.
