// Bijective base-26: letters are digits 1..26 with no zero, so every step
// subtracts one before dividing; the off-by-one is the whole problem.
func columnLetters(number int) string {
	letters := []byte{}
	for number > 0 {
		// Map 1..26 onto 0..25, borrowing one from the next letter up.
		number--
		letters = append(letters, byte('A'+number%26))
		number /= 26
	}
	// Remainders arrive least-significant letter first.
	for i, j := 0, len(letters)-1; i < j; i, j = i+1, j-1 {
		letters[i], letters[j] = letters[j], letters[i]
	}
	return string(letters)
}
