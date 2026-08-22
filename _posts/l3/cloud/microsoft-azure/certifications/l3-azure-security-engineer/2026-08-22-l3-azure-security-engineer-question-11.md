---
layout: quiz
date: 2026-08-22
title: 'AZ-500: Temporary access to a blob'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 11
question: >-
  You need to provide a user with temporary access to a specific blob in Azure Blob Storage, ensuring the access automatically expires after six days. Which method should you use to grant this time-limited access?
options:
  - text: 'Role-based access control (RBAC) assigned to the user.'
    correct: false
  - text: 'A shared access policy defined on the blob container.'
    correct: false
  - text: "A managed identity for the user's account."
    correct: false
  - text: 'A shared access signature (SAS) with a six-day expiry time.'
    correct: true
explanation: >-
  A SAS can grant narrowly scoped permissions to a single blob and includes an explicit expiry time. Setting the expiry to six days makes the access stop automatically at the required time.
exam_clue: >-
  The key requirements are access to a specific blob and automatic expiration after a defined period. These are core SAS capabilities.
remember: >-
  Use a SAS for delegated, time-limited access to Storage resources. RBAC and managed identities are identity-based authorization mechanisms and do not inherently provide an expiry at the individual access-grant level.
---
