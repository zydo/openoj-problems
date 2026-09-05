class RideQueue {
  public:
    RideQueue();
    void addRider(int riderId);
    void addDriver(int driverId);
    vector<int> matchDriverWithRider();
    void cancelRider(int riderId);
};
