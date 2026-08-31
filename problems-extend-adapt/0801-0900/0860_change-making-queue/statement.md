# Change-Making Queue

## Description

A counter sells one item to each customer in order for $5. Each entry in
`bills` is the customer's payment and is either 5, 10, or 20. The counter
starts with no cash.

For every customer, provide enough change that the effective payment is $5.
Return `true` if every customer can be served in order, or `false` as soon as
one customer cannot receive exact change.

### Example 1

```text
Input: bills = [5,5,10,5,20]
Output: true
Explanation: Before the final payment, the counter has enough cash to give a
$10 bill and a $5 bill as change.
```

### Example 2

```text
Input: bills = [5,10,5,20,20]
Output: false
```

### Example 3

```text
Input: bills = [5,5,5,20,10]
Output: false
Explanation: Giving change for the $20 exhausts the available $5 bills, so
the later $10 payment cannot be served.
```

### Constraints

- `1 <= bills.length <= 10⁵`
- Each `bills[i]` is `5`, `10`, or `20`.
