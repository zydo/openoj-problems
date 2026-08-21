package main

// Problem-provided oracle (Interrogator), Go side. Compiled beside
// every submission by the judge; never editable in the editor.
// Constructed from the case state: the wordlist and the secret word as
// generic values, then the guess budget.
type Interrogator struct {
	secret string
	found  bool
	budget int64
}

// NewInterrogator builds the oracle from the case's construction values
// (the wordlist and the secret word) and the guess budget.
func NewInterrogator(construction []any, budget int64) *Interrogator {
	if _, ok := construction[0].([]any); !ok {
		panic("Interrogator wordlist must be an array")
	}
	secret, ok := construction[1].(string)
	if !ok {
		panic("Interrogator secret must be a string")
	}
	return &Interrogator{secret: secret, budget: budget}
}

// Guess answers the number of positions where word and the secret word
// agree, and records whether the secret itself was named.
func (interrogator *Interrogator) Guess(word string) int {
	if interrogator.budget <= 0 {
		panic("Interrogator guess budget exhausted")
	}
	interrogator.budget--
	if word == interrogator.secret {
		interrogator.found = true
	}
	matches := 0
	n := len(word)
	if len(interrogator.secret) < n {
		n = len(interrogator.secret)
	}
	for i := 0; i < n; i++ {
		if word[i] == interrogator.secret[i] {
			matches++
		}
	}
	return matches
}

// Verdict reports whether the secret word was named within the budget.
func (interrogator *Interrogator) Verdict() any {
	return interrogator.found
}
