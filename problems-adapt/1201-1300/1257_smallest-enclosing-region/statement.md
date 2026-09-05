# Smallest Enclosing Region

## Description

A travel catalog records how territories nest inside one another. Every list
in `regions` names one territory followed by all the territories that lie
directly within it. Containment carries over transitively: if `x` directly
holds `y`, and `y` directly holds `z`, then `x` holds `z` as well — and
every territory is considered to hold itself.

Given two territories `region1` and `region2`, return the name of the
smallest territory that encloses both. The input guarantees such a
territory exists.

### Example 1

```text
Input:
regions = [["Aurelia","Northreach","Sunvale"],
["Northreach","Oldtown","Mistport"],
["Oldtown","Harborside"],
["Sunvale","Greenfield"]],
region1 = "Harborside",
region2 = "Greenfield"
Output: "Aurelia"
```

### Example 2

```text
Input: regions = [["Aurelia","Northreach","Sunvale"],["Northreach","Oldtown","Mistport"],["Oldtown","Harborside"],["Sunvale","Greenfield"]], region1 = "Oldtown", region2 = "Mistport"
Output: "Northreach"
```

### Example 3

```text
Input: regions = [["Aurelia","Northreach","Sunvale"],["Northreach","Oldtown","Mistport"],["Oldtown","Harborside"],["Sunvale","Greenfield"]], region1 = "Northreach", region2 = "Oldtown"
Output: "Northreach"
Explanation: A territory encloses itself, so the deeper of the two wins
when one contains the other.
```

### Constraints

- `2 <= regions.length <= 10^4`
- `2 <= regions[i].length <= 20`
- `1 <= regions[i][j].length, region1.length, region2.length <= 20`
- `region1 != region2`
- All names consist of English letters only.
- No territory is directly nested inside more than one other territory.
- The nesting is rooted: one territory encloses every other one, directly
  or indirectly.

## Hints

### Hint 1

Treat each territory as a node and "directly contains" as a parent-child
edge.

### Hint 2

Because nothing has two parents, the result is a tree rooted at the one
territory nobody contains.

### Hint 3

The answer is the lowest common ancestor of the two queried nodes — collect
the ancestors of one node, then walk up from the other until the paths
meet.
