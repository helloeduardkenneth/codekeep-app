# 📝 CodeKeep

CodeKeep is a modern **code snippet manager** built with **Next.js 15+, TypeScript, TailwindCSS, shadcn/ui, and Zustand**.  
Save, organize, and access your code snippets anywhere.  

## ✨ Features
- 🔐 User authentication (per-user snippet storage)  
- 💾 Snippet management (create, edit, delete, search)  
- 🎨 Clean UI with TailwindCSS + shadcn/ui  
- ⚡ Global state management with Zustand  
- 📂 Code editor support (syntax highlighting planned)  
- ☁️ Free-tier friendly deployment on Vercel + Supabase  

---

## 📦 Tech Stack
- Next.js 15+ (App Router)  
- TypeScript  
- TailwindCSS  
- shadcn/ui  
- Zustand  
- Prisma + PostgreSQL (Supabase free-tier)  
- NextAuth.js for authentication  

---

## 💰 Pricing (Educational Example)
| Plan       | Price        | Features |
|------------|-------------|----------|
| **Free**   | $0           | 20 snippets, no tags |
| **Pro**    | $5 / month   | Unlimited snippets, tagging, syntax themes |
| **Team**   | $15 / month  | Everything in Pro + team sharing, workspaces |

*(Currently for educational use only – billing integration TBD)*  

---

## 🚀 Roadmap
### MVP (Free Tier)
- [ ] Authentication (NextAuth + Supabase/Postgres)  
- [ ] CRUD for snippets  
- [ ] Limit: 20 snippets per user  
- [ ] Basic search functionality  

### Pro Tier (Planned)
- [ ] Unlimited snippets  
- [ ] Tagging system  
- [ ] Syntax highlighting & custom themes  

### Team Tier (Planned)
- [ ] Team workspaces  
- [ ] Invite & manage members  
- [ ] Share snippets  

### Future Improvements
- [ ] Dark mode toggle  
- [ ] AI-powered snippet search  
- [ ] Public snippet sharing with unique links  

---

## 🛠️ Getting Started

1. Clone the repository  
git clone https://github.com/yourusername/codekeep.git
cd codekeep


2. Install dependencies  
pnpm install


3. Configure environment  
Create a `.env` file in the root folder:  
DATABASE_URL=your_database_url_here
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000

4. Set up the database  
npx prisma migrate dev --name init


5. Run the development server  
pnpm dev


Visit: http://localhost:3000  

---

## ☁️ Deployment

### Vercel (Frontend)
1. Push the repo to GitHub  
2. Connect your repo to Vercel  
3. Add environment variables in the Vercel dashboard  

### Supabase (Database & Auth)
1. Create a free project in Supabase  
2. Copy the project database URL → use as `DATABASE_URL`  
3. Enable authentication providers if needed  

---

## 📸 Screenshots (coming soon)
- Dashboard  
- Snippet editor  
- Pricing page  

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!  
Check the issues page.  

---

## 📜 License
This project is licensed under the MIT License.  
