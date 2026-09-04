# Chattiest Sender in the Chat Log

## Description

A chat log records `n` messages. You are given two string arrays,
`messages` and `senders`, where `messages[i]` was sent by `senders[i]`.
Each message is a list of words separated by single spaces, with no
leading or trailing spaces. A sender may appear many times in the log,
and a sender's word count is the total number of words across all of
their messages.

Return the sender whose word count is the largest. If several senders
share the largest count, return the one whose name is
lexicographically largest.

Notes:

- Uppercase letters compare as smaller than lowercase letters, so names
  are compared by their characters' codes.
- `"alice"` and `"Alice"` are different names.

### Example 1

```text
Input: messages = ["hey there","on my way","see you soon"], senders = ["mia","leo","mia"]
Output: "mia"
Explanation: mia wrote 2 + 3 = 5 words in total, while leo wrote only
the 3 words of a single message. mia has the largest count.
```

### Example 2

```text
Input: messages = ["go now","ok fine"], senders = ["ada","ben"]
Output: "ben"
Explanation: ada sent 2 words and ben sent 2 words, so the count is
tied. The lexicographically larger name wins the tie, which is "ben".
```

### Example 3

```text
Input: messages = ["hi","hi"], senders = ["ann","Ann"]
Output: "ann"
Explanation: Both names have one word, so the tie is broken by name.
Uppercase letters come first, so "ann" is lexicographically larger than
"Ann".
```

### Constraints

- `n == messages.length == senders.length`
- `1 <= n <= 10^4`
- `1 <= messages[i].length <= 100`
- `1 <= senders[i].length <= 10`
- `messages[i]` contains only English letters and single spaces, with no
  leading or trailing spaces.
- `senders[i]` contains only English letters.

## Hints

### Hint 1

Thanks to the spacing guarantees, a message's word count is just the
number of spaces it contains plus one — no splitting needed.

### Hint 2

Accumulate each sender's total in a hash map, then pick the winner by
comparing counts and, on ties, names.
