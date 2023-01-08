# Neural Networks

The section on neural networks is split into:
1) Neural Networks - feed-forward neural nets (no loops)
2) Deep Learning - neural nets that are multiple layers deep
3) Recurrent Neural Networks - neural nets with built in memory (can have loops)

Neural networks are a lot more easily understood with visual aids, which is why this video by 3Blue1Brown 
is highly recommended to watch: [But what is a Neural Network? | Deep learning, chapter 1](https://www.youtube.com/watch?v=aircAruvnKk)

The main idea is that you give the neural net data (X), where each feature/ pixel/ ... is processed as one node in the
input layer. The inner or hidden layers then tune the input to generate a prediction. Each neuron has an activation function, 
which 'fires' when certain conditions or thresholds are met. This is usually a sigmoid function, since it converts the
intput into 0 or 1 (don't fire or fire). During the training phase, the weights of the neural net are tuned to best
predict the outcome, which is known as 'backpropagation'. (The "backward propagation of errors".)

![neural nets](https://github.com/minerva-schools/cs156/blob/annapaux-neuralnets/session9_2/neuralnet.png)
[Source](https://medium.com/@curiousily/tensorflow-for-hackers-part-iv-neural-network-from-scratch-1a4f504dfa8)


### Small dictionary

- neural network - an algorithm simulating the biological neural network by having network of nodes or ‘neurons’ firing activations through the network (if you need a refresher of activation function, input layer, hidden layer or output layer check out this reading)
- deep learning - training and learning neural networks that are several layers *deep*
- multilayer perceptron (MLP) - a feedforward neural network (minimum: input layer, hidden layer, output layer) with multiple hidden layers (see [here](https://pathmind.com/wiki/multilayer-perceptron) for more info)
	
	![multi layer perceptron](https://github.com/minerva-schools/cs156/blob/annapaux-neuralnets/session9_2/MLP.png)
	
  - linear component: to input (x) transformed linearly by weights (w) and biases (b)
  - non-linear component: activation function (e.g. sigmoid, ReLu), without it, the neural network would essentially be a linear regression)
- backpropagation - method to calculate a gradient that is needed in the calculation of the weights to be used in the network, shorthand for "the backward propagation of errors," since an error is computed at the output and distributed backwards throughout the network’s layers. ([Wikipedia](https://en.wikipedia.org/wiki/Backpropagation))
- convolutional neural network - a convolutional layer is added to the neural network, which can identify certain patterns in the data, often used in image recognition

