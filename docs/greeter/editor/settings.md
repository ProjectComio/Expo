---
sidebar_position: 2
---

# Core settings

This panel allows you to modify the core settings of your greeting image. You can choose between a static and an animated greeting image, and upload a custom image using the upload prompt. 

:::info Note
If you choose to use a static greeting image and upload a GIF file, it will be rendered as a static greeting with the first frame of the GIF as the background.
:::

Once you upload your GIF, the module will automatically compute the frame delay between each frame of your GIF, in other words, its the frame rate of your animated greeting. You should **NOT** modify this unless you feel that your greeting is lagging or is too fast. Reducing the frame delay will result in a speedy animation and increasing the frame delay will result in a slower animation. 

:::danger
If you plan to change the frame delay, there's no way to revert the changes back and you need to upload your image again to reset the frame delay.
:::

<img alt="Image settings panel" className="docImg" src="/img/docs/c20157c398b6f9e2b2f0cbba4ddbde85.png" />

The **Load fonts** buttons loads the fonts in your browser (overlayed on your image if enabled), the default font is displayed on the image to save your bandwidth (as there are more than 35 fonts, and we may add more in the future). If we were to enable font loading at the startup, the page would require additional time to load depending on your connection speed. Once you hit the load fonts button, all the fonts are loaded in your browser. Fonts will always be rendered properly in the greeting image, the button is just here to save your connection bandwidth.
