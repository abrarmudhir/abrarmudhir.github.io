---
layout: quiz
date: 2026-08-22
title: 'AZ-500: Cross-tenant access and guest controls'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 18
question: >-
  You manage cross-tenant access between contoso.com and a partner tenant, fabrikam.com, which enforces MFA. Contoso has cross-tenant access and external collaboration settings, plus a Conditional Access policy requiring compliant devices and MFA for guest users. Evaluate these statements: 1. Fabrikam users with compliant devices get full app access without other restrictions. 2. The policy accepts MFA claims from fabrikam.com users. 3. Fabrikam guest users can view and modify all contoso.com user properties. Which option correctly evaluates these statements?
options:
  - text: 'False, True, False'
    correct: true
  - text: 'True, True, False'
    correct: false
  - text: 'True, False, True'
    correct: false
  - text: 'False, False, True'
    correct: false
explanation: >-
  A compliant device does not by itself bypass all other Conditional Access requirements; the guest policy also requires MFA, and cross-tenant settings can impose additional controls. With the relevant cross-tenant trust configured, Contoso can accept an MFA claim from Fabrikam. Guest users have restricted directory permissions and cannot view and modify all Contoso user properties.
exam_clue: >-
  Separate the three controls: device compliance, trust of an external MFA claim, and guest directory permissions. They are independent settings.
remember: >-
  Cross-tenant access can trust partner MFA and device claims, but it does not grant unrestricted app or directory access. Guest users remain limited by external collaboration and directory permissions.
---
