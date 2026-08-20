import java.util.List;

/** The hidden mountain sequence (problem-provided oracle). Compiled with
 * every submission by the judge; never editable in the editor. This
 * file is the hidden implementation — solvers see only the public API
 * documented in the starter. Constructed from the case state: the
 * sequence's values, then the query budget. */
public class MountainReader {
    private final int[] mountain;
    private long budget;

    public MountainReader(List<Object> values, long budget) {
        this.mountain = new int[values.size()];
        for (int i = 0; i < values.size(); i++) {
            this.mountain[i] = ((Number) values.get(i)).intValue();
        }
        this.budget = budget;
    }

    public int get(int index) {
        if (budget <= 0) {
            throw new IllegalStateException("MountainReader query budget exhausted");
        }
        budget -= 1;
        if (index < 0 || index >= mountain.length) {
            throw new ArrayIndexOutOfBoundsException("MountainReader index out of range");
        }
        return mountain[index];
    }

    public int length() {
        return mountain.length;
    }
}
