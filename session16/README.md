## 9.1 The Kernel Trick

## Study Guide

After completing the readings you should be able to answer the following in your own words:

- What the nullspace of x is, and why it can be ignored when finding the optimal weights for a linear parameter model?
- Why we are able to *always* represent the optimal weights of a linear parameter model using a linear combination of the data points?

## Pre-class work

### 1. Parameterize a Kernel

Find the appropriate parameterizations (ϕ) for the following kernels:

- <a href="https://www.codecogs.com/eqnedit.php?latex=k(x,&space;y)&space;=&space;x^{\top}y&space;&plus;&space;c&space;=&space;\phi(x)^{\top}\phi(y)" target="_blank"><img src="https://latex.codecogs.com/gif.latex?k(x,&space;y)&space;=&space;x^{\top}y&space;&plus;&space;c&space;=&space;\phi(x)^{\top}\phi(y)" title="k(x, y) = x^{\top}y + c = \phi(x)^{\top}\phi(y)" /></a>

- <a href="https://www.codecogs.com/eqnedit.php?latex=k(x,y)&space;=&space;(x^\top&space;y)^2&space;=&space;\phi(x)^\top&space;\phi(y)" target="_blank"><img src="https://latex.codecogs.com/gif.latex?k(x,y)&space;=&space;(x^\top&space;y)^2&space;=&space;\phi(x)^\top&space;\phi(y)" title="k(x,y) = (x^\top y)^2 = \phi(x)^\top \phi(y)" /></a>

Search online and find a kernel representation for the radial basis function.  Come to class ready to explain how this representation was derived, and be able to point out practical difficulties with using this representation directly:

- <a href="https://www.codecogs.com/eqnedit.php?latex=k(x,&space;y)&space;=&space;\exp(-c&space;||x-y||^2)&space;=&space;\phi(x)^\top&space;\phi(y)" target="_blank"><img src="https://latex.codecogs.com/gif.latex?k(x,&space;y)&space;=&space;\exp(-c&space;||x-y||^2)&space;=&space;\phi(x)^\top&space;\phi(y)" title="k(x, y) = \exp(-c ||x-y||^2) = \phi(x)^\top \phi(y)" /></a>

### 2. Kernel Efficiency

Provide an example where evaluating the kernel function is faster than using an expanded representation directly. 

Upload your pre-class work in PDF / python notebook format to your personal repository before the class.
