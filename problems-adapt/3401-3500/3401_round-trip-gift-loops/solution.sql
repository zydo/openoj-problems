WITH RECURSIVE
  -- An employee sits on a continuous loop only when they give exactly one
  -- gift and receive exactly one gift over the whole table.
  participants AS (
    SELECT
      sender_id AS employee
    FROM
      GiftSwap
    GROUP BY
      sender_id
    HAVING
      COUNT(*) = 1
    INTERSECT
    SELECT
      recipient_id
    FROM
      GiftSwap
    GROUP BY
      recipient_id
    HAVING
      COUNT(*) = 1
  ),
  -- Rows whose both ends qualify, and together these form the loops.
  loop_edges AS (
    SELECT
      s.sender_id,
      s.recipient_id,
      s.gift_price
    FROM
      GiftSwap s
    WHERE
      s.sender_id IN (
        SELECT
          employee
        FROM
          participants
      )
      AND s.recipient_id IN (
        SELECT
          employee
        FROM
          participants
      )
  ),
  -- Walk each loop starting from each member. A walk stops exactly where
  -- it began, and low tracks the smallest employee id it has passed.
  walk (start_id, node, total, steps, low) AS (
    SELECT
      sender_id,
      recipient_id,
      gift_price,
      1,
      sender_id
    FROM
      loop_edges
    UNION ALL
    SELECT
      w.start_id,
      c.recipient_id,
      w.total + c.gift_price,
      w.steps + 1,
      MIN(w.low, c.sender_id)
    FROM
      walk w
      JOIN loop_edges c ON c.sender_id = w.node
    WHERE
      w.node <> w.start_id
  )
SELECT
  ROW_NUMBER() OVER (
    ORDER BY
      loop_size DESC,
      loop_total DESC,
      low ASC
  ) AS loop_id,
  loop_size,
  loop_total
FROM
  (
    SELECT
      low,
      MAX(steps) AS loop_size,
      MAX(total) AS loop_total
    FROM
      walk
    WHERE
      node = start_id
    GROUP BY
      low
  )
ORDER BY
  loop_id