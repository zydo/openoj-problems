function reverseWords(s: string): string {
    // The first word fixes the target vowel count; every later word
    // sharing it is reversed, the rest pass through untouched.
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const count = (w: string): number =>
        [...w].filter((c) => vowels.has(c)).length;
    const words = s.split(" ");
    const target = count(words[0]);
    const out = words.map((w, i) =>
        i > 0 && count(w) === target ? [...w].reverse().join("") : w,
    );
    return out.join(" ");
}
