import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;

class PlayerRatings {

    private final Map<String, int[]> info = new HashMap<>(); // player -> {rating, cuisineId}
    private final Map<String, Integer> cuisineIds = new HashMap<>();
    private final List<String> cuisineNames = new ArrayList<>();
    private final List<PriorityQueue<int[]>> byCuisine = new ArrayList<>(); // {-rating, foodId}
    private final List<String> foodNames = new ArrayList<>();
    private final Map<String, Integer> foodIds = new HashMap<>();

    public PlayerRatings(String[] players, String[] teams, int[] scores) {
        for (int index = 0; index < players.length; index++) {
            Integer cuisineId = cuisineIds.get(teams[index]);
            if (cuisineId == null) {
                cuisineId = cuisineNames.size();
                cuisineIds.put(teams[index], cuisineId);
                cuisineNames.add(teams[index]);
                byCuisine.add(
                    new PriorityQueue<>((a, b) -> {
                        if (a[0] != b[0]) {
                            return Integer.compare(a[0], b[0]);
                        }
                        return foodNames.get(a[1]).compareTo(foodNames.get(b[1]));
                    })
                );
            }
            int foodId = foodNames.size();
            foodNames.add(players[index]);
            foodIds.put(players[index], foodId);
            info.put(players[index], new int[] { scores[index], cuisineId });
            // Heap min of {-rating, foodId} is exactly the required winner:
            // highest rating first, ties to the lexicographically smaller name.
            byCuisine.get(cuisineId).offer(new int[] { -scores[index], foodId });
        }
    }

    public void setRating(String player, int score) {
        // Lazy deletion: push a fresh entry and leave the outdated one in the
        // heap as garbage; only the info map holds the current rating.
        int[] record = info.get(player);
        record[0] = score;
        byCuisine.get(record[1]).offer(new int[] { -score, foodIds.get(player) });
    }

    public String bestPlayer(String team) {
        PriorityQueue<int[]> heap = byCuisine.get(cuisineIds.get(team));
        while (!heap.isEmpty()) {
            int[] top = heap.peek();
            // An entry is stale when its rating disagrees with the player's
            // current rating; a valid top is peeked, never consumed.
            if (info.get(foodNames.get(top[1]))[0] == -top[0]) {
                return foodNames.get(top[1]);
            }
            heap.poll();
        }
        return "";
    }
}
