---
layout: quiz
date: 2026-08-22
title: 'AZ-500: Least-privilege role for app registration'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 17
question: >-
  Your Azure AD tenant has the setting "Users can register applications" set to No, preventing users from registering apps by default. You need to allow User1 to register a new application called App1 while following the principle of least privilege. Which Azure AD role should you assign to User1?
options:
  - text: 'Cloud Application Administrator'
    correct: false
  - text: 'Application Developer'
    correct: true
  - text: 'App Configuration Data Owner'
    correct: false
  - text: 'Managed Application Contributor'
    correct: false
explanation: >-
  The Application Developer role allows a user to create application registrations when the tenant setting that permits all users to register applications is disabled. It also allows the user to manage applications they create, without giving broad administration rights over all applications.
exam_clue: >-
  The question asks for one user to register a new application while applying least privilege. Choose the role scoped to creating and managing the user’s own app registrations.
remember: >-
  Application Developer is the least-privileged Entra role for allowing selected users to create app registrations. Cloud Application Administrator can manage all application registrations and is broader.
---
