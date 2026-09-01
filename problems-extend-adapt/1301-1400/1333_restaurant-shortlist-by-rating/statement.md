# Restaurant Shortlist By Rating

## Description

Each entry of `restaurants` describes one venue as
`[id_i, rating_i, veganFriendly_i, price_i, distance_i]`. Three filters
decide which venues make the shortlist:

- When `veganFriendly` is 1, only venues whose own `veganFriendly_i` is
  1 qualify; when it is 0 the flag imposes no restriction.
- `price_i` may not exceed `maxPrice`.
- `distance_i` may not exceed `maxDistance`.

Both caps are inclusive: a venue sitting exactly at a cap still
qualifies.

Return the ids of the qualifying venues, ordered by rating from highest
to lowest, with ties broken by the larger id coming first. Both
`veganFriendly_i` and `veganFriendly` are encoded as 1 for yes and 0
for no.

### Example 1

```text
Input: restaurants = [[7,9,0,20,15],[11,9,1,18,6],[24,5,1,9,20],[31,7,0,30,8]], veganFriendly = 1, maxPrice = 25, maxDistance = 20
Output: [11,24]
Explanation: Venues 11 and 24 are the vegan-friendly ones that fit
both caps, and venue 11's rating of 9 outranks venue 24's 5.
```

### Example 2

```text
Input: restaurants = [[7,9,0,20,15],[11,9,1,18,6],[24,5,1,9,20],[31,7,0,30,8]], veganFriendly = 0, maxPrice = 25, maxDistance = 20
Output: [11,7,24]
Explanation: Venue 31 is dropped for costing 30, and venues 7 and 11
tie at rating 9, so the larger id leads.
```

### Example 3

```text
Input: restaurants = [[7,9,0,20,15],[11,9,1,18,6],[24,5,1,9,20],[31,7,0,30,8]], veganFriendly = 0, maxPrice = 20, maxDistance = 16
Output: [11,7]
Explanation: Venue 24 sits too far away and venue 31 costs too much,
leaving only the rating-9 pair.
```

### Constraints

- `1 <= restaurants.length <= 10^4`
- `restaurants[i].length == 5`
- `1 <= id_i, rating_i, price_i, distance_i <= 10^5`
- `1 <= maxPrice, maxDistance <= 10^5`
- `veganFriendly_i` and `veganFriendly` are each `0` or `1`.
- All `id_i` are distinct.

## Hints

### Hint 1

Filtering is one pass; the only care needed afterwards is the two-key
descending sort — an id is an arbitrary label, not a slot in the
array, so it must travel with its rating through the sort.
