# Shared Travel Days

## Description

Two colleagues each fly into the same city for separate meetings, and their
stays may overlap. Alice is present from `arriveAlice` through `leaveAlice`
(inclusive), and Bob from `arriveBob` through `leaveBob` (inclusive). Each
date is a five-character string `"MM-DD"` naming a month and a day within the
same calendar year, which is not a leap year, so the month lengths are
`[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]`.

Return how many days both of them are in the city at the same time.

### Example 1

```text
Input: arriveAlice = "07-01", leaveAlice = "07-20", arriveBob = "07-10", leaveBob = "07-15"
Output: 6
Explanation: Bob's stay of July 10-15 sits entirely inside Alice's of July
1-20, giving six shared days.
```

### Example 2

```text
Input: arriveAlice = "01-01", leaveAlice = "01-31", arriveBob = "02-01", leaveBob = "02-28"
Output: 0
Explanation: Alice leaves the day before Bob arrives, so their stays never
touch.
```

### Example 3

```text
Input: arriveAlice = "03-05", leaveAlice = "03-15", arriveBob = "03-15", leaveBob = "03-20"
Output: 1
Explanation: The only day both are present is March 15, the day Alice
departs and Bob arrives.
```

### Constraints

- All dates are given in the format `"MM-DD"`.
- For each traveler, the arrival date is no later than the departure date.
- Every date is valid in a non-leap year.

## Hints

### Hint 1

For a single day, decide whether Alice is present and whether Bob is
present.

### Hint 2

Convert each date to a day-of-year integer, then intersect the two stays.
