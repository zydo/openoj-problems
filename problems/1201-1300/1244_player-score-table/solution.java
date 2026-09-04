import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class ScoreTable {

    private final Map<Integer, Integer> scores = new HashMap<>();

    public ScoreTable() {}

    public void recordScore(int playerId, int score) {
        scores.merge(playerId, score, Integer::sum);
    }

    public long topScores(int count) {
        // Removing on reset (not zeroing) keeps zeros out of this sort.
        List<Integer> values = new ArrayList<>(scores.values());
        values.sort((a, b) -> Integer.compare(b, a));
        long sum = 0;
        for (int i = 0; i < count; ++i) sum += values.get(i);
        return sum;
    }

    public void reset(int playerId) {
        scores.remove(playerId);
    }
}
