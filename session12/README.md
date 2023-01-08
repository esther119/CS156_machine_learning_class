## 7.1 Expectation Maximization

The EM Tutorial by Prof. Shekhar [here](Shekhar_EM_Tutorial.pdf) may be helpful to better understand the derivation of the EM equations. It shows how the E-step and M-step are derived using conditional probabilities and Bayes’ theorem. 

## Study Guide

### Part A: 

**Review Do, C. B., & Batzoglou, S. (2008) and pay attention to the following concepts:**

- The joint probability of the model.
- How the expectation maximization algorithm improves a lower bound.
- The convergence guarantees of expectation maximization.

### Part B:

**Be sure that you can explain the following steps of the coin-flipping experiment (Do and Batzoglou, 2008) in your own words:**

- The initialization
- The expectation step
- The maximization step

## Pre-class work

### 1. The Coin-Flipping Experiment

Read through the coin-flipping example given by Do and Batzoglou (2008). In the coin-flipping example, there are two coins with different biases in a bag. One coin is much more likely to come up with heads than the other. To create the data:

1. Reach into the bag and pull out a coin.
2. Flip that coin many times, and record both the number of heads and the number of throws.
3. Return the coin to the bag and repeat.

Notice that we never find out the identity of the coin we are flipping, but we do try to infer it. 

**Questions:**

1. Write down the probability distribution for such a model.

2. Write Python code to run the EM algorithm on such a dataset.

3. Run your code on the following dataset and give your EM estimates for all the unknown parameters:

   ```python
   heads = [14, 33, 19, 10, 0, 17, 24, 17, 1, 36, 5, 6, 5, 13, 4, 35, 5, 5, 74, 34]
   throws = [41, 43, 23, 23, 1, 23, 36, 37, 2, 131, 5, 29, 13, 47, 10, 58, 15, 14, 100, 113]
   ```

4. (*optional*) There could be an optional bias parameter in this model, if it is much more likely to pick one coin. Update your model to also estimate the bias.
