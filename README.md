# Daily Drive (GitHub-ready)

This package is structured for GitHub -> Vercel deployment.

Steps to deploy from iPhone:
1. Unzip and upload the contents to a new GitHub repo.
2. Connect the repo to Vercel and deploy.
3. Add environment variables in Vercel (DATABASE_URL, STRIPE keys).
4. (Optional) Run Prisma migrations with `npx prisma migrate deploy` in Vercel post-deploy.
