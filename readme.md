# Addaptor Backed

A REST API built with **Node.js**, **Express**, and **TypeScript**.

## Tech Stack

- Express.js
- Node.js
- Jest + Supertest (for testing)
- NPM

---

## Getting Started

Before running the project, create a `.env` file inside the `configs` directory with the following content:

```
NODE_ENV=development
BASE_URL=http://localhost:3000
```

### Option 1: Run Locally (Node.js installed)

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

### Option 2: Run with Docker

1. Start the containers:

```bash
docker-compose up
```

2. Stop the server when done by pressing:

```bash
ctrl + c
```

### Running Tests

1. Run all tests:

```bash
npm run test
```

This will run the tests and generate a coverage folder.

2. To view the test coverage report:
   Open **coverage/lcov-report/index.html** in your web browser.
