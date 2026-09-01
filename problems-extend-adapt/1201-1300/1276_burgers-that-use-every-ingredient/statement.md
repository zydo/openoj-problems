# Burgers That Use Every Ingredient

## Description

A grill holds `tomatoSlices` tomato slices and `cheeseSlices` cheese
slices. Two recipes are on the menu:

- **Jumbo Burger**: uses `4` tomato slices and `1` cheese slice.
- **Small Burger**: uses `2` tomato slices and `1` cheese slice.

Cook some burgers — jumbo, small, or a mix — so that after cooking,
`tomatoSlices` and `cheeseSlices` both reach exactly zero. Return
`[total_jumbo, total_small]`, the number of each kind cooked. If no mix
consumes every ingredient exactly, return `[]`.

### Example 1

```text
Input: tomatoSlices = 22, cheeseSlices = 8
Output: [3,5]
Explanation: Three jumbo burgers and five small burgers consume
4*3 + 2*5 = 22 tomato slices and 3 + 5 = 8 cheese slices — nothing
left over.
```

### Example 2

```text
Input: tomatoSlices = 21, cheeseSlices = 10
Output: []
Explanation: Every burger consumes an even number of tomato slices, so
an odd total can never be used up.
```

### Example 3

```text
Input: tomatoSlices = 10, cheeseSlices = 2
Output: []
Explanation: Two cheese slices can anchor at most two burgers, which
eat at most 4*2 = 8 tomato slices — two tomato slices would remain.
```

### Constraints

- `0 <= tomatoSlices, cheeseSlices <= 10^7`

## Hints

### Hint 1

If the tomato count is odd, can any answer exist at all?

### Hint 2

When an answer does exist, is it unique, or could several mixes both
empty the grill?

### Hint 3

Name the counts `X` (jumbo) and `Y` (small) and write down what the
ingredients demand of them.

### Hint 4

The pair must satisfy `4X + 2Y = tomatoSlices` and `X + Y =
cheeseSlices` — two linear equations in two unknowns.
