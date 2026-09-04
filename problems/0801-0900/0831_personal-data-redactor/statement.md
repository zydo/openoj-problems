# Personal Data Redactor

## Description

The string `s` is either a valid email address or a phone number. Return its
redacted form using the rules below.

An email has a name of at least two English letters, followed by `@`, followed
by a letter-only domain that contains one internal dot. Convert all letters to
lowercase. Keep the first and last letters of the name, replace everything
between them with exactly five asterisks, and leave the `@` plus the domain
visible.

A phone number contains 10 through 13 digits, possibly separated by spaces,
`+`, `-`, `(`, and `)`. Its final 10 digits form the local number; any earlier
digits form a country code. Discard separators and return `"***-***-XXXX"`
when there is no country code. Otherwise prepend `"+"`, one `*` per
country-code digit, and `"-"`; `XXXX` is always the final four digits.

### Example 1

```text
Input: s = "AlicE@Domain.ORG"
Output: "a*****e@domain.org"
Explanation: The email is normalized to lowercase and only the name's
outer letters remain visible.
```

### Example 2

```text
Input: s = "86-(10)12345678"
Output: "+**-***-***-5678"
Explanation: There are two country-code digits before the 10-digit local
number.
```

### Example 3

```text
Input: s = "+1 (555) 123-4567"
Output: "+*-***-***-4567"
Explanation: The first digit is a one-digit country code.
```

### Constraints

- `s` is either a valid email address or a valid phone number.
- For an email, `8 <= s.length <= 40`; it contains English letters, exactly
  one `@`, and exactly one `.`.
- For a phone number, `10 <= s.length <= 20`; it contains digits, spaces,
  and only the symbols `(`, `)`, `-`, and `+`.
