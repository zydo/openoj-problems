SELECT
  m.member_id AS buyer_id,
  m.joined_on AS joined_on,
  COALESCE(t.buy_count, 0) AS trades_in_2019
FROM
  Members m
  LEFT JOIN (
    SELECT
      buyer_id,
      COUNT(*) AS buy_count
    FROM
      Trades
    WHERE
      strftime('%Y', trade_date) = '2019'
    GROUP BY
      buyer_id
  ) t ON t.buyer_id = m.member_id