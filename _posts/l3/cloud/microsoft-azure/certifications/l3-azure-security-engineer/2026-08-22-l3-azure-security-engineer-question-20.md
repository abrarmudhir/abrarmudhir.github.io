---
layout: quiz
date: 2026-08-22
title: 'AZ-500: Mask sensitive Azure SQL query results'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 20
question: >-
  You are securing an Azure SQL Database called FinanceDB that contains sensitive financial data. You need to automatically identify and classify sensitive columns and ensure query results show only the first and last characters of those sensitive data fields. Which Azure SQL Database feature should you enable to ensure the query results are masked as described?
options:
  - text: 'Dynamic Data Masking'
    correct: true
  - text: 'Transparent Data Encryption (TDE)'
    correct: false
  - text: 'Always Encrypted'
    correct: false
  - text: 'Data Discovery & Classification'
    correct: false
explanation: >-
  Dynamic Data Masking changes how sensitive column values are presented in query results for users without the UNMASK permission. A partial mask can preserve specified prefix and suffix characters while masking the middle of the value. Data Discovery & Classification can identify and label sensitive columns, but it does not mask query results by itself.
exam_clue: >-
  The defining requirement is what users see in query results: only the first and last characters. This points to a partial dynamic data mask.
remember: >-
  Use Data Discovery & Classification to find and label sensitive data; use Dynamic Data Masking to obscure values in query results; use TDE and Always Encrypted for encryption scenarios.
---
