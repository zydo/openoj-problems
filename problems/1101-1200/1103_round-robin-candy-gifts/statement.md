# Round-Robin Candy Gifts

## Description

A bag of candies is handed out to a row of `num_people` people one gift at a
time. The gifts keep growing: the first gift carries 1 candy, the second
carries 2, the third carries 3, and so on. Each gift goes to the next person
in the row, and once the end of the row is reached the handout wraps back
around to the first person, continuing in the same round-robin fashion. When
the bag holds fewer candies than the next gift calls for, the person at the
current position takes everything that remains and the handout stops there.

Return how many candies each person ends up with: an array of length
`num_people` whose entries sum to `candies`.

### Example 1

```text
Input: candies = 15, num_people = 4
Output: [6,2,3,4]
Explanation:
Gifts of 1, 2, 3, and 4 candies fill the first pass over the row, leaving
[1,2,3,4]. The next gift, of 5 candies, wraps back to the first person,
whose total becomes 6. The bag is now empty, so the final distribution is
[6,2,3,4].
```

### Example 2

```text
Input: candies = 22, num_people = 5
Output: [7,3,3,4,5]
Explanation:
The first pass hands out gifts of 1 through 5 candies, one per person. The
second pass starts with a gift of 6 candies for the first person (total 7),
and the following gift of 7 candies cannot be paid in full — only 1 candy
remains, so the second person's total grows from 2 to 3 and the handout
ends, leaving [7,3,3,4,5].
```

### Constraints

- `1 <= candies <= 10⁹`
- `1 <= num_people <= 1000`

## Hints

### Hint 1

Simulate the handout one gift at a time, letting the gift size grow by one
and wrapping the position around the row; stop early only on the final,
short gift.
