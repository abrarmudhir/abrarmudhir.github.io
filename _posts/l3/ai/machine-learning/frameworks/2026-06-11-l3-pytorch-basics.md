---
layout: post
date: 2026-06-11
title: 'PyTorch Basics'
categories: l3
domain: AI
track: Machine Learning
subtrack: Frameworks
topic: PyTorch
---
PyTorch is a machine learning framework that is very popular for research and deep learning.

It is often liked because it feels close to normal Python code and is easy to experiment with.

At a basic level, PyTorch helps you:

- create tensors
- define neural network layers
- calculate loss
- update model weights during training

Common beginner ideas:

- `torch.tensor(...)`: creates data
- `nn.Module`: base class for models
- `forward(...)`: defines how data moves through the model
- `optim.Adam(...)`: updates model parameters

Simple example:

```python
import torch
import torch.nn as nn

model = nn.Sequential(
    nn.Linear(4, 8),
    nn.ReLU(),
    nn.Linear(8, 1)
)
```

Very small mental model:

1. Prepare tensors for inputs and outputs.
2. Define a model.
3. Run data through the model.
4. Measure error with a loss function.
5. Update the model using an optimizer.

Why people use PyTorch:

- clean developer experience
- strong deep learning support
- popular in AI research
- flexible for custom model design

Good first goal:

Train a tiny regression or classification model so you understand tensors, layers, loss, and optimization.
