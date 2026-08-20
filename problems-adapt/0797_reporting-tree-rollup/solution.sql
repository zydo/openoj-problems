WITH RECURSIVE
  chain (root_id, staff_id, depth) AS (
    SELECT
      staff_id,
      staff_id,
      1
    FROM
      Staff
    UNION ALL
    SELECT
      chain.root_id,
      e.staff_id,
      chain.depth + 1
    FROM
      chain
      JOIN Staff e ON e.supervisor_id = chain.staff_id
  ),
  levels AS (
    SELECT
      staff_id,
      depth
    FROM
      chain
    WHERE
      root_id = (
        SELECT
          staff_id
        FROM
          Staff
        WHERE
          supervisor_id IS NULL
      )
  ),
  teams AS (
    SELECT
      root_id,
      COUNT(*) - 1 AS reports
    FROM
      chain
    GROUP BY
      root_id
  ),
  budgets AS (
    SELECT
      ch.root_id,
      SUM(em.salary) AS controlled
    FROM
      chain ch
      JOIN Staff em ON em.staff_id = ch.staff_id
    WHERE
      ch.root_id != ch.staff_id
    GROUP BY
      ch.root_id
  )
SELECT
  e.staff_id,
  e.staff_name,
  levels.depth AS depth,
  COALESCE(teams.reports, 0) AS reports,
  COALESCE(budgets.controlled, 0) + e.salary AS payroll
FROM
  Staff e
  JOIN levels ON levels.staff_id = e.staff_id
  LEFT JOIN teams ON teams.root_id = e.staff_id
  LEFT JOIN budgets ON budgets.root_id = e.staff_id
ORDER BY
  depth ASC,
  payroll DESC,
  e.staff_name ASC