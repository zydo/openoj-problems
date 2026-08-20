# Minimum Proportional Group Cost

## Description

There are `n` candidates. Candidate `i` contributes `units[i]` units and will
accept no less than `minimumPayments[i]`.

Choose exactly `groupCount` candidates and assign their payments subject to
both rules:

- each chosen candidate receives at least their stated minimum, and
- all chosen candidates receive the same payment per contributed unit.

Return the smallest possible total payment. Answers within `10^-5` of the
exact value are accepted.

### Example 1

```text
Input: units = [5,7,3], minimumPayments = [11,10,8], groupCount = 2
Output: 21.3333333333
Explanation: Choose candidates with 5 and 3 units and pay at the binding rate 8/3 per unit.
```

### Example 2

```text
Input: units = [6,3,9,4], minimumPayments = [18,15,9,16], groupCount = 3
Output: 65.0000000000
```

### Constraints

- `units.length == minimumPayments.length`
- `1 <= groupCount <= units.length <= 10^4`
- `1 <= units[i], minimumPayments[i] <= 10^4`

## Hints

### Hint 1

Each candidate requires a minimum rate of
`minimumPayments[i] / units[i]`. A group's rate is determined by its largest
such requirement.

### Hint 2

Sort candidates by required rate. At each rate, the cheapest compatible group
uses the smallest unit counts seen so far.

### Hint 3

A max-heap can retain the `groupCount` smallest unit counts while the sorted
rate sweep advances.
