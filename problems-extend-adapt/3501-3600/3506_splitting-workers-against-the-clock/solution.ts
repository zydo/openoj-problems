function splitScheduleTime(jobs: number[], splitTime: number): number {
    // The splitting process is a full binary tree: a leaf at depth d is a
    // worker that starts working at d * splitTime. Deadline T is reachable iff
    // job i can sit on a leaf of depth d <= (T - jobs[i]) //
    // splitTime, and legal leaf-depth multisets are exactly the
    // Kraft-legal ones (sum 2^-d <= 1) -- minimized by taking every job
    // at its full depth bound. Binary search the minimal T. Slot sums are
    // capped by 2^30 and deadlines by ~1e14, both far below 2^53, so plain
    // numbers stay exact.
    const n = jobs.length;
    let mx = 0;
    for (const t of jobs) {
        if (t > mx) mx = t;
    }
    let lo = mx + splitTime;
    let hi = mx + (n - 1) * splitTime;

    const feasible = (deadline: number): boolean => {
        let slots = 0;
        let deep = 0;
        for (const t of jobs) {
            const d = Math.floor((deadline - t) / splitTime);
            if (d < 1) return false;
            if (d > 30) {
                // bounds past depth 30 fit together in less than one 2^-30
                // unit of slack (n < 2^17 jobs), so count all of them
                // as a single unit
                deep = 1;
            } else {
                slots += 1 << (30 - d);
                if (slots > 1 << 30) return false;
            }
        }
        return slots + deep <= 1 << 30;
    };

    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (feasible(mid)) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
}
