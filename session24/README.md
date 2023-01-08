## 13.2 Hidden Markov Models

## Study Guide

After the reading and the pre-class work you should be able to answer the following questions:

- What is filtering (with reference to a hidden Markov model)? Give a compelling real-world example.
- What is smoothing (with reference to a hidden Markov model)? Give a compelling real-world example.
- What is prediction (with reference to a hidden Markov model)? Give a compelling real-world example.
- What is a transition matrix and what is an emission matrix (with reference to a hidden Markov model)?


You can consult the [study guide](https://github.com/minerva-schools/cs156/blob/master/session13_2/study_guide.md) if you need some guidance for pre-class work.

## Pre-class work

### 1. Speaker Identification

There are three people in a room. Each says about 10 phonemes before being randomly interrupted by someone else. When they speak they all sound the same, however each person tends to use different phonemes in their speech. Specifically, we can model the following transition probabilities that someone will interrupt the current speaker: P(speaker *i* at time *t+1* | speaker *j* at time *t*). We can also model the probability over phonemes given a particular speaker: P(phoneme | speaker *i*). The phonemes are identical to the ones introduced in session 13.1 (but the transition matrices are obviously different, since they take a different form altogether).

- Write down the update equations that you will need to train a hidden Markov model. Using the information given above, write down a sensible initialization for the transition matrix.
- Write your own Python code to train a hidden Markov model on the data. You may look at code online, but will need to reference any code that helps you with your implementation.
- From `matplotlib` use a [stackplot](https://matplotlib.org/api/_as_gen/matplotlib.axes.Axes.stackplot.html) to show the probability of a particular person speaking.

 The datasets which will be used for this pre-class work:

- [Audio](https://course-resources.minerva.kgi.edu/uploaded_files/mke/VW8Rjr/speaker.wav.zip)
- [Symbol](speaker.txt)
