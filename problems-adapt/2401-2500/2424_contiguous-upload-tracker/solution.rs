// Uploaded marks in a boolean array plus a prefix pointer that only
// moves forward. markUploaded() sets one mark; longestReadyPrefix() advances the pointer
// while the next video is already uploaded. The pointer never retreats,
// so its total travel across all calls is bounded by n and every query
// is amortized constant.
pub struct UploadPrefixTracker {
    n: i32,
    uploaded: Vec<bool>,
    prefix: i32,
}

impl UploadPrefixTracker {
    pub fn new(n: i32) -> Self {
        UploadPrefixTracker {
            n,
            uploaded: vec![false; n as usize + 1],
            prefix: 0,
        }
    }

    pub fn markUploaded(&mut self, video: i32) {
        self.uploaded[video as usize] = true;
    }

    pub fn longestReadyPrefix(&mut self) -> i32 {
        while self.prefix < self.n && self.uploaded[(self.prefix + 1) as usize] {
            self.prefix += 1;
        }
        self.prefix
    }
}
