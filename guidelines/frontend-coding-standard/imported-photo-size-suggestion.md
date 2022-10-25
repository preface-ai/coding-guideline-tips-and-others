# Imported Photo Size suggestion

Most of the time, the photo we keep in Preface is in its raw size. It would be > 15 MB.
This is too large for us to be kept in our code repository.
We do leverage `next/image` to help optimising the image for us but the image will still be > 500KB which is still very big.

Here's our agreement:

* If the photo is large in size, please always resize the photo's dimension to width ~= 1024 before committing to our code repository
  * so for a typical photo of 4:3 dimensions, we should resize it to at least 1024 X 768.
* Let's review this rule in the future
