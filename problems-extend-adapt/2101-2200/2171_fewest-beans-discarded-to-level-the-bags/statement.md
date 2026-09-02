# Fewest Beans Discarded to Level the Bags

## Description

A shelf holds several bags, and `beans[i]` counts the beans inside bag
`i`. You may take beans out of the bags as you see fit, and a bean that
has left its bag never goes back in. When you are done, every bag that
still holds at least one bean must hold exactly as many as every other
surviving bag — bags emptied completely drop out of the comparison
entirely.

Return the fewest beans you can discard while reaching that uniform
state.

### Example 1

```text
Input: beans = [3,2,3,4]
Output: 3
Explanation:
Empty the bag holding 2 beans and trim the bag holding 4 beans down to
3, leaving [3,0,3,3]. No plan discards fewer than 3 beans.
```

### Example 2

```text
Input: beans = [5,5,5]
Output: 0
Explanation:
The bags are already level, so nothing has to be removed.
```

### Example 3

```text
Input: beans = [10,4]
Output: 4
Explanation:
Emptying the smaller bag leaves a single surviving bag of 10, which is
trivially uniform, and discards only 4 beans — cheaper than trimming the
10-bag down to 4.
```

### Constraints

- `1 <= beans.length <= 10⁵`
- `1 <= beans[i] <= 10⁵`

## Hints

### Hint 1

The level the surviving bags share will be one of the counts already on
the shelf, so only those values are worth testing as the target.

### Hint 2

Fixing a target level m makes the cheapest plan obvious: bags below m are
emptied whole, and each bag above m gives up exactly what it has beyond
m.

### Hint 3

Sort the counts once; from sorted position i onward, every bag is kept at
the value found there, and a running grand total turns each candidate
into a single product and subtraction.

### Hint 4

The arithmetic can exceed 32 bits: a count of bags times a count of
beans per bag reaches 10¹⁰, so use a wider type in typed languages.
