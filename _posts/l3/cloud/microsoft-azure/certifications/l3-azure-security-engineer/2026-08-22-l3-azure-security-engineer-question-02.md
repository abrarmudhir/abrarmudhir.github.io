---
layout: quiz
date: 2026-08-22
title: 'AZ-500: Create a Microsoft Entra tenant'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 2
question: >-
  You are an Azure administrator tasked with creating a new Azure Active Directory (Azure AD) tenant for a project. The tenant must be named 12345678.onmicrosoft.com and contain a new user named user1@12345678.onmicrosoft.com. After creating the tenant, you must switch to it and provision the user. Which action is the FIRST step you should take in the Azure portal?
options:
  - text: "Navigate to Azure Active Directory, select 'Users', and click '+ New user' to create the user first."
    correct: false
  - text: "Open 'Microsoft Entra ID', select 'Custom domain names', and add '12345678.onmicrosoft.com' as a new domain."
    correct: false
  - text: "Search for and select 'Azure Active Directory', then click 'Manage Tenants' and '+ Create' to set up the new tenant."
    correct: true
  - text: "Go to the 'Subscriptions' blade, create a new subscription, and then create the tenant under it."
    correct: false
explanation: >-
  A new Microsoft Entra tenant must be created before you can switch to it or create users in it. In the Azure portal, open Azure Active Directory (now Microsoft Entra ID), choose Manage tenants, and then select + Create. The new tenant receives its initial onmicrosoft.com domain during the creation process.
exam_clue: >-
  The question asks for the FIRST step, and both the tenant name and user belong to a tenant that does not exist yet.
remember: >-
  Create the tenant first, switch to that directory, then create its users. A subscription is not required to create a Microsoft Entra tenant.
---
