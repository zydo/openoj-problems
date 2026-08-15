import java.util.*;

class Solution {

    public String[][] accountsMerge(String[][] accounts) {
        Map<String, String> parent = new HashMap<>();
        Map<String, String> owner = new HashMap<>();

        for (String[] account : accounts) {
            for (int i = 1; i < account.length; i++) {
                parent.putIfAbsent(account[i], account[i]);
                owner.put(account[i], account[0]);
            }
            for (int i = 2; i < account.length; i++) {
                union(parent, account[1], account[i]);
            }
        }

        Map<String, TreeSet<String>> groups = new LinkedHashMap<>();
        for (String[] account : accounts) {
            for (int i = 1; i < account.length; i++) {
                String root = find(parent, account[i]);
                groups
                    .computeIfAbsent(root, r -> new TreeSet<>())
                    .add(account[i]);
            }
        }

        List<String[]> merged = new ArrayList<>();
        for (Map.Entry<String, TreeSet<String>> e : groups.entrySet()) {
            List<String> row = new ArrayList<>();
            row.add(owner.get(e.getKey()));
            row.addAll(e.getValue());
            merged.add(row.toArray(new String[0]));
        }
        return merged.toArray(new String[0][]);
    }

    private String find(Map<String, String> parent, String x) {
        parent.putIfAbsent(x, x);
        while (!parent.get(x).equals(x)) {
            parent.put(x, parent.get(parent.get(x)));
            x = parent.get(x);
        }
        return x;
    }

    private void union(Map<String, String> parent, String a, String b) {
        String ra = find(parent, a),
            rb = find(parent, b);
        if (!ra.equals(rb)) parent.put(ra, rb);
    }
}
