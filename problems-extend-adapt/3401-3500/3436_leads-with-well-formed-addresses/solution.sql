-- Four criteria, four checks. Exactly one '@' is length arithmetic on
-- REPLACE, and once that holds the address splits at the single '@'
-- into a local part (non-empty, only [a-zA-Z0-9_]) and a rest that must
-- end in '.com' with a non-empty letters-only domain in front of it.
SELECT
  lead_id,
  address
FROM
  (
    SELECT
      lead_id,
      address,
      substr(address, 1, instr(address, '@') - 1) AS local_part,
      substr(address, instr(address, '@') + 1) AS rest_part
    FROM
      Leads
    WHERE
      length(address) - length(replace(address, '@', '')) = 1
  )
WHERE
  length(local_part) > 0
  AND local_part NOT GLOB '*[^a-zA-Z0-9_]*'
  AND rest_part GLOB '*.com'
  AND length(rest_part) > 4
  AND substr(rest_part, 1, length(rest_part) - 4) NOT GLOB '*[^a-zA-Z]*'
ORDER BY
  lead_id ASC