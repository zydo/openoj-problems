# Neutralize an IP Address

## Description

You are given a string holding a valid IPv4 address — four numbers between
`0` and `255`, separated by periods. Neutralize the address so that it can
no longer be read as a clickable link: every period `"."` in it is replaced
by the bracketed form `"[.]"`, and everything else stays exactly as it was.

Return the neutralized string.

### Example 1

```text
Input: address = "10.0.4.27"
Output: "10[.]0[.]4[.]27"
```

### Example 2

```text
Input: address = "172.16.254.88"
Output: "172[.]16[.]254[.]88"
```

### Constraints

- The given address is a valid IPv4 address.
