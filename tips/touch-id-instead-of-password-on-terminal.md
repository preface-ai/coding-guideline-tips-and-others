# Using Touch ID instead of password on Terminal

## Problem
Every time when you want to do super user operation(`sudo`), you are being prompted by entering password. This is annoying and time consuming.

## Solution - use Touch ID instead of entering laptop password again & again

* Go open & edit this file `/etc/pam.d/sudo` using any editor, e.g.
  ```shell
  code /etc/pam.d/sudo
  ```
* Add the following line on **TOP** of the file:
  ```shell
  auth sufficient pam_tid.so
  ```
 <img width="662" alt="Screenshot 2022-06-20 at 5 17 35 PM" src="https://user-images.githubusercontent.com/15152519/174569159-02120edc-c42d-4783-8646-a12a01d2b7db.png">
* After this change, terminal will ask for touch ID instead of password when you use `sudo`
* Enjoy 😉
