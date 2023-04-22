---
sidebar_position: 2
tags:
  - trunk
  - git
  - github
---

# Git Development Workflow

## Terminology

### Trunk branch 🌳

- The main branch of the repository.
- In Github, it should be the default branch and it is usually named `main`.
- Some repositories may have different names for the trunk branch due to legacy issues.
  - https://github.com/preface-ai/preface-website-frontend -> Trunk branch `develop`
  - https://github.com/preface-ai/preface-nomad-b -> Trunk branch `development`

## Suggested Git Development Workflow

To ensure that development with Git is organized and effective, follow these steps:

### Ensure your local trunk branch is in sync with remote 🔄

- Make sure you are on the trunk branch by running:
  `````bash
  git checkout main
  ```
  - Replace `main` with `develop` or `development` depending on the repository.
- Pull the latest code from remote by running:
  ````bash
  git pull
  ```
- ⭐️ Advanced tip
  - You can create and checkout your feature branch from the latest remote `main` branch directly without touching your local `main` branch if you know Git well enough.

### Create and checkout a new feature branch 🌟

- Run this command to create and checkout a new feature branch:
  ````bash
  git checkout -b your-feature-branch-name
  ```
  - Replace `your-feature-branch-name` with your desired branch name.
  - Ensure that the branch name is unique and easy to understand.

### Work on your code change on the feature branch 🚀

- Split your task into multiple milestones and focus on a single milestone each time.
- When a milestone is complete, commit your code change in your local repository.
- Use your IDE (VS Code is recommended) to add and commit your code change interactively, or use [`git add`](https://git-scm.com/docs/git-add)  and [`git commit`](https://git-scm.com/docs/git-commit) to commit your code change.
- You can have as many commits as you want because they will be squashed into a single commit after the merge via pull request.

### Push your local feature branch to remote 📤

- After you finish all the milestones of the task, push all your commits in the local feature branch to remote:
  ````bash
  git push --set-upstream origin your-feature-branch-name
  ```
  - Alternatively, you can update your git config `push.autoSetupRemote` to always set upstream with the same branch naming. You can just `git push` after this change:
    ```bash
    git config --global --add --bool push.autoSetupRemote true
    ```
- If you already set your local feature branch to the remote but want to commit new changes, you can still do it and push the change to remote again via `git push`.

### Submit a Pull Request (PR) to trunk branch 🚀

- After you push the feature branch to remote, create a pull request from your branch to the trunk branch `main`.
  - you can do it via github website or use `gh` command line tool(recommended)
- Provide a meaningful title for the pull request.
- Include the Clickup ID in the title if the task is related to a Clickup ticket.
- Briefly explain what and why this PR is for.
- Usually there is a checklist in the default pull request template, follow it and see if you have missed out anything.
- Annotate yourself as the assignee.

### Request Code review and update your code based on feedback 🔍

- Annotate your code reviewer in the pull request.
- Send the link of this pull request to your targeted code reviewer via the Slack channel `#team-tech`.
- Wait for your code reviewer to provide feedback on the code, asynchronously or face-to-face.
- Based on the feedback, if you need to make further code changes, keep working on the same branch in your local repository and commit the changes.
- Whenever you commit and push your code change again, it will get reflected instantly in the same pull request.

### 🏁 Squash and merge your Pull Request to Trunk branch

- Once your code reviewer approves your code change, merge this pull request to the trunk branch.
- Must-do: We use `Squash & merge` to do the merge among the 3 different merge methods(`merge`, `Rebase & merge`, `Squash & merge`) provided by Github.
- This is because squashing commits helps keep the Git history clean and easy to follow.

By following this Git development workflow, you can ensure that your code changes are organized, effective, and easy to review and merge. 🙌