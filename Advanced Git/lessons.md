```bash
git log --oneline -1 -p
git commit --amend #
git reset --soft HEAD~1 #
```

#### Reflog
> These commands are performing low-level recovery of a lost file using Git’s object database. They’re useful when a file was deleted or history was rewritten, and you can’t restore it using normal commands like git checkout. Each step walks through Git’s data model: HEAD → Commit → Tree → Blob.

```js
// *  Устсан branch-ын сүүлчийн commit-оос эргэж СЭРГЭЭХ - Recovery.
```

`1`. Option 1. 

```bash
git reflog # displays the reference log for the local repository
git cat-file -p commit_hash # shows the content of a specific commit
git cat-file -p tree_hash # shows the content of a tree object
git cat-file -p file_hash # shows the content of a file object
echo "<original contents here>" > lessons.md # restores the original contents of lessons.md


git reflog (find the commit sha at HEAD@{1})
git cat-file -p <commit sha>
git cat-file -p <tree sha>
git cat-file -p <blob sha> > slander.md
git add .
git commit -m "B: recovery"
```

`2`. Option 2. 
> git merge HEAD@{1} merges the changes from the commit at HEAD@{1} into the current branch. This is useful if you want to recover changes that were made in a previous commit without resetting your current branch to that commit.

```bash
git reflog # find the commit sha at HEAD@{1}
git merge HEAD@{1} # merge the changes from that commit into the current branch
```