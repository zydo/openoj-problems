# Solutions — Hold Back Expedited Shipments

A shipment's fate depends only on its customer's other shipments: a
single regular row anywhere in the customer's history is what silences
every expedited one.

## Keep regular shipments or customers without one

Every regular shipment belongs in the result. For any other row, a
correlated `NOT EXISTS` checks whether the same customer holds a
regular shipment; only when none exists is the expedited shipment
kept. This applies the rule per customer while preserving all three
columns and every qualifying shipment.

Without an index on `customer_id`, the correlated subquery may scan
`Shipments` for each outer row. It uses only constant auxiliary state
and can stop as soon as it finds a matching regular shipment.

**Complexity:** `O(N²)` time and `O(1)` extra space for `N` shipments.
