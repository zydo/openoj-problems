# Most Pairs From Requirements and Capacities

## Description

You are given two integer lists. The first, `requirements`, states a level each
item demands; the second, `capacities`, states a level each item offers.

An item from the first list pairs with an item from the second when the offered
level is at least the demanded one — `requirements[i] <= capacities[j]`. Every
item may belong to at most one pair.

Return the largest number of pairs you can form.

### Example 1

```text
Input: requirements = [3,6,8], capacities = [7,2,5,9]
Output: 3
Explanation: Pair 3 with 5, 6 with 7, and 8 with 9. The offered 2 serves no
one, but the remaining capacities cover every requirement.
```

### Example 2

```text
Input: requirements = [2,2,2], capacities = [2]
Output: 1
Explanation: The single capacity satisfies any one of the three requirements,
and it can be spent only once.
```

### Example 3

```text
Input: requirements = [5,9], capacities = [6,6]
Output: 1
Explanation: 5 fits under either 6, but 9 exceeds both, so one requirement
goes unmet no matter how you pair.
```

### Constraints

- `1 <= requirements.length, capacities.length <= 10⁵`
- `1 <= requirements[i], capacities[j] <= 10⁹`

## Hints

### Hint 1

Put both lists in increasing order. Where does the natural pairing start?

### Hint 2

Walk the sorted lists together: give the smallest unmet requirement the
smallest capacity that covers it, or discard that capacity if it covers
nothing.

### Hint 3

When a capacity falls short of the smallest remaining requirement, no later
requirement can use it either — the requirements only grow from there.
