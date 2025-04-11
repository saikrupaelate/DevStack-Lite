# DevStack-Lite
Project plan: Full DevOps App with Docker and Observability

we’ll build a **Docker + Docker Compose** based full DevOps project with **CI/CD pipelines** and **lightweight observability** using tools like **Prometheus, Grafana, and CloudWatch (if hosted on EC2)** — all made simple and beginner-friendly.

---

## 🚀 Project Plan: Full DevOps App with Docker & Observability

### 🧩 Stack Overview

| Layer         | Tool/Tech                   |
|---------------|-----------------------------|
| App           | React + Node.js + PostgreSQL |
| Container     | Docker & Docker Compose     |
| CI/CD         | GitHub Actions              |
| Observability | Prometheus + Grafana        |
| Deployment    | AWS EC2 (Docker Host)       |

**Frontend(React)**
Create with:
npx create-react-app frontend

**After Prometheus and Grafana Setup**
Visit `localhost:3001`, add **Prometheus** as a data source (`http://prometheus:9090`), and create a dashboard with sample metrics.

**Deploy to AWS EC2**

1. Launch an Ubuntu EC2 instance.
2. SSH and install Docker:
   
```bash
sudo apt update
sudo apt install docker.io docker-compose -y
```

3. Clone your repo:
   
```bash
git clone <your-repo>
cd docker-devops-app
docker-compose up -d --build
```

**Access in Browser**

- Frontend: `http://<your-ec2-public-ip>:3000`
- Backend: `http://<your-ec2-public-ip>:5000`
- Prometheus: `http://<your-ec2-public-ip>:9090`
- Grafana: `http://<your-ec2-public-ip>:3001`
