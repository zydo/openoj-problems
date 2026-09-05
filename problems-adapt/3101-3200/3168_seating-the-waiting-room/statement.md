# Seating The Waiting Room

## Description

A waiting room starts the day empty, and its door traffic is recorded as a
string `s` read one character per second:

- `'E'` — someone walks in and sits down, occupying one of the room's chairs.
- `'L'` — someone stands up and walks out, leaving one chair free.

Any chair freed by a departure can be reused by a later arrival, so chairs
only ever need to exist for people who are in the room at the same moment.

Return the smallest chair count that keeps every arrival seated at every
second.

### Example 1

```text
Input: s = "EELELLE"
Output: 2
Explanation: The room holds two people at once after the second arrival and
again after the fourth, and one departure always frees a seat before the
next arrival needs it.
```

### Example 2

```text
Input: s = "EEELLEL"
Output: 3
```

### Example 3

```text
Input: s = "ELEL"
Output: 1
```

### Constraints

- `1 <= s.length <= 50`
- `s` is made up only of the characters `'E'` and `'L'`.
- `s` describes a legal comings-and-goings log: nobody leaves a room they
  are not in.

## Hints

### Hint 1

Sweep the string once, carrying a counter of how many people are currently
inside: add one at every `'E'`, subtract one at every `'L'`.

### Hint 2

The counter's highest point over the whole sweep is exactly the number of
chairs required.
