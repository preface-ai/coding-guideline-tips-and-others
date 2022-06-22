# `git pull --rebase` by default

## Problem

You want to `git pull` to refresh your local `main`/ `master`/ `develop`/ `development` branch but turn out it's either:

1. create an new merge commit for you, or
2. throw a bunch of merge conflicts(that you don't know how to solve so you have to  `git merge --abort`)?

This is because there are new remote change that are not in your local branch and git smart [fast-forward](https://git-scm.com/docs/git-merge#_fast_forward_merge) don't know how to deal with this.

## Suggestion

Here's a suggestion, you can actually change the default `git pull` behaviour from **merge** to **rebase** by setting this:

```shell
git config --global pull.rebase true
```

In a nutshell, it change the git pull behaviour from this:
```shell
git fetch
git merge FETCH_HEAD
```
to this:
```shell
git fetch
git rebase FETCH_HEAD
```

![Git-Pull](https://user-images.githubusercontent.com/15152519/174939333-b2748529-e1ac-4b35-af77-7da72b501233.png)

This is more align with our expectation and there won't be any accidentally merge commit created any more 🫶🏼



Of course, if we can align with how we push change to the remote branch, our remote commit history should be clean enough that the default **fast-forward** should serve us well without any trouble :wink:
