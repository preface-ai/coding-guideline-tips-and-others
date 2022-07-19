# `git reset [--soft | --mixed | --hard] [HEAD]`

## Problem

When you have a messy commit history in your github project, you may want to discard some unrelated or useless changes. 
In this situation, we can move the repository back to a previous commit , discarding any changes made after that commit.

## Suggestion

`git reset` can be used for this reason.

Before doing `git reset`, we need to find the point we want to return to. To do that, we need to go through the log.
```shell
git log --oneline
```

Then, we can reset our repository back to the specific commit using `git reset commithash` 
(`commithash` being the first 7 characters of the commit hash we found in the log)

However, there are 3 common options to use `git reset`. They are:

1. `git reset --mixed`:
   - it keeps all files the same but unstages the changes
   - Common situation:
     - to remove all staged files in the Index, 
       we can execute git reset HEAD to unstage all the files to be submitted that have been included in the Index.

2. `git reset --soft`:
   - it will keep your files, and stage all changes back automatically.
   - Common situation:
     - When we want to merge the commit records that are not meaningful between the "current head" and the "reset target head" 
       (may be frequently submitted in stages), we can consider using Soft Reset to make the commit history clearer.
     - it is similar to `--mixed`, but the difference between them is whether stage or not stage. Therefore, you may use `--soft`
       when you have to use the changes and will commit them back.

3. `git reset --hard`:
   - it will completely destroy any changes and remove them from the local directory
   - Situation:
     - to force recover the original data content and status when you want to discard all current local changes
     - Use it when you want to discard all changes after the target head
