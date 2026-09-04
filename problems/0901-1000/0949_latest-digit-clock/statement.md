# Latest Digit Clock

## Description

The four digits in `arr` must be used exactly once to form a 24-hour clock
reading in the format `"HH:MM"`. A valid hour is from `00` through `23`, and a
valid minute is from `00` through `59`.

Return the latest valid time that can be assembled. If the digits cannot make
any valid time, return an empty string.

### Example 1

```text
Input: arr = [0,0,1,9]
Output: "19:00"
Explanation: 19:00 is the latest valid clock reading that uses all four digits.
```

### Example 2

```text
Input: arr = [2,4,6,8]
Output: ""
Explanation: No permutation gives both a valid hour and a valid minute.
```

### Constraints

- `arr.length == 4`
- `0 <= arr[i] <= 9`
