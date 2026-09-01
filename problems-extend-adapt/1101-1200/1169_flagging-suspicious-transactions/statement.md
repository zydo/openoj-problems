# Flagging Suspicious Transactions

## Description

A bank reviews its transaction log, one record per string. Each record reads

```text
"{name},{time},{amount},{city}"
```

giving the customer's name, the minute the transaction happened, its dollar
amount, and the city it took place in.

A record is **suspicious** when either of these holds:

- Its amount is strictly greater than `1000`, or
- Some _other_ record made by the same customer, in a _different_ city, took
  place at most `60` minutes away from it (before or after).

Return every suspicious record, keeping them in the order they appear in the
input.

### Example 1

```text
Input: transactions = ["maya,10,500,oslo","maya,40,200,lima"]
Output: ["maya,10,500,oslo","maya,40,200,lima"]
Explanation: The two records share the name `maya` but sit in different
cities only 30 minutes apart, so each one incriminates the other.
```

### Example 2

```text
Input: transactions = ["lena,0,1000,paris","omar,5,1001,paris"]
Output: ["omar,5,1001,paris"]
Explanation: An amount of exactly 1000 is allowed, so `lena`'s record is
fine; `omar`'s amount of 1001 crosses the limit on its own.
```

### Example 3

```text
Input: transactions = ["ivan,100,50,rome","ivan,130,50,rome","omar,140,50,rome","omar,170,50,milan"]
Output: ["omar,140,50,rome","omar,170,50,milan"]
Explanation: `ivan`'s two records are 30 minutes apart but both happened in
rome, so neither counts against the other. `omar`'s two records are in
different cities 30 minutes apart, so both are flagged.
```

### Constraints

- `1 <= transactions.length <= 2000`
- Each record takes the form `"{name},{time},{amount},{city}"`.
- `{name}` and `{city}` consist of lowercase English letters and are between
  `1` and `10` characters long.
- `{time}` consists of digits and is an integer between `0` and `1000`.
- `{amount}` consists of digits and is an integer between `0` and `2000`.

## Hints

### Hint 1

First split every record into its four fields.

### Hint 2

With the fields in hand, a record can be tested against every other record
with a simple double loop.

### Hint 3

Only two checks matter per pair: the amount rule is local, and the
cross-city rule fires whenever names match, cities differ, and the minutes
are within 60.
