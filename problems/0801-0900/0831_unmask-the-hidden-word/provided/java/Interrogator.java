/** The hidden-word interrogator (problem-provided oracle). Compiled with
 * every submission by the judge; never editable in the editor. This
 * file is the hidden implementation — solvers see only the public API
 * documented in the starter. Constructed from the case state: the
 * wordlist and the secret word, then the guess budget. */
public class Interrogator {
    private final String secret;
    private long budget;
    private boolean found;

    public Interrogator(java.util.List<Object> wordlist, String secret, long budget) {
        this.secret = secret;
        this.budget = budget;
    }

    public int guess(String word) {
        if (budget <= 0) {
            throw new IllegalStateException("Interrogator guess budget exhausted");
        }
        budget -= 1;
        if (word.equals(secret)) {
            found = true;
        }
        int matches = 0;
        for (int i = 0; i < Math.min(word.length(), secret.length()); i++) {
            if (word.charAt(i) == secret.charAt(i)) {
                matches += 1;
            }
        }
        return matches;
    }

    public Object verdict() {
        return found;
    }
}
