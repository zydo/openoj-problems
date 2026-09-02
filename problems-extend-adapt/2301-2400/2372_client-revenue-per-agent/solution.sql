SELECT
  sp.agent_id,
  sp.name,
  COALESCE(SUM(s.price), 0) AS total
FROM
  Agent sp
  LEFT JOIN Client c ON c.agent_id = sp.agent_id
  LEFT JOIN Purchases s ON s.client_id = c.client_id
GROUP BY
  sp.agent_id,
  sp.name