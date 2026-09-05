# Write The Roman Numeral

## Description

Seven symbols carry Roman numerals:

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

A numeral is written place by place, from the highest decimal place down to
the units, and each place is spelled on its own:

- A place whose digit is 1–3 or 5–8 is spelled with that place's own symbols:
  the 5-symbol once if the digit is 5 or more, followed by the 1-symbol
  repeated for the remainder. The 1-symbol may repeat at most three times, and
  the 5-symbol never repeats.
- A digit of 4 or 9 takes the subtractive shape instead: the 1-symbol of the
  place in front of the next symbol up. Exactly six subtractive shapes exist —
  IV, IX, XL, XC, CD, and CM for 4, 9, 40, 90, 400, and 900. A 4 belongs to
  its own place, never borrowed across places: 40 is XL, but 49 is XLIX,
  since 4 and 9 are decided in their places separately.

Given an integer `num` between 1 and 3999, return its Roman numeral.

### Example 1

```text
Input: num = 2461
Output: "MMCDLXI"
Explanation:
2000 = MM
 400 = CD
  60 = LX
   1 = I
```

Each place is spelled independently and the pieces are joined largest place
first.

### Example 2

```text
Input: num = 83
Output: "LXXXIII"
Explanation:
80 = LXXX as 50 (L) followed by three 10s (XXX)
 3 = III
```

### Example 3

```text
Input: num = 3999
Output: "MMMCMXCIX"
Explanation:
3000 = MMM
 900 = CM
  90 = XC
   9 = IX
```

The largest input allowed, spelled place by place down to the subtractive 9.

### Constraints

- `1 <= num <= 3999`
