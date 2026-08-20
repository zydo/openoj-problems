# Fewest Pairing Swaps

## Description

`line` lists the numbers `0` through `2n - 1`, each exactly once, in some order.
Two numbers are *partners* when they differ only in whether they are even or
odd and are otherwise consecutive: `0` with `1`, `2` with `3`, and so on up to
`2n - 2` with `2n - 1`.

Read the array as `n` back-to-back *slots* of width two — indices `0` and `1`
form the first slot, indices `2` and `3` the second, and so on. A slot is
*settled* when the two numbers standing in it are partners.

One move exchanges the numbers held at any two indices, neighbouring or far
apart. Return the least number of moves after which every slot is settled.

### Example 1

```text
Input: line = [2,0,3,1,4,5]
Output: 1
Explanation: Exchange index 1 with index 2, giving [2,3,0,1,4,5]. The three
slots now read (2,3), (0,1) and (4,5), each a partner pair.
```

### Example 2

```text
Input: line = [3,1,4,0,2,5]
Output: 2
Explanation: Exchange index 1 with index 4 to settle the first slot as (3,2),
then index 3 with index 5 to settle the second as (4,5); the third is (1,0) and
comes along for free. No single move settles this array.
```

### Example 3

```text
Input: line = [5,4,1,0,3,2]
Output: 0
Explanation: Every slot already holds a partner pair, so nothing has to move.
```

### Constraints

- `line.length == 2 * n`, where `2 <= n <= 30`
- `0 <= line[i] < 2 * n`
- no value repeats, so each of `0 .. 2n - 1` occurs once

## Hints

### Hint 1

Which index inside a slot a number stands at never matters — only which slot
holds it. So collapse the array to `n` slots and ask where each partner pair
currently sits.

### Hint 2

A partner pair either shares a slot already or straddles two of them. Treat the
slots as nodes and let every pair contribute a link between the slot holding
one of its numbers and the slot holding the other.

### Hint 3

Links chain slots into groups. A group of `L` slots can be untangled in `L - 1`
moves and no fewer, so the total is `n` minus the number of groups. Sweeping
left to right and dragging the missing partner into each slot in turn reaches
exactly that count.
