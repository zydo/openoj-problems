# Solutions — Tutors Without 2020 Lessons

## Anti-join via a NOT IN subquery on the 2020 tutor_ids

The set of tutors to report is every tutor whose `tutor_id` never
appears among the `Lessons` rows dated in 2020 — including tutors whose
lessons are confined to other years and tutors with no lessons at all.
A subquery `SELECT tutor_id FROM Lessons WHERE strftime('%Y',
lesson_date) = '2020'` collects exactly the tutors disqualified by a
2020 lesson; `WHERE tutor_id NOT IN (...)` against `Tutor` then keeps
every tutor outside that set, regardless of how many other-year lessons
they carry or whether they carry none at all.

`ORDER BY tutor_name` finishes the query with the required ascending
sort on `tutor_name`, matching the result format.

**Complexity:** proportional to the size of `Lessons` plus `Tutor`,
dominated by the subquery's scan of `Lessons` and the final sort of the
qualifying tutors.
