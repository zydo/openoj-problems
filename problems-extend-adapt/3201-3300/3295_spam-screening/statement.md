# Spam Screening

## Description

A mail filter keeps a list of forbidden words. A message arrives already
split into words — the array `message` — alongside the filter's list,
`bannedWords`.

The message is flagged as spam when at least two of its words match
words on the banned list. Every occurrence in the message counts
separately: the same forbidden word turning up twice is just as damning
as two different forbidden words appearing once each. A single match,
however, is not enough to flag anything.

Return `true` if the message should be flagged, and `false` otherwise.

### Example 1

```text
Input: message = ["buy","now","cheap","deal"], bannedWords = ["cheap","deal","win"]
Output: true
Explanation: "cheap" and "deal" both sit on the banned list, so the message trips the rule twice.
```

### Example 2

```text
Input: message = ["meeting","at","noon"], bannedWords = ["noon","late"]
Output: false
Explanation: Only "noon" matches; one hit does not flag a message.
```

### Example 3

```text
Input: message = ["free","trial","free","gift"], bannedWords = ["free"]
Output: true
Explanation: "free" appears twice in the message, and each occurrence counts on its own.
```

### Constraints

- Both arrays contain between 1 and 10⁵ words.
- Every word is between 1 and 15 lowercase English letters long.

## Hints

### Hint 1

Park the banned vocabulary in a hash set so each message word costs one
constant-time lookup.

### Hint 2

Count matches as you scan, not after: the answer is settled the moment a
second match is found, so you can stop scanning there.
