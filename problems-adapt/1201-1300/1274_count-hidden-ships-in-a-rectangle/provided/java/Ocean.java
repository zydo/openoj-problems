import java.util.List;

/** The hidden ship layout of the counted rectangle (problem-provided oracle).
 *
 * Ships with the problem, compiled with every submission by the judge,
 * never editable in the editor: hasShips(topRight, bottomLeft) answers
 * whether the closed rectangle spanned by those corners holds at least one
 * ship, boundary included, under a 400-call budget. Solvers see only the
 * public API documented in the starter. */
public class Ocean {

    private final int[][] ships;
    private long budget;

    public Ocean(List<Object> shipData, long budget) {
        this.ships = new int[shipData.size()][];
        for (int i = 0; i < shipData.size(); i++) {
            List<Object> point = asPair(shipData.get(i), i);
            this.ships[i] = new int[] { ((Number) point.get(0)).intValue(), ((Number) point.get(1)).intValue() };
        }
        this.budget = budget;
    }

    private static List<Object> asPair(Object value, int index) {
        if (value instanceof List<?> list) {
            @SuppressWarnings("unchecked")
            List<Object> cast = (List<Object>) list;
            return cast;
        }
        throw new IllegalArgumentException("Ship " + index + " must be a pair");
    }

    public boolean hasShips(int[] topRight, int[] bottomLeft) {
        if (budget <= 0) {
            throw new IllegalStateException("Ocean query budget exhausted");
        }
        budget -= 1;
        for (int[] ship : ships) {
            if (
                ship[0] >= bottomLeft[0] && ship[0] <= topRight[0] && ship[1] >= bottomLeft[1] && ship[1] <= topRight[1]
            ) {
                return true;
            }
        }
        return false;
    }
}
