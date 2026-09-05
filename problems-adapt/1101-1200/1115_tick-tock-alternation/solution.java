import java.util.concurrent.Semaphore;

class TickTockPair {

    // One permit starts on tick's side, so the alternation opens with "tick";
    // each print hands the single permit to the other method.
    private final int n;
    private final Semaphore fooPermit = new Semaphore(1);
    private final Semaphore barPermit = new Semaphore(0);

    public TickTockPair(int n) {
        this.n = n;
    }

    public void tick(Runnable emitTick) throws InterruptedException {
        for (int i = 0; i < n; i++) {
            fooPermit.acquire();
            emitTick.run();
            barPermit.release();
        }
    }

    public void tock(Runnable emitTock) throws InterruptedException {
        for (int i = 0; i < n; i++) {
            barPermit.acquire();
            emitTock.run();
            fooPermit.release();
        }
    }
}
