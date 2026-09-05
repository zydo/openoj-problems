import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

class JobBoard {

    private final Map<Integer, long[]> jobs = new HashMap<>(); // jobId -> {priority, userId}
    private final PriorityQueue<long[]> heap = new PriorityQueue<>((a, b) -> {
        if (a[0] != b[0]) {
            return Long.compare(b[0], a[0]); // higher priority first
        }
        return Long.compare(b[1], a[1]); // higher jobId first
    });

    public JobBoard(int[][] jobs) {
        for (int[] job : jobs) {
            this.jobs.put(job[1], new long[] { job[2], job[0] });
            heap.offer(new long[] { job[2], job[1], job[0] });
        }
    }

    public void post(int userId, int jobId, int priority) {
        jobs.put(jobId, new long[] { priority, userId });
        heap.offer(new long[] { priority, jobId, userId });
    }

    public void reprioritize(int jobId, int newPriority) {
        long[] record = jobs.get(jobId);
        record[0] = newPriority;
        heap.offer(new long[] { newPriority, jobId, record[1] });
    }

    public void withdraw(int jobId) {
        jobs.remove(jobId);
    }

    public int runTop() {
        while (!heap.isEmpty()) {
            long[] top = heap.peek();
            long[] record = jobs.get((int) top[1]);
            if (record != null && record[0] == top[0]) {
                heap.poll();
                jobs.remove((int) top[1]);
                return (int) top[2];
            }
            heap.poll();
        }
        return -1;
    }
}
