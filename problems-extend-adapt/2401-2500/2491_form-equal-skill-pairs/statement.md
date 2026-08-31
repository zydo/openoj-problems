# Form Equal-Skill Pairs

## Description

You are given an array `skill` of even length `n`, where `skill[i]` is the
skill rating of player `i`.

Form `n / 2` teams of exactly two players each so that every team has the
same total skill (the sum of its two players' ratings).

The chemistry of a team is the product of the two ratings on it.

Return the sum of the chemistry of every team, or `-1` if the players
cannot be divided into equal-total teams at all.

### Example 1

```text
Input: skill = [4,3,6,5]
Output: 38
Explanation: Pair (3, 6) and (4, 5); each team totals 9. The chemistry
sum is 3 * 6 + 4 * 5 = 18 + 20 = 38.
```

### Example 2

```text
Input: skill = [1,9,2,8,3,7]
Output: 46
Explanation: The three teams (1, 9), (2, 8), and (3, 7) each total 10,
giving 1 * 9 + 2 * 8 + 3 * 7 = 9 + 16 + 21 = 46.
```

### Example 3

```text
Input: skill = [1,1,1,5]
Output: -1
Explanation: The total skill is 8, which would need each of the two teams
to reach 4, but 5 cannot be paired with any value that sums to 4.
```

### Constraints

- `2 <= skill.length <= 10⁵`
- `skill.length` is even.
- `1 <= skill[i] <= 1000`

## Hints

### Hint 1

Every team reaches the same total, so that total is forced: the whole sum
divided by the number of teams. If it does not divide evenly, no pairing
is possible.

### Hint 2

After sorting, the weakest remaining player and the strongest remaining
player must be partners. Check their sum against the target and, when it
matches, multiply for the chemistry and move inward.
