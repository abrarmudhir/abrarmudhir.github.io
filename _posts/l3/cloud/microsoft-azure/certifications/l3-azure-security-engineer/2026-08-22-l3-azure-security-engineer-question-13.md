---
layout: quiz
date: 2026-08-22
title: 'AZ-500: Docker access through a Storage service endpoint'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 13
question: >-
  You are deploying Docker containers on an Azure VM running Ubuntu in a subnet with a Microsoft.Storage service endpoint. The containers cannot access Azure Storage via the service endpoint. What should you do on the VM to enable this?
options:
  - text: 'Install the Azure Virtual Network CNI plug-in on the VM.'
    correct: false
  - text: 'Assign public IP addresses to the containers to access Azure Storage.'
    correct: false
  - text: 'Set up an application security group and network security group for the subnet.'
    correct: false
  - text: 'Change the docker-compose file to use host networking mode.'
    correct: true
explanation: >-
  Docker bridge networking uses NAT, so traffic from containers may not use the VM network identity in the way required for the service endpoint path. Host networking makes the containers use the VM’s network stack, allowing their Storage traffic to use the subnet’s Microsoft.Storage service endpoint.
exam_clue: >-
  The service endpoint is already enabled on the VM subnet. The missing link is the container network mode, not public exposure or another access-control layer.
remember: >-
  For Docker workloads on a VM that must use a VNet service endpoint, host networking can make the container traffic use the VM’s VNet networking context.
---
