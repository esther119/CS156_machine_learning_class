## 8.1 Gaussian Processes

## Study Guide

After completing the readings you should be able to answer the following questions in your own words:

- How do you build a Gaussian Process out of a multivariate Gaussian distribution?
- What is a covariance function and how does it influence a Gaussian process?
- What is a length scale and how does it influence a Gaussian process?

### Pre-Class Guide

#### GPy

For this unit, we will use the GPy package. If you do not have the GPy package installed then a `pip install GPy` or a `conda install GPy` will usually install it for you. 

The documentation for users of the package lives at this [site](http://sheffieldml.github.io/GPy/).

There are some sample Python notebooks that will help you train a Gaussian process:

- [Basic GP](http://nbviewer.jupyter.org/github/SheffieldML/notebook/blob/master/GPy/basic_gp.ipynb)
- [Models Basic](http://nbviewer.jupyter.org/github/SheffieldML/notebook/blob/master/GPy/models_basic.ipynb)
- [Basic Kernels](http://nbviewer.jupyter.org/github/SheffieldML/notebook/blob/master/GPy/basic_kernels.ipynb)

## Pre-class work

### 1. Iterative Predictions

Write a function to generate synthetic data which is more meaningful than pure random noise (e.g. a sine function with noise added to it). Choose a covariance function that is sensible for your synthetic data.

Write a program that shows the following steps:

1. Observes a new synthetic datapoint
2. Plots the entire dataset, and 10 samples of the posterior Gaussian Process
3. Pauses for 5 seconds
4. Goes to 1 and repeats

### 2. CO<sub>2</sub> Concentration

A great example of the power of Gaussian Processes is the modeling of the CO<sub>2</sub> concentration in the atmosphere. Using the data as specified [here](http://learning.eng.cam.ac.uk/carl/mauna/), write some Python code to fit this data *using the GPy library*. There are several suggestions for the best covariance function for this dataset available on the internet. A good explanation of one such suggestion is given [here](http://scikit-learn.org/stable/auto_examples/gaussian_process/plot_gpr_co2.html), however, you are free to choose a simple covariance function and evaluate how good a job it is able to do.