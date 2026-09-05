# Counting Agreeable Group Sizes

## Description

A class has `n` students, and a 0-indexed integer array `nums` of length
`n` describes them. The teacher is about to pick some subset of the
students to form a group, and wants the pick to leave everyone content.

Student `i` is content in exactly one of two situations:

- They are in the group and the group's size is strictly greater than
  `nums[i]`, or
- They are left out and the group's size is strictly less than `nums[i]`.

Count the subsets for which every student is content. Return that count —
note that what matters is which group sizes are achievable, not which
particular students fill them.

### Example 1

```text
Input: nums = [2,2,2]
Output: 2
Explanation: Only two sizes work: an empty group, or the group of all
three students. A group of one or two leaves someone discontent, since
each student insists on either staying out or being joined by more than
two others.
```

### Example 2

```text
Input: nums = [1,3,1,3]
Output: 3
Explanation: The three working picks are: nobody at all; exactly the two
students whose nums value is 1 (a group of two); or all four students.
```

### Example 3

```text
Input: nums = [0,1,2,3]
Output: 1
Explanation: The values force a strict nesting — the only agreeable pick
is the group of all four students.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] < nums.length`

## Hints

### Hint 1

Once a student with `nums[i] = x` joins the group, every student whose
value is below `x` has no choice but to join as well.

### Hint 2

Symmetrically, leaving out a student with `nums[i] = x` forces every
student with value `x` or higher to stay out too.

### Hint 3

Sort the values, then walk each candidate group size from `0` through
`n` and check which sizes the forced selections permit.
