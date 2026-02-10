# Glamourista - Fashion Designer Portfolio

Ett elegant och modernt fashion designer portfolio byggt med Next.js, TypeScript, Tailwind CSS och Sanity.io som backend.

## ✨ Funktioner

- **Modern Stack:** Next.js 14 med App Router, TypeScript, och Tailwind CSS
- **Headless CMS:** Sanity.io för innehållshantering
- **Responsiv Design:** Fullt responsivt och mobile-first
- **Animationer:** Framer Motion för smidiga och eleganta animationer
- **SEO-optimerad:** Server-side rendering och metadata hantering
- **Bildoptimering:** Next.js Image-komponenter för optimal prestanda

## 🎨 Sektioner

- **Hero:** Imponerande landningssida med bakgrundsbild
- **Kollektioner:** Visa och utforska fashion-kollektioner
- **Lookbook:** Inspirerande fashion lookbooks
- **Blogg:** Mode-artiklar och inspiration
- **Om Oss:** Företagets historia och värderingar
- **Kontakt:** Kontaktformulär och information

## 🚀 Kom igång

### Förutsättningar

- Node.js 18+ installerat
- npm eller yarn
- Ett Sanity.io-konto (gratis på sanity.io)

### Installation

1. **Installera beroenden för huvudprojektet:**

\`\`\`bash
npm install
\`\`\`

2. **Installera Sanity-beroenden:**

\`\`\`bash
cd sanity
npm install
\`\`\`

### Konfigurera Sanity

1. **Skapa ett nytt Sanity-projekt:**

\`\`\`bash
cd sanity
npx sanity init
\`\`\`

Följ instruktionerna och välj:
- Skapa nytt projekt
- Använd standarddatasetet (production)
- Välj projektet du vill använda

2. **Uppdatera projekt-ID:**

Öppna `sanity/sanity.config.ts` och uppdatera `projectId`:

\`\`\`typescript
projectId: 'ditt-projekt-id', // Ersätt med ditt Sanity projekt-ID
\`\`\`

3. **Uppdatera miljövariabler:**

Skapa en `.env.local` fil i root-mappen och lägg till:

\`\`\`
NEXT_PUBLIC_SANITY_PROJECT_ID=ditt-projekt-id
NEXT_PUBLIC_SANITY_DATASET=production
\`\`\`

4. **Starta Sanity Studio:**

\`\`\`bash
cd sanity
npm run dev
\`\`\`

Studio öppnas på `http://localhost:3333`

### Starta utvecklingsservern

I en ny terminal, från root-mappen:

\`\`\`bash
npm run dev
\`\`\`

Webbplatsen är nu tillgänglig på `http://localhost:3000`

## 📁 Projektstruktur

\`\`\`
glamourista-fashion-designer/
├── app/                      # Next.js app router
│   ├── about/               # Om oss-sida
│   ├── blog/                # Blogg & artiklar
│   ├── collections/         # Modekollektion
│   ├── contact/             # Kontaktsida
│   ├── lookbook/            # Lookbook-galleri
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Hemsida
│   └── globals.css          # Globala stilar
├── components/              # React-komponenter
│   ├── Header.tsx           # Navigation
│   ├── Footer.tsx           # Footer
│   ├── Hero.tsx             # Hero-sektion
│   └── ...
├── lib/                     # Utilities
│   └── sanity.ts            # Sanity-klient & queries
├── sanity/                  # Sanity CMS
│   ├── schemas/             # Content schemas
│   ├── sanity.config.ts     # Sanity konfiguration
│   └── package.json
├── public/                  # Statiska filer
├── tailwind.config.ts       # Tailwind CSS konfiguration
├── next.config.js           # Next.js konfiguration
└── package.json
\`\`\`

## 🎨 Anpassning

### Färger

Anpassa färgscheman i `tailwind.config.ts`:

\`\`\`typescript
colors: {
  primary: {
    // Dina primära färger
  },
  accent: {
    // Dina accentfärger
  },
}
\`\`\`

### Typsnitt

Typsnitt konfigureras i `app/layout.tsx` med Google Fonts.

### Innehåll

Allt innehåll hanteras via Sanity Studio på `http://localhost:3333`

## 🛠️ Byggning för produktion

\`\`\`bash
npm run build
npm start
\`\`\`

## 📝 Sanity Schemas

Projektet inkluderar följande content types:

- **Collection:** Modekollektioner med bilder och säsonsinformation
- **Lookbook:** Lookbooks med bildgallerier
- **Blog Post:** Bloggartiklar med rik text
- **Author:** Författare/designer-profiler
- **About:** Om oss-innehåll
- **Site Settings:** Globala inställningar och sociala medier

## 🌐 Deployment

### Vercel (Rekommenderat)

1. Pusha din kod till GitHub
2. Importera projektet till Vercel
3. Lägg till miljövariabler
4. Deploya!

### Sanity Studio

\`\`\`bash
cd sanity
npm run build
npm run deploy
\`\`\`

## 📄 Licens

Detta projekt är skapat för demonstrationssyfte.

## 🤝 Bidra

Välkommen att skapa issues och pull requests!

## 📧 Kontakt

För frågor, kontakta: info@glamourista.se

---

Byggt med ❤️ av Glamourista Team
\`\`\`
