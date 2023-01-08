## 10.1 Deep Learning

## Study Guide

After you have finished the reading and the pre-class work, make sure that you are able to answer the following questions:

- Manually calculate the convolution of a small image and a small filter.
- Explain in your own words why the chain rule of differentiation plays such a prominent role in calculating the gradients of neural network parameters.
- State and explain in your own words, the universal approximation theorem.

The study guide (`study_guide.md` file) may be helpful to understand the concepts better and guide your pre-class work.

## Pre-class work

### 1. Deep Fashion

This session we will revisit your dataset from the dimension reduction unit. The pictures of clothing are all originally taken from ImageNet, which is a large dataset containing over a million photos with many different categories. Every year there is a competition to see which techniques can perform the best. The winning entry is then open-sourced and made available to all machine learning researchers for further research or to allow the development of novel applications.

- Using Keras load the VGG16 network. This is the convolutional neural network which won ImageNet 2014, and the accompanying paper is available [here](https://arxiv.org/abs/1409.1556), if you want to read more about it. Keras code to perform this step is available [here](https://keras.io/applications/), under the heading "Extract features with VGG16."
- The technique that we will explore here is known as "transfer learning," or "feature extraction." This assumes that the VGG16 network has already found a general and robust representation of most images, and we can reuse this representation, rather than relearning from scratch. To do this we will freeze all the lower level layers and replace the final layer with something suited to our task. For this step, you have two options:
  - Add a new network layer, and train this final layer to predict your desired targets (e.g. 0 for Men's clothing and 1 for Women's clothing).
  - Use the deep neural network as a nonlinear transformation which creates a rich representation on which to build a conventional classifier.
- What cost function did you choose, and why? What performance do you achieve on your test set and how does this compare to the performance you were originally able to achieve with the linear methods?
- (*optional*) If you want, you can also perform a "fine-tuning" step. In this step we unfreeze the weights and then perform a few more iterations of gradient descent. This fine tuning can help the network specialize its performance in the particular task that it is needed for. Now, measure the new performance on your test set and compare it to the performance from the previous step.

Be sure to bring to class all your code, as well as results in a format suitable for pasting in a poll or Google document.
