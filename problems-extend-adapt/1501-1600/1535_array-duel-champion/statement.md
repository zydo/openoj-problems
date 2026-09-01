# Array Duel Champion

## Description

An array `arr` of **distinct** integers and an integer `k` set up a
simple duel at the front of the array. Round after round, the two
leading values face off: the larger one keeps its place at the front,
the loser is banished to the back of the line. The first value to
stack up `k` consecutive wins is declared the champion, and the duel
ends at that moment.

Return the champion's value.

The input guarantees that a champion is reached.

### Example 1

```text
Input: arr = [7,3,9,1,8,2,6], k = 3
Output: 9
Explanation: The duel unfolds as follows:
  arr = [7,3,9,1,8,2,6], winner 7, streak 1
  arr = [7,9,1,8,2,6,3], winner 9, streak 1
  arr = [9,1,8,2,6,3,7], winner 9, streak 2
  arr = [9,8,2,6,3,7,1], winner 9, streak 3
After four rounds, 9 has taken three straight wins and is the champion.
```

### Example 2

```text
Input: arr = [1,25,35,42], k = 4
Output: 42
Explanation: 42 is the overall maximum — once it reaches the front
nothing can dethrone it, so it collects four straight wins.
```

### Example 3

```text
Input: arr = [12,30,24,45,11,38], k = 2
Output: 30
Explanation: 30 takes the front from 12 in the first round and holds
it against 24 in the second, reaching two consecutive wins
immediately.
```

### Constraints

- `2 <= arr.length <= 10⁵`
- `1 <= arr[i] <= 10⁶`
- `arr` contains distinct integers.
- `1 <= k <= 10⁹`

## Hints

### Hint 1

Once `k` reaches `arr.length - 1`, the largest value must end up the
champion — answer it directly and skip the simulation entirely.

### Hint 2

Below that threshold there is still no need to rotate the array: just
remember who currently holds the front and how many rounds in a row
that value has taken.
