SELECT
  asset,
  SUM(
    CASE
      WHEN side = 'Buy' THEN - price
      ELSE price
    END
  ) AS net_gain_loss
FROM
  Deals
GROUP BY
  asset