---
layout: quiz
date: 2026-08-22
title: 'AZ-500: PIM alert for stale privileged accounts'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 9
question: >-
  Your organization uses Azure AD Privileged Identity Management (PIM) to manage privileged roles. The security policy requires administrator passwords to be changed every 180 days. However, PIM is generating alerts for administrators who have not changed their passwords in the last 90 days, causing unnecessary noise. Which PIM alert should you modify to align with the 180-day password change requirement and reduce false positives?
options:
  - text: "Roles don't require multi-factor authentication for activation."
    correct: false
  - text: 'Roles are being assigned outside of Privileged Identity Management.'
    correct: false
  - text: "Administrators aren't using their privileged roles."
    correct: false
  - text: 'Potential stale accounts in a privileged role.'
    correct: true
explanation: >-
  The Potential stale accounts in a privileged role alert identifies privileged accounts that may be stale, including accounts based on password age. Adjusting its threshold to match the organization’s 180-day password policy reduces alerts that are triggered prematurely at 90 days.
exam_clue: >-
  The issue is specifically the age of administrator passwords, which is a stale-account signal rather than an activation, assignment, or role-use condition.
remember: >-
  Tune the stale privileged-account alert when the alert threshold for password age or account activity does not match the organization’s policy.
---
