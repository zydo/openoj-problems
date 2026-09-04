# Normalized Mailboxes

## Description

Every address on a mail service splits at the single `'@'` into a local part
and a domain part. The service delivers mail by a canonical form built from
an address with two rewrite rules, both applying only to the local part:

- every `'.'` in the local part is discarded;
- everything in the local part from the first `'+'` onward is discarded,
  the `'+'` included.

The domain part is taken literally — no rule ever touches it, so dots there
genuinely distinguish addresses. Both rules can occur in the same address,
and a `'.'` that lands in a discarded plus-tail simply disappears with the
tail.

You are given an array `emails`; one message is sent to each address in it.
Return how many distinct canonical mailboxes actually receive a message.

### Example 1

```text
Input: emails = ["a.b+c@x.com","ab@x.com","ab@xx.com"]
Output: 2
Explanation: The first two collapse to `ab@x.com`; the third targets the
different domain `xx.com`.
```

### Example 2

```text
Input: emails = ["u+first.o@k.com","u+x@k.com","u@k.com"]
Output: 1
Explanation: All three deliver to the single mailbox `u@k.com` — whatever
follows the first `+` is dropped wholesale.
```

### Example 3

```text
Input: emails = ["t@aa.com","t@a.a.com"]
Output: 2
Explanation: The dot inside the second domain is real, so the two addresses
reach different mailboxes.
```

### Constraints

- `1 <= emails.length <= 100`
- `1 <= emails[i].length <= 100`
- `emails[i]` consists of lowercase English letters, `'+'`, `'.'` and `'@'`.
- Each `emails[i]` contains exactly one `'@'` character.
- All local and domain parts are non-empty.
- Local parts never begin with a `'+'` character.
- Domain parts end with the `".com"` suffix.
- Domain parts contain at least one character before the `".com"` suffix.
