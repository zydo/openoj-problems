WITH
  approved AS (
    SELECT
      substr(issued_on, 1, 7) AS month,
      region,
      COUNT(*) AS approved_count,
      SUM(fee) AS approved_fee
    FROM
      Permits
    WHERE
      status = 'approved'
    GROUP BY
      month,
      region
  ),
  revocation_rows AS (
    SELECT
      substr(rv.revoked_on, 1, 7) AS month,
      p.region AS region,
      COUNT(*) AS revoked_count,
      SUM(p.fee) AS revoked_fee
    FROM
      Revocations rv
      JOIN Permits p ON rv.permit_id = p.permit_id
    GROUP BY
      month,
      p.region
  ),
  combined AS (
    SELECT
      COALESCE(a.month, c.month) AS month,
      COALESCE(a.region, c.region) AS region,
      COALESCE(a.approved_count, 0) AS approved_count,
      COALESCE(a.approved_fee, 0) AS approved_fee,
      COALESCE(c.revoked_count, 0) AS revoked_count,
      COALESCE(c.revoked_fee, 0) AS revoked_fee
    FROM
      approved a
      LEFT JOIN revocation_rows c ON a.month = c.month
      AND a.region = c.region
    UNION
    SELECT
      COALESCE(a.month, c.month) AS month,
      COALESCE(a.region, c.region) AS region,
      COALESCE(a.approved_count, 0) AS approved_count,
      COALESCE(a.approved_fee, 0) AS approved_fee,
      COALESCE(c.revoked_count, 0) AS revoked_count,
      COALESCE(c.revoked_fee, 0) AS revoked_fee
    FROM
      revocation_rows c
      LEFT JOIN approved a ON a.month = c.month
      AND a.region = c.region
  )
SELECT
  month,
  region,
  approved_count,
  approved_fee,
  revoked_count,
  revoked_fee
FROM
  combined
WHERE
  NOT (
    approved_count = 0
    AND approved_fee = 0
    AND revoked_count = 0
    AND revoked_fee = 0
  )
ORDER BY
  month,
  region