# Image Size suggestion

In most cases, the images we include in the Preface section are in their raw size, often exceeding 15 MB.
However, it is impractical to store such large images in our code repository, considering the impact on the repository's size and the user experience when downloading them.
Therefore, we need to optimize the images before shipping them to production.

There are generally two ways to include images in our applications:

1. **Upload to a CDN and reference the image with a remote URL**: This approach is typically used in our public website projects. Please refer to this [guideline](https://github.com/preface-ai/preface-website-frontend#image--video-optimization) in the repository README

  
2. **Include the image directly in the code repository and import them via code**: This method is used mostly in the customer portal codebase, where most of the images are relatively static and not seasonal.

For case 2, we utilize `next/image` to optimize the images for us, but even after optimization, the image size may still be around 500KB, which is relatively large.


Here's our agreement regarding image sizes:

* **Manual resizing**: If the photo is large in size, always resize the photo's dimensions manually to a width of approximately 1024 pixels before committing it to our code repository. For a typical photo with a 4:3 aspect ratio, the recommended size would be at least 1024 x 768 pixels.
* We will review and update this guideline in the future as needed.
