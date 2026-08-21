class PacketBuffer {

    public PacketBuffer(int capacity) {}

    public boolean receive(int source, int destination, int timestamp) {}

    public int[] dispatch() {}

    public int countInWindow(int destination, int startTime, int endTime) {}
}
