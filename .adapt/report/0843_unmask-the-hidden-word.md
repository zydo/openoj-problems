## 843 — Guess the Word

- New id / title / slug: 843 / Unmask the Hidden Word / `unmask-the-hidden-word`
- Old → new API: `findSecretWord` → `unmaskWord` (go `unmaskWord`, rust `unmask_word`); **oracle `Master` → `Interrogator`**; parameter `wordlist` kept; the oracle operation `guess(word)` keeps its name
- Core algorithm / difficulty: minimax-elimination guessing (smallest worst-case agreement bucket) / H3 (unchanged)
- Statement rewritten from spec: yes (naming a hidden word from agreement-count replies; judging paragraph explains the found-flag verdict)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["copper","cobalt","crayon","candle"]`, hidden "crayon" — a three-guess walk quoted in the explanation with computed agreement counts; `["floral","flagon"]`, hidden "floral" — the two-word floor
- Constraints: domain unchanged, presentation rewritten
- Skeletons: all seven languages (python3 + java hand-set in generator shape; cpp/go/rust/js/ts in the 0227 exemplar's shapes)
- Figures: none
- Gates: verify ✓ (7/7 languages, 15/15 cases each) compatibility ✓ (see note) stale ✓ overlap ✓ (after one rework of constraint boilerplate) ; check pending (see note)
- Sandbox: interactive kind, deferred to batch run

### Notes

- Second void interactive in seven languages; rides the harness void fix
  documented in `0489_sweep-the-hidden-room.md` (wrapper generators now
  treat `{"kind": "void"}` as verdict-judged).
- Compatibility verified by running the gate's exact staging with the
  sharded bundle path (see the flat-path note in 0489's report): source
  `solution.py` / `solution.java` renamed `findSecretWord`→`unmaskWord`
  and `Master`→`Interrogator` only, 15/15 both. The gate script itself
  still prints FAIL through the flat-path assembly bug.
- First overlap-gate rework of this chunk: the initial statement borrowed
  two 7-word runs of constraints boilerplate ("consists of lowercase
  English letters / all words …", "is one of the words in") plus the
  "interactive problem / You are given" opening. Rewriting the bullets
  ("Each word in the list has exactly 6 letters, all lowercase English",
  "is a member of `wordlist`") and the opening sentence brought the
  ratio under the limit. Constraint bullets are where interactive
  statements most easily paraphrase — write them from the domain, not
  from the source's wording.
- `check_bundle` still reports "Unsupported interactive oracle:
  Interrogator" — `gen_starters.py`'s `INTERACTIVE_ORACLES` table needs
  the entry (python/java/parameter `interrogator`).
