---
layout: post
date: 2026-06-11
title: 'Hugging Face Basics'
categories: l3
domain: AI
track: Machine Learning
subtrack: Frameworks
topic: Hugging Face
---
Hugging Face is a popular ecosystem for working with modern AI models, especially natural language processing.

It gives you access to:

- pre-trained models
- tokenizers
- datasets
- model hubs
- developer tooling for inference and fine-tuning

For beginners, the most useful idea is that you do not always need to train a model from scratch.

Common beginner ideas:

- `transformers`: library for using models
- `pipeline(...)`: easiest way to try a task
- model hub: a catalogue of shared models
- tokenizers: convert text into model-friendly input

Simple example:

```python
from transformers import pipeline

classifier = pipeline("sentiment-analysis")
result = classifier("This is a great place to start learning AI.")
```

Very small mental model:

1. Pick a task such as sentiment analysis or text generation.
2. Load a pre-trained model.
3. Pass input into the model.
4. Read the output.
5. Later, fine-tune if needed.

Why people use Hugging Face:

- quick access to powerful pre-trained models
- easy experimentation
- strong NLP ecosystem
- useful for both learning and production prototypes

Good first goal:

Run a small text example through a ready-made pipeline so you understand the value of pre-trained models.
