# Payment-App
A full-stack payment application built with Next.js, Prisma, PostgreSQL, and Docker. Features include user authentication, P2P transfers, on-ramp (add money), merchant onboarding, and a simulated bank webhook.


- **Clone the repo**
```jsx
git clone https://github.com/asher09/payment-app.git
```

- **install dependencies**
```jsx
    npm install
```

- **Run Postgres (locally or on the cloud)**
```jsx
docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

- Update env variables to .env in db/ & user-app/
- Go to `packages/db`
    - npx prisma migrate dev
    - npx prisma db seed
- Go to `apps/user-app` , run `npm run dev`
- Try logging in using phone - 1111111111 , password - alice (See `seed.ts`)


## Features

- User authentication (Credentials & Google)
- Add money (on-ramp) with simulated bank API
- P2P transfers between users
- Merchant onboarding and dashboard
- Simulated Bank Webhook
- Prisma ORM with PostgreSQL
- Monorepo structure with Turborepo
- Dockerized for easy deployment
- CI/CD with GitHub Actions

## TechStack

- Next.js
- Prisma ORM
- PostgreSQL
- NextAuth.js
- Docker
- Turborepo (monorepo)
- TypeScript
- Recoil (state management)
- GitHub Actions (CI/CD)

## 📄 Project Structure

```
|-apps/
|   user-app/         # User-facing app
|   merchant-app/     # Merchant dashboard
|   bank-webhook/     # Simulated bank webhook
|-packages/
|   db/               # Prisma schema and client
|   ui/               # Reusable UI components
|   store/            # Shared state management
```