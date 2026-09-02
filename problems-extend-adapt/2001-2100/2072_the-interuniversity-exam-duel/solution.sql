SELECT
  CASE
    WHEN (
      SELECT
        COUNT(*)
      FROM
        NewYorkEntrants
      WHERE
        points >= 90
    ) > (
      SELECT
        COUNT(*)
      FROM
        CaliforniaEntrants
      WHERE
        points >= 90
    ) THEN 'New York University'
    WHEN (
      SELECT
        COUNT(*)
      FROM
        NewYorkEntrants
      WHERE
        points >= 90
    ) < (
      SELECT
        COUNT(*)
      FROM
        CaliforniaEntrants
      WHERE
        points >= 90
    ) THEN 'California University'
    ELSE 'No Winner'
  END AS winner