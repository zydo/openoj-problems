class Solution:
    def emitListInReverse(self, sealedListNode: "SealedListNode") -> None:
        # Forward is the only direction the API offers, and output must run
        # backward — recurse to the end first, then print on the way back,
        # letting the call stack hold the not-yet-printed prefix.
        if sealedListNode is None:
            return
        self.emitListInReverse(sealedListNode.successor())
        sealedListNode.emitValue()
