
# Blockchain Medical Record System

## Overview
This project is a **Medical Record Management System** built using **Solidity** and tested on **Remix VM**.  
It allows secure storage and retrieval of patient medical records on blockchain.

## Features
- Add Medical Record – Patient name, disease, treatment, and timestamp.  
- Get Medical Record – Retrieve record details by ID.  

## Smart Contract
The main contract is `MedicalRecord.sol`.  
- Stores medical records in a mapping.  
- Tracks total records with `recordCount`.  
- Functions: `addRecord`, `getRecord`.  

## Testing in Remix VM
- Records can be added and retrieved successfully.  
- Note: Remix VM resets on refresh. Deploy to testnet with MetaMask for persistence.

## Optional Frontend
- HTML + JS frontend using **ethers.js** to interact with the contract.  
- Allows adding and retrieving records from a web page.  

## Project Structure
