---
layout: quiz
date: 2026-08-22
title: 'AZ-500: Regional TLS termination and path routing'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 3
question: >-
  Your company runs a web app called AppSecure that delivers product images and videos via https://appsecure.contoso.com. It uses two backend pools: Pool1 for images and Pool2 for videos. To improve performance, you want to offload TLS decryption and route requests based on URL paths at the regional level. Which Azure service should you use?
options:
  - text: 'Use Azure Front Door to handle global traffic routing and caching.'
    correct: false
  - text: 'Use Azure Traffic Manager for DNS-based traffic distribution.'
    correct: false
  - text: 'Use Azure Bastion to securely access backend servers via RDP/SSH.'
    correct: false
  - text: 'Use Azure Application Gateway for TLS termination and path-based routing.'
    correct: true
explanation: >-
  Azure Application Gateway is a regional Layer 7 load balancer. It can terminate TLS at the gateway and use URL path-based routing rules to send image requests to Pool1 and video requests to Pool2.
exam_clue: >-
  “TLS decryption”, “URL paths”, “backend pools”, and “regional level” point directly to Application Gateway.
remember: >-
  Application Gateway is regional and Layer 7. Azure Front Door is the global Layer 7 option, while Traffic Manager only directs traffic at the DNS layer and cannot terminate TLS or inspect URL paths.
---
