## 12.2 Topic Modeling

## Study Guide

After the reading you should be able to:

- Explain what a Dirichlet distribution is.
- Explain the generative process of a document using the Latent Dirichlet Allocation (LDA) model. (i.e.  How might you sample a document using your mode?)
- Draw the graphical model for LDA.
- Explain how a document is represented in the LDA model (mentioning strengths or weaknesses of this representation).

## Pre-class work

### 1. Book Reviews and How to Fake Them

Find an interesting [public domain book](https://www.gutenberg.org/browse/scores/top#books-last30) and download it as plain text.

1. Use Python to massage the data into a suitable format for processing by the Latent Dirichlet Allocation (LDA) model contained in `scikit.learn`. This will include removing stop words and punctuation. Some ideas for how to do this can be found [here](https://stackoverflow.com/questions/5486337/how-to-remove-stop-words-using-nltk-or-python).
2. Break the book up into small sections. The most appropriate level might vary between books, but you will most likely be breaking the book up into either paragraphs or chapters (this might also be a pragmatic decision based on whatever's easiest).
3. Train an LDA model on the corpus. The LDA model should find interesting topics that occur at the paragraph (or chapter) level. Be sure to explain your choice of parameters for any parameters that might have a significant effect on the model results.
4. Print out the first ten words of the ten most common topics.
