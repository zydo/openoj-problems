# UTF-8 Byte Sequence Check

## Description

The integer array `data` represents bytes. For each value, use its least
significant eight bits. Decide whether all bytes can be divided into valid
UTF-8 character encodings.

A character may use one through four bytes:

- A one-byte character starts with `0`.
- A two-byte character has prefix `110` and is followed by one byte beginning
  with `10`.
- A three-byte character has prefix `1110` and is followed by two bytes
  beginning with `10`.
- A four-byte character has prefix `11110` and is followed by three bytes
  beginning with `10`.

Return `true` exactly when the entire array follows these rules.

### Example 1

```text
Input: data = [240,144,140,128]
Output: true
Explanation: The bytes begin 11110, 10, 10, 10, so they form one valid
four-byte character.
```

### Example 2

```text
Input: data = [194,65]
Output: false
Explanation: 194 begins a two-byte character, but 65 does not begin with 10.
```

### Example 3

```text
Input: data = [65,66]
Output: true
```

### Constraints

- `1 <= data.length <= 2 * 10⁴`
- `0 <= data[i] <= 255`

## Hints

### Hint 1

Track how many continuation bytes are still required by the current leading
byte.

### Hint 2

When no continuation is pending, classify the next byte by its leading bits.
A byte that starts `10` cannot begin a new character.

### Hint 3

At the end of the array, the count of required continuation bytes must be
zero.
