---
layout: quiz
date: 2026-08-22
title: 'AZ-500: RBAC provider for tag management'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 6
question: >-
  You are tasked with creating a custom Azure role-based access control (RBAC) role to allow management of tags for all resources within a management group named Group1. The management group contains an Azure subscription with the ID 11111111-1234-1234-1234-111111111111. Which resource provider should be included in the role definition to enable tag management for all objects in Group1?
options:
  - text: 'Microsoft.Authorization'
    correct: false
  - text: 'Microsoft.Resources'
    correct: true
  - text: 'Microsoft.Compute'
    correct: false
  - text: 'Microsoft.Storage'
    correct: false
explanation: >-
  Tag operations are exposed through the Microsoft.Resources resource provider, for example Microsoft.Resources/tags/read and Microsoft.Resources/tags/write. Adding the required Microsoft.Resources tag actions to a custom role allows tag management across resource types at the assigned scope.
exam_clue: >-
  Tags are Azure Resource Manager metadata that apply broadly across resource types, so they belong to Microsoft.Resources rather than a service-specific provider.
remember: >-
  Use Microsoft.Resources/tags/* for tag permissions in custom RBAC roles. Microsoft.Authorization manages role assignments and definitions, not resource tags.
---
