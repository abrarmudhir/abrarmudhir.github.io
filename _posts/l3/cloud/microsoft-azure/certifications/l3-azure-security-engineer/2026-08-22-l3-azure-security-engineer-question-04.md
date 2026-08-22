---
layout: quiz
date: 2026-08-22
title: 'AZ-500: Encrypt a storage account with a customer-managed key'
categories: l3
domain: Cloud
track: Microsoft Azure
subtrack: Certifications
topic: Azure Security Engineer
quiz: true
question_number: 4
question: >-
  You need to configure encryption for an Azure Storage account named rg1lod28681041n1 using a customer-managed key stored in the KeyVault28681041 Azure Key Vault. Which step in the Azure portal ensures the storage account uses the key from the specified Key Vault for encryption?
options:
  - text: 'Go to the storage account, select Encryption under Security + networking, choose Microsoft-managed keys, and save the changes.'
    correct: false
  - text: 'Go to the Key Vault, grant the storage account access in Access policies, then enable encryption on the storage account using Microsoft-managed keys.'
    correct: false
  - text: 'Go to the storage account, select Encryption under Security + networking, pick Customer-managed keys, then enter the key URI from KeyVault28681041.'
    correct: true
  - text: 'Go to the storage account, select Access keys under Security + networking, enable Customer-managed keys, and provide the key from KeyVault28681041.'
    correct: false
explanation: >-
  Configure the storage account itself to use a customer-managed key by opening Encryption under Security + networking, selecting Customer-managed keys, and choosing or entering the Key Vault key URI. The Key Vault must also be configured with the required permissions for the storage account identity.
exam_clue: >-
  The requirement is to make the storage account use a particular Key Vault key. The relevant storage-account setting is Encryption, not Access keys.
remember: >-
  For Storage service encryption with a customer-managed key: configure Customer-managed keys on the storage account and select the Key Vault key. Key Vault permissions are necessary, but do not by themselves switch the storage account to customer-managed keys.
---
