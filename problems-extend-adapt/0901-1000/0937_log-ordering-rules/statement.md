# Log Ordering Rules

## Description

Each entry in `logs` is a single-space-delimited record whose first token
is its identifier and whose remaining tokens form its payload.

A record is a letter log when every payload token is lowercase English
letters, or a digit log when every payload token is digits. Return the logs
under these ordering rules:

- All letter logs come before every digit log.
- Letter logs sort lexicographically by payload; matching payloads sort by
  identifier.
- Digit logs retain their original relative order.

### Example 1

```text
Input: logs = ["id7 zoo tree","d2 4 8","id2 alpha beta","d9 1 3","id1 alpha beta"]
Output: ["id1 alpha beta","id2 alpha beta","id7 zoo tree","d2 4 8","d9 1 3"]
Explanation: The two "alpha beta" letter logs use their identifiers to
break the tie, while d2 and d9 stay in their input order.
```

### Example 2

```text
Input: logs = ["x2 3 2","m1 green apple","z9 green apple","q7 blue sky"]
Output: ["q7 blue sky","m1 green apple","z9 green apple","x2 3 2"]
```

### Constraints

- `1 <= logs.length <= 100`
- `3 <= logs[i].length <= 100`
- Tokens in each log are separated by exactly one space.
- Each log has an identifier and at least one payload token.
