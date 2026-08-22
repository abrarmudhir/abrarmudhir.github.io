---
layout: quiz
date: 2026-08-22
title: 'AZ-500: Least-privilege role for synchronization options'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 5
question: >-
  Your organization's network includes an on-premises Active Directory domain named adatum.com that synchronizes with Azure Active Directory using Azure AD Connect. The Azure AD Connect tool is installed on Server1. To adhere to the principle of least privilege, you need to assign an Azure AD role to a domain administrator from adatum.com that allows them to modify synchronization options. Which Azure AD role should you assign?
options:
  - text: 'User Administrator'
    correct: false
  - text: 'Hybrid Identity Administrator'
    correct: true
  - text: 'Security Administrator'
    correct: false
  - text: 'Global Administrator'
    correct: false
explanation: >-
  The Hybrid Identity Administrator role is designed for managing Microsoft Entra hybrid identity features, including Azure AD Connect synchronization settings. It provides the required hybrid identity permissions without assigning the broader Global Administrator role.
exam_clue: >-
  “Azure AD Connect”, “modify synchronization options”, and “least privilege” point to Hybrid Identity Administrator.
remember: >-
  Use Hybrid Identity Administrator for hybrid identity and synchronization administration. Reserve Global Administrator for tasks that truly require tenant-wide control.
---
