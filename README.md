- Clone the repo

```jsx
git clone https://github.com/asher09/Payment-App.git
```

- npm install
- Run postgres either locally or on the cloud

```jsx
docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

- Update env variables to .env in db & user-app folder.
- Go to `packages/db`
    - npx prisma migrate dev
    - npx prisma db seed
- Go to `apps/user-app` , run `npm run dev`
- Try logging in using phone - 1111111111 , password - alice (See `seed.ts`)