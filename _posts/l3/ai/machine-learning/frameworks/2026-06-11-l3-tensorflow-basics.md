---
layout: post
date: 2026-06-11
title: 'TensorFlow Basics'
categories: l3
domain: AI
track: Machine Learning
subtrack: Frameworks
topic: TensorFlow
---
TensorFlow is a machine learning framework used to build and train models.

At a very basic level, you can think of it as a toolkit for:

- working with tensors, which are multi-dimensional arrays
- building neural networks
- training models on data
- running predictions on new inputs

Common beginner ideas:

- `tf.Tensor`: the basic data structure
- `keras.Sequential`: a simple way to define a model layer by layer
- `model.fit(...)`: trains a model
- `model.predict(...)`: makes predictions

Very small mental model:

1. Load data.
2. Define a model.
3. Train the model.
4. Evaluate the result.
5. Use the model for prediction.

Simple example:

```python
import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Dense(8, activation="relu"),
    tf.keras.layers.Dense(1)
])

model.compile(optimizer="adam", loss="mse")
```

Why people use TensorFlow:

- good ecosystem
- strong support for deep learning
- useful for production deployment
- integrates well with Keras

Good first goal:

Build a tiny model that learns from a small table of numbers before moving into images, text, or time series.
