This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Kubernetes & CI/CD Deployment

### Prerequisites

| Tool | Purpose |
|------|---------|
| Docker | Build & run container images |
| kubectl | Interact with your Kubernetes cluster |
| A Kubernetes cluster | EKS / GKE / AKS / DigitalOcean / self-hosted |
| NGINX Ingress Controller | Route external traffic into the cluster |
| cert-manager (optional) | Auto-provision TLS certificates via Let's Encrypt |

---

### 1. GitHub Secrets — required before first deploy

Go to **GitHub → Settings → Secrets and variables → Actions** and add:

| Secret name | Value |
|-------------|-------|
| `DOCKER_USERNAME` | Your Docker Hub username |
| `DOCKER_PASSWORD` | Your Docker Hub password / access token |
| `KUBECONFIG_DATA` | Base64-encoded kubeconfig of your cluster (`base64 -w0 ~/.kube/config`) |

---

### 2. Update your domain

Edit `k8s/ingress.yaml` and replace both occurrences of `yourdomain.com` with your actual domain.

---

### 3. CI/CD Pipeline flow

```
Push to main
    │
    ▼
[lint-and-build]  ── ESLint + next build
    │
    ▼
[docker-build-push]  ── builds multi-stage image, pushes to Docker Hub
    │                    tags: latest + sha-<short-sha>
    ▼
[deploy]  ── kubectl apply k8s/ manifests
             kubectl set image  (pins exact SHA tag)
             kubectl rollout status  (waits for zero-downtime rollout)
```

Pull requests only run `lint-and-build` — no image push or deploy.

---

### 4. Manual deploy (without CI/CD)

```bash
# Build & push image
docker build -t <DOCKER_USERNAME>/rownak-webportal:latest .
docker push <DOCKER_USERNAME>/rownak-webportal:latest

# Apply manifests
kubectl apply -f k8s/

# Watch rollout
kubectl rollout status deployment/rownak-webportal -n rownak-webportal
```

---

### 5. Useful kubectl commands

```bash
# Check pod status
kubectl get pods -n rownak-webportal

# View logs
kubectl logs -f deployment/rownak-webportal -n rownak-webportal

# Scale manually
kubectl scale deployment rownak-webportal --replicas=3 -n rownak-webportal

# Check HPA status
kubectl get hpa -n rownak-webportal
```
