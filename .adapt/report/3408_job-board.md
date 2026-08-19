## 3408 — Design Task Manager

- New id / title / slug: 3408 / Job Board / `job-board`
- Old → new API: `TaskManager` → `JobBoard`; `add` → `post`, `edit` → `reprioritize`, `rmv` → `withdraw`, `execTop` → `runTop`; constructor parameter `tasks` → `jobs`, `taskId` → `jobId` (`userId`, `priority`, `newPriority` kept)
- Core algorithm / difficulty: lazy max-heap keyed on `(priority, taskId)` descending plus a `taskId → (priority, userId)` map as the authority; stale entries discarded on surfacing / H3 (unchanged)
- Statement rewritten from spec: yes (board/job framing, method contracts restated from scratch)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - one action script covering the priority tie broken by higher job id, a reprioritize that overtakes, a withdraw, and the empty-board `-1`; expected `[null, 2, null, null, 1, null, -1]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design kind)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 13/13 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓

### Notes

- Design hidden-case edit: only the `actions` strings were renamed in place
  (`TaskManager/add/edit/rmv/execTop` → the new names); every `params` array
  is byte-identical to the source's.
- Expected values from `.localonly/wave-g-02/cases_3408.py`: a naive oracle
  (dict + full rescan per `runTop`) first reproduced every source case, then
  produced the new public expectation.
- Parameter renames forced one internal cleanup beyond the API: the source's
  local `neg_task` (python) became `neg_job`, and the Java loop variable
  `task` became `job`, so no "task" terminology survives in the bundle.
