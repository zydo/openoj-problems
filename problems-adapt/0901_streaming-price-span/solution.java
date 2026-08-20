import java.util.ArrayDeque;
import java.util.Deque;

class PriceSpanTracker {

    // Monotonic stack of [price, span] with strictly decreasing prices: each
    // day absorbs the spans of the popped entries (prices <= today's).
    private final Deque<int[]> stack = new ArrayDeque<>();

    public PriceSpanTracker() {}

    public int record(int price) {
        int span = 1;
        while (!stack.isEmpty() && stack.peek()[0] <= price) {
            span += stack.pop()[1];
        }
        stack.push(new int[] { price, span });
        return span;
    }
}
