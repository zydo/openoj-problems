import java.util.PriorityQueue;

class KthLargest {

    // Min-heap holding exactly the k largest scores seen so far: the heap
    // minimum is the kth largest element of the whole pool.
    private final int k;
    private final PriorityQueue<Integer> heap = new PriorityQueue<>();

    public KthLargest(int k, int[] nums) {
        this.k = k;
        for (int value : nums) {
            heap.offer(value);
        }
        while (heap.size() > k) {
            heap.poll();
        }
    }

    public int add(int val) {
        heap.offer(val);
        if (heap.size() > k) {
            heap.poll();
        }
        return heap.peek();
    }
}
