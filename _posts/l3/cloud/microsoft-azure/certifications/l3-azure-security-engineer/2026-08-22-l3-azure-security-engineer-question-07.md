---
layout: quiz
date: 2026-08-22
title: 'AZ-500: Evaluate RBAC scope permissions'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 7
question: >-
  RG1 contains VM1. Admin1 has the Owner role at RG1, Admin2 has the Reader role at RG1, Admin3 has the Contributor role at the subscription level, and Admin4 has the Owner role at RG2. Assess these statements: 1. Only Admin1 and Admin3 can delete VM1. 2. Only Admin3 can create new resource groups in the subscription. Which option correctly evaluates both statements?
options:
  - text: 'Statement 1: Only Admin1 and Admin2 can delete VM1. Statement 2: Only Admin1 can create new resource groups.'
    correct: false
  - text: 'Statement 1: Only Admin1 and Admin4 can delete VM1. Statement 2: Only Admin2 can create new resource groups.'
    correct: false
  - text: 'Statement 1: Only Admin2 and Admin3 can delete VM1. Statement 2: Only Admin1 can create new resource groups.'
    correct: false
  - text: 'Statement 1: Only Admin1 and Admin3 can delete VM1. Statement 2: Only Admin3 can create new resource groups.'
    correct: true
explanation: >-
  Admin1 is Owner at RG1, so they can delete VM1. Admin3 is Contributor at the subscription scope, which inherits to RG1 and allows resource management, including deleting VM1 and creating resource groups. Admin2 is Reader and cannot modify resources. Admin4's Owner role at RG2 does not grant access to resources in RG1 or to the subscription scope.
exam_clue: >-
  Azure RBAC permissions inherit downward from subscription to resource group to resource, but do not extend sideways from one resource group to another or upward to the subscription.
remember: >-
  Scope matters: subscription-level Contributor can create resource groups and manage resources below it; an Owner role on one resource group applies only within that resource group.
---
