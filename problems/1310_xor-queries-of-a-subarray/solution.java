class Solution {

    public int[] xorQueries(int[] arr, int[][] queries) {
        int n = arr.length;
        int[] prefix = new int[n + 1];
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] ^ arr[i];
        }
        int[] result = new int[queries.length];
        for (int q = 0; q < queries.length; q++) {
            result[q] = prefix[queries[q][1] + 1] ^ prefix[queries[q][0]];
        }
        return result;
    }
}
