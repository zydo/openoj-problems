import java.util.List;

/** Problem-provided oracle (KindOracle). Compiled with every
 * submission by the judge; never editable in the editor. This file is the
 * hidden implementation — solvers see only the public API documented in
 * the starter. Constructed from the case state (the kinds assignment
 * plus the query budget); only hasSameKind reveals it. */
public class KindOracle {

    private final int[] kinds;
    private long budget;

    public KindOracle(List<Object> values, long budget) {
        this.kinds = new int[values.size()];
        for (int i = 0; i < values.size(); i++) {
            this.kinds[i] = ((Number) values.get(i)).intValue();
        }
        this.budget = budget;
    }

    public boolean hasSameKind(int a, int b) {
        spend();
        if (a < 0 || a >= kinds.length || b < 0 || b >= kinds.length) {
            return false;
        }
        return kinds[a] == kinds[b];
    }

    private void spend() {
        if (budget <= 0) {
            throw new IllegalStateException("KindOracle query budget exhausted");
        }
        budget -= 1;
    }
}
