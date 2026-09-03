# Films With Splintered Audiences

## Description

Table: `films`

| Column Name | Type    |
| ----------- | ------- |
| film_id     | int     |
| title       | varchar |
| director    | varchar |
| genre       | varchar |
| runtime     | int     |

`film_id` is the unique ID for this table. Each row holds the catalog
information for one film, including its genre and runtime.

Table: `viewings`

| Column Name     | Type    |
| --------------- | ------- |
| viewing_id      | int     |
| film_id         | int     |
| viewer_name     | varchar |
| minutes_watched | int     |
| viewing_rating  | int     |

`viewing_id` is the unique ID for this table. Each row represents one
sitting in which someone watched part of a film; `viewing_rating` is on
a scale of 1 to 5.

A film has a **splintered audience** when its viewers disagree sharply:
it has drawn at least one rating of 4 or higher and at least one rating
of 2 or lower. Call a rating _extreme_ when it is 2 or lower or 4 or
higher — every other rating sits in the middle.

Consider only films with at least 5 viewings. For such a film, report:

- `score_spread`, its highest rating minus its lowest rating.
- `split_score`, the number of extreme ratings it received divided by
  its total number of viewings.

Keep only films whose split score is at least 0.6 — at least 60%
extreme ratings. A film qualifies on its exact ratio; scores are
rounded to two decimal places only as they are reported.

Return the result table ordered by split score in descending order,
then by title in descending order.

Each testcase supplies its own `dataset`: its statements fill both
tables before your query runs. The result format is shown in the
following example.

### Example 1

```text
Input: the films and viewings tables from the dataset below.
films rows:
film_id | title             | director  | genre   | runtime
11      | Copper Valley     | R. Anand  | Western | 142
12      | Glass Orchard     | P. Seo    | Drama   | 118
13      | Midnight Terminal | K. Brandt | Thriller| 156
14      | Salt & Snow       | D. Ferro  | Romance | 101
viewings rows:
viewing_id | film_id | viewer_name | minutes_watched | viewing_rating
401        | 11      | Alba        | 80              | 5
402        | 11      | Boris       | 95              | 1
403        | 11      | Chen        | 70              | 2
404        | 11      | Dara        | 88              | 4
405        | 11      | Emil        | 92              | 5
406        | 11      | Faye        | 75              | 1
407        | 12      | Gil         | 60              | 5
408        | 12      | Hana        | 55              | 4
409        | 12      | Ivo         | 48              | 3
410        | 12      | June        | 62              | 4
411        | 12      | Kofi        | 58              | 5
412        | 12      | Lena        | 50              | 1
413        | 12      | Milo        | 65              | 3
414        | 13      | Nora        | 120             | 4
415        | 13      | Omar        | 150             | 5
416        | 13      | Pia         | 135             | 4
417        | 13      | Quinn       | 140             | 3
418        | 13      | Rosa        | 130             | 4
419        | 14      | Sara        | 90              | 1
420        | 14      | Tomas       | 95              | 3
421        | 14      | Uma         | 100             | 4
422        | 14      | Vik         | 85              | 3
423        | 14      | Wren        | 92              | 3
Output:
film_id | title          | director | genre   | runtime | score_spread | split_score
11      | Copper Valley  | R. Anand | Western | 142     | 4            | 1.00
12      | Glass Orchard  | P. Seo   | Drama   | 118     | 4            | 0.71
Explanation: Copper Valley (film_id = 11) has 6 viewings with ratings
5, 1, 2, 4, 5, 1. It has ratings of 4 or higher (5, 4, 5) and ratings
of 2 or lower (1, 2, 1), so its audience is splintered. Its spread is
5 - 1 = 4, all six ratings are extreme, and the score 6/6 rounds to
1.00, which clears the 0.6 bar. Glass Orchard (film_id = 12) has 7
viewings with ratings 5, 4, 3, 4, 5, 1, 3: both sides are present, the
spread is 4, five of the seven ratings are extreme, and 5/7 = 0.714...
rounds to the reported 0.71 while the exact ratio clears the bar. Not
included: Midnight Terminal (film_id = 13) never drops below 3, so it
lacks any low rating; Salt & Snow (film_id = 14) has both sides but
only 2 of its 5 ratings are extreme, a 0.4 ratio under the 0.6 bar.
```

Answer with one `SELECT` whose output columns are `film_id`, `title`,
`director`, `genre`, `runtime`, `score_spread` and `split_score`, in
that order.
