## 142 — Design Twitter

- New id / title / slug: 142 / News Board / `news-board`
- Old → new API: class `Twitter` → `NewsBoard`; methods `postTweet` → `postMessage`, `getNewsFeed` → `getFeed`; `follow`/`unfollow` **kept** (universal subscription vocabulary, per the 0146 precedent); parameter `tweetId` → `messageId` (`userId`, `followerId`, `followeeId` kept)
- Core algorithm / difficulty: per-user timestamped timelines + per-user follow sets, feed = size-10 min-heap merge of the last ten entries per source / H3 (unchanged)
- Statement rewritten from spec: yes — "tweet" vocabulary replaced by message/board; the feed semantics (own messages always in, pre-follow messages count, unfollow erases nothing) stated from the spec
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - follow/unfollow cycle on users 3 and 7; a follow that retroactively pulls in an older message (users 2, 5); eleven posts showing the ten-entry cap — a shape the source examples never exercised
- Constraints: domain unchanged (ids ≤ 500, message ids 0–10⁴, ≤ 3·10⁴ calls, no self-follow), presentation rewritten
- Hidden cases: 13, data-identical; only the class/method names inside `actions` renamed (`Twitter` → `NewsBoard`, `postTweet` → `postMessage`, `getNewsFeed` → `getFeed`) — the compatibility gate (source solutions vs these cases) passed, which is the proof the substitution was faithful
- Skeletons regenerated: python3 + java (design problems offer only these — correct, not a bug)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 16/16 cases) sandbox deferred to the batch run (pilot convention) compatibility ✓ stale ✓ overlap ✓

### Notes

- `mk.py` cannot scaffold design bundles (no `method`/`entrypoints`; the
  rename lives in `methods[].name`, `class_name`, and inside `cases.json`
  action strings) — this bundle was assembled with a small JSON transform
  instead.
- First real off-by-one of the chunk: Example 3's expected list needs one
  `null` per action (constructor + eleven posts = twelve), and eleven was
  typed. The gate caught it immediately; the reference output was right.
- The `# noqa: N802 — LeetCode API` comments became `— public API`; worth
  a sweep across future design ports.
