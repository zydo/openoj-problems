# Looking Back Through Recents

## Description

An array `nums` holds positive integers mixed with `-1` markers. Every
marker asks the same question: look back through the positive integers
read so far and report the one the marker's depth in its run points at.

Sweep `nums` from left to right, keeping a list `seen` whose front is
always the most recently read positive integer, plus a run counter:

- Reading a positive integer places it at the front of `seen` and
  resets the counter to zero.
- Reading a `-1` grows the run: let `k` be how many `-1` markers have
  now appeared back to back, counting the current one. When `seen`
  holds at least `k` numbers, the marker's answer is its `k`-th entry —
  the `k`-th most recent positive integer. When `seen` is shorter than
  `k`, the answer is `-1`.

Return every marker's answer, in the order the markers occur.

### Example 1

```text
Input: nums = [5,-1,-1,7,-1]
Output: [5,-1,7]
Explanation: The 5 sits alone in seen = [5]. The first marker looks
back one position and reports 5; the second looks back two but only
one number exists, so it reports -1. The 7 then takes over the front
(seen = [7, 5]) and restarts the run, so the final marker reports 7.
```

### Example 2

```text
Input: nums = [-1]
Output: [-1]
Explanation: A marker arrives before any positive integer has been
read, leaving nothing to look back at.
```

### Example 3

```text
Input: nums = [3,1,-1,-1,-1,4,-1]
Output: [1,3,-1,4]
Explanation: After reading 3 and 1 the list is [1, 3]. The marker run
reports 1, then 3, then finds itself deeper than the list and reports
-1. The 4 resets the picture to [4, 1, 3], and the closing marker
reports 4.
```

### Constraints

- `1 <= nums.length <= 100`
- `nums[i] == -1 or 1 <= nums[i] <= 100`

## Hints

### Hint 1

Plain simulation is enough. Keep the positives with the newest at the
front, count consecutive markers, and either index that deep into the
list or fall back to `-1` when the list runs out.
