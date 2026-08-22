---
layout: quiz
date: 2026-08-22
title: 'AZ-500: Dynamic group membership rules'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 10
question: >-
  You need to configure dynamic group membership based on users' City attribute. USER1 has Toronto, USER2 has Montreal, USER3 has London, and USER4 has Ontario. Group1 uses (user.city -contains "ON") and Group2 uses (user.city -match "on"). What will be the membership of Group1 and Group2 after the rules are applied?
options:
  - text: 'GROUP1: USER1, USER3 / GROUP2: USER1, USER3'
    correct: false
  - text: 'GROUP1: USER1, USER2 / GROUP2: USER1, USER2'
    correct: false
  - text: 'GROUP1: USER1, USER2, USER3 / GROUP2: USER1, USER2, USER3, USER4'
    correct: false
  - text: 'GROUP1: USER1, USER2, USER3, USER4 / GROUP2: USER1, USER2, USER3, USER4'
    correct: true
explanation: >-
  The -contains operator performs a case-insensitive substring check for string properties, and -match uses a case-insensitive regular-expression match by default. Every listed city contains the sequence "on": Toronto, Montreal, London, and Ontario. Therefore, all four users are included in both groups.
exam_clue: >-
  Do not treat "ON" and "on" as case-sensitive here. Check each city for the substring, not only its starting letters.
remember: >-
  In dynamic membership rules, string -contains is case-insensitive and -match is case-insensitive unless you use the case-sensitive variants. Both can match a substring within the attribute value.
---
