# Spreading a Whisper at Meetings

## Description

An integer `n` tells you how many people there are, numbered `0`
through `n - 1`. A 0-indexed 2D integer array `meetings` follows, where
`meetings[i] = [xi, yi, timei]` says that person `xi` and person `yi`
met at moment `timei`. One person may sit in several meetings that share
the same moment. Last comes an integer `firstPerson`.

Person `0` starts out holding a whisper and passes it to person
`firstPerson` at moment `0`. From then on the whisper travels whenever a
meeting involves someone who already has it: formally, at each meeting,
if `xi` holds the whisper at `timei` they tell `yi`, and if `yi` holds
it they tell `xi`.

Passing is instantaneous — someone who just received the whisper may
turn around and pass it on in another meeting at that very same moment.

Return every person who holds the whisper once all meetings have
happened; the answer may come back in any order. So that the examples
below display deterministically, they list the holders in increasing
order.

### Example 1

```text
Input: n = 7, meetings = [[2,3,4],[3,6,4],[0,2,7],[4,5,9]], firstPerson = 2
Output: [0,2,3,6]
Explanation:
At moment 0, person 0 tells person 2.
At moment 4, person 2 meets person 3, and person 3 then passes the
whisper on to person 6 within that same moment.
At moment 7, persons 0 and 2 meet, but both already know.
At moment 9, persons 4 and 5 meet, and neither ever hears the whisper.
So persons 0, 2, 3 and 6 end up holding it.
```

### Example 2

```text
Input: n = 6, meetings = [[2,3,3],[0,1,3]], firstPerson = 1
Output: [0,1]
Explanation:
At moment 0, person 0 tells person 1.
At moment 3 there are two separate meetings: persons 2 and 3 meet but
neither knows the whisper, while person 0 confirms it with person 1.
So only persons 0 and 1 ever hold it.
```

### Example 3

```text
Input: n = 8, meetings = [[5,6,1],[6,7,1],[0,5,1],[1,2,4],[2,3,4],[3,4,4]], firstPerson = 6
Output: [0,5,6,7]
Explanation:
At moment 0, person 0 tells person 6.
At moment 1, person 6 meets person 5, person 5 meets person 7, and
person 0 meets person 5, so the whisper spreads across that whole
connected group instantly.
At moment 4, persons 1, 2, 3 and 4 hold their own meetings, and with
no knower among them the whisper never arrives.
So persons 0, 5, 6 and 7 finish with it.
```

### Example 4

```text
Input: n = 5, meetings = [[0,1,2],[1,2,2],[3,4,2]], firstPerson = 1
Output: [0,1,2]
Explanation:
At moment 0, person 0 tells person 1.
At moment 2, person 1 hands the whisper to person 2 at their meeting,
having just received it — while persons 3 and 4 meet in ignorance.
So persons 0, 1 and 2 hold it at the end.
```

### Constraints

- `2 <= n <= 10⁵`
- `1 <= meetings.length <= 10⁵`
- `meetings[i].length == 3`
- `0 <= xi, yi <= n - 1`
- `xi != yi`
- `1 <= timei <= 10⁵`
- `1 <= firstPerson <= n - 1`

## Hints

### Hint 1

Try viewing the meetings that share one moment as a small graph among
their attendees.

### Hint 2

Which structure lets you merge and question "who is in the know?"
quickly as the moments advance?

### Hint 3

Union-find handles it well: group each moment's attendees, keep only
the groups that contain someone who already had the whisper, and
discard the rest so nothing leaks through dark groups.
