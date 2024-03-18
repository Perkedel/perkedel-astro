====================================================
Instructions for use with OBS:
====================================================
1. Unzip the contents of this folder somewhere.

2. Run OBS with the --enable-media-stream switch. e.g. "C:\Program Files\obs-studio\bin\64bit\obs64.exe" --enable-media-stream THIS IS IMPORTANT OTHERWISE THE AVATAR WON'T REACT!

3. In OBS, create a new Browser source. In the Browser's properties, enable Check Local File, then use Browse to locate the index.html from this folder.

4. The avatar should react accordingly.


====================================================
Customizing the avatar:
====================================================
The states are defined with CSS. You can put your own images in the same folder as index.html and change the background property of the specific state. Despite the name, you can use pngs, gifs or even jpegs. However, you may have to specify the maximum width and height. (The default is 500px x 500px)

If you want to adjust the transition duration, change the "transition" property of the #tuberdiv selector

====================================================
Credits:
====================================================
This was made by jeremyyysan (twitter.com/jeremyyysan)

The audio input code was based off of
James H Fisher's code https://jameshfisher.com/2021/01/18/measuring-audio-volume-in-javascript/