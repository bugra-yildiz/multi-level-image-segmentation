# multi-level-image-segmentation
Programming-3 Project 160003734
This a multi level grey image segmentation algoritm and its demo. This project is resembels the multi level Otsu.
This project is compeletly original work not a copy or an different implementation of a another known system( as far as I know, I may be wrong).

Steps : 
1. Take a 512x512 image as input.
2. Convert the image to an numpy array.
3. Create a histogram from that array.
4. Start from least present pixel value and find slopes at right and left.
5. Create new images using found threshold values.


Main idea is we want to find the division between pixel values in an image. To find the limits we focus on least present pixel values.
Also we want these values to be in a valley meaning that it needs to have slopes on both right and left side.

Like this : 
![Ekran Resmi 2024-01-19 01 31 52](https://github.com/hirsizyavuz/multi-level-image-segmentation/assets/42612286/e6398813-804f-47bc-987e-596edd2b6379)


For source image this : 

![img](https://github.com/hirsizyavuz/multi-level-image-segmentation/assets/42612286/f76a3666-2745-4d5a-ba2d-4b28c06eb6f7)


Segment-1 : 

![image_segment_1](https://github.com/hirsizyavuz/multi-level-image-segmentation/assets/42612286/bdb238be-9ebf-4fc0-916b-183e68de0c32)

Segment-2 : 

![image_segment_2](https://github.com/hirsizyavuz/multi-level-image-segmentation/assets/42612286/e28df2d7-82f2-4dd0-92af-daa4549c6ec0)

Segment-3 : 

![image_segment_3](https://github.com/hirsizyavuz/multi-level-image-segmentation/assets/42612286/6a9c54cb-3510-4f6c-9284-420272926066)
