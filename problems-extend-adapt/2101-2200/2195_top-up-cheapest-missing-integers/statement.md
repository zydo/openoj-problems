# Top Up The Cheapest Missing Integers

## Description

You are given an integer array `nums` and an integer `k`. Grow `nums` by
attaching `k` brand-new positive integers to it: every attached integer
must be a positive integer that appears nowhere in `nums`, and no two of
the attached integers may be equal. Among all legal ways to make the
attachment, you want the one whose final total — the sum of everything in
the grown array — is as small as possible.

Return the sum of the `k` integers you attached.

### Example 1

```text
Input: nums = [3,7,2,8], k = 4
Output: 16
Explanation: The cheapest fresh picks are 1, 4, 5 and 6 — the free run of
numbers between 3 and 7. They sum to 1 + 4 + 5 + 6 = 16, and no other
legal attachment costs less.
```

### Example 2

```text
Input: nums = [10,20,10,20], k = 3
Output: 6
Explanation: Only 10 and 20 are off limits, so the three cheapest unused
positives are 1, 2 and 3, which together sum to 6.
```

### Example 3

```text
Input: nums = [4,5,6], k = 5
Output: 21
Explanation: The openings below the existing values supply 1, 2 and 3;
the final two picks spill past the end and land on 7 and 8. All told,
1 + 2 + 3 + 7 + 8 = 21.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= 10⁸`

## Hints

### Hint 1

Skipping an available small number never pays: if an unused positive `x`
is cheaper than one of your picks `y`, exchanging `y` for `x` cannot raise
the total. The optimal attachment is exactly the `k` smallest positives
that `nums` does not contain.

### Hint 2

Sort the distinct values of `nums`. Between consecutive kept values lies
a block of consecutive free integers, and a block of consecutive integers
has a closed-form sum — you can lift an entire block in one step rather
than visiting each of its members.

### Hint 3

Walk the sorted distinct values, taking whole gaps between them until `k`
is used up, and let whatever is still owed spill into the consecutive run
just past the largest value.
