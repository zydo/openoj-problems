import java.util.*;

class Solution {

    public boolean areSentencesSimilarTwo(
        String[] sentence1,
        String[] sentence2,
        String[][] similarPairs
    ) {
        if (sentence1.length != sentence2.length) return false;

        Map<String, String> parent = new HashMap<>();
        for (String[] pair : similarPairs) {
            String ra = find(parent, pair[0]);
            String rb = find(parent, pair[1]);
            if (!ra.equals(rb)) parent.put(ra, rb);
        }

        for (int i = 0; i < sentence1.length; i++) {
            String a = sentence1[i],
                b = sentence2[i];
            if (!a.equals(b) && !find(parent, a).equals(find(parent, b))) {
                return false;
            }
        }
        return true;
    }

    private String find(Map<String, String> parent, String x) {
        parent.putIfAbsent(x, x);
        while (!parent.get(x).equals(x)) {
            parent.put(x, parent.get(parent.get(x)));
            x = parent.get(x);
        }
        return x;
    }
}
