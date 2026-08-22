---
layout: quiz
date: 2026-08-22
title: 'AZ-500: HDInsight authentication with on-premises AD'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 12
question: >-
  You are setting up authentication for an Azure HDInsight cluster on a virtual network and want users to authenticate with their on-premises Active Directory credentials. Will deploying Azure AD Application Proxy fulfill this requirement?
options:
  - text: 'No, while the Enterprise Security Package (ESP) is required for HDInsight authentication, Azure AD Application Proxy cannot replace the domain services or Kerberos support needed for on-premises Active Directory integration.'
    correct: true
  - text: 'No, Azure AD Application Proxy does not integrate with Azure HDInsight or provide the required authentication mechanisms for on-premises Active Directory credentials.'
    correct: false
  - text: 'No, Azure AD Application Proxy does not provide the necessary Kerberos authentication or domain services required for HDInsight to authenticate users with on-premises Active Directory credentials.'
    correct: false
  - text: 'No, Azure AD Application Proxy is intended for publishing on-premises web apps and does not support Kerberos authentication for HDInsight.'
    correct: false
explanation: >-
  Azure AD Application Proxy publishes on-premises web applications for remote access; it does not provide the domain integration required by HDInsight. For HDInsight authentication with Active Directory credentials, use an Enterprise Security Package cluster and the required Active Directory Domain Services or Azure AD Domain Services and Kerberos integration.
exam_clue: >-
  HDInsight needs cluster-level domain and Kerberos integration. Application Proxy is an application publishing service, not a replacement for domain services.
remember: >-
  Application Proxy provides remote access to web applications. HDInsight Enterprise Security Package provides the framework for domain-integrated HDInsight authentication.
---
