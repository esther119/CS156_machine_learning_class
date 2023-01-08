## 11.1 Clustering Models

## Study Guide

After the reading you should be able to answer the following questions in your own words:

- What is a mixture model?
- What is a latent variable and what does it mean in the context of mixture models?
- Why does a mixture of gaussians sometimes fit an entire cluster to a single datapoint?
- Why shouldn’t we initialize the unknown parameters in an EM model to have the same values?

## Pre-class work

### 1. Fraud: A How-To Guide

In this problem you will use density modeling to try and ensure that there are no statistical irregularities in data that you have generated yourself.

- Download the [following data](anonymized.csv) containing personal transactions over a period of several years.
- Now build a density model for the number of transactions that occur in a single month.
- Create plots showing the distribution that you've created.
- Draw 10 samples from this density model using `scikit.learn`.

### 2. Clustering Survey Data

In this problem you will use expectation maximization (EM) on survey data. For the statistical model that we wish to fit, we will assume that everyone comes from one of four clusters.

- Download the [following Python script](questionnaire.py) which generates (synthetic) responses to a binary questionnaire.
- Use the script to generate an example dataset.
- Download the [following Python script](questionnaire-cluster.py) which you will have to edit and finish so that it can infer which person belonged to which cluster. In particular you will need to:
  - Estimate the probability of a person belonging to a particular cluster.
  - Estimate the maximum likelihood parameters for the biases. This is the probability that a person from a particular cluster will answer true to a particular question.
