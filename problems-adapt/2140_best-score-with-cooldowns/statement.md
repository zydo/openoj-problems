# Best Score With Cooldowns

## Description

You are given a 0-indexed 2D integer array `questions` in which
`questions[i] = [points_i, cooldown_i]` describes the `i`-th question of an
exam taken strictly in order from question `0` onward.

At every question you face, one of two things happens:

- **Solve it.** You bank `points_i`, but the effort leaves you unable to solve
  any of the next `cooldown_i` questions.
- **Skip it.** Nothing is banked, and you move on to face the very next
  question.

For instance, with `questions = [[6,2],[5,3],[5,4],[4,5]]`, solving question
`0` banks 6 points and bars questions `1` and `2`; skipping it and solving
question `1` instead banks 5 points and bars questions `2` and `3`.

Return the highest total you can bank on the exam.

### Example 1

```text
Input: questions = [[6,2],[5,3],[5,4],[4,5]]
Output: 10
Explanation: Solve questions 0 and 3. Solving question 0 banks 6 and bars 1
and 2; question 3 is the first one you may face again, and solving it banks
4 more. Every alternative holds at most one of the two 5-point questions plus
question 3, which never reaches 10.
```

### Example 2

```text
Input: questions = [[2,1],[4,2],[6,3],[8,4],[10,5]]
Output: 14
Explanation: Skip question 0, solve question 1 for 4 points (barring 2 and
3), then solve question 4 for 10. Chasing the earlier questions instead caps
you below 14.
```

### Example 3

```text
Input: questions = [[7,3]]
Output: 7
Explanation: With one question, solve it. The cooldown has nothing left to
bar.
```

### Constraints

- `1 <= questions.length <= 10^5`
- `questions[i].length == 2`
- `1 <= points_i, cooldown_i <= 10^5`

## Hints

### Hint 1

Facing question `i`, your two options lead to futures that depend only on
where you stand next — never on how you got there. What quantity, defined per
starting question, would make the choice a one-line comparison?

### Hint 2

Let `dp[i]` be the best total starting at question `i`, with `dp[n] = 0` past
the end. Which entries must be filled first?

### Hint 3

Skipping copies the neighbor: `dp[i]` is at least `dp[i + 1]`.

### Hint 4

Solving banks `points_i` plus the entry sitting one past the cooldown — and a
jump beyond the table reads the zero sentinel.
