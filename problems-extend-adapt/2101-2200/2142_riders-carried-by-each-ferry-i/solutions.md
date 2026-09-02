# Solutions — Riders Carried by Each Ferry I

## Count arrivals on one ordered event timeline

Combine traveler arrivals and ferry arrivals into one event stream, ordering
travelers before a ferry at the same time. A running sum of traveler events
gives the total number of travelers who have reached the pier by each ferry.
After retaining only ferry events, subtract the previous ferry's cumulative
total to obtain exactly the travelers whose first eligible ferry is the
current one.

The final sort uses `ferry_id`, independently of chronological ferry order.
If there are `F` ferries and `T` travelers, the window order dominates the
work and the event CTE stores their combined rows.

**Complexity:** `O((F + T) log(F + T))` time and `O(F + T)` space.
