class JobBoard {
    constructor(jobs: number[][]) {}

    post(userId: number, jobId: number, priority: number) {}

    reprioritize(jobId: number, newPriority: number) {}

    withdraw(jobId: number) {}

    runTop(): number {}
}
