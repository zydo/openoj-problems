WITH
  marked AS (
    SELECT
      visit_id,
      arrival_date,
      attendee_count,
      LAG(visit_id, 2) OVER (
        ORDER BY
          visit_id
      ) AS prev_id2,
      LAG(attendee_count, 2) OVER (
        ORDER BY
          visit_id
      ) AS prev_count2,
      LAG(visit_id, 1) OVER (
        ORDER BY
          visit_id
      ) AS prev_id1,
      LAG(attendee_count, 1) OVER (
        ORDER BY
          visit_id
      ) AS prev_count1,
      LEAD(visit_id, 1) OVER (
        ORDER BY
          visit_id
      ) AS next_id1,
      LEAD(attendee_count, 1) OVER (
        ORDER BY
          visit_id
      ) AS next_count1,
      LEAD(visit_id, 2) OVER (
        ORDER BY
          visit_id
      ) AS next_id2,
      LEAD(attendee_count, 2) OVER (
        ORDER BY
          visit_id
      ) AS next_count2
    FROM
      ArenaVisits
  )
SELECT
  visit_id,
  arrival_date,
  attendee_count
FROM
  marked
WHERE
  (
    next_id1 = visit_id + 1
    AND next_id2 = visit_id + 2
    AND attendee_count >= 100
    AND next_count1 >= 100
    AND next_count2 >= 100
  )
  OR (
    prev_id1 = visit_id - 1
    AND next_id1 = visit_id + 1
    AND prev_count1 >= 100
    AND attendee_count >= 100
    AND next_count1 >= 100
  )
  OR (
    prev_id2 = visit_id - 2
    AND prev_id1 = visit_id - 1
    AND prev_count2 >= 100
    AND prev_count1 >= 100
    AND attendee_count >= 100
  )
ORDER BY
  arrival_date ASC