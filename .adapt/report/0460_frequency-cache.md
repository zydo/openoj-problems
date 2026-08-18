## 0460 — LFU Cache

- New id / title / slug: 460 / Frequency Cache / `frequency-cache`
- Old → new API: class `LFUCache` → `FrequencyCache`; methods `get`/`put`
  **kept** (the 0146 ruling: universal map vocabulary, not distinctive)
- Core algorithm / difficulty: doubly linked list of count buckets, each an
  LRU list, hash map to nodes / H4 (unchanged)
- Statement rewritten from spec: yes — "LFU" spelled out as the eviction
  rule in plain terms, kin to `0146_recency-cache` ("Recency Cache")
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - capacity 2, twelve operations (count climb, replace-only use, two
    evictions by fewest uses); capacity 3 (three-way tie broken by staleness,
    then a solo-minimum eviction); capacity 1 (every new key displaces)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design problems offer only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 16/16 cases) compatibility ✓ stale ✓ overlap ✓
  - sandbox judging deferred to the wave's batch run, per the 0146 pilot note

### Notes

- Hidden design cases rename the class inside `actions[0]` only; 13 cases
  rewritten that way, everything else byte-identical (verified
  programmatically against the source file).
- First public-case generation double-wrapped single-arg operations
  (`get` saw `[[7]]` not `[7]`) — the design `params` are the raw argument
  lists, not one wrapping level per action. Caught by verify, worth
  remembering for the other design bundles.
- The second overlap failure came from hints + follow-up inheriting the
  source's sentence skeleton ("a doubly linked list of buckets, each bucket
  holding an LRU list of its keys"). Hints are prose too; rewrite them from
  the reasoning, not from the source's hint wording.
