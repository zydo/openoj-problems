import java.util.Arrays;

class Solution {

    public int numberOfWeakCharacters(int[][] properties) {
        int[][] props = properties.clone();
        Arrays.sort(props, (a, b) ->
            b[0] != a[0]
                ? Integer.compare(b[0], a[0])
                : Integer.compare(a[1], b[1])
        );
        int weak = 0;
        int maxDefense = 0;
        for (int[] p : props) {
            if (p[1] < maxDefense) {
                weak++;
            } else {
                maxDefense = p[1];
            }
        }
        return weak;
    }
}
