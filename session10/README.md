# 5.2 Interpreting Graphical Models

## Study Guide

The following revision of Bayes Theorem and joint probability are very relevant when it comes to understanding probabilistic graphical models. We have listed them here so that you can refer to them as you complete the readings for this session:

### Bayes Theorem Revision

**Definition of Conditional Probability:**

<a href="https://www.codecogs.com/eqnedit.php?latex=P(A|B)=\frac{P(A,B)}{P(B)}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?P(A|B)=\frac{P(A,B)}{P(B)}" title="P(A|B)=\frac{P(A,B)}{P(B)}" /></a>

**Bayes Rule:**

<a href="https://www.codecogs.com/eqnedit.php?latex=P(A|B)&space;=&space;\frac{P(A,B)}{P(B)}&space;=&space;\frac{P(B|A)P(A)}{P(B)}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?P(A|B)&space;=&space;\frac{P(A,B)}{P(B)}&space;=&space;\frac{P(B|A)P(A)}{P(B)}" title="P(A|B) = \frac{P(A,B)}{P(B)} = \frac{P(B|A)P(A)}{P(B)}" /></a>

**The (Corollary) Chain Rule:**

<a href="https://www.codecogs.com/eqnedit.php?latex=P(A|B)P(B)&space;=&space;P(A,B)" target="_blank"><img src="https://latex.codecogs.com/gif.latex?P(A|B)P(B)&space;=&space;P(A,B)" title="P(A|B)P(B) = P(A,B)" /></a>

in full:

<a href="https://www.codecogs.com/eqnedit.php?latex=P(x_{t},&space;x_{t-1},...x_1)&space;=&space;P(x_t&space;|&space;x_{t-1},...x_1)P(x_{t-1},...x_1)\\&space;=&space;p(x_t|x_{t-1},...x_1)P(x_{t-1}|x_{t-2},...x_1)P(x_{t-2},...x_1)&space;\\&space;=&space;P(x_1)\prod^t_{i=2}&space;P(x_i|x_{i-1},...x_1)" target="_blank"><img src="https://latex.codecogs.com/gif.latex?P(x_{t},&space;x_{t-1},...x_1)&space;=&space;P(x_t&space;|&space;x_{t-1},...x_1)P(x_{t-1},...x_1)\\&space;=&space;p(x_t|x_{t-1},...x_1)P(x_{t-1}|x_{t-2},...x_1)P(x_{t-2},...x_1)&space;\\&space;=&space;P(x_1)\prod^t_{i=2}&space;P(x_i|x_{i-1},...x_1)" title="P(x_{t}, x_{t-1},...x_1) = P(x_t | x_{t-1},...x_1)P(x_{t-1},...x_1)\\ = p(x_t|x_{t-1},...x_1)P(x_{t-1}|x_{t-2},...x_1)P(x_{t-2},...x_1) \\ = P(x_1)\prod^t_{i=2} P(x_i|x_{i-1},...x_1)" /></a>

### Joint Probability Revision

- **Marginal** distribution: <a href="https://www.codecogs.com/eqnedit.php?latex=P(x)=\sum_y&space;P(x,y)" target="_blank"><img src="https://latex.codecogs.com/gif.latex?P(x)=\sum_y&space;P(x,y)" title="P(x)=\sum_y P(x,y)" /></a>

- **Independence:** X ⫫ Y <a href="https://www.codecogs.com/eqnedit.php?latex=\Leftrightarrow" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\Leftrightarrow" title="\Leftrightarrow" /></a> P(X, Y) = P(X)P(Y)
- **Conditional Independence:** X ⫫ Y | Z <a href="https://www.codecogs.com/eqnedit.php?latex=\Leftrightarrow" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\Leftrightarrow" title="\Leftrightarrow" /></a> P(X, Y|Z) = P(X|Z)P(Y|Z)



Once you have finished the readings you should be able to take a graphical model and write down the joint probability directly from it. You should also be able to do the reverse. For example, write down the graphical model for the distribution *P(X) P(Y|X) P(Z|X)*.

## Pre-class work

### 1. Bishop Textbook Exercises

The following exercises refer to **Table 8.2**, **Figure 8.2.1** and **Figure 8.54** which can be viewed below the exercise images.

![Exercise 8.3 from Bishop](bishop1.JPG)

![Exercise 8.4 from Bishop](bishop2.JPG)

![Exercise 8.11 from Bishop](bishop3.JPG)

#### Bishop Table and Figures

![Table 8.2: joint distribution over three binary variables](table_8_2.JPG)

![3-node graph of battery, fuel tank and gauge](figure_8_21.JPG)

![Graphical model of conditional independence properties of the head-to-head path when a descendent is observed.](figure_8_54.JPG)

### 2. Flu in the Class:

We have a classroom containing N students all taking the same class during a flu epidemic. We assume that a student's probability of getting the flu only depends on the people that they interact with.

Consider the following models:

**A. General:** The general case occurs when we know nothing about which students meet and we decide to model all possible interactions (i.e. assuming that there is no conditional independence between any of the students.)

**B. Independence:** A much simpler model assuming full independence between every student. (This is equivalent to none of the students interacting with each other after class.)

**C. Groups:** A model in which every student belongs to a study group of 5 people.

**D. Tutors:** There are 10 class tutors in the class. Each student meets only one class tutor in isolation. The class tutors are drawn from the N students. There isn't enough time for a student to infect a tutor and the tutor to then infect another student.

For each model, do the following:

1. Write out the factorized joint probability P(X₁, X₂, …, Xᵢ), where each Xⱼ is a binary variable that can take the value "Sick" or "Healthy."
2. Show how this would be represented as a graphical model on a whiteboard (have an image of the model ready to share).
3. Calculate how many parameters would be required to fully specify the model.
