impl Solution {
    pub fn neutralize_address(address: String) -> String {
        // A single global replacement is the whole algorithm: the input is a
        // valid IPv4 address, so every '.' sits between numeric segments and
        // each one becomes "[.]".
        address.replace('.', "[.]")
    }
}
