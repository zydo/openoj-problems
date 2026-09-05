# Locate Duplicate Files by Content

## Description

You are given a list `paths` describing a file system snapshot: one entry
per directory, listing that directory's path together with every file it
holds and each file's contents. Two files are duplicates when their
contents match exactly, regardless of name or location. Return every group
of duplicate files, each group given as the list of full paths to the
files that share one content. Groups and files may come back in any order,
except see the tie-break note below.

Each entry of `paths` packs a directory and its files into one string:

```text
"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"
```

This describes `n` files (`f1.txt` through `fn.txt`, `n >= 1`) with the
given contents living in directory `"root/d1/d2/.../dm"` (`m >= 0`; `m = 0`
means the directory is the root itself). A returned file path always has
the form:

```text
"directory_path/file_name.txt"
```

For a deterministic answer, this judge fixes the order the specification
otherwise leaves open: within a group the paths appear in input scan
order — directories as listed, files within a directory as listed — and
the groups themselves are ordered by descending lexicographic order of
their shared content. Example 1 lists its output in exactly this order.

### Example 1

```text
Input: paths = ["root/x foo.txt(hello) bar.txt(world)","root/y baz.txt(hello)","root/y/z qux.txt(world)","root quux.txt(world)"]
Output: [["root/x/bar.txt","root/y/z/qux.txt","root/quux.txt"],["root/x/foo.txt","root/y/baz.txt"]]
```

### Example 2

```text
Input: paths = ["root/x foo.txt(hello) bar.txt(world)","root/y baz.txt(hello)","root/y/z qux.txt(world)"]
Output: [["root/x/bar.txt","root/y/z/qux.txt"],["root/x/foo.txt","root/y/baz.txt"]]
```

### Constraints

- `1 <= paths.length <= 2 * 10⁴`
- `1 <= paths[i].length <= 3000`
- `1 <= sum(paths[i].length) <= 5 * 10⁵`
- `paths[i]` consists of English letters, digits, `'/'`, `'.'`, `'('`, `')'`,
  and `' '`.
- No file or directory shares a name with a sibling in the same directory.
- Each entry of `paths` describes a distinct directory, and a single blank
  space separates the directory path from the file listing that follows it.

### Follow-up

- Picture a real, on-disk file system instead of this in-memory list — would
  you search it depth-first or breadth-first, and why?
- Contents on the order of gigabytes would make holding every file in memory
  impossible. How would the approach change?
- Now suppose reads are limited to 1 KB at a time per call — how does that
  reshape the comparison strategy?
- Under that revised approach, what is the time complexity, which step
  dominates time and which dominates memory, and how might each be improved?
- How would you guarantee that files flagged as duplicates are never a false
  match?
