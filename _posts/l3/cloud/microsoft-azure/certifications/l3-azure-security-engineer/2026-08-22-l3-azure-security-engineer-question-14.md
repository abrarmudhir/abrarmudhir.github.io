---
layout: quiz
date: 2026-08-22
title: 'AZ-500: Include dynamic users and devices in one access group'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 14
question: >-
  You are configuring access control for a critical application in Azure AD. Group1 must include both dynamically selected users and devices based on specific attributes, but its current configuration does not support this requirement. Which action should you take to meet the identity and access requirements for Group1?
options:
  - text: 'Delete Group1 and recreate it as a Microsoft 365 group with an Office 365 membership type, then add users and devices manually.'
    correct: false
  - text: 'Add a membership rule to Group1 to include both users and devices.'
    correct: false
  - text: 'Modify the existing membership rule of Group1 to include both users and devices.'
    correct: false
  - text: 'Change the membership type of Group1 to Assigned, create two separate dynamic groups (one for users and one for devices), and add these groups as members to Group1.'
    correct: true
explanation: >-
  A dynamic Microsoft Entra group can have a membership rule for either users or devices, but not both in the same group. Use separate dynamic security groups for the user and device rules, then use an assigned security group as the access-control parent and add the dynamic groups to it.
exam_clue: >-
  The requirement explicitly combines dynamically selected users and devices. This is not supported by one dynamic membership rule.
remember: >-
  Dynamic group rule: users OR devices, not users AND devices. Use separate dynamic groups and an assigned parent group when an application must target both.
---
