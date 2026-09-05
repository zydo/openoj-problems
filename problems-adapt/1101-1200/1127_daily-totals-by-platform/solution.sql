SELECT
  spend_date,
  platform,
  SUM(total_amount) AS total_amount,
  SUM(total_shoppers) AS total_shoppers
FROM
  (
    SELECT
      spend_date,
      platform,
      SUM(amount) AS total_amount,
      COUNT(*) AS total_shoppers
    FROM
      (
        SELECT
          shopper_id,
          spend_date,
          CASE
            WHEN COUNT(DISTINCT platform) = 2 THEN 'both'
            ELSE MAX(platform)
          END AS platform,
          SUM(amount) AS amount
        FROM
          Charges
        GROUP BY
          shopper_id,
          spend_date
      ) AS classified
    GROUP BY
      spend_date,
      platform
    UNION ALL
    SELECT DISTINCT
      spend_date,
      'both' AS platform,
      0 AS total_amount,
      0 AS total_shoppers
    FROM
      Charges
  ) AS padded
GROUP BY
  spend_date,
  platform