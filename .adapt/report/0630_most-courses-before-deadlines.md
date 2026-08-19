## 0630 — Course Schedule III

- New id / title / slug: 630 / Most Courses Before Deadlines /
  `most-courses-before-deadlines`
- Old → new API: `scheduleCourse` → `mostCoursesBeforeDeadlines` (go
  `mostCoursesBeforeDeadlines`, rust `most_courses_before_deadlines`, ts
  `mostCoursesBeforeDeadlines`)
- Core algorithm / difficulty: deadline ordering with max-heap replacement /
  H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - a replacement creates room for three selections; one feasible course;
    three individually impossible courses
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 19/19 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Public expectations were recomputed with the deadline/max-heap greedy.
