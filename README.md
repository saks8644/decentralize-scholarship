# 🎓 Decentralized Scholarship & Reservation Allotment System

## 📌 Overview
This project implements a **blockchain-based scholarship and reservation allotment system**, ensuring **transparency, fairness, and security** by leveraging **Smart Contracts, Decentralized Identity (DID), Verifiable Credentials, and Zero-Knowledge Proofs (ZKP)**.

The system distributes **scholarships based on caste-based reservations and financial conditions** while maintaining **privacy and immutability** using **blockchain and decentralized storage**.

---

## 📊 System Architecture

### 🎯 Stakeholders
- **Students (Beneficiaries)**: Apply for scholarships.
- **Government/Educational Institutions**: Provide funds and verify documents.
- **Donors/Organizations**: Contribute to scholarship funds via **Scholarship DAO**.
- **Validators (Decentralized Oracles)**: Authenticate caste/income/academic documents.

---

## 📂 Project Structure

```
📦 decentralized-scholarship
├── 📁 contracts                # Smart Contracts
├── 📁 frontend                  # Frontend (React + Tailwind)
├── 📁 scripts                    # Deployment & Testing Scripts
├── 📁 zkproofs                   # Circuits for ZKP
├── 📁 storage                    # Sample Documents for Testing
├── README.md                     # Project Documentation
```

---

## 📜 How to Run Locally

### Step 1: Clone Repository
```bash
git clone https://github.com/your-username/decentralized-scholarship.git
cd decentralized-scholarship
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Compile & Deploy Smart Contracts
```bash
npx hardhat compile
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

### Step 4: Start Frontend
```bash
cd frontend
npm install
npm start
```
