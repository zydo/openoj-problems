# First To A K-Game Streak

## Description

A tournament has `n` entrants indexed from `0` to `n - 1`, all waiting in a
single line that initially runs in index order.

Entrant `i` plays at strength `skills[i]`, where every value in `skills` is
distinct, and you are also given a positive integer `k`.

The tournament then repeats one step forever:

- The two entrants at the front of the line face off, and the entrant with
  the higher strength wins the match.
- The winner stays at the front of the line, and the loser is sent to the
  back of it.

The tournament ends as soon as some entrant has won `k` matches in a row.
Return that entrant's original index.

### Example 1

```text
Input: skills = [7,4,9,2,6], k = 2
Output: 2
Explanation: The line of entrants starts as [0,1,2,3,4]. The matches go:
Entrants 0 and 1 play; 7 beats 4, so entrant 0 stays and entrant 1 is
relegated, leaving [0,2,3,4,1].
Entrants 0 and 2 play; 9 beats 7, so entrant 2 takes over and entrant 0 is
relegated, leaving [2,3,4,1,0].
Entrants 2 and 3 play; 9 beats 2, giving entrant 2 a second straight win.
With k = 2 straight wins, entrant 2 is the answer.
```

### Example 2

```text
Input: skills = [3,8,5], k = 4
Output: 1
Explanation: The line starts as [0,1,2]. Entrant 1 (strength 8) beats
entrant 0, then beats entrant 2, then beats entrant 0 again, and then beats
entrant 2 again — four straight wins. No one can ever dethrone the strongest
entrant, so entrant 1 is the answer.
```

### Example 3

```text
Input: skills = [5,12,3,8], k = 1
Output: 1
Explanation: The very first match pits entrant 0 (strength 5) against
entrant 1 (strength 12). Entrant 1 wins immediately, and one win already
meets k = 1.
```

### Constraints

- `n == skills.length`
- `2 <= n <= 10⁵`
- `1 <= k <= 10⁹`
- `1 <= skills[i] <= 10⁶`
- All values in `skills` are distinct.

## Hints

### Hint 1

If `k` is at least `n`, only one entrant can possibly string together that
many wins. Which one, and why can nobody else?

### Hint 2

When `k < n`, just replay the matches. Losers go to the back, so challengers
reach the front in index order and no actual queue is required.
