---
layout: post
date: 2024-08-02
title: 'How do you make a method private in Python?'
question: 'How do you make a method private in Python?'
answer: >-
  In Python, methods can be made private by using a naming convention. Python does not have true private methods as 
  seen in some other programming languages, but it follows a convention that can help achieve encapsulation:

  - **Single Underscore (_prefix)**: Prefixing a method name with a single underscore (e.g., `_method_name`) indicates 
  that it is intended for internal use. This is a convention that suggests the method is private, but it can still be 
  accessed from outside the class if needed. For example:
    ```python
    class MyClass:
        def _private_method(self):
            print("This is a private method")
    ```

  - **Double Underscore (__prefix)**: Prefixing a method name with double underscores (e.g., `__method_name`) 
  invokes name mangling. This changes the method name internally to include the class name, making it harder to access 
  from outside the class. This approach is stronger in terms of hiding the method, but it is still not 
  completely foolproof. For example:
    ```python
    class MyClass:
        def __private_method(self):
            print("This is a more private method")

    obj = MyClass()
    obj.__private_method()  # This will raise an AttributeError
    ```

  Both conventions help in managing access to methods and are part of Python's flexible approach to encapsulation. 
  The choice between a single or double underscore depends on the level of access restriction required.

categories: technical-skills
type: Python
---
