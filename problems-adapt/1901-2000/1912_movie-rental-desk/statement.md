# Movie Rental Desk

## Description

A rental service runs `n` shops, each holding copies of movies. Every copy
has a fixed price. You are to build the desk that catalogues the copies and
answers rental traffic: searching, renting, returning, and reporting what is
currently out.

The catalogue arrives as a 2D integer array `entries`, where
`entries[i] = [shop_i, movie_i, price_i]` records one copy of `movie_i` at
`shop_i` priced at `price_i`. A shop never holds two copies of the same
movie.

The desk supports four operations:

- **search(movie)** — the (at most) 5 cheapest shops holding an unrented
  copy of `movie`, ordered by ascending price, ties broken by ascending
  shop number. Fewer than 5 candidates returns all of them; no candidates
  returns an empty list.
- **rent(shop, movie)** — takes the unrented copy of `movie` at `shop` out.
- **handBack(shop, movie)** — returns a rented copy of `movie` to `shop`.
- **report()** — the (at most) 5 cheapest rented copies, as pairs
  `[shop_j, movie_j]`, ordered by ascending price, then ascending shop
  number, then ascending movie. Fewer than 5 rented copies returns all of
  them; none rented returns an empty list.

Implement the `MovieRentalDesk` class:

- `MovieRentalDesk(int n, int[][] entries)` — opens the desk over `n`
  shops with the given catalogue.
- `List<Integer> search(int movie)` — as above.
- `void rent(int shop, int movie)` — as above.
- `void handBack(int shop, int movie)` — as above.
- `List<List<Integer>> report()` — as above.

The calls are generated so that `rent` is only invoked when the shop holds
an unrented copy of the movie, and `handBack` only when that shop has the
movie out.

### Example 1

```text
Input:
["MovieRentalDesk", "search", "rent", "rent", "report", "search", "handBack", "report"]
[[6, [[0,1,4],[1,1,6],[2,1,4],[3,1,7],[4,1,6],[5,1,9],[2,2,8],[4,2,5]]], [1], [0,1], [1,1], [], [1], [1,1], []]
Output: [null, [0,2,1,4,3], null, null, [[0,1],[1,1]], [2,4,3,5], null, [[0,1]]]
Explanation:
MovieRentalDesk desk = new MovieRentalDesk(6, [[0,1,4],[1,1,6],[2,1,4],[3,1,7],[4,1,6],[5,1,9],[2,2,8],[4,2,5]]);
desk.search(1);   // movie 1 sits at shops 0..5; shops 0 and 2 tie at price 4
                  // and order by number, then 1 and 4 at 6, then 3 — shop 5
                  // at price 9 is the sixth cheapest and misses the cut.
desk.rent(0, 1);  // shop 0's copy goes out at price 4.
desk.rent(1, 1);  // shop 1's copy goes out at price 6.
desk.report();    // out are (shop 0, movie 1) at 4 and (shop 1, movie 1) at 6.
desk.search(1);   // four unrented copies remain: [2, 4, 3, 5].
desk.handBack(1, 1); // shop 1's copy is back on the shelf.
desk.report();    // only (shop 0, movie 1) is still out.
```

### Example 2

```text
Input:
["MovieRentalDesk", "rent", "rent", "rent", "report", "search"]
[[2, [[0,1,6],[0,2,9],[1,1,6],[1,2,4]]], [1,2], [0,1], [1,1], [], [2]]
Output: [null, null, null, null, [[1,2],[0,1],[1,1]], [0]]
Explanation: The report lists shop 1's copy of movie 2 first (price 4);
the two movie-1 copies tie at price 6, so the smaller shop number comes
first. Shop 0 is left holding the only unrented copy of movie 2.
```

### Constraints

- `1 <= n <= 3 × 10⁵`
- `1 <= entries.length <= 10⁵`
- `0 <= shop_i < n`
- `1 <= movie_i, price_i <= 10⁴`
- A shop carries at most one copy of any movie.
- At most `10⁵` calls to `search`, `rent`, `handBack`, and `report` in
  total.

### Follow-up

A copy that is handed back looks identical to a never-rented one — how do
you stop a lazy heap from listing the same `(shop, movie)` twice?

## Hints

### Hint 1

Prices never move, so `price[(shop, movie)]` can be a table built once.
The live state — which copies are out — is needed in two groupings: per
movie, for `search`, and across everything, for `report`.

### Hint 2

Hold one min-heap of `(price, shop)` per movie over its unrented copies,
and one global min-heap of `(price, shop, movie)` over the rented ones.
`rent` and `handBack` move a copy between the two structures.

### Hint 3

Heaps cannot delete. Stamp every pushed entry with a fresh token and
record the live token for each `(shop, movie)` side; an entry whose token
has been superseded is garbage. Both queries pop garbage past the top,
collect five live entries, and push them back.
