# Checkout After Rounding The Bill

## Description

A wallet starts out holding 100 dollars.

You are about to check out with an item whose price is the integer `price`
dollars. The register, however, only takes cash in multiples of ten: it
first snaps `price` to the nearest multiple of 10 — call that snapped
amount — and then collects exactly that many dollars from the wallet.

Work out how much money is left in the wallet once the checkout finishes.

Two details pin the rounding down:

- Multiples of 10 include 0 itself.
- A price that sits exactly halfway, ones digit 5, snaps upward: 5 becomes
  10, 15 becomes 20, 25 becomes 30, and so on.

### Example 1

```text
Input: price = 37
Output: 60
Explanation: The ones digit 7 snaps 37 up to the next multiple of 10, which
is 40. The wallet then holds 100 - 40 = 60 dollars.
```

### Example 2

```text
Input: price = 5
Output: 90
Explanation: Halfway prices snap up, so 5 is charged as 10 and the wallet
drops to 100 - 10 = 90 dollars.
```

### Example 3

```text
Input: price = 92
Output: 10
Explanation: 92 snaps to 90, leaving 100 - 90 = 10 dollars.
```

### Constraints

- `0 <= price <= 100`

## Hints

### Hint 1

The multiples of 10 involved run only from 0 to 100, so scanning all eleven
candidates and keeping the closest one — the larger one on a tie — is a
perfectly valid way to find the snapped amount.

### Hint 2

There is also a closed form: the snapped amount equals
floor((price + 5) / 10) * 10, which answers the problem in one expression.
