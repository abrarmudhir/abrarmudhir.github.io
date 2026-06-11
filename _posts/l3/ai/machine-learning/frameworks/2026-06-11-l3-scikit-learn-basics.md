---
layout: post
date: 2026-06-11
title: 'scikit-learn Basics'
categories: l3
domain: AI
track: Machine Learning
subtrack: Frameworks
topic: scikit-learn
---
scikit-learn is one of the easiest Python libraries for getting started with machine learning.

It is best known for classic machine learning rather than deep learning.

Typical use cases:

- classification
- regression
- clustering
- preprocessing
- model evaluation

Common beginner ideas:

- `train_test_split(...)`: split data into training and test sets
- `fit(...)`: train a model
- `predict(...)`: generate predictions
- `score(...)`: quick accuracy or model score check

Simple example:

```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
```

Very small mental model:

1. Prepare a table of features and labels.
2. Split the data.
3. Train a model with `fit`.
4. Predict with `predict`.
5. Evaluate how well it worked.

Why people use scikit-learn:

- simple API
- great for beginners
- strong set of classical ML algorithms
- useful utilities for preprocessing and evaluation

Good first goal:

Train a basic classification model on tabular data before moving on to more advanced model types.
