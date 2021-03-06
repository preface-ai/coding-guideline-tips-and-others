---
sidebar_position: 2
tags:
  - trunk
  - git
  - github
---

# Git Development Workflow

## Terminology

### Trunk branch

- the main branch of the repository
- in Github, it should be the default branch and it normally named as `main`
- for legacy issue, the trunk branch of following repository have different naming:
  - https://github.com/preface-ai/preface-website-frontend
    - Trunk branch `develop`
  - https://github.com/preface-ai/preface-nomad-b
    - Trunk branch `development`

## Suggested Git Development Workflow

### Make sure your local trunk branch is in sync with remote

- Make sure you are at the trunk branch first
  ```bash
    git checkout main
    # please replace main with develop or development accordingly if you work on specific repository
  ```
- pull the latest code from remote
  ```bash
    git pull
  ```
- ⭐️ Advance Tips:
  - If you know git well enough, you can create and checkout your feature branch from latest remote `main` branch driectly without touching your local `main` branch
  - Feel free to do it in alternative way if you know exactly what you are doing.

### Create & Checkout a new feature branch

- run this
  ```bash
    git checkout -b your-feature-branch-name
  ```
  - please replace `your-feature-branch-name` with your target feature branch naming
  - make sure the branch name is unique and easy to understand.

### Work on your code change on the feature branch

- Try to split your task into multiple milestone and focus on single milestone each time
- when current milestone is complete, feel free to commit your code change in your local.
- you can leverage your IDE(VS Code is our recommended IDE) to add & commit your code change interactively, or...
- you can use [`git add`](https://git-scm.com/docs/git-add) & [`git commit`](https://git-scm.com/docs/git-commit) to commit your code change if you want to go hardcore 👩🏼‍🎤
- you can have as many commits as you want because at the end they will become a single squashed commit after merge via Pull Request

### Push your local feature branch to remote

- When you finish all your milestone of the task, you can run following to push all of your commit in local feature branch to remote

```bash
git push --set-upstream origin your-feature-branch-name

# In fact, you can just type `git push`, git will do nothing but hint you with the same command above.
# this setting give you a option to change the remote branch name(branch name between local and remote are not necessary be the same)
```

- Alternatively, you can update your git config [push.autoSetupRemote](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushautoSetupRemote) to always set upstream with the same branch naming. You can just `git push` all alone after this change:
  ```bash
  git config --global --add --bool push.autoSetupRemote true
  ```
- Tips: If you already set your local feature branch to with the remote but you still want to commit new change:
  - you can still do it and push the change to remote again via `git push`

### Submit a Pull Request(PR) to trunk branch

- After you feature branch get push to remote, you should be able to find your branch on github
- You can than create a pull request from your branch to the trunk `main`
- Make sure you provide:
  - Meaningful title of the Pull request. Suggest include Clickup ID if the task is related to a Clickup ticket
  - Briefly explain what & why this PR is for, if the repository you are working on have a pull request template, make sure to follow it.
  - Annotate yourself as the assignee

### Request Code review & update your code based on feedback

- Annotate your code reviewer in the Pull Request
- Please send the link of this PR to your targeted Code Reviewer via our Slack Channel `team-tech`
- Wait until your coder reviewer have left you feedback of the code(async-ly in the PR, or provided face-to-face)
- Based on the feedback, if you need further code change, you can keep working on the same branch on your local and commit it.
- Tips: No worry, whenever you commit and push your code change again, it will get reflected instantly to the same Pull Request👍🏻

### 🏁 Squash & Merge your Pull request to Trunk branch

- Once your Code reviewer approved your code change, you are free to merge this Pull request to the trunk branch
- Please make sure using `Squash & merge` option to do the merge.
- Why?
- please google search the different between 3 Pull requests merge options `merge`, `Rebase & merge`, `Squash & merge` 😉
