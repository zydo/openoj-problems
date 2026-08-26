# Blocked problems — six-fleet extend wave (record as of 2026-08-26)

All 17 problems marked `blocked` across ROSTER-remaining-{A..F}.json,
with consolidated reasons. Full per-problem evidence lives in the fleet
bookkeeping: `.localonly/resplit/part-*/blocked.md` and
`.localonly/fleetA_*/blocked_notes.md` (crawl paths, harness line
references, probe transcripts). Crawl originals:
`~/code/lc-crawl/problems/<shard>/<id>-<slug>.md`.

None of these are authoring failures — every one is a judge-contract /
wire-codec limitation. Unblock classes are listed at the end.

## Fleet A (8)

### 1116 print-zero-even-odd (1101-1200)
Value-carrying callback concurrent API. Every method takes a one-int-arg
callback (`zero(printNumber: Callable[[int], None])`); the judged series IS
the callback stream. The python_harness `_invoke_concurrent` binds a
zero-arg fixed-token lambda per scheduled call, so no value can travel;
the Java harness casts each emits to `(Runnable) () -> events.add(...)`.
Same class as 1195.

### 1195 fizz-buzz-multithreaded (1101-1200)
`number(printNumber: Callable[[int], None])` requires calling the callback
with a different integer per emission. Same single fixed-token callback
limitation as 1116.

### 1226 the-dining-philosophers (1201-1300)
Concurrent API needing FIVE distinct release callbacks per call; the judge
harness supplies exactly one `emits` callback per scheduled call.

### 1237 find-positive-integer-solution-for-a-given-equation (1201-1300)
The judged artifact is a list of [x, y] pairs, but
`runner/executors/rust_interactive.py:279-283` hardcodes i32 return
serialization (`openoj_json_i32(actual)`) for every non-void interactive
method. Porting rust_design's trait-based return mechanism would unblock.
(1236/1242 landed by redefining judging to an oracle verdict(); impossible
here — probing f(x,y) cannot recover the answer set.)

### 1279 traffic-light-controlled-intersection (1201-1300)
Concurrent API needing TWO distinct callbacks per call (carArriving /
carEntering). Same single-emits limitation as 1226.

### 1474 delete-n-nodes-after-m-nodes-of-a-linked-list (1401-1500)
Pointer-wired ListNode input (blocked class 1). The function-kind codec has
no linked-list wire type in invocation grammar (`value_type.kind`: integer/
string/array/boolean/number/binary_tree only).

### 1485 clone-binary-tree-with-random-pointer (1401-1500)
Node carries left/right plus a random cross-pointer (class 1). Node
identity/addressing is not expressible on the JSON wire — and cloning IS
the task, so any identity-preserving encoding hands over the answer.

### 1490 clone-n-ary-tree (1401-1500)
Arbitrary-branching children lists (class 2) with deep identity-preserving
traversal required; no wire encoding exists (parent-array/edge-list graphs
are fine, but children order + structure is the object being cloned).

## Fleet D (6)

### 2755 deep-merge-of-two-objects (2701-2800)
No arbitrary-JSON wire kind. The typed function stream supports exactly
seven value kinds (integer, number, boolean, string, array, linked_list,
binary_tree); deepMerge needs parameters whose shape varies per case
(object/array/scalar/null) and an arbitrary-JSON return. Proven empirically:
gen_starters KeyError ('items'); every executor's prepare() raises
"Parameter 1 needs a supported value type". ~14 crawl problems in D's range
need exactly this kind (2754-2759, 2774-2777, 2794-2797).

### 2757 generate-circular-array-values (2701-2800)
Solution must RETURN a JS generator object stepped via gen.next(jump).
No generator/handle kind exists; inverted-oracle fails because the
SOLUTION provides the live callable for the judge to step — no design/
interactive mechanism hands back a handle.

### 2758 next-day (2701-2800)
js/ts-only problem enhancing Date prototypes; the parameter IS a Date
instance. No date/object kind on the typed stream; JSON.parse assumption
does not hold (dates arrive as Date objects, not plain JSON).

### 2759 convert-json-string-to-object (2701-2800)
parse(str): string in, arbitrary-JSON out. Runtime return path PROVEN
working (probe bundle js 9/9, ts 9/9), but the contract layer cannot express
it truthfully: function_signature requires a declared return kind from the
seven, and every declarable kind renders a CONCRETE TS starter annotation —
tsc-fatal TS2322 for the actual unknown-shaped return. Second wall: the
family is js/ts-only at the source, but gen_starters emits ALL SEVEN
starters unconditionally and check.py requires byte-exact regeneration +
a solution per starter (landed 3037/2756 reduced sets flag STALE today —
reduced language subsets are drift, not a mechanism). Also measured:
judge-side serialization is recursive, dies between depth 1000-2500; cases
must stay <=~500 deep regardless of solution quality.

### 2773 height-of-special-binary-tree (2701-2800)
Blocked class 1 variant: leaves b1..bk are wired into a RING (leaf bi's
right child is b_(i+1), left child is b_(i-1), wrapping). The binary_tree
codec cannot express circular pointer wiring.

### 2776 convert-callback-based-function-to-promise-based-function (2701-2800)
js/ts-only promisify(fn); judging requires observing the RESOLVED or
REJECTED value of a promise. The synchronous interactive wrapper that
landed 2754/2756/2774 cannot capture async promise outcomes; also
function-valued parameters (subclass of the 2755 class).

## Fleet E (2)

### 3263 convert-doubly-linked-list-to-array-i (3201-3300)
Doubly-linked list input: nodes carry val, prev, AND next with both
directions consistent. common/ has only singly-wired ListNode; a doubly-
linked wire type is a common/VERSION.json contract extension affecting
every fleet, not a bundle-local choice. Serializing to a plain value array
makes the task an identity copy — forbidden mechanical rewrite.

### 3294 convert-doubly-linked-list-to-array-ii (3201-3300)
Same doubly-wire blocker as 3263, plus the solution receives an INTERIOR
node reference (not the head), so the wire would additionally need to
encode which node is passed.

---

## Unblock classes (judge-contract extensions)

1. **Arbitrary-JSON kind** ("kind": "json" -> JSDoc {any} / TS unknown):
   unblocks 2755, 2758, 2759-Wall-1, and most of the JS/TS-only family
   (2754-2759, 2774-2777, 2794-2797 shapes). Return side already proven
   at runtime; parameter encode side uses the existing self-describing
   tagged stream (encode_tagged) already present for interactive/design.
2. **Per-bundle language subset** (honor e.g. invocation.languages in
   gen_starters.starter_files() + check.py static tier): required for any
   js/ts-only family bundle (2759 Wall 2; currently reduced starter sets
   are indistinguishable from drift).
3. **Value-carrying / multi-callback concurrent wires** (schedule entries
   naming N distinct callbacks and/or carrying arguments): unblocks
   1116, 1195, 1226, 1279.
4. **Rust interactive generic return serialization** (port trait-based
   mechanism from rust_design.py): unblocks 1237.
5. **Linked-list / doubly-linked / n-ary / random-pointer wire types**
   (common/VERSION.json extension): unblocks 1474, 1485, 1490, 2773,
   3263, 3294. Interior-node addressing (3294) needs "which node is
   passed" encoding too.
6. **Generator/handle returns + promise-outcome capture**: unblocks
   2757, 2776 (hardest class; needs live-object handles across the wire).
