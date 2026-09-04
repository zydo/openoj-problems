# The Endpoint Alice Spares

## Description

You are given an integer array `nums`. Alice and Bob play a removal game on
it, Alice moving first. On a turn, the player picks any contiguous stretch
of the current array that is strictly shorter than the array itself,
deletes it, and closes up the gap. The game ends the moment a single
element is left.

Alice wants that last element to be as large as she can force; Bob wants it
as small as he can force. Playing perfectly, which value survives? Return
it.

### Example 1

```text
Input: nums = [8,2]
Output: 8
Explanation: Alice deletes the stretch [2], which is shorter than the
whole array, leaving [8]. The game is over and the survivor is 8.
```

### Example 2

```text
Input: nums = [4,9,3,7]
Output: 7
Explanation: Alice deletes the leading stretch [4,9,3] and the game ends
on [7]. The tempting 9 in the middle is out of reach: one move can only
carve off one contiguous stretch, so whatever it leaves still carries an
original endpoint, and ending the game on the left would leave her just 4.
Between the endpoints 4 and 7 she keeps 7.
```

### Example 3

```text
Input: nums = [6,1,5,2,9]
Output: 9
Explanation: Alice deletes everything except the final 9. Settling for the
left endpoint would give her only 6, and leaving the move to Bob only lets
him take the smaller side.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

One move may delete up to all but one element, so whoever moves can end
the game immediately — and chooses which end survives.

### Hint 2

No single move can strand an interior element: after one deletion what is
left is a prefix glued to a suffix, and every end of that remainder is an
original endpoint of `nums`.

### Hint 3

So the whole game is Alice's first move: she ends it on the spot and spares
`max(nums[0], nums[n - 1])`.
