import java.util.concurrent.CountDownLatch;

class StageSequence {

    // One one-shot gate per happens-before edge: second waits for the gate
    // first opens, third waits for the gate second opens.
    private final CountDownLatch secondGate = new CountDownLatch(1);
    private final CountDownLatch thirdGate = new CountDownLatch(1);

    public void first(Runnable emitFirst) throws InterruptedException {
        emitFirst.run();
        // Emit before opening the gate, so second can never overtake.
        secondGate.countDown();
    }

    public void second(Runnable emitSecond) throws InterruptedException {
        secondGate.await();
        emitSecond.run();
        thirdGate.countDown();
    }

    public void third(Runnable emitThird) throws InterruptedException {
        thirdGate.await();
        emitThird.run();
    }
}
