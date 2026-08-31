# Message Cooldown Filter

## Description

Messages arrive with non-decreasing integer timestamps. Approve a message only
when the same text has not been approved during the previous ten seconds. If
text is approved at time `t`, its next eligible time is `t + 10`. Different
texts have independent cooldowns, and several arrivals may share a timestamp.

Implement the `MessageCooldown` class:

- `MessageCooldown()` creates an empty filter.
- `bool allowMessage(int timestamp, string message)` returns `true` and starts
  a new cooldown when the message is eligible; otherwise it returns `false`.

### Example 1

```text
Input:
["MessageCooldown", "allowMessage", "allowMessage", "allowMessage", "allowMessage", "allowMessage", "allowMessage"]
[[], [0,"alpha"], [4,"alpha"], [4,"beta"], [10,"alpha"], [13,"beta"], [14,"beta"]]
Output: [null, true, false, true, true, false, true]
Explanation: "alpha" becomes eligible again at time 10, while "beta" becomes
eligible again at time 14.
```

### Constraints

- `0 <= timestamp <= 10⁹`
- Timestamps are supplied in non-decreasing order.
- `1 <= message.length <= 30`
- At most `10⁴` calls are made to `allowMessage`.
