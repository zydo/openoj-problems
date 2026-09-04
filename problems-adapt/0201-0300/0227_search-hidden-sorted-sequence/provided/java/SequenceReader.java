import java.util.List;

/** The hidden sorted sequence of unknown length (problem-provided oracle).
 *
 * Ships with the problem, compiled with every submission by the judge,
 * never editable in the editor: get(k) returns 2^31 - 1 past the end —
 * an unambiguous out-of-range sentinel. Solvers see only the public API
 * documented in the starter. */
public class SequenceReader {

    public static final int SENTINEL = Integer.MAX_VALUE;
    private final int[] arr;
    private long budget;

    public SequenceReader(List<Object> values, long budget) {
        this.arr = new int[values.size()];
        for (int i = 0; i < values.size(); i++) {
            this.arr[i] = ((Number) values.get(i)).intValue();
        }
        this.budget = budget;
    }

    public int get(int index) {
        if (budget <= 0) {
            throw new IllegalStateException("SequenceReader query budget exhausted");
        }
        budget -= 1;
        return index >= 0 && index < arr.length ? arr[index] : SENTINEL;
    }
}
