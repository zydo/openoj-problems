class Solution {

    public int fewestPairingSwaps(int[] line) {
        int n = line.length;
        int[] arr = line.clone();
        int[] pos = new int[n];
        for (int i = 0; i < n; i++) pos[arr[i]] = i;

        int swaps = 0;
        for (int i = 0; i < n; i += 2) {
            int first = arr[i];
            int partner = first ^ 1; // partners are (0,1), (2,3), ...
            if (arr[i + 1] == partner) continue;
            int j = pos[partner];
            int other = arr[i + 1];
            arr[i + 1] = partner;
            arr[j] = other;
            pos[partner] = i + 1;
            pos[other] = j;
            swaps += 1;
        }
        return swaps;
    }
}
