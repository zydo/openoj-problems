# Arrange People by Height

## Description

You are given an array of strings `names` and an array `heights`, both of
length `n`. For every index `i`, `names[i]` and `heights[i]` describe the
name and height of the `i`-th person. All heights are distinct.

Return `names` sorted so that the people appear in descending order of
height — the tallest first.

### Example 1

```text
Input: names = ["Ada","Leo","Nia","Pia"], heights = [150,190,170,180]
Output: ["Leo","Pia","Nia","Ada"]
Explanation: Leo is the tallest (190), followed by Pia (180), Nia (170),
and Ada (150).
```

### Example 2

```text
Input: names = ["Zed","Abe"], heights = [2,1]
Output: ["Zed","Abe"]
Explanation: Zed at height 2 towers over Abe at height 1.
```

### Example 3

```text
Input: names = ["Sue","Ann","Eve"], heights = [160,180,170]
Output: ["Ann","Eve","Sue"]
Explanation: Ann (180) is tallest, then Eve (170), then Sue (160).
```

### Constraints

- `n == names.length == heights.length`
- `1 <= n <= 10³`
- `1 <= names[i].length <= 20`
- `1 <= heights[i] <= 10⁵`
- `names[i]` consists of lower and upper case English letters.
- All the values of `heights` are distinct.

## Hints

### Hint 1

The final order is a permutation of `names` decided entirely by `heights`:
the tallest person comes first, then the next tallest, and so on.

### Hint 2

Sort an array of indices by the height stored at each index with a
descending comparator; this keeps the `names[i] ↔ heights[i]` pairing
intact. Then read `names` in that sorted order.
