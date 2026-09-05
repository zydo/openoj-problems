# Solutions — Every Shopper's Loyalty Tier

## Count trips and orders per shopper

Start from `Shoppers` and left join both `Trips` and `Orders`, which keeps
shoppers who never took a trip. Grouping by shopper gives the number of
trips and the number whose `trip_id` shows up in `Orders`; `order_total` is
deliberately ignored, because only whether an order happened affects the
conversion rate.

A zero trip count maps straight to Bronze. Otherwise compare
`order_count * 100` against `trip_count * 80` and `trip_count * 50`,
testing Diamond before Gold and leaving Silver as the remainder. These
integer cross-products make the exact 80% and 50% boundaries unambiguous
without division or rounding.

**Complexity:** `O(S + T + O)` time and `O(S + T + O)` engine space for
join indexes and grouping, where `S`, `T`, and `O` are the table sizes.
