---
layout: quiz
date: 2026-08-22
title: 'AZ-500: HDInsight authentication with Azure AD Domain Services'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 19
question: >-
  You are designing a hybrid identity solution for a company using Azure HDInsight clusters on a virtual network. To enable on-premises Active Directory users to authenticate to the HDInsight cluster with their existing credentials, you propose deploying Azure AD Domain Services in Azure. Does this meet the requirement without additional configuration?
options:
  - text: 'Only if Azure AD Connect is not used.'
    correct: false
  - text: 'Only if the cluster uses Azure AD Pass-through Authentication.'
    correct: false
  - text: 'Yes.'
    correct: false
  - text: 'No.'
    correct: true
explanation: >-
  Azure AD Domain Services provides managed domain services, but it must have the required Microsoft Entra users, groups, and password hashes available. For on-premises Active Directory users, configure synchronization to Microsoft Entra ID, typically with Azure AD Connect and password hash synchronization, before Azure AD Domain Services can support the authentication scenario.
exam_clue: >-
  The phrase “without additional configuration” is decisive. Deploying Azure AD Domain Services does not by itself synchronize an on-premises AD domain or make its credentials available.
remember: >-
  Azure AD Domain Services is managed domain infrastructure, not an automatic bridge to on-premises AD. Synchronize identities and password hashes first.
---
