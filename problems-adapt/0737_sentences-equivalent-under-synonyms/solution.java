import java.util.*;

class Solution {

    public boolean sentencesEquivalent(String[] wordsA, String[] wordsB, String[][] synonyms) {
        // Different lengths can never be similar.
        if (wordsA.length != wordsB.length) return false;

        Map<String, String> parent = new HashMap<>();
        // Symmetry + transitivity: similar exactly when identical or in the
        // same component, so unioning the pairs captures the whole relation.
        for (String[] pair : synonyms) {
            String ra = find(parent, pair[0]);
            String rb = find(parent, pair[1]);
            if (!ra.equals(rb)) parent.put(ra, rb);
        }

        for (int i = 0; i < wordsA.length; i++) {
            String a = wordsA[i],
                b = wordsB[i];
            // Identical words pass; otherwise the roots must agree.
            if (!a.equals(b) && !find(parent, a).equals(find(parent, b))) {
                return false;
            }
        }
        return true;
    }

    private String find(Map<String, String> parent, String x) {
        // Unseen words register as their own singleton component.
        parent.putIfAbsent(x, x);
        // Path halving keeps the structure flat.
        while (!parent.get(x).equals(x)) {
            parent.put(x, parent.get(parent.get(x)));
            x = parent.get(x);
        }
        return x;
    }
}
