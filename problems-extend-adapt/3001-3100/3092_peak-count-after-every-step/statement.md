# Peak Count After Every Step

## Description

A collection of IDs is rebuilt one step at a time. You are given two
integer arrays, `nums` and `freq`, both of length `n`. Step `i` adjusts
the ID `nums[i]`:

- When `freq[i]` is positive, `freq[i]` copies of that ID are added to
  the collection.
- When `freq[i]` is negative, `-freq[i]` copies of that ID are removed
  from it.

Return an array `ans` of length `n` in which `ans[i]` is the size of the
largest ID group once step `i` has been applied. A step that leaves the
collection empty reports 0.

### Example 1

```text
Input: nums = [4,7,4,7], freq = [2,1,1,-1]
Output: [2,2,3,3]
Explanation:
Step 0 puts two copies of ID 4 in, so the top count is 2.
Step 1 adds one copy of ID 7; the counts are now 2 and 1, top 2.
Step 2 lifts ID 4 to three copies, top 3.
Step 3 takes one copy of ID 7 out; only ID 4's three copies remain, top 3.
```

### Example 2

```text
Input: nums = [9,9,1], freq = [3,-3,2]
Output: [3,0,2]
Explanation: three copies of ID 9 arrive, then all three leave and the
collection is momentarily empty, then two copies of ID 1 arrive.
```

### Example 3

```text
Input: nums = [6,6,6], freq = [1,-1,4]
Output: [1,0,4]
Explanation: one copy arrives, is taken back out, and then four fresh
copies land at once.
```

### Constraints

- `1 <= nums.length == freq.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `-10⁵ <= freq[i] <= 10⁵`
- `freq[i] != 0`
- The input guarantees no ID's count ever drops below zero.

## Hints

### Hint 1

A single step moves a single ID's count, so the full multiset of counts
never has to be rebuilt from scratch.

### Hint 2

Track each ID's live count in a hash map, and drop a (count, id)
snapshot onto a max-heap every time that count moves.

### Hint 3

A heap snapshot stays valid exactly while it still equals the live
count, so before reading the top, discard entries that no longer match.
Counts can reach 10¹⁰, so use 64-bit arithmetic.
