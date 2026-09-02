# Classify The Triangle

## Description

Three positive numbers arrive as the entries of `nums`, a 0-indexed array
holding exactly three side lengths. Decide what those lengths build. A
triple whose lengths are all equal forms an equilateral triangle; a triple
with exactly two of its three lengths equal forms an isosceles triangle;
and a triple of pairwise different lengths forms a scalene triangle.

Not every triple of positive numbers bends into a triangle at all: each
side must be strictly shorter than the other two combined. If the lengths
in `nums` fail that test, no triangle exists. Report the outcome as a
string — `"equilateral"`, `"isosceles"`, or `"scalene"` for a valid
triangle, and `"none"` when the three lengths cannot form one.

### Example 1

```text
Input: nums = [5,12,13]
Output: "scalene"
Explanation: Every side is strictly shorter than the other two combined
(5 + 12 = 17 > 13, and so on), so a triangle exists, and all three
lengths differ, so it is scalene.
```

### Example 2

```text
Input: nums = [4,4,4]
Output: "equilateral"
Explanation: The triangle is valid and all three sides match, so it is
equilateral.
```

### Example 3

```text
Input: nums = [2,2,5]
Output: "none"
Explanation: The two short sides together give 2 + 2 = 4, which is not
greater than the remaining side 5, so these lengths lie flat and cannot
form a triangle.
```

### Constraints

- `nums.length == 3`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Validity first: the triple forms a triangle exactly when the two shorter
sides sum to strictly more than the longest one (checking all three
pair-sums is equivalent).

### Hint 2

Once the triangle is valid, its type is decided purely by how many of the
three lengths coincide — count the distinct lengths and map one, two, and
three distinct values to equilateral, isosceles, and scalene.
