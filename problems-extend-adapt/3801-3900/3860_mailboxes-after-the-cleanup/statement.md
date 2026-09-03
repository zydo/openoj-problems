# Mailboxes After the Cleanup

## Description

You are given an array `emails` of well-formed email addresses.

Clean each address up with these rules. The local part is whatever sits
before the `'@'`: drop every `'.'`, throw away everything from the first
`'+'` onward, and lowercase what is left. The domain part is whatever sits
after the `'@'`; it only needs lowercasing.

Two addresses land in the same mailbox exactly when their cleaned local
parts and cleaned domains are equal. Return how many distinct mailboxes the
array holds.

### Example 1

```text
Input: emails = ["a.b+c@mail.com", "ab@mail.com", "ab+x@Mail.com"]
Output: 1
Explanation: The first address loses its dot and its "+c", the second is
already clean, and the third differs only by the "+x" and a capitalized
domain. All three clean down to ab@mail.com.
```

### Example 2

```text
Input: emails = ["x.y@z.com", "xy@z.com", "x+y@z2.com"]
Output: 2
Explanation: The first two both clean to xyz@z.com, while the third
truncates to the local part x at the domain z2.com — a separate mailbox.
```

### Example 3

```text
Input: emails = ["A.B@Look.com", "ab@look.com", "abc@look.com"]
Output: 2
Explanation: Case is ignored on both sides, so the first two merge into
ab@look.com; abc@look.com stays its own mailbox.
```

### Constraints

- `1 <= emails.length <= 1000`
- `1 <= emails[i].length <= 100`
- Each address contains only English letters, digits, `'.'`, `'+'`, and
  `'@'`, with exactly one `'@'`.
- The local part and the domain are both non-empty, and the local part
  does not begin with `'+'`.
- The domain ends in `".com"` and has at least one character before it.

## Hints

### Hint 1

Turn every address into one canonical string — dots and plus-suffix removed
from a lowercased local part, lowercased domain — and count the distinct
canonical strings with a set.
