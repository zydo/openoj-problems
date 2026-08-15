import java.util.Arrays;

class Solution {

    public int minimumCost(
        int m,
        int n,
        int[] horizontalCut,
        int[] verticalCut
    ) {
        int[] hcuts = horizontalCut.clone();
        int[] vcuts = verticalCut.clone();
        Arrays.sort(hcuts);
        Arrays.sort(vcuts);
        reverse(hcuts);
        reverse(vcuts);
        int i = 0,
            j = 0;
        int hMade = 0,
            vMade = 0;
        long total = 0;
        while (i < hcuts.length && j < vcuts.length) {
            if (hcuts[i] >= vcuts[j]) {
                total += (long) hcuts[i] * (vMade + 1);
                i++;
                hMade++;
            } else {
                total += (long) vcuts[j] * (hMade + 1);
                j++;
                vMade++;
            }
        }
        while (i < hcuts.length) {
            total += (long) hcuts[i] * (vMade + 1);
            i++;
        }
        while (j < vcuts.length) {
            total += (long) vcuts[j] * (hMade + 1);
            j++;
        }
        return (int) total;
    }

    private void reverse(int[] arr) {
        for (int l = 0, r = arr.length - 1; l < r; l++, r--) {
            int t = arr[l];
            arr[l] = arr[r];
            arr[r] = t;
        }
    }
}
