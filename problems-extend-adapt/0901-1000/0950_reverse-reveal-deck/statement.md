# Reverse Reveal Deck

## Description

Every value in the integer array `deck` is unique. Arrange these cards in a
single face-down deck, with the first element as the top card. Then repeatedly:

1. Reveal and remove the top card.
2. If cards remain, move the new top card to the bottom.
3. Repeat until every card has been revealed.

Return the initial ordering that makes the revealed values appear in strictly
increasing order. The required ordering is unique.

### Example 1

```text
Input: deck = [1,2,3,4,5]
Output: [1,5,2,4,3]
Explanation: The reveal process produces 1, 2, 3, 4, 5 in that order.
```

### Example 2

```text
Input: deck = [10,20,30]
Output: [10,30,20]
Explanation: Revealing 10 and moving 30 to the bottom leaves [20,30], so the
subsequent reveals are 20 then 30.
```

### Constraints

- `1 <= deck.length <= 1000`
- `1 <= deck[i] <= 10⁶`
- All the values of `deck` are unique.
