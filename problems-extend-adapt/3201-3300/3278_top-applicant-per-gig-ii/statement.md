# Top Applicant Per Gig II

## Description

Table: `Applicants`

| Column Name  | Type    |
| ------------ | ------- |
| applicant_id | int     |
| skill        | varchar |
| level        | int     |

(`applicant_id`, `skill`) is the unique key for this table. Each row
records one skill an applicant holds and their level in it (1-5).

Table: `Gigs`

| Column Name | Type    |
| ----------- | ------- |
| gig_id      | int     |
| skill       | varchar |
| demand      | int     |

(`gig_id`, `skill`) is the primary key for this table. Each row records
one skill a gig needs and how demanding it is (1-5).

A staffing desk is filling several contract roles and wants the strongest
applicant for each one. Write a solution that picks the best applicant
for every gig under these rules:

- An applicant only qualifies for a gig when they hold every skill that
  gig requires — one missing skill disqualifies them.
- Each qualifying applicant gets a score for the gig, computed skill by
  skill against that skill's demand:
    - Start from 100 points.
    - Add 10 points for every required skill where their `level` is
      greater than the gig's `demand`.
    - Subtract 5 points for every required skill where their `level` is
      below the `demand`.
    - A level exactly equal to the demand changes nothing.
- Report only the top-scoring applicant per gig; on a tie, take the
  applicant with the lower `applicant_id`. A gig that no applicant
  qualifies for is left out of the result.

Return the result table ordered by `gig_id` ascending.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Applicants` rows and then its `Gigs` rows before your query
runs. The result format is in the following example.

### Example 1

```text
Input:
Applicants table:
+--------------+--------+-------+
| applicant_id | skill  | level |
+--------------+--------+-------+
| 501          | scrape | 3     |
| 501          | models | 5     |
| 501          | charts | 2     |
| 502          | scrape | 5     |
| 502          | models | 4     |
| 503          | scrape | 2     |
| 503          | models | 5     |
| 504          | charts | 4     |
| 505          | etl    | 5     |
| 505          | report | 2     |
| 505          | charts | 5     |
| 506          | etl    | 4     |
| 506          | report | 4     |
| 507          | etl    | 3     |
| 507          | report | 4     |
| 507          | charts | 3     |
| 508          | charts | 4     |
+--------------+--------+-------+
Gigs table:
+--------+--------+--------+
| gig_id | skill  | demand |
+--------+--------+--------+
| 400    | scrape | 2      |
| 400    | models | 5      |
| 401    | charts | 3      |
| 402    | etl    | 4      |
| 402    | report | 4      |
| 402    | charts | 4      |
| 403    | models | 4      |
| 403    | etl    | 4      |
+--------+--------+--------+
Output:
+--------+--------------+-------+
| gig_id | applicant_id | score |
+--------+--------------+-------+
| 400    | 501          | 110   |
| 401    | 504          | 110   |
| 402    | 505          | 115   |
+--------+--------------+-------+
Explanation: For gig 400, three applicants hold both skills: 501 scores
100 + 10 (scrape 3 above 2) = 110, 502 scores 100 + 10 - 5 (models 4
below 5) = 105, and 503 scores 100 with both levels exact — 501 wins.
For gig 401, applicants 504 and 508 both score 100 + 10 = 110 and the
tie goes to the lower id, 504. For gig 402, only 505 and 507 hold all
three skills; 505 scores 100 + 10 - 5 + 10 = 115 against 507's 90.
Gig 403 needs models and etl together, and nobody holds both, so it
never appears.
```

Write your solution as a single `SELECT` query returning three columns
— `gig_id`, `applicant_id`, and `score` — one row per gig that has at
least one qualifying applicant.
