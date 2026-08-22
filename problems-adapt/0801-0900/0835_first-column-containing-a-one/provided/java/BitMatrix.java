import java.util.List;

/** The hidden row-sorted bit grid (problem-provided oracle).
 *
 * Ships with the problem, compiled with every submission by the judge,
 * never editable in the editor: get(row, col) returns one entry and
 * dimensions() the shape, under a 1000-call budget on get. Solvers see
 * only the public API documented in the starter. */
public class BitMatrix {

    private final int[][] matrix;
    private long budget;

    public BitMatrix(List<Object> rows, long budget) {
        this.matrix = new int[rows.size()][];
        for (int r = 0; r < rows.size(); r++) {
            List<Object> rowValues = asRow(rows.get(r), r);
            this.matrix[r] = new int[rowValues.size()];
            for (int c = 0; c < rowValues.size(); c++) {
                this.matrix[r][c] = ((Number) rowValues.get(c)).intValue();
            }
        }
        this.budget = budget;
    }

    private static List<Object> asRow(Object value, int index) {
        if (value instanceof List<?> list) {
            @SuppressWarnings("unchecked")
            List<Object> cast = (List<Object>) list;
            return cast;
        }
        throw new IllegalArgumentException("Row " + index + " must be a list");
    }

    public int get(int row, int col) {
        if (budget <= 0) {
            throw new IllegalStateException("BitMatrix query budget exhausted");
        }
        budget -= 1;
        return matrix[row][col];
    }

    public List<Integer> dimensions() {
        return List.of(matrix.length, matrix.length == 0 ? 0 : matrix[0].length);
    }
}
