# Scoring The Pair Duels

## Description

You get the head of a linked list whose length is even. Values alternate by
position: every node sitting at an even index holds an even number, and
every node at an odd index holds an odd number.

Read the list two nodes at a time. The node at index 0 together with the
node at index 1 forms the first duel, the nodes at indices 2 and 3 form the
second, and so on down the list.

Each duel awards one point to a team:

- if the even-indexed value is the larger one, team "Even" scores;
- if the odd-indexed value is the larger one, team "Odd" scores.

Walk every duel, then report the name of the team that finished with more
points, or the string "Tie" when the two totals are level.

### Example 1

```text
Input: head = [8,3,6,9,2,7]
Output: "Odd"
Explanation:
The list holds three duels, decided one at a time:
(8,3) -> Since 8 > 3, team "Even" takes the point.
(6,9) -> Since 6 < 9, team "Odd" takes the point.
(2,7) -> Since 2 < 7, team "Odd" takes the point.
Team "Odd" closes with two points against one, so the answer is "Odd".
```

### Example 2

```text
Input: head = [4,1]
Output: "Even"
Explanation:
A single duel makes up the whole list, and 4 beats 1, handing the only
point to team "Even". Hence the answer is "Even".
```

### Example 3

```text
Input: head = [10,1,2,5]
Output: "Tie"
Explanation:
The two duels split the points:
(10,1) -> Since 10 > 1, team "Even" takes the point.
(2,5) -> Since 2 < 5, team "Odd" takes the point.
Both teams end on one point, so the answer is "Tie".
```

### Constraints

- The list contains between `2` and `100` nodes.
- The number of nodes is even.
- `1 <= Node.val <= 100`
- Every node at an odd index holds an odd value.
- Every node at an even index holds an even value.

## Hints

### Hint 1

Advance through the list two nodes per step so each stop lands on a whole
duel.

### Hint 2

Keep a running total of duels won for each of the two teams.

### Hint 3

Once the walk is done, the larger total names the winner, and level totals
mean the "Tie" result.
