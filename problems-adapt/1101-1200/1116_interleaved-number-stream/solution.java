import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.ReentrantLock;
import java.util.function.IntConsumer;

class NumberStream {

    private final int n;
    // The series is 0, 1, 0, 2, ...: position is the next number to emit,
    // and zeroDue tells whether the 0 in front of it comes first.
    private int position = 1;
    private boolean zeroDue = true;
    private final ReentrantLock lock = new ReentrantLock();
    private final Condition advanced = lock.newCondition();

    public NumberStream(int n) {
        this.n = n;
    }

    // Emit the next 0 when it is this thread's turn; false once the series
    // is complete.
    private boolean zeroStep(IntConsumer emitNumber) throws InterruptedException {
        lock.lock();
        try {
            while (!zeroDue && position <= n) {
                advanced.await();
            }
            if (position > n) {
                advanced.signalAll();
                return false;
            }
            emitNumber.accept(0);
            zeroDue = false;
            advanced.signalAll();
            return true;
        } finally {
            lock.unlock();
        }
    }

    // Emit position when it is a number's turn and this thread's parity;
    // false once the series is complete.
    private boolean numberStep(IntConsumer emitNumber, java.util.function.IntPredicate matches)
        throws InterruptedException {
        lock.lock();
        try {
            while (true) {
                if (position > n) {
                    advanced.signalAll();
                    return false;
                }
                if (!zeroDue && matches.test(position)) {
                    emitNumber.accept(position);
                    ++position;
                    zeroDue = true;
                    advanced.signalAll();
                    return true;
                }
                advanced.await();
            }
        } finally {
            lock.unlock();
        }
    }

    public void zero(IntConsumer emitNumber) throws InterruptedException {
        while (zeroStep(emitNumber)) {}
    }

    public void even(IntConsumer emitNumber) throws InterruptedException {
        while (numberStep(emitNumber, value -> value % 2 == 0)) {}
    }

    public void odd(IntConsumer emitNumber) throws InterruptedException {
        while (numberStep(emitNumber, value -> value % 2 == 1)) {}
    }
}
