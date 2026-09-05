# Queueing at the Turnstile

## Description

A turnstile separates `n` people, numbered `0` through `n - 1`; each
person passes through it exactly once, and a pass takes one second.

You are given a non-decreasing array `arrival` of size `n`, where
`arrival[i]` is the second person `i` reaches the turnstile, and an
array `state` of the same size, where `state[i]` is `0` when person `i`
means to pass inward and `1` when they mean to pass outward.

When several people are at the turnstile during the same second, this
order decides who goes:

- If the turnstile sat idle during the previous second, outward traffic
  has the right of way.
- If it was used for passing inward during the previous second, inward
  traffic keeps the right of way.
- If it was used for passing outward during the previous second, outward
  traffic keeps the right of way.
- Among people bound the same way, the smallest index goes first.

Return an array `answer` of size `n` where `answer[i]` is the second at
which person `i` passes through.

Keep in mind:

- At most one person passes through in any given second.
- A person who has arrived may keep waiting while others go first, as
  the rules above require.

### Example 1

```text
Input: arrival = [0,1,1,3], state = [1,0,1,0]
Output: [0,2,1,3]
Explanation:
- Second 0: person 0 alone wants out, so they pass right away.
- Second 1: person 1 is headed in and person 2 out; the turnstile was
  used for passing outward, so person 2 goes.
- Second 2: person 1 is the only one waiting now, so they pass inward.
- Second 3: person 3 arrives wanting out and passes alone.
```

### Example 2

```text
Input: arrival = [0,0,0,0], state = [0,0,1,1]
Output: [2,3,0,1]
Explanation:
- Second 0: two people want out and one in; the idle turnstile favors
  outward, and person 2 has the smaller index, so person 2 goes.
- Second 1: outward keeps the right of way, so person 3 goes.
- Second 2: only inward traffic remains; person 0 goes.
- Second 3: person 1 goes.
```

### Example 3

```text
Input: arrival = [0,2,2], state = [0,1,0]
Output: [0,2,3]
Explanation: Person 0 passes inward at second 0. At second 2 person 1
(wanting out) and person 2 (wanting in) clash; the turnstile was idle
the second before, so outward wins and person 1 goes, leaving person 2
to pass at second 3.
```

### Constraints

- `n == arrival.length == state.length`
- `1 <= n <= 10⁵`
- `0 <= arrival[i] <= n`
- `arrival` is sorted in non-decreasing order.
- `state[i]` is either `0` or `1`.

## Hints

### Hint 1

Keep two waiting lines — one per direction — and remember which way the
turnstile last moved.

### Hint 2

Sweep second by second, admit at most one person per second under the
four rules, and when both lines run dry jump the clock straight to the
next arrival instead of ticking every second.
