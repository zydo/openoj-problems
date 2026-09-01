class ParkingAllotter {

    private final int[] slots;

    public ParkingAllotter(int big, int medium, int small) {
        slots = new int[] { 0, big, medium, small };
    }

    public boolean addCar(int carType) {
        if (slots[carType] > 0) {
            slots[carType]--;
            return true;
        }
        return false;
    }
}
