---
layout: quiz
date: 2026-08-22
title: 'AZ-500: AD FS federation and server minimization'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 16
question: >-
  Your organization plans to integrate an on-premises Active Directory domain named weylandindustries.com with an Azure AD tenant of the same name. The integration must enforce on-premises password policies and user logon restrictions while minimizing the number of additional servers required. You propose using Azure AD Connect with federation via Active Directory Federation Services (AD FS). Does this solution meet these requirements?
options:
  - text: 'Yes, but only if pass-through authentication is used instead of AD FS.'
    correct: false
  - text: 'Yes, it enforces on-premises policies and reduces server requirements.'
    correct: false
  - text: 'No, Azure AD Connect cannot enforce on-premises password policies or logon restrictions.'
    correct: false
  - text: 'No, it enforces on-premises policies but increases the number of servers needed.'
    correct: true
explanation: >-
  AD FS federation redirects cloud authentication to the on-premises identity infrastructure, so on-premises password policies and logon restrictions can be enforced. However, AD FS requires federation servers and typically Web Application Proxy servers for external access and high availability, increasing the on-premises server footprint.
exam_clue: >-
  Federation is strong when sign-ins must be evaluated by on-premises AD, but the wording “minimizing the number of additional servers” conflicts with the infrastructure required by AD FS.
remember: >-
  AD FS provides federation and on-premises policy enforcement, but adds server infrastructure. Password hash synchronization is usually the simplest hybrid option when minimizing infrastructure is important.
---
