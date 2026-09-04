# Employees With Login Bursts

## Description

A shared build server keeps one sign-in log for a single day. You are
given `logins`, a list of records where each record is a pair of strings:
`logins[i][0]` names an employee and `logins[i][1]` is the moment that
employee signed in, written as four digits in 24-hour form, such as
`"0805"` or `"2210"`.

Every record refers to the same calendar day.

An employee is bursty when three or more of their sign-ins fall inside
one stretch of an hour. Two stamps exactly 60 minutes apart never share a
stretch: `"0815"` and `"0915"` cannot both belong to the same hour. The
day does not wrap around either, so `"0007"` just after midnight and
`"2358"` just before it are as far apart as they look.

Return the names of every bursty employee, in whatever order you like.

### Example 1

```text
Input: logins = [["amy","0901"],["bob","1200"],["amy","0930"],["bob","1215"],["amy","0959"]]
Output: ["amy"]
Explanation: amy signs in at 09:01, 09:30, and 09:59 — all within the
one-hour stretch starting at 09:01, so she is bursty. bob signs in only
twice all day and can never reach three.
```

### Example 2

```text
Input: logins = [["kai","0800"],["kai","0830"],["kai","0900"]]
Output: []
Explanation: kai does sign in three times, but the earliest and latest
stamps are exactly 60 minutes apart, and an hour-wide stretch is not
enough to hold them together. So nobody is bursty.
```

### Example 3

```text
Input: logins = [["ee","2310"],["ff","2310"],["ee","2345"],["ff","1100"],["ee","2359"],["ff","1141"],["ff","1159"]]
Output: ["ee","ff"]
Explanation: ee's stamps 23:10, 23:45, and 23:59 fit inside one hour,
and so do ff's 11:00, 11:41, and 11:59. Both employees are bursty.
```

### Constraints

- `1 <= logins.length <= 100`
- Each record holds exactly two strings.
- `1 <= logins[i][0].length <= 10`
- `logins[i][0]` consists of lowercase English letters only.
- `logins[i][1]` has length 4, consists only of the digits `'0'` through
  `'9'`, and is a valid 24-hour time.

## Hints

### Hint 1

Treat each `"HHMM"` stamp as `60 * HH + MM` minutes, bucket the stamps by
employee, and sort every bucket.

### Hint 2

Once a bucket is sorted, the employee is bursty exactly when some two
stamps two positions apart are strictly less than 60 minutes away from
each other — any qualifying triple can be shrunk to three consecutive
stamps.
