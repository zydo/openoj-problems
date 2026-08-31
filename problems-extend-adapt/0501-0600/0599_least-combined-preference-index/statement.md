# Least Combined Preference Index

## Description

Two people each ranked their favorite picks as arrays of strings,
`list1` and `list2`, from most to least preferred. Within a single
person's list every pick is distinct.

A pick is _shared_ when it shows up in both lists. For a shared pick
sitting at position `i` of `list1` and position `j` of `list2`, define
its _preference index_ as `i + j` — the smaller the index, the higher
both people rank it together.

Return every shared pick whose preference index is the smallest among
all shared picks, listed in the order those picks appear in `list2`.

### Example 1

```text
Input: list1 = ["Maple Bistro","Golden Wok","Riverside Deli","Sunset Diner"], list2 = ["Blue Ocean Grill","Pixel Cafe","Lakeview Tavern","Maple Bistro"]
Output: ["Maple Bistro"]
Explanation: "Maple Bistro" is the only pick that appears on both lists.
```

### Example 2

```text
Input: list1 = ["Maple Bistro","Golden Wok","Riverside Deli","Sunset Diner"], list2 = ["Sunset Diner","Maple Bistro","Golden Wok"]
Output: ["Maple Bistro"]
Explanation: "Maple Bistro" has preference index (0 + 1) = 1, the smallest
among the three shared picks.
```

### Example 3

```text
Input: list1 = ["joy","calm","rest"], list2 = ["calm","joy","rest"]
Output: ["calm","joy"]
Explanation: All three picks are shared. "calm" has index (1 + 0) = 1,
"joy" has index (0 + 1) = 1, and "rest" has index (2 + 2) = 4. "calm" and
"joy" tie for the smallest index, and "calm" is listed first because it
comes first in list2.
```

### Constraints

- `1 <= list1.length, list2.length <= 1000`
- `1 <= list1[i].length, list2[i].length <= 30`
- `list1[i]` and `list2[i]` consist of spaces `' '` and English letters.
- All the strings of `list1` are unique.
- All the strings of `list2` are unique.
- `list1` and `list2` share at least one string.
