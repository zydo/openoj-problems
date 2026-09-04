# Values Each List Holds Alone

## Description

You are given two integer arrays, `nums1` and `nums2`. Build an `answer`
with exactly two entries:

- `answer[0]` lists every distinct value that occurs in `nums1` but in no
  position of `nums2`.
- `answer[1]` lists every distinct value that occurs in `nums2` but in no
  position of `nums1`.

Values may be reported in any order in principle; to keep judging exact,
return both lists sorted ascending.

### Example 1

```text
Input: nums1 = [4,9,4,2], nums2 = [9,7,9]
Output: [[2,4],[7]]
Explanation:
The distinct values of nums1 are 2, 4, and 9; only 9 also appears in
nums2, leaving 2 and 4 for answer[0]. The distinct values of nums2 are
7 and 9; 9 appears in nums1, so answer[1] holds just 7.
```

### Example 2

```text
Input: nums1 = [-5,0,-5], nums2 = [0]
Output: [[-5],[]]
Explanation:
Only -5 occurs in nums1 and not in nums2, reported once despite its two
occurrences. Every value in nums2 also occurs in nums1, so answer[1] is
empty.
```

### Example 3

```text
Input: nums1 = [1,2], nums2 = [3,4]
Output: [[1,2],[3,4]]
Explanation:
The two lists share nothing, so each side's full distinct set is the
other's complement.
```

### Example 4

```text
Input: nums1 = [6,6,6], nums2 = [6]
Output: [[],[]]
Explanation:
Both lists reduce to the single value 6, which each contains, so neither
list contributes anything.
```

### Constraints

- `1 <= nums1.length, nums2.length <= 1000`
- `-1000 <= nums1[i], nums2[i] <= 1000`

## Hints

### Hint 1

Membership tests against one array are quick if you first collapse the
other array into a lookup structure.

### Hint 2

Build a value set for each array separately, then compare the two sets —
each difference is one of the answers.
