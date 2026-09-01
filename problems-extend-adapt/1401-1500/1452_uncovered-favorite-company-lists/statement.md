# Uncovered Favorite-Company Lists

## Description

Person `i` (0-indexed) has `favoriteCompanies[i]`, a personal list of
favorite companies. Call a list covered when some other person's list
contains every company on it — that other fan likes a strict superset.

Collect the indices of every person whose list nobody else covers, in
increasing order.

### Example 1

```text
Input: favoriteCompanies = [["apple","tesla","figma"],["tesla","nvidia"],["tesla","figma"],["netflix"]]
Output: [0,1,3]
Explanation: Person 2's list ["tesla","figma"] is contained in person
0's ["apple","tesla","figma"], so person 2 is covered. The other three
lists sit inside no other list, leaving [0,1,3].
```

### Example 2

```text
Input: favoriteCompanies = [["cobalt","umber"],["umber","cobalt","ochre"]]
Output: [1]
Explanation: Both of person 0's picks appear in person 1's larger list,
so person 0 is covered and only person 1 remains.
```

### Example 3

```text
Input: favoriteCompanies = [["red"],["blue"],["green"]]
Output: [0,1,2]
Explanation: Every list is a singleton over a different company, so no
list can contain another and all three indices survive.
```

### Constraints

- `1 <= favoriteCompanies.length <= 100`
- `1 <= favoriteCompanies[i].length <= 500`
- `1 <= favoriteCompanies[i][j].length <= 20`
- All strings in `favoriteCompanies[i]` are distinct.
- All lists of favorite companies are pairwise distinct: sorting every
  list alphabetically never makes two of them equal.
- All strings consist of lowercase English letters only.

## Hints

### Hint 1

Turn each company name into a set entry (or an integer id) so that
containment checks become hash probes rather than string scans.

### Hint 2

Person `i` is covered exactly when some strictly larger list holds every
one of their companies; pairing that size shortcut with the pairwise
scan gives `O(n² · m)` overall.
