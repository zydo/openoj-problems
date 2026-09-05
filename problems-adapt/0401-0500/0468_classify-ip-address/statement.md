# Classify IP Address

## Description

Decide which kind of address `queryIP` is. Return `"IPv4"` for a valid IPv4
address, `"IPv6"` for a valid IPv6 address, and `"Neither"` for anything
that is not a correct address of either kind.

A valid IPv4 address is four groups `"x1.x2.x3.x4"`, where every group is a
number from `0` to `255` written without leading zeros. For instance
`"192.168.1.1"` is valid, while `"192.168.01.1"` and `"192.168.1.00"` are not.

A valid IPv6 address is eight groups `"x1:x2:...:x8"`, where every group is
one to four hexadecimal characters — digits `0-9` and letters `a-f` or `A-F`
— and leading zeros are allowed. For instance
`"2001:0db8:85a3:0:0:8A2E:0370:7334"` is valid.

### Example 1

```text
Input: queryIP = "10.0.0.1"
Output: "IPv4"
```

### Example 2

```text
Input: queryIP = "fe80:0:0:0:0:0:0:1"
Output: "IPv6"
```

### Example 3

```text
Input: queryIP = "1.1.1."
Output: "Neither"
Explanation: A trailing separator leaves a fourth group missing, so the
address cannot be IPv4.
```

### Constraints

- `queryIP` uses only English letters, digits, `'.'`, and `':'`.
