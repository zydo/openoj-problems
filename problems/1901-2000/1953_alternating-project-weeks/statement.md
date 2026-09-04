# Alternating Project Weeks

## Description

You are juggling `n` projects, and the array `milestones` says how many
milestones each one still holds: `milestones[i]` is the count for project
`i`. Work proceeds one milestone at a time under two rules:

- Each week you complete exactly one milestone belonging to a single
  project of your choice, and you cannot take a week off.
- Two weeks in a row may never be spent on the same project.

You stop once every milestone is done, or as soon as the only milestone
left to touch would break the second rule — which can happen before the
work is finished. Return the largest number of weeks of work reachable
while respecting both rules.

### Example 1

```text
Input: milestones = [2,3,1]
Output: 6
Explanation: The order 1, 0, 1, 2, 1, 0 (project numbers, week by week)
never repeats a project in adjacent weeks and clears all six milestones.
```

### Example 2

```text
Input: milestones = [4,1]
Output: 3
Explanation: The project with four milestones must be broken up by the
lone milestone of the other project: 0, 1, 0. A fourth week would have to
spend project 0 twice in a row, so one of its milestones stays unfinished.
```

### Constraints

- `n == milestones.length`
- `1 <= n <= 10⁵`
- `1 <= milestones[i] <= 10⁹`

## Hints

### Hint 1

Think of the other projects' milestones as separators that keep the
largest project's milestones from touching.

### Hint 2

Only the largest count can cap the answer: compare it against everything
else combined.
