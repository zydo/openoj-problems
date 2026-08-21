class NewsBoard:
    def __init__(self):
        raise NotImplementedError("TODO")

    def postMessage(self, userId: int, messageId: int):
        raise NotImplementedError("TODO")

    def getFeed(self, userId: int) -> list[int]:
        raise NotImplementedError("TODO")

    def follow(self, followerId: int, followeeId: int):
        raise NotImplementedError("TODO")

    def unfollow(self, followerId: int, followeeId: int):
        raise NotImplementedError("TODO")
