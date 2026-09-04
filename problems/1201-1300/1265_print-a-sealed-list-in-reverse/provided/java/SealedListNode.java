/** The immutable-list-node API (problem-provided oracle).
 *
 * Ships with the problem, compiled with every submission by the judge,
 * never editable in the editor: the case's linked list is materialized
 * internally and only the sealedListNode is handed to the solution — every other
 * node is reachable solely through successor(). emitValue records into an
 * ordered transcript that becomes the judged output. Solvers see only
 * the public API documented in the starter. */
public class SealedListNode {

    private int value;
    private SealedListNode next;
    private long budget;
    private java.util.List<Integer> transcript;

    // The class declares EXACTLY ONE constructor on purpose: the harness
    // selects an oracle constructor by parameter count alone. The judge
    // calls it with the case's serialized list plus the query budget; the
    // chain is wired here, before any solver code runs.
    public SealedListNode(String sealedListNode, long budget) {
        String trimmed = sealedListNode == null ? "" : sealedListNode.trim();
        java.util.List<Integer> parsed = new java.util.ArrayList<>();
        if (!trimmed.isEmpty()) {
            for (String part : trimmed.split(",")) {
                parsed.add(Integer.parseInt(part.trim()));
            }
        }
        this.value = parsed.isEmpty() ? 0 : parsed.get(0);
        this.budget = budget;
        this.transcript = new java.util.ArrayList<>();
        SealedListNode tail = null;
        for (int i = parsed.size() - 1; i >= 1; --i) {
            SealedListNode node = new SealedListNode("0", 0);
            node.value = parsed.get(i);
            node.budget = Long.MAX_VALUE;
            node.transcript = this.transcript;
            node.next = tail;
            tail = node;
        }
        this.next = tail;
    }

    public void emitValue() {
        if (budget <= 0) {
            throw new IllegalStateException("SealedListNode query budget exhausted");
        }
        budget -= 1;
        transcript.add(value);
    }

    /** Returns the next node, or null past the end of the list. */
    public SealedListNode successor() {
        return next;
    }

    /** The observable effect: the exact sequence of printed values. */
    public java.util.List<Integer> verdict() {
        return new java.util.ArrayList<>(transcript);
    }
}
