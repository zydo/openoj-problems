# Parities In Alternation

## Description

You are given an array `nums` of distinct integers.

One operation swaps two neighboring elements — entries sitting next to
each other in the array.

Call an arrangement alternating when no two neighbors share a parity:
every adjacent pair holds one even number and one odd number.

Return the fewest operations needed to turn `nums` into an alternating
arrangement. If no amount of swapping can produce one, return `-1`.

### Example 1

```text
Input: nums = [7,2,9,4,6]
Output: 2
Explanation: Swap 2 left past 7 to get [2,7,9,4,6], then swap 4 left
    past 9 to get [2,7,4,9,6]. The parities now read even, odd, even,
    odd, even — alternating in 2 swaps.
```

### Example 2

```text
Input: nums = [3,5,8]
Output: 1
Explanation: Swapping the 8 left past the 5 gives [3,8,5], whose
    parities are odd, even, odd. One swap suffices.
```

### Example 3

```text
Input: nums = [4,7,6,9]
Output: 0
Explanation: The array already alternates even, odd, even, odd, so no
    operation is needed.
```

### Example 4

```text
Input: nums = [10,20,30,1]
Output: -1
Explanation: Three even numbers and only one odd can never alternate
    pairwise, so no valid arrangement exists.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- All elements of `nums` are distinct.

## Hints

### Hint 1

Feasibility is a headcount: let the even and odd tallies differ by more
than one and the answer is immediately `-1`.

### Hint 2

Only two target layouts exist — evens occupying the even positions, or
evens occupying the odd positions. An odd length admits just the layout
matching the majority parity; an even length admits both.

### Hint 3

Order is preserved within a parity: in an optimal plan the k-th even
element (reading the array left to right) moves to the k-th even slot of
the chosen layout, since letting two same-parity elements cross only
wastes moves.

### Hint 4

Each adjacent swap advances exactly one even element by one position, so
a layout costs the sum of `|current index - target slot|` over the even
elements — report the cheaper layout.
