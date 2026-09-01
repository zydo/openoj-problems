# Stone Pile Standoff

## Description

Alice and Bob face a row of piles of stones and take turns, with Alice
moving first. On a turn, the player picks any pile that still holds
stones and removes from it as many stones as they like — at least one,
possibly the whole pile. A player with no stones left to take has no
move, loses, and their opponent wins.

Both players play perfectly — each always steers toward the outcome
that guarantees their own win.

Given the integer array `piles`, where `piles[i]` is the number of
stones in the `i`th pile, return `true` if Alice wins the standoff and
`false` if Bob does.

### Example 1

```text
Input: piles = [2]
Output: true
Explanation: Alice takes both stones on her first turn, leaving Bob
with nothing to remove.
```

### Example 2

```text
Input: piles = [3,4,7]
Output: false
Explanation: Bob can always answer in a way that keeps the position
balanced for him. If Alice opens by taking one stone from the middle
pile ([3,3,7]), Bob replies by emptying the last pile ([3,3,0]); from
there he simply copies, pile for pile, whatever Alice removes.
```

### Example 3

```text
Input: piles = [1,4,3]
Output: true
Explanation: Alice takes two stones from the 4-pile, leaving
[1,2,3] — a losing position for whoever must move next — and then
answers Bob the same way.
```

### Constraints

- `n == piles.length`
- `1 <= n <= 7`
- `1 <= piles[i] <= 7`

### Follow-up

Can you decide the winner in a single pass over `piles`, without
exploring the game tree at all?

## Hints

### Hint 1

The state space is tiny — at most `8⁷` positions — so a full search
over moves, memoized on the multiset of remaining pile sizes, settles
every input.

### Hint 2

Experiment with the XOR of all pile sizes. Starting from a position
where that XOR is zero, what does every possible move do to it? And
from a position where it is nonzero, is some move always able to
bring it back to zero?
