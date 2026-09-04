pub struct PacketBuffer;

impl PacketBuffer {
    pub fn new(capacity: i32) -> Self {
        panic!("TODO")
    }

    pub fn receive(&mut self, source: i32, destination: i32, timestamp: i32) -> bool {
        panic!("TODO")
    }

    pub fn dispatch(&mut self) -> Vec<i32> {
        panic!("TODO")
    }

    pub fn countInWindow(&mut self, destination: i32, startTime: i32, endTime: i32) -> i32 {
        panic!("TODO")
    }
}
