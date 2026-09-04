package main

type Solution struct{}

func (solution *Solution) emitListInReverse(sealedListNode *SealedListNode) {
	// Forward is the only direction the API offers, and output must run
	// backward — recurse to the end first, then print on the way back,
	// letting the call stack hold the not-yet-printed prefix.
	if sealedListNode == nil {
		return
	}
	solution.emitListInReverse(sealedListNode.GetNext())
	sealedListNode.PrintValue()
}
