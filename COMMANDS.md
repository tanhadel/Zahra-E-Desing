# ⚡ Snabbkommando-referens

## 🚀 Installation

\`\`\`powershell
# Installera huvudprojekt
npm install

# Installera Sanity
cd sanity
npm install
cd ..
\`\`\`

## 🏃‍♂️ Utveckling

\`\`\`powershell
# Starta Next.js (huvudwebbplats)
npm run dev
# → http://localhost:3000

# Starta Sanity Studio (i ny terminal)
cd sanity && npm run dev
# → http://localhost:3333
\`\`\`

## 🏗️ Bygga & Deploying

\`\`\`powershell
# Bygg Next.js för produktion
npm run build

# Starta produktionsserver
npm start

# Deploya Sanity Studio
cd sanity
npm run build
npm run deploy
\`\`\`

## 🧹 Underhåll

\`\`\`powershell
# Rensa cache och installera om
rm -r node_modules .next
npm install

# Uppdatera alla paket
npm update

# Kontrollera för sårbarheter
npm audit
npm audit fix
\`\`\`

## 🔧 Sanity-kommandon

\`\`\`powershell
cd sanity

# Exportera data
npx sanity dataset export production backup.tar.gz

# Importera data
npx sanity dataset import backup.tar.gz production

# Validera schema
npx sanity schema extract

# Deploya GraphQL API
npx sanity graphql deploy
\`\`\`

## 📦 Linting & Formatering

\`\`\`powershell
# Kör ESLint
npm run lint

# Fixa automatiska problem
npm run lint -- --fix
\`\`\`

## 🗂️ Git-kommandon

\`\`\`powershell
# Initiera git (om inte redan gjort)
git init

# Lägg till alla filer
git add .

# Commit
git commit -m "Initial commit"

# Lägg till remote (GitHub)
git remote add origin https://github.com/username/repo.git

# Pusha till GitHub
git push -u origin main
\`\`\`

## 🌐 Vercel Deployment

\`\`\`powershell
# Installera Vercel CLI
npm i -g vercel

# Deploya
vercel

# Deploya till produktion
vercel --prod
\`\`\`

## 📋 Miljövariabler

### Lokalt (.env.local)
\`\`\`
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
\`\`\`

### På Vercel
1. Gå till Project Settings → Environment Variables
2. Lägg till samma variabler
3. Återbygg projektet

## 🔍 Debugging

\`\`\`powershell
# Visa Next.js build-info
npm run build -- --debug

# Analysera bundle-storlek
npm run build -- --analyze

# Rensa Next.js cache
rm -r .next
\`\`\`

## 📱 Testa responsiv design

\`\`\`powershell
# Starta på specifik port
npm run dev -- -p 3001

# Exponera för lokalt nätverk (testa på mobil)
npm run dev -- -H 0.0.0.0
# Gå till http://[din-dator-ip]:3000 på mobilen
\`\`\`

## 🎨 Tailwind CSS

\`\`\`powershell
# Generera Tailwind config med full typ-inferens
npx tailwindcss init --ts

# Visa alla tillgängliga klasser
npx tailwindcss --help
\`\`\`

## 📊 TypeScript

\`\`\`powershell
# Typ-check utan att bygga
npx tsc --noEmit

# Generera type declarations
npx tsc --declaration
\`\`\`

## 🆘 Problemlösning

### Port redan används

\`\`\`powershell
# Hitta process på port 3000
netstat -ano | findstr :3000

# Döda process med PID
taskkill /PID [nummer] /F
\`\`\`

### Node version

\`\`\`powershell
# Kontrollera Node version
node --version

# Uppdatera Node (använd nvm)
nvm install latest
nvm use latest
\`\`\`

### Cache-problem

\`\`\`powershell
# Rensa allt och starta om
rm -r node_modules .next
npm install
npm run dev
\`\`\`

## 📚 Användbara länkar

- **Next.js Docs:** https://nextjs.org/docs
- **Sanity Docs:** https://www.sanity.io/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **React Icons:** https://react-icons.github.io/react-icons/

---

**Tips:** Spara denna fil som bokmärke för snabb åtkomst! 🔖
