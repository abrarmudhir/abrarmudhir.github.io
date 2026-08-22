---
layout: quiz
date: 2026-08-22
title: 'AZ-500: Automatic AIP labeling for file types'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 15
question: >-
  You configure Azure Information Protection (AIP) policies with two conditions based on the text "Black and White" and "Black or white". Two policies with labels Label1 and Label2 are applied to User1. User1 creates a Word document containing "Black and White" and a Notepad file containing "Black or white". Which labels will be automatically applied to each file?
options:
  - text: 'Word file: No label; Notepad file: No label'
    correct: false
  - text: 'Word file: Label2 only; Notepad file: No label'
    correct: false
  - text: 'Word file: Both Label1 and Label2; Notepad file: Both Label1 and Label2'
    correct: false
  - text: 'Word file: Label1 only; Notepad file: No label'
    correct: true
explanation: >-
  The Word document is a supported Office file and matches the Label1 condition for "Black and White", so Label1 is automatically applied. A plain Notepad text file is not a supported file type for this automatic AIP labeling action, so it receives no label.
exam_clue: >-
  Check both the content condition and whether the file type supports automatic labeling. A matching string alone is not enough for an unsupported file type.
remember: >-
  AIP automatic labeling works only with supported file types. Office documents can be automatically labeled, whereas plain text files such as Notepad files are not automatically labeled in this scenario.
---
