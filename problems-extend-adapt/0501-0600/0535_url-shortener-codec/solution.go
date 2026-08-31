package main

import (
	"strconv"
	"strings"
)

// Counter-indexed tiny URLs: the object keeps every URL it has encoded,
// in order, and answers with "http://tinyurl.com/" plus the URL's
// 1-based position in that list written in lowercase base-36 — "1" for
// the first, "a" for the tenth, "10" for the 36th.
type UrlCodec struct {
	urls []string
}

func NewUrlCodecTyped() *UrlCodec {
	return &UrlCodec{}
}

func (design *UrlCodec) shorten(longUrl string) string {
	design.urls = append(design.urls, longUrl)
	return "http://tinyurl.com/" + strconv.FormatInt(int64(len(design.urls)), 36)
}

func (design *UrlCodec) expand(shortUrl string) string {
	suffix := strings.TrimPrefix(shortUrl, "http://tinyurl.com/")
	position, _ := strconv.ParseInt(suffix, 36, 64)
	return design.urls[int(position)-1]
}
