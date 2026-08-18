## 0146 — LRU Cache

- New id / title / slug: 146 / Recency Cache / `recency-cache`
- Old → new API: class `LRUCache` → `RecencyCache`; methods `get`/`put` **kept** (see note)
- Core algorithm / difficulty: hash map over a doubly linked recency list / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - capacity 2, twelve operations covering hit-refreshes-recency, miss-touches-nothing, replace-without-evicting, and two evictions; capacity 1 showing every new key displaces the last
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design problems offer only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 15/15 cases) sandbox ✓ compatibility ✓ stale ✓ overlap ✓

### Notes for the pilot review

- **ADAPT.md's "hidden cases stay byte-identical" cannot hold literally for
  design problems.** A design case's `actions` list names the class as its
  first action (`"LRUCache"`), so the class rename has to reach into the hidden
  cases. The rule should read: hidden case *data* is unchanged; action names
  are API identifiers and are renamed with the API. Thirteen hidden cases were
  rewritten that way here, and the compatibility gate — which runs the source's
  own solutions against these cases — is what proves the substitution was
  faithful.
- **`get` and `put` were deliberately not renamed.** They are the universal
  map vocabulary, not something distinctive to the source, and ADAPT.md's own
  rule is "never rename merely to differ". The class name, which *is*
  distinctive, was renamed. Worth confirming this reading at the review, since
  it applies to all 48 design problems.
- The statement drops the "LRU" acronym entirely and states the eviction rule
  in plain terms, which is both further from the source and easier to read.
- Sandbox judging (gate 3, mandatory for design) is deferred to a single batch
  run at the end of the pilot, once a stack is pointed at `problems-adapt`.
