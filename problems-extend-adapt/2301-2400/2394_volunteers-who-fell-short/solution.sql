SELECT
  volunteer_id
FROM
  Volunteers
WHERE
  pledge_hours * 60 > COALESCE(
    (
      SELECT
        SUM(
          CAST(
            CEIL(
              (
                strftime('%s', clock_out) - strftime('%s', clock_in)
              ) / 60.0
            ) AS INTEGER
          )
        )
      FROM
        Shifts
      WHERE
        Shifts.volunteer_id = Volunteers.volunteer_id
    ),
    0
  )