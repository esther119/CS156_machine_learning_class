## 1.1 Introduction

## Study Guide

In this class, we will be looking at  machine learning concepts, and how they relate to probabilistic reasoning. Therefore, the readings and pre-class work focus on ensuring that you have a basic understanding of probability and how to solve Bayesian calculations.

It might be helpful to read the probability section first from the readings, depending on your previous understanding of probability theory. When you come to class, you should be able to solve word problems that require a straightforward application of Bayes’ theorem (such as those given in the pre-class work).

### Probability

**The following are some relevant takeaways from the first reading on probability:**

The probability of both events *x* and *y* occurring (joint distribution):

<a href="https://www.codecogs.com/eqnedit.php?latex=\dpi{150}&space;\bg_white&space;p(x,&space;y)&space;=&space;p(x&space;\text{&space;and&space;}&space;y)&space;=&space;p(x&space;\cap&space;y)" target="_blank"><img src="https://latex.codecogs.com/png.latex?\dpi{150}&space;\bg_white&space;p(x,&space;y)&space;=&space;p(x&space;\text{&space;and&space;}&space;y)&space;=&space;p(x&space;\cap&space;y)" title="p(x, y) = p(x \text{ and } y) = p(x \cap y)" /></a>


The probability of either event *x* or *y* occurring:

<a href="https://www.codecogs.com/eqnedit.php?latex=\dpi{150}&space;\bg_white&space;p(x&space;\text{&space;or&space;}&space;y)&space;=&space;p(x\cup&space;y)&space;=&space;p(x)&space;&plus;&space;p(y)&space;-&space;P(x&space;\cap&space;y)" target="_blank"><img src="https://latex.codecogs.com/png.latex?\dpi{150}&space;\bg_white&space;p(x&space;\text{&space;or&space;}&space;y)&space;=&space;p(x\cup&space;y)&space;=&space;p(x)&space;&plus;&space;p(y)&space;-&space;P(x&space;\cap&space;y)" title="p(x \text{ or } y) = p(x\cup y) = p(x) + p(y) - P(x \cap y)" /></a>



**Bayes’ Rule:** the probability of event *x* given that we know event *y* (conditional probability)

<a href="https://www.codecogs.com/eqnedit.php?latex=\dpi{150}&space;\bg_white&space;p(x|y)&space;=&space;\frac{p(y|x)p(x)}{p(y)}" target="_blank"><img src="https://latex.codecogs.com/png.latex?\dpi{150}&space;\bg_white&space;p(x|y)&space;=&space;\frac{p(y|x)p(x)}{p(y)}" title="p(x|y) = \frac{p(y|x)p(x)}{p(y)}" /></a>



A probability density function (PDF) is used for a continuous random variable, where the integral across an interval gives the probability of the variable lying within that interval, therefore:

<a href="https://www.codecogs.com/eqnedit.php?latex=\dpi{150}&space;\bg_white&space;\begin{matrix}f(x)&space;\geq&space;0,&space;&&space;\int_{-\infty}^{\infty}f(x)dx&space;=1&space;\end{matrix}" target="_blank"><img src="https://latex.codecogs.com/png.latex?\dpi{150}&space;\bg_white&space;\begin{matrix}f(x)&space;\geq&space;0,&space;&&space;\int_{-\infty}^{\infty}f(x)dx&space;=1&space;\end{matrix}" title="\begin{matrix}f(x) \geq 0, & \int_{-\infty}^{\infty}f(x)dx =1 \end{matrix}" /></a>



The generative approach to machine learning  with Bayes’ aims to optimize the parameters which fit the observed data. This can be understood through the terms: *prior*, *likelihood* and *posterior.* 

The **prior** probability is assumed without reference to any observation. Depending on the model we might want to assume a uniform prior probability distribution (all events are equally likely) or a Gaussian prior probability distribution (bell-shaped distribution). 

**Likelihood** is the conditional probability where, given the parameters, how “likely” is the data.

And finally, the **posterior** is the odds of the parameters, given the data and can be calculated through a weighted combination of the prior and the likelihood:

<a href="https://www.codecogs.com/eqnedit.php?latex=\dpi{150}&space;\bg_white&space;\text{posterior&space;distribution}&space;\propto&space;\frac{\text{likelihood}&space;\times&space;\text{prior}}{\text{evidence}}" target="_blank"><img src="https://latex.codecogs.com/png.latex?\dpi{150}&space;\bg_white&space;\text{posterior&space;distribution}&space;\propto&space;\frac{\text{likelihood}&space;\times&space;\text{prior}}{\text{evidence}}" title="\text{posterior distribution} \propto \frac{\text{likelihood} \times \text{prior}}{\text{evidence}}" /></a>

In other notation,

<a href="https://www.codecogs.com/eqnedit.php?latex=\dpi{150}&space;\bg_white&space;p(\theta|D)&space;=&space;\frac{p(D|\theta)p(\theta)}{p(D)}" target="_blank"><img src="https://latex.codecogs.com/png.latex?\dpi{150}&space;\bg_white&space;p(\theta|D)&space;=&space;\frac{p(D|\theta)p(\theta)}{p(D)}" title="p(\theta|D) = \frac{p(D|\theta)p(\theta)}{p(D)}" /></a>

where, θ is the parameters and D is the data.

[This visualisation](https://micl.shinyapps.io/prior2post/) might help to understand how these concepts work together.

### Machine Learning Concepts

After reading Chapter 13 of Barber, you should be able to distinguish between supervised and unsupervised machine learning models with examples. 

## Pre-class work

### 1. Probability Calculations

Make sure that you can comfortably answer the following questions in Barber:

![Exercise 1.15 from Barber](ex1.JPG)

![Exercise 1.18 from Barber](ex2.JPG)

Write out short answers to each solution and bring them to class, in such a format that you can easily paste them into a poll.

### 2. Monty Hall Problem

Read the *Wikipedia* article on the [Monty Hall Problem](https://en.wikipedia.org/wiki/Monty_Hall_problem) and write out a full Bayesian solution. Be sure to state all probabilities that are known at the beginning, before going on to calculate **P(Win | Switch)** and **P(Win | Don't Switch)**. You will need to know how to solve similar problems during the class session.
