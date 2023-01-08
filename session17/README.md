## 9.2 Feedforward Neural Networks

## Study Guide

After completing the assigned readings and the pre-class work, you should be able to answer the following questions:

- Neural networks have a number of technical terms. Be able to describe (and explain in your own words) the following terms in regards to a neural network:
  - feedforward
  - back-propagation
  - neural
  - deep
- How would you describe a feedforward neural network if you couldn't make any reference to the neural analogy that frequently accompanies this method?
- Explain in your own words using your own example, how a feedforward network is able to separate non linearly-separable data.
- Explain in your own words why cross-entropy is a useful cost function to minimize for a neural network classifier.

## Pre-class work

### 1. Gradients

Calculate the gradients for the following activations:

- Linear
- Rectified Linear Unit (AKA RelU)
- Sigmoid

Also, refresh your knowledge of the chain rule so that you are able to differentiate functions of the form: f(g(h(x))), where f, g, and h are drawn from the functions given above.

### 2. Keras

Install Keras (or use CoCalc, which also has Keras and Tensorflow already installed).

Work through the introductory tutorial given [here](https://machinelearningmastery.com/tutorial-first-neural-network-python-keras/). 

Now experiment with different neural network architectures and build classifiers for the two datasets given below. For each dataset, the x is a 2 dimensional input and the y is the binary "0" or "1."

```python
from sklearn import datasets

(moon_x,moon_y) = datasets.make_moons(n_samples=10000, noise=0.05, random_state=42)

(circle_x,circle_y) = datasets.make_circles(n_samples=10000, noise=0.025, random_state=42)

```

For each dataset, plot the data in 2 dimensions, and also show the decision boundaries of your network (for example, produce a visualization like [this](https://scikit-learn.org/stable/auto_examples/svm/plot_iris_svc.html)).

Make note of your final accuracy on the training dataset, and the cross entropy score as well.

Upload your code (including generated figures) to your personal repository before the class.
