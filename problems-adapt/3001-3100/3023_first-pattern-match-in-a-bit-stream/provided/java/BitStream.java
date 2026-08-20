import java.util.List;

/** The bit channel searched for a pattern (problem-provided oracle).
 *
 * Ships with the problem, compiled with every submission by the judge,
 * never editable in the editor: next() hands out one bit of a finite but
 * generous recorded prefix, in order and without rewinding, under a
 * 1 000 000-call budget. Solvers see only the public API documented in
 * the starter. */
public class BitStream {

    private final int[] bits;
    private long budget;
    private int position;

    public BitStream(List<Object> values, long budget) {
        this.bits = new int[values.size()];
        for (int i = 0; i < values.size(); i++) {
            this.bits[i] = ((Number) values.get(i)).intValue();
        }
        this.budget = budget;
    }

    public int next() {
        if (budget <= 0) {
            throw new IllegalStateException("BitStream query budget exhausted");
        }
        budget -= 1;
        return bits[position++];
    }
}
