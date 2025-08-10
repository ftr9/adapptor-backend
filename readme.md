# Addaptor Backed

A REST API built with **Node.js**, **Express**, and **TypeScript**.

Tracked Tasks - https://literate-woodwind-f70.notion.site/2494308ec73680bcbda0e71cdab5e448?v=2494308ec73680c8bb00000c028b5c5f

---

## Features

Get Welcome Message: GET /api/v1/welcome

Perform Backend Action: POST /api/v1/action

API Documentation: GET /api/docs

<img width="1260" height="672" alt="Screenshot 2025-08-10 at 19 03 51" src="https://github.com/user-attachments/assets/bcec0ad0-bde7-4e13-95dc-aa5466b37e02" />



## Tech Stack

- Express.js
- Node.js
- Jest + Supertest (for testing)
- NPM

---

## Getting Started

1. clone the repo

```
git clone https://github.com/ftr9/adapptor-backend.git
```

2. To navigate into the cloned repository directory, use the following command in your terminal:

```
cd adapptor-backend
```

3. Before running the project, create a `.env` file inside the `configs` directory with the following content:

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

### Architecture

The current backend architecture follows the MVC pattern, consisting of routes, controllers, and middleware. Tests are colocated within their respective modules, making it easier to locate and navigate them efficiently.

### Ideas for extensions or improvements

At this stage, the app provides a good boilerplate for building any backend application. It already includes comprehensive tests with coverage, logging, and follows a clean MVC architecture, making it a strong foundation for further development.

Some potential improvements to consider are:

**Multi-stage Docker builds**: Currently, the Docker build process involves a single step, resulting in relatively large image sizes. By adopting multi-stage builds, we can use a heavier Node.js image for building the application and a lightweight image for running the server. This approach significantly reduces the final image size and leads to faster deployments.

**Modular monolith architecture**: As the application scales, adopting a modular monolith structure would be beneficial. This involves organizing the codebase into distinct modules based on business domains, where each module manages its own routes, controllers, and middleware. Treating each module as a mini-application with versioning support will simplify extensibility and maintenance.

**Utilizing multiple CPU cores**: Node.js runs on a single core by default, which can limit scalability. By implementing cluster mode, the application can leverage all available CPU cores, enhancing performance and better handling increased load.
