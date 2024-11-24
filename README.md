# Contacts Management System

## Overview
A CRUD application for managing contact information built with a **React frontend**, **Node.js/Express backend**, and **MySQL database**. It supports adding, editing, deleting, and listing contacts.

---

## Features
- **Frontend**: Displays a contact list and provides forms for adding/editing contacts.
- **Backend**: RESTful API with endpoints to perform CRUD operations.
- **Database**: MySQL for persistent data storage.

---

## Setup Instructions

### Prerequisites
- Node.js (14+)
- MySQL
- A code editor (e.g., VSCode)

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd contacts-management-system
### Create a database:
- CREATE DATABASE contact_management;
- USE contact_management;
### DATABASE SCHEMA
- CREATE TABLE contacts (
-   id INT AUTO_INCREMENT PRIMARY KEY,
-   firstName VARCHAR(50) NOT NULL,
-   lastName VARCHAR(50) NOT NULL,
-   email VARCHAR(100) NOT NULL,
-   phoneNumber VARCHAR(15),
-   company VARCHAR(100),
-   jobTitle VARCHAR(100)
- );
-Backend Setup
-cd backend
-npm install
-Add a .env file:
-makefile
-Copy code
-DB_HOST=localhost
-DB_USER=root
-DB_PASSWORD=your_password
-DB_NAME=contact_management
-PORT=5000
-Start the server:
-node server.js
-Frontend Setup

-cd ../frontend
-npm install
-npm start
-Usage
-Access the app: http://localhost:3000
-API Endpoints: http://localhost:5000
