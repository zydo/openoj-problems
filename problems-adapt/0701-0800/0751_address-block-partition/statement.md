# Address Block Partition

## Description

An IPv4 address is really just a 32-bit number, split into four 8-bit
groups and printed as decimals joined by dots — the number
`00001111 10001000 11111111 01101011` (grouped for readability) prints as
`"15.136.255.107"`.

A CIDR block compactly names a contiguous range of `2^k` addresses: it is
written `"<base-ip>/p"`, and it covers every address whose top `p` bits
match the base address's top `p` bits (the remaining `32 - p` bits are
free, so the block holds `2^(32-p)` addresses). For instance,
`"123.45.67.89/20"` covers every address matching
`01111011 00101101 0100xxxx xxxxxxxx`, where each `x` is either bit.

Given a starting address `ip` and a count `n`, cover exactly the `n`
consecutive addresses starting at `ip` — no fewer, no more, and nothing
outside that range — using as few CIDR blocks as possible. Return any
shortest list of blocks that achieves this exactly.

### Example 1

```text
Input: ip = "10.0.0.5", n = 6
Output: ["10.0.0.5/32","10.0.0.6/31","10.0.0.8/31","10.0.0.10/32"]
Explanation: The 6 addresses to cover run from 10.0.0.5 through 10.0.0.10.
10.0.0.5 is odd, so it can only start a lone /32. 10.0.0.6 is aligned to a
block of 2, covering 10.0.0.6-7. 10.0.0.8 is aligned to a block of 8, but
only 3 addresses remain, so it shrinks to a block of 2, covering
10.0.0.8-9. That leaves just 10.0.0.10 for a final /32. No single larger
block could replace any of these without spilling outside [10.0.0.5,
10.0.0.10].
```

### Example 2

```text
Input: ip = "192.168.1.30", n = 5
Output: ["192.168.1.30/31","192.168.1.32/31","192.168.1.34/32"]
```

### Constraints

- `7 <= ip.length <= 15`
- `ip` is a valid IPv4 on the form `"a.b.c.d"` where `a`, `b`, `c`, and `d`
  are integers in the range `[0, 255]`.
- `1 <= n <= 1000`
- Every implied address `ip + x` (for `x < n`) will be a valid IPv4 address.

## Hints

### Hint 1

Work with the addresses as plain integers. A block of size `2^k` can only
start at an address divisible by `2^k`, so the largest legal block
starting at the current address is capped by how many low zero-bits that
address has.

### Hint 2

The block is also capped by how many addresses are still owed. Take the
smaller of the alignment cap and the remaining count, rounding down to
the nearest power of two, emit that block, advance past it, and repeat
with what's left.
