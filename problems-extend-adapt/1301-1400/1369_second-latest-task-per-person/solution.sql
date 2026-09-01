SELECT
  person,
  task,
  start_day,
  end_day
FROM
  (
    SELECT
      st.person,
      st.task,
      st.start_day,
      st.end_day,
      ROW_NUMBER() OVER (
        PARTITION BY
          st.person
        ORDER BY
          st.start_day DESC
      ) AS rn,
      COUNT(*) OVER (
        PARTITION BY
          st.person
      ) AS total
    FROM
      Stints st
  )
WHERE
  rn = 2
  OR (
    rn = 1
    AND total = 1
  )