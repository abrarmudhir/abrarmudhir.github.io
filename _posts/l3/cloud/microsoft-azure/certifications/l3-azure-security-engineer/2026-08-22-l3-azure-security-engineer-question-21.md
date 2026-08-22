---
layout: quiz
date: 2026-08-22
title: 'AZ-500: Role required to implement PIM for Entra roles'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 21
question: >-
  Your organization has recently created an Azure subscription and needs to enable Azure AD Privileged Identity Management (PIM) for managing privileged roles. Which role should you assign to a user to ensure they have the necessary permissions to implement and manage PIM settings for the tenant?
options:
  - text: 'Security Administrator'
    correct: false
  - text: 'Compliance Administrator'
    correct: false
  - text: 'Global Administrator'
    correct: true
  - text: 'Password Administrator'
    correct: false
explanation: >-
  A Global Administrator has the tenant-wide permissions required for the initial setup and management of Privileged Identity Management for Microsoft Entra roles. The other listed roles have focused security, compliance, or password-management duties but do not provide the full PIM configuration authority.
exam_clue: >-
  The question asks about implementing and managing PIM settings for the tenant, not simply monitoring security or resetting passwords.
remember: >-
  Use Global Administrator for initial PIM setup for Microsoft Entra roles. After setup, delegate PIM administration using narrower roles where appropriate.
---
