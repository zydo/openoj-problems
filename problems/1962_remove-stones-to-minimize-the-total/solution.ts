function minStoneSum(piles: number[], k: number): number {
    const heap = piles.slice();
    const n = heap.length;
    const siftDown = (i: number, size: number): void => {
        while (true) {
            let l = 2 * i + 1,
                r = 2 * i + 2,
                largest = i;
            if (l < size && heap[l] > heap[largest]) largest = l;
            if (r < size && heap[r] > heap[largest]) largest = r;
            if (largest === i) break;
            const tmp = heap[i];
            heap[i] = heap[largest];
            heap[largest] = tmp;
            i = largest;
        }
    };
    for (let i = (n >> 1) - 1; i >= 0; i--) siftDown(i, n);
    for (let step = 0; step < k; step++) {
        const top = heap[0];
        if (top === 1) break;
        heap[0] = top - Math.floor(top / 2);
        siftDown(0, n);
    }
    let total = 0;
    for (const p of heap) total += p;
    return total;
}
