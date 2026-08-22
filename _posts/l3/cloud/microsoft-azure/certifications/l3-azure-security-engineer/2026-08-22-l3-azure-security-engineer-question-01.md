---
layout: quiz
date: 2026-08-22
title: 'AZ-500: Hybrid authentication method'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 1
question: >-
  You are designing an identity solution for a company with an on-premises Active Directory forest, corp.local, and an Azure AD tenant, contoso.onmicrosoft.com. The solution must enforce on-premises password policies, minimise servers, and provide seamless sign-on to cloud apps on corporate devices. Which authentication method should you choose?
options:
  - text: 'Use pass-through authentication with Seamless SSO.'
    correct: false
  - text: 'Use federated identity with Active Directory Federation Services (AD FS).'
    correct: false
  - text: 'Use Azure AD Connect cloud sync with password writeback.'
    correct: false
  - text: 'Use password hash synchronization with Seamless SSO.'
    correct: true
explanation: >-
  Password hash synchronization keeps on-premises Active Directory as the password-policy authority while synchronizing password hashes to Microsoft Entra ID. Seamless SSO automatically signs in users on domain-joined corporate devices. It is the lowest-infrastructure option because cloud sign-ins do not need AD FS servers or pass-through authentication agents.
exam_clue: >-
  “Minimise servers” together with “seamless sign-on on corporate devices” points to password hash synchronization with Seamless SSO.
remember: >-
  Choose password hash synchronization for the simplest hybrid authentication setup. Choose pass-through authentication only when cloud sign-ins must be validated directly against on-premises Active Directory, and federation only for a specific federation requirement.
---
