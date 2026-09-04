# Key-Card Watchlist

## Description

Every door in an office building is opened with a personal key-card, and
each use is logged: the card owner's name together with the moment the
door opened. Security wants a watchlist of anyone whose card activity
clusters suspiciously — three or more uses packed into a single hour.

The log arrives as two parallel arrays, `keyName` and `keyTime`: entry
`i` pairs the name `keyName[i]` with the swipe time `keyTime[i]`, and the
whole log covers one calendar day. Times use 24-hour `"HH:MM"` notation,
like `"23:51"` or `"09:49"`.

A worker belongs on the watchlist if some three of their swipes — not
necessarily consecutive ones — span at most 60 minutes from first to
last. So a run from `"10:00"` to `"11:00"` qualifies, while `"22:51"` to
`"23:52"`, sixty-one minutes apart, does not.

Return every watchlisted worker's name exactly once, in ascending
alphabetical order.

### Example 1

```text
Input: keyName = ["emma","emma","emma","ryan"], keyTime = ["09:00","09:59","10:00","11:00"]
Output: ["emma"]
Explanation: Emma's first three swipes run from "09:00" to "10:00", a
span of exactly 60 minutes, which still fits inside one hour. Ryan's lone
swipe puts him nowhere near the threshold.
```

### Example 2

```text
Input: keyName = ["zoe","adam","zoe","adam","zoe","adam"], keyTime = ["08:00","07:10","08:30","07:20","09:00","07:30"]
Output: ["adam","zoe"]
Explanation: Zoe's three uses stretch from "08:00" to "09:00" and Adam's
three from "07:10" to "07:30", so both land on the watchlist. The result
is reported alphabetically even though Zoe's swipes come first in the log.
```

### Example 3

```text
Input: keyName = ["mia","mia","mia","mia"], keyTime = ["10:00","10:30","11:01","11:20"]
Output: ["mia"]
Explanation: Mia's opening trio is too spread out — "10:00" to "11:01"
spans 61 minutes. But her last three swipes, "10:30" through "11:20",
span only 50 minutes, so she makes the watchlist after all.
```

### Constraints

- `1 <= keyName.length, keyTime.length <= 10^5`
- `keyName.length == keyTime.length`
- Every `keyTime[i]` is written in `"HH:MM"` form.
- Each `[keyName[i], keyTime[i]]` pair occurs at most once in the input.
- `1 <= keyName[i].length <= 10`
- `keyName[i]` consists only of lowercase English letters.

## Hints

### Hint 1

Pull each worker's times into their own list and sort those lists; the
log itself is unordered.

### Hint 2

Work in minutes since midnight so that comparing time spans becomes an
integer subtraction.
