# Rank Features by Mentions

## Description

A product survey names each of its candidate features with a single
lowercase word; `features` lists these names. Alongside it comes a set
of free-text answers, `responses`, where each entry is one respondent's
message: lowercase words separated by single spaces.

Call a feature mentioned by a response when that response contains the
feature's word as one of its words — the match is by whole word only,
so a longer word that merely contains the feature name as a fragment
does not count. A feature that shows up several times inside the same
response still earns that response's credit just once. A feature's
score is therefore the number of responses that mention it.

Order the features from most mentioned to least. Features with equal
scores keep the relative order of their first appearance in
`features`. Features that no response mentioned score zero and land at
the end, still in their original relative order.

Return the features in that order.

### Example 1

```text
Input: features = ["wifi","battery","screen"], responses = ["love the battery life","screen is big but battery drains","wifi drops"]
Output: ["battery","wifi","screen"]
Explanation: "battery" is mentioned by two responses, while "wifi" and
"screen" are mentioned by one each. The one-mention tie is broken by
original order, so "wifi" precedes "screen".
```

### Example 2

```text
Input: features = ["fast","light","cheap"],
responses = ["fast light fast","cheap cheap cheap","nothing here"]
Output: ["fast","light","cheap"]
Explanation: Every feature is credited by exactly one response —
repeats inside a single response add nothing — so the original order
stands.
```

### Example 3

```text
Input: features = ["map","compass","torch"], responses = ["the torch beam is wide","compass needle froze","torch again"]
Output: ["torch","compass","map"]
Explanation: "map" is never mentioned, so it trails the other two.
```

### Constraints

- `1 <= features.length <= 10^4`
- `1 <= features[i].length <= 10`
- The feature names are all distinct.
- Each feature name is lowercase letters only.
- `1 <= responses.length <= 10^2`
- `1 <= responses[i].length <= 10^3`
- Each response uses lowercase letters and spaces.
- No response contains two adjacent spaces.
- No response begins or ends with a space.

## Hints

### Hint 1

Count how many responses mention each feature: split a response into
words and de-duplicate them first, so a repeated word only credits its
feature once.

### Hint 2

Sort the features by that count, falling back to the position in
`features` when counts are equal.
