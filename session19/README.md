## 10.2 Recurrent Neural Networks

## Study Guide

After completing the readings, you should be able to answer the following questions:

- Why is a Hopfield network a recurrent network?
- Give an example where the synchronous Hopfield network fails to converge to a solution. Explain in your own words why this happens, and how we might modify the network to guarantee convergence.
- Explain in your own words why the inverse of a stable state is also a stable state.
- Explain how a recurrent neural network might be able to generate text. (Try to build a plausible hypothesis for both training, and generation.)

## Pre-class work

### Hopfield Network
Implement a Hopfield Network, and perform the basic analysis below:

1. **Store**
   Implement a Python function which is able to store a memory in a Hopfield network.
2. **Recall**
   Implement a Python function which runs the recall algorithm for an initial (corrupted) memory. Make sure to include a stopping criteria.
3. **Capacity**
   Write a function to determine the capacity for a Hopfield network of a given size. This function should have a size parameter, and then initialize an empty Hopfield network. It must then store a random memory and test whether the network is able to recall the correct memory if given a pattern corrupted by a single bit. The function must then return the largest number of memories that were stored and successfully recalled.
4. **Scaling Behavior**
   Produce a plot showing capacity as a function of network size. What is the scaling behavior?
5. **Asynchronous Updates**
   Change your implementation so that the state is updated asynchronously. Find a state that didn't converge in your original implementation, and show that it does converge in your new implementation.

### Text Generation

In this portion of the PCW we will run through a more contemporary Recurrent Neural Network. 
There is a lot of background knowledge which you won't have, and that is ok! The point of this exercise is to build something, and to discuss really high-level details of the model architecture.

Go to the Tutorial of [Text Generation with an RNN](https://www.tensorflow.org/text/tutorials/text_generation):
1. There will be a button to "Run in Google Colab". Click it!
2. In Google Colab make sure you are using a GPU to speed up the training.
3. Run all cells until the end of the "Generate Text" section. 
(In total this should take about 10-15 minutes, and nearly all of that time will be training the model.)
4. The final cell of the "Generate Text" section generates new 1000 new characters in Shakespearean style. 
Edit the cell so that the initial prompt no longer uses "Romeo", but instead uses your name. 
Generate the new text, and bring it to class! 
(Note that the characters are sampled one at a time, so if you don't like the text, just run the cell again and a new sample will be generated!)

Lightly skim through the tutorial, and try to understand how the RNN is used to generate text. 

(Again, to emphasize, the whole point here is to get a really high-level overview of how one might use a recurrent neural network. Don't get bogged down in details, and don't worry if there are large portions of the tutorial which don't make sense. Please spend at least 30 minutes on skimming the tutorial, but of course you're free to spend more if you're interested!)

### (Optional) Neural Machine Translation
You can also try and run the following tutorial on [Neural Machine Translation](https://www.tensorflow.org/addons/tutorials/networks_seq2seq_nmt).
This tutorial also takes about 10-15 min to train with a GPU on Google Colab. 
The architecture is more complicated, but a reasonable Spanish-to-English translation system is built!

(We won't have time to cover this in class, but it might provide some inspiration for your final project.)
