# Making The Most Values Match

## Description

You are given a 0-indexed array `nums` and a non-negative integer `k`.

A single operation works like this:

- Pick an index `i` from `[0, nums.length - 1]` that no previous
  operation has touched.
- Swap `nums[i]` for any integer inside `[nums[i] - k, nums[i] + k]`.

You may run as many operations as you like, but each index participates
at most once.

Call the array's _match count_ the length of its longest subsequence
made up of one repeated value. Return the largest match count `nums`
can reach.

Note: a subsequence is formed by deleting any number of elements —
possibly zero — while keeping the order of whatever remains.

### Example 1

```text
Input: nums = [4,10,7,1,8], k = 2
Output: 3
Explanation: Push the 7 up to 8 (its reach [5,9] covers 8), leave the
8 alone, and pull the 10 down to 8 (its reach [8,12] covers 8). The
array now holds three 8s, so the match count is 3. Four elements can
never agree: any four values made equal must start within 2k = 4 of
each other, and no four of the values 1, 4, 7, 8, 10 fit that span.
```

### Example 2

```text
Input: nums = [6,6,6], k = 0
Output: 3
Explanation: With k = 0 nothing can move, but the array already reads
as three equal values — the whole array matches, giving 3.
```

### Example 3

```text
Input: nums = [2,9], k = 3
Output: 1
Explanation: The 2 can roam only [-1,5] and the 9 only [6,12]; those
ranges never meet, so the two values can never be driven together and
the answer is 1.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i], k <= 10⁵`

### Hint 1

One operation — or none — leaves every element somewhere inside
`[v - k, v + k]`, and a touched index never moves again. So a set of
elements can be made equal exactly when their windows share a value;
for a pair that reads simply as a difference of at most `2k`.

### Hint 2

Sort the values. In sorted order the extremes of a candidate group
bound every pair inside it, so the question narrows to the widest
stretch whose end-to-end difference is at most `2 * k` — and a sliding
window over the sorted array finds that stretch in one pass.
