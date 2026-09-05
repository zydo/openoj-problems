# Full Rounds in a Game Session

## Description

An arena hosts back-to-back matches, each exactly fifteen minutes long
and locked to the clock: the day's first match begins at `00:00`, and
every fifteen minutes after that the next one starts.

- For instance, the second match begins at `00:15`, the fourth at
  `00:45`, and the seventh at `01:30`.

A player's visit is described by two strings, `loginTime` and
`logoutTime`, both in 24-hour `hh:mm` form:

- `loginTime` is the moment the player enters the arena;
- `logoutTime` is the moment they leave it.

Whenever `logoutTime` falls before `loginTime`, the visit ran across
midnight — from `loginTime` up to the end of the day and from the start
of the next day to `logoutTime`.

A match counts as fully played only if the player was present for all of
it: it must begin no earlier than the login and finish no later than the
logout. Return how many matches the player completed in full.

**Note:** All times use the 24-hour clock, so the day's first match
begins at `00:00` and the last one at `23:45`.

### Example 1

```text
Input: loginTime = "12:01", logoutTime = "12:44"
Output: 1
Explanation: The player arrives one minute after the 12:00 match
opens, so that one is lost; the match from 12:15 to 12:30 is the only
one completed in full — the 12:30 match ends at 12:45, after the
player has already left.
```

### Example 2

```text
Input: loginTime = "08:00", logoutTime = "09:00"
Output: 4
Explanation: An exactly-one-hour visit catches the four matches that
start at 08:00, 08:15, 08:30, and 08:45.
```

### Example 3

```text
Input: loginTime = "23:50", logoutTime = "00:05"
Output: 0
Explanation: The visit crosses midnight and lasts fifteen minutes in
all, yet covers no match end to end — it begins ten minutes into the
23:45 match and ends ten minutes before the 00:00 match finishes.
```

### Constraints

- `loginTime` and `logoutTime` are given as `hh:mm`.
- `00 <= hh <= 23`
- `00 <= mm <= 59`
- The two times are never equal.

## Hints

### Hint 1

Nothing between the endpoints matters — only where they land relative
to the fifteen-minute grid. Converting each `hh:mm` to minutes past
midnight makes that comparison arithmetic.

### Hint 2

A match is fully played exactly when its start is at or after the
login and its end at or before the logout; count grid points in that
window, and let the logout run one extra day when the visit wraps
past midnight.
