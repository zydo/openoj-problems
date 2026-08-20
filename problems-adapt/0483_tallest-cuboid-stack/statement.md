# Tallest Cuboid Stack

## Description

You hold `n` cuboids, the `i`th measuring `cuboids[i] = [width_i,
length_i, height_i]`. Pick some of them and build one pile.

Cuboid `i` may rest directly on cuboid `j` when its footprint and height
stay within the one below: `width_i <= width_j`, `length_i <= length_j`
and `height_i <= height_j`. Before placing a cuboid you may turn it any
way you like, so its three measurements can fill the three roles in any
order.

Return the greatest total height any legal pile can reach.

### Example 1

```text
Input: cuboids = [[20,40,10],[50,20,30],[40,60,30]]
Output: 150
Explanation: Turn every cuboid largest-measure-up. Their sorted
measurements are [10,20,40], [20,30,50] and [30,40,60], each fitting
inside the next, so all three pile up: 40 + 50 + 60 = 150.
```

### Example 2

```text
Input: cuboids = [[45,12,30],[9,62,18]]
Output: 62
Explanation: No orientation lets either cuboid rest on the other, so the
best pile is a lone cuboid: stand the second one on its 18x9 end and it
measures 62 tall.
```

### Example 3

```text
Input: cuboids = [[15,9,12],[15,12,9],[9,15,12],[9,12,15],[12,15,9],[12,9,15]]
Output: 90
Explanation: Every cuboid carries the same three measurements, so each
can be turned to 15 tall on a 12x9 footprint. All six stack: 6 * 15 = 90.
```

### Constraints

- `n == cuboids.length`
- `1 <= n <= 100`
- `1 <= width_i, length_i, height_i <= 100`

## Hints

### Hint 1

Free rotation means a cuboid's three measurements can appear in any
order. That freedom is easier to use once every cuboid is put into one
canonical orientation.

### Hint 2

Standing each cuboid on its smallest face — largest measure pointing up
— is never worse: that orientation is at once the tallest available and
the easiest to seat on others.

### Hint 3

With each cuboid's measurements sorted internally, order the cuboids
themselves by those sorted triples and run a chain-style DP: the tallest
pile ending at each cuboid, resting on the best earlier cuboid it fits
upon.
