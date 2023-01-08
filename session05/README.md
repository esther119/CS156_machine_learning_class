## 3.1 Linear Parameter Models

## Study Guide

### Linearity in Parameters

LPM is a linear regression. There are two kinds of linearity in linear regression, as discussed in the Data Science Central reading: 

- linearity in variables 
- linearity in parameters

In a linear parameter model, the parameters are linear (as in the prediction is a linear function of the parameters), whereas variables can still take non-linear form (e.g. x<sup>2</sup>). Having linear models brings the advantage that the cost function is convex, which means there is only one minimum, and thus optimization is easier.

<a href="https://www.codecogs.com/eqnedit.php?latex=y&space;=&space;b_0&space;&plus;&space;b_1&space;x" target="_blank"><img src="https://latex.codecogs.com/gif.latex?y&space;=&space;b_0&space;&plus;&space;b_1&space;x" title="y = b_0 + b_1 x" /></a>

Where **b** are the parameters and **x** is the variable.

*Here are a couple of examples (no need to learn this table by heart):*

|                                                              | linear in variables | linear in parameters |
| ------------------------------------------------------------ | ------------------- | -------------------- |
| <a href="https://www.codecogs.com/eqnedit.php?latex=y&space;=&space;\beta_0&plus;&space;\beta_1&space;x&space;&plus;&space;\beta_2&space;x" target="_blank"><img src="https://latex.codecogs.com/gif.latex?y&space;=&space;\beta_0&plus;&space;\beta_1&space;x&space;&plus;&space;\beta_2&space;x" title="y = \beta_0+ \beta_1 x + \beta_2 x" /></a> | yes                 | yes                  |
| <a href="https://www.codecogs.com/eqnedit.php?latex=y&space;=&space;\beta_0&plus;&space;\beta_1&space;x&space;&plus;&space;\beta_2&space;x^2" target="_blank"><img src="https://latex.codecogs.com/gif.latex?y&space;=&space;\beta_0&plus;&space;\beta_1&space;x&space;&plus;&space;\beta_2&space;x^2" title="y = \beta_0+ \beta_1 x + \beta_2 x^2" /></a> | no                  | yes                  |
| <a href="https://www.codecogs.com/eqnedit.php?latex=y&space;=&space;\beta_0&plus;&space;\beta_1&space;x&space;&plus;&space;\beta_2^2&space;x" target="_blank"><img src="https://latex.codecogs.com/gif.latex?y&space;=&space;\beta_0&plus;&space;\beta_1&space;x&space;&plus;&space;\beta_2^2&space;x" title="y = \beta_0+ \beta_1 x + \beta_2^2 x" /></a> | yes                 | no                   |
| <a href="https://www.codecogs.com/eqnedit.php?latex=y&space;=&space;\beta_0&plus;&space;\beta_1&space;x&space;&plus;&space;\beta_2^2&space;x^2" target="_blank"><img src="https://latex.codecogs.com/gif.latex?y&space;=&space;\beta_0&plus;&space;\beta_1&space;x&space;&plus;&space;\beta_2^2&space;x^2" title="y = \beta_0+ \beta_1 x + \beta_2^2 x^2" /></a> | no                  | no                   |

### Radial Basis Function

In general terms, the radial basis function is a transformation of the variables. It places a "bump" at a center that is a certain distance away from a specific point (origin/center). It is usually displayed with the following equation:

<a href="https://www.codecogs.com/eqnedit.php?latex=\Phi(x)&space;=&space;\phi(|x-c|)" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\Phi(x)&space;=&space;\phi(|x-c|)" title="\Phi(x) = \phi(|x-c|)" /></a>

where *c* is the center and *ϕ* is the specific type of the RBF.  Even though the transformation is non-linear, when working with RBFs in linear parameter models, we use a linear combination of the RBFs. For example, the following function is a linear combination of *m* basis functions:

<a href="https://www.codecogs.com/eqnedit.php?latex=f(x)&space;=&space;\Sigma_{i=1}^m\lambda_i&space;\Phi_i(x)" target="_blank"><img src="https://latex.codecogs.com/gif.latex?f(x)&space;=&space;\Sigma_{i=1}^m\lambda_i&space;\Phi_i(x)" title="f(x) = \Sigma_{i=1}^m\lambda_i \Phi_i(x)" /></a>

where λ are the coefficients and *Φ* are the basis functions of the model.


### Ridge Regression

For more on ridge regressions, check out [this sklearn page](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Ridge.html).

### Study Guide Prompts

**After completing the reading you should feel comfortable:**

- Describing in your own words the cost function that gets minimized when fitting a linear parameter model.
- Explaining what a radial basis function model is and how to use a validation dataset to fit such a model.
- Describing in your own words what ridge regression aims to achieve and how it does so.

## Pre-class work

### 1. Starting Tutorial

To help you get started, [here](linear_parameter_model.py) is a simple example of fitting a linear parameter model (using radial basis functions).

Poke around in the code and make sure you understand what it's doing. Try change the sigma and/or the alpha, and see how this affects the model predictions.

### 2. Temperatures in Yosemite

Temperature data given in 5 minute intervals is available for many towns across America. For today's session we will focus on modeling the temperature at Yosemite Village, a small village in Yosemite National Park, California. See [here](https://www.ncei.noaa.gov/) for more details on the sub-hourly data provided.

The dataset that we will use for class is available [here](https://course-resources.minerva.kgi.edu/uploaded_files/mke/rj3Edn/yosemite-temperatures.zip) and contains documentation on the headers of each column.

Some Python code has been written which fits a straight line to this temperature data. The code is available [here](load.py) (this code should be run in the same directory as the data files). The model takes the UTC time (in minutes) and fits a straight line to predict the temperature. Notice the poor performance of the model!

 Now expand the representation of the time of day using ideas contained in Section 17.2.3. This turns the single number (minutes) into a much richer representation. Experiment with different numbers of radial basis functions and different widths of the radial basis function.

Decide on a metric to measure performance and record your performance.

Bring your best model to class, and be prepared to describe how you built this model.

