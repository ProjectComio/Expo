---
sidebar_position: 2
---

# Image 

:::caution
This page assumes that you've or you'll mark the image checkbox.
:::

If enabled, the greeter module uses a transparent background by default but you can upload your own image using the upload prompt.
Supported image formats:
- [x] PNG (APNG format will be rendered as a static image, use GIF instead)
- [x] JPG/JPEG
- [x] GIF

The image file must be as small and less detailed as possible, to reduce the workload on the cluster. The image file-size is limited to `8MB` (the maximum size Discord allows) but your image must be well under `5MB` to render as soon as possible.

Static images render almost instantly (with a rare delay of a few seconds depending on the workload on the cluster at the time of rendering), and animated images may take upto 30 seconds to render depending on the number of frames in your GIF file. 

:::caution
Greetings that take more than 30 seconds to render will be terminated automatically to reduce the workload on the cluster, so make sure that you use a not-too-heavy image.
:::

> <i className="fas fa-star star"></i> Premium servers get faster greeting rendered in a short time due to their dedicated resources.

The image must be atleast `640` pixels wide and `360` pixels tall in order to display properly among all kinds of devices. 

Static images will render into greetings having the dimensions `1280`x`720`, and animated images will render into greeting having the dimensions `640`x`360`, regardless of the original image size that you upload.

:::info Note
Your image will be cropped and scaled automatically to fit the container. To make sure that the image does not crop or scale, upload an image will the exact dimensions of `640`x`360`.
:::

:::tip
[Ezgif](https://ezgif.com/) is a great tool for optimizing, compressing and playing with GIF images, and if you need to compress you static images, [TinyPNG](https://tinypng.com/) and [TinyJPG](https://tinyjpg.com/) are at your service.
:::