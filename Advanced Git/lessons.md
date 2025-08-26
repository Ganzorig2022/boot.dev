```bash
git log --oneline -1 -p
git commit --amend #
git reset --soft HEAD~1 #
```

#### Log
```bash
git log --oneline # shows a summary of commits
git log --oneline -p # shows a summary of commits with diffs
git log --oneline -2 # shows the last 2 commits
git log --oneline --stat # shows a summary of commits with stats
git log --oneline --graph --decorate --all # shows a graphical representation of the commit
```

#### Branch
```bash
git checkout -b new-branch # create and switch to a new branch
git branch -m new-branch-name # rename the current branch
git branch -d branch-name # delete a LOCAL branch
git branch -D branch-name # force delete a LOCALbranch
git push origin -d branch-name # delete a REMOTE branch

git branch # list all LOCAL branches
git branch -r # list all REMOTE branches
git switch -c new-branch # create and switch to a new branch
```
adadasdsadasdasdasdasdsadas
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
git reflog # find the commit sha at HEAD@{1}. = your memory of past HEAD positions.
HEAD@{1} # one step back in that memory.
git merge HEAD@{1} # "take my old self and merge it into who I am now."
```

#### Merge conflict

```bash
git reflog
git checkout -b another-branch
git merge main
# resolve conflict
git add .
git commit -m "Resolved merge conflict"
git reset --hard HEAD~1 # undo merge commit. one commit backward
git add .
```

#### Resetting Commits. (Removing Commits)

````bash
git reset --soft COMMITHASH # reset to specific commit, KEEPING all changes after it
git reset --hard COMMITHASH # reset to specific commit, DISCARDING all changes after it. But DANGEROUS!. It would be deleted FOREVER!.
````

#### Reverting Commits.  (Undoing Commits)

```bash
git log --oneline # find the commit hash you want to revert
git revert COMMITHASH # undo specific commit, by creating a new commit that reverses the changes made in the specified commit
```

git diff HEAD~1 # shows the changes made in the last commit
git diff COMMITHASH1 COMMITHASH2 # shows the differences between two specific commits
```

#### Revert vs. Reset

# git reset --soft: Undo commits but keep changes staged
# git reset --hard: Undo commits and discard changes
# git revert: Create a new commit that undoes a previous commit