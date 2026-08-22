---
layout: post
date: 2026-08-22
title: 'Azure Security Engineer Associate (AZ-500)'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
---
This section is for study notes and question-and-answer practice for the Azure Security Engineer Associate (AZ-500) certification.

Use the official Microsoft Learn [practice assessment](https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/?practice-assessment-type=certification) alongside these notes.

## Questions and answers

### Question 1: Choose an authentication method

You are designing an identity solution for a company with an on-premises Active Directory forest, `corp.local`, and an Azure AD tenant, `contoso.onmicrosoft.com`. The solution must enforce on-premises password policies, minimise servers, and provide seamless sign-on to cloud apps on corporate devices. Which authentication method should you choose?

- Use pass-through authentication with Seamless SSO.
- Use federated identity with Active Directory Federation Services (AD FS).
- Use Azure AD Connect cloud sync with password writeback.
- Use password hash synchronization with Seamless SSO.

**Correct answer:** Use password hash synchronization with Seamless SSO.

**Why it is correct:** Password hash synchronization (PHS) keeps on-premises Active Directory as the source of authority for passwords and password policies, while synchronizing a hash of each password hash to Microsoft Entra ID (Azure AD). Seamless SSO signs users in automatically from domain-joined corporate devices. PHS is the lowest-infrastructure hybrid authentication choice: it does not require AD FS servers or pass-through authentication agents to validate each cloud sign-in.

**Why the other options are wrong:**

- **Pass-through authentication with Seamless SSO** supports the sign-on experience and validates passwords against on-premises AD, but it requires on-premises authentication agents. For high availability, multiple agents are recommended, so it does not minimise servers as well as PHS.
- **Federated identity with AD FS** can enforce on-premises policies, but requires the most on-premises infrastructure and management, including AD FS and proxy components.
- **Azure AD Connect cloud sync with password writeback** is not the best fit for the stated authentication requirements. Password writeback supports specific password-management scenarios, such as self-service password reset, rather than providing the simplest authentication method for cloud sign-in.

**Exam clue:** The combination of *minimise servers* and *seamless sign-on on corporate devices* points to PHS with Seamless SSO.

**Remember:** Choose PHS when you want the simplest hybrid authentication setup. Choose pass-through authentication when cloud sign-ins must be validated directly against on-premises AD, and choose federation only when a specific requirement needs it.
