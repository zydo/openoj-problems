import "strings"

// The first word fixes the target vowel count; every later word sharing it
// is reversed, the rest pass through untouched.
func reverseWords(s string) string {
	words := strings.Split(s, " ")
	target := countVowels(words[0])
	out := make([]string, 0, len(words))
	out = append(out, words[0])
	for _, w := range words[1:] {
		if countVowels(w) == target {
			out = append(out, reverse(w))
		} else {
			out = append(out, w)
		}
	}
	return strings.Join(out, " ")
}

func countVowels(w string) int {
	count := 0
	for _, c := range w {
		if c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' {
			count++
		}
	}
	return count
}

func reverse(w string) string {
	runes := []rune(w)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}
