# Deep Learning

### Universal approximation theorem
The universal approximation theorem states that any continuous function can be represented using a 
multi-layer perceptron, if it is large enough, meaning it has enough “neurons” or layers. 

The idea is to use a lot of step functions (e.g. if < 0.3, then 0, if >= 0.3, then 1) to approximate 
the continuous function. Each neuron is one of such step functions, and the more there are, the better
the original function is approximated.

[Why Do Neural Networks Work? - The Universal Approximation Theorem](https://www.youtube.com/watch?v=Ijqkc7OLenI) 
Check out this video providing a visual proof of the universal approximation theorem.


### Learning with backpropagation
The neural network is optimized through gradient descent using bakpropagation. 
The following approachable resources might help to better understand the process:
[Backpropagation calculus | Deep learning, chapter 4](https://www.youtube.com/watch?v=tIeHLnjs5U8) (video, 10 minutes)
[Backpropagation](https://ml-cheatsheet.readthedocs.io/en/latest/backpropagation.html#id3), focusing on the chain rule (article)



### Convolutional neural network
A convolution applies the same functions to all patches in the input image.
As the below image shows, a kernel matrix defines how neighboring cells should affect the new value of the cell. 
The new cell value is the sum of the products of the image matrix and the kernel matrix. 

![cnn1](https://cdn-images-1.medium.com/freeze/max/1000/1*wLlXFtWI--7knyQT2wlhMg.png)
[Source](https://mc.ai/convolutional-neural-net-in-tensorflow/)

Different convolution kernels will have different effects on the image.  The article [here](https://aishack.in/tutorials/image-convolution-examples/) shows some of the different uses of convolution for image processing.

The following image shows how different convolutional filters work together. It comes from [this](https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53)
article walking through how the channels add up. 

![cnn](https://miro.medium.com/max/1400/1*uAeANQIOQPqWZnnuH-VEyw.jpeg)


### Dictionary for convolutional neural network

- convolutional filter: the pattern this specific block of the layer tries to detect
- channels: refer to the 3rd dimension of the input. For instance, color images have dimensions height, width, and number of channels, where the number of channels is commonly 3 (Red, Blue, Green). 
- pooling layer: a layer that reduces the dimensions by “summarizing” patches of the input.

You can imagine the architecture to look something like this:

- Input Layer (e.g. image pixels)
- Hidden Layers
  - Layer 1
    - Convolutional layer: filter picks up on horizontal lines
    - Convolutional layer: filter picks up on vertical lines
    - Convolutional layer: filter picks up on diagonal lines
    - Non-linear layer: ReLu function
  - Layer 2
    - Convolutional layers
    - Non-linear layer
  - Layer 3
    - Convolutional layers
    - Pooling layer
  - Layer 4
    - Fully connected layer: multi-layer perceptron
      - Classification
- Output Layer (e.g. 0 or 1)



### What you need to know and do for pre-class work

VGG16 is a convolutional neural network that has already been trained on classifying images. 
That means, it already tuned the parameters (weights and biases) of multiple hidden layers - 
so the heaviest computational part has been done for you. Read more [here](https://machinelearningmastery.com/use-pre-trained-vgg-model-classify-objects-photographs/). 

The idea is, by giving it an image, we can get good features of it using the defined layers and parameters learned on a much larger, but different, dataset. We can then put those features through a classifier, and identify if it’s e.g. man or woman clothing. One way to do so is by adding a last layer that does the classification (using keras). Another way is to just use the extracted features in another classifier (e.g. logistic regression using sklearn). 

Potentially helpful instructions (kudos to Qifan):
1. Import the clothing pictures. The pre class work for Session 5.1 might be helpful here; Also, Keras has its own image preprocessing library keras.preprocessing.image which might be helpful. Note that the input (x) should be of the shape (width, height, px), which you can specify with the VGG16 parameter input_shape=(img_width, img_height, pxl) and the result (y) array should be in form (size_of_data, 2) instead of (size_of_data).
2. Import the VGG16 model, and add one or two additional layer(s) on top of the original model.
3. Train your model, and report the result. The training process may take a while, so time it well (or simply report the accuracy of the first few epoches. 


Helpful links: 
- [Extract features with VGG16](https://keras.io/applications/#extract-features-with-vgg16) (how to extract features for a certain input)
- [Using pre-trained VGG16 for another classification task](https://github.com/keras-team/keras/issues/4465) (semi-official response to how you can build a model with your own input)
- [Transfer Learning using Keras](https://medium.com/@14prakash/transfer-learning-using-keras-d804b2e04ef8?fbclid=IwAR3b5VxQ-T445Cfv4_kMoY8b5DGLlnVIP-UKYUaHSD6V8gHqpxtO3mvyz_U) (also shows how to build the model and add custom layers)
