class PacketBuffer {
    constructor(capacity: number) {}

    receive(source: number, destination: number, timestamp: number): boolean {}

    dispatch(): number[] {}

    countInWindow(destination: number, startTime: number, endTime: number): number {}
}
