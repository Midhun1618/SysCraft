# SysCraft

**SysCraft** is an interactive web-based system architecture simulator that allows users to design microservice architectures using drag-and-drop nodes and simulate system performance under varying traffic conditions.
The application helps visualize how different services such as APIs, databases, caches, and load balancers interact within a distributed system.


## Features

* Drag-and-drop architecture design using **React Flow**
* Create and connect different service types:

  * API Servers
  * Databases
  * Cache Layers
  * Load Balancers
  * Message Queues

* Interactive node connections to represent service dependencies
* Real-time system simulation based on traffic load
* System health monitoring (latency, error rate, overloaded nodes)
* Dynamic metrics dashboard with charts
* Responsive UI with Tailwind CSS

---

## Architecture

SysCraft is structured into three main layers:

### Visual Architecture Layer

Users create system designs using draggable service nodes and connect them to model distributed architectures.

### Simulation Engine

A TypeScript-based simulation engine evaluates system performance by calculating:

* Node load
* Overload conditions
* Latency
* Error rates

### Metrics Dashboard

A real-time dashboard visualizes system health and performance metrics using data charts.

---

## Tech Stack

**Frontend**

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS

**State Management**

* Zustand

**Architecture Visualization**

* React Flow

**Data Visualization**

* Recharts

---

## 📊 System Metrics

The simulator calculates key performance indicators:

* **Latency** – Estimated system response time
* **Error Rate** – Failure probability based on overloaded services
* **Overloaded Nodes** – Number of services exceeding capacity

These metrics update dynamically as users modify architecture or traffic levels.

### Working Example

<img src="./screenshots/Screenshot (34).png" width="800"/>
<img src="./screenshots/Screenshot (35).png" width="800"/>

### Overload Detection Example

<img src="./screenshots/Screenshot (33).png" width="800"/>

## ⚙️ Installation

Clone the repository: git clone https://github.com/midhun1618/syscraft.git

Navigate into the project,

Install dependencies: npm install

Run the development server: npm run dev

Open the app in your browser: http://localhost:3000

## 🎮 How to Use

1. Add service nodes such as API, Database, Cache, or Load Balancer.
2. Drag nodes to arrange your architecture.
3. Connect services to represent data flow.
4. Adjust traffic using the control slider.
5. Observe system metrics and performance charts.



## 👨‍💻 Author

**Midhun KP**
GitHub: https://github.com/Midhun1618
