# Supplier with the Least Spare Room

## Description

You are shipping `n` packages, one package per box, and `m` suppliers
are competing for the business. Supplier `j` sells boxes in the sizes
listed by `boxes[j]` — every size in unlimited quantity — and a package
fits a box only when its size does not exceed the box's size.

Package sizes arrive as the integer array `packages`, where
`packages[i]` is the size of the `i`th package. Every box that goes out
the door carries some _spare room_: the box's size minus the size of the
package inside it. For instance, packages of sizes `[3,4,7]` can ride in
a supplier's boxes of sizes `[5,9]` by pairing the two small packages
with size-5 boxes and the large one with a size-9 box, leaving
`(5-3) + (5-4) + (9-7) = 5` units of spare room in total.

Contract with exactly one supplier and box every package with their
sizes so that the total spare room across all used boxes is as small as
possible. Return that minimum total, or `-1` if no single supplier can
box every package. The answer can be enormous, so report it modulo
`10⁹ + 7`.

### Example 1

```text
Input: packages = [4,7,9], boxes = [[6,10],[5,8,10]]
Output: 3
Explanation: The second supplier is the tight fit: sizes 4, 7, and 9
ride in boxes of sizes 5, 8, and 10, leaving
(5-4) + (8-7) + (10-9) = 3. The first supplier would leave 6.
```

### Example 2

```text
Input: packages = [3,6], boxes = [[4],[2,5]]
Output: -1
Explanation: The size-6 package exceeds every box either supplier sells.
```

### Example 3

```text
Input: packages = [5,12,3,9], boxes = [[7,13],[6,10,12],[4]]
Output: 5
Explanation: The middle supplier leaves (6-3) + (6-5) + (10-9) +
(12-12) = 5. The first supplier would leave 11, and the last supplier's
size-4 boxes cannot hold half the order.
```

### Constraints

- `n == packages.length`
- `m == boxes.length`
- `1 <= n <= 10⁵`
- `1 <= m <= 10⁵`
- `1 <= packages[i] <= 10⁵`
- `1 <= boxes[j].length <= 10⁵`
- `1 <= boxes[j][k] <= 10⁵`
- `sum(boxes[j].length) <= 10⁵`
- The sizes inside any one `boxes[j]` are distinct.

## Hints

### Hint 1

For a fixed supplier nothing beats giving each package its smallest
fitting box size, so scoring that supplier reduces to counting, per box
size, how many packages land there and how big they are together.

### Hint 2

Sort the packages once and carry prefix sums; then each box size's
contribution is a single binary search away.
