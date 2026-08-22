---
layout: quiz
date: 2026-08-22
title: 'AZ-500: Enable PIM for Microsoft Entra roles'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 8
question: >-
  A company has migrated to Azure and purchased Azure AD Premium P2 licenses. What is the correct order of steps to enable Azure AD Privileged Identity Management (PIM) for Azure AD roles?
options:
  - text: 'Consent to PIM, verify identity via MFA, discover privileged roles.'
    correct: false
  - text: 'Sign up for PIM, consent to PIM, verify identity via MFA.'
    correct: true
  - text: 'Verify identity via MFA, sign up for PIM, discover resources.'
    correct: false
  - text: 'Discover privileged roles, sign up for PIM, verify identity via MFA.'
    correct: false
explanation: >-
  The initial PIM setup sequence is to sign up for the PIM service, provide the required consent, and then verify the administrator's identity using MFA. After PIM is enabled, privileged role assignments and settings can be managed.
exam_clue: >-
  The question asks about enabling PIM, so begin with service registration and consent before identity verification and role-management tasks.
remember: >-
  For initial PIM setup: sign up, consent, then complete MFA verification. Azure AD Premium P2 provides the required licensing.
---
