# Study Guide

The Hidden Markov Model is an extension of the Markov Model that includes hidden states. 
The hidden states cause some outcomes we can observe. Even though the hidden states themselves are not known to us, 
the observations tell us something about the probability of the states. The transition matrix tells us the probability 
of transitioning from one hidden state to another. The emission matrix (output probability) tells us the probability of 
an observation (e.g. a phoneme) given a hidden state.

Pre-Class Work Intro
1. Find a sensible initialization for the transition matrix. 
(Remember that the transition probabilities for one specific time and speaker are P(speaker i at time t+1 | speaker j at time t),
now extend that to all three people considering that each says about 10 phonemes before being interrupted.)

2. Train a hidden Markov model (Use the Baum-Welch expectation-maximization (EM) algorithm, also known as the forward-backward algorithm.)
    1. initialize a transition and emission matrix
	  2. expectation step: Use forward and backward probabilities to find the likelihood of the hidden states (i.e. speakers) given the 
  observations at a specific time (e.g. phonemes) at all times. This gives the probabilities of being in any hidden state at any time 
  step.
	  3. maximization step: Update the parameters (transition and emission matrix) based on the new probabilities from the expectation 
  step. This should give a better estimate of the transition and emission matrix.
	  4. repeat until convergence of transition matrix and convergence of emission matrix

3. Show the probability of a particular person speaking
	1. P(speaker = i at time t | observations from time 0 until t)

The [Hidden Markov Models](https://web.stanford.edu/~jurafsky/slp3/A.pdf) appendix in Jurafsky’s book is an excellent reading 
introducing Hidden Markov Models mathematically, visually and with pseudo-code. It covers (1) likelihood computation using the forward
algorithm, (2) decoding using Viterbi algorithm and (3) Learning/ Training using the forward-backward/ expectation-maximization algorithm. 
It might help you understand the steps for pre-class work better.
