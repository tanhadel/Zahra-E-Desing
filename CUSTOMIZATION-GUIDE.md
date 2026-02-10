# 🎨 Anpassningsguide för Glamourista

Denna guide hjälper dig att anpassa webbplatsen efter dina behov.

## 🎨 Färger

### Ändra färgschema

Öppna `tailwind.config.ts` och uppdatera färgerna:

\`\`\`typescript
colors: {
  primary: {
    50: '#fdf8f6',   // Ljusaste nyans
    100: '#f2e8e5',
    200: '#eaddd7',
    300: '#e0cec7',
    400: '#d2bab0',
    500: '#bfa094',  // Basnyans
    600: '#a18072',
    700: '#977669',
    800: '#846358',
    900: '#43302b',  // Mörkaste nyans
  },
}
\`\`\`

**Tips:** Använd verktyg som [Coolors.co](https://coolors.co/) eller [Tailwind Shades](https://www.tints.dev/) för att generera färgpaletter.

## 🔤 Typsnitt

### Ändra typsnitt

1. Gå till [Google Fonts](https://fonts.google.com/)
2. Välj dina typsnitt
3. Öppna `app/layout.tsx` och uppdatera:

\`\`\`typescript
import { YourFont, YourDisplayFont } from 'next/font/google'

const yourFont = YourFont({ 
  subsets: ['latin'],
  variable: '--font-your-font',
})

const yourDisplayFont = YourDisplayFont({ 
  subsets: ['latin'],
  variable: '--font-your-display',
})
\`\`\`

4. Uppdatera `tailwind.config.ts`:

\`\`\`typescript
fontFamily: {
  sans: ['var(--font-your-font)', 'sans-serif'],
  display: ['var(--font-your-display)', 'serif'],
},
\`\`\`

## 📝 Innehåll

### Ändra texter på hemsidan

#### Hero-sektion
Öppna `components/Hero.tsx` och ändra:
- Titel
- Undertitel
- Knapptexter

#### Footer
Öppna `components/Footer.tsx` och uppdatera:
- Kontaktinformation
- Adress
- Telefon
- E-post
- Sociala medier-länkar

### Lägga till nya sidor

1. Skapa en ny mapp i `app/`, t.ex. `app/services/`
2. Skapa `page.tsx` i mappen
3. Lägg till i navigationen i `components/Header.tsx`

Exempel:

\`\`\`typescript
// app/services/page.tsx
export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-display font-bold mb-6">
          Våra Tjänster
        </h1>
        {/* Ditt innehåll här */}
      </div>
    </div>
  )
}
\`\`\`

## 🖼️ Bilder

### Ändra placeholder-bilder

Ersätt Unsplash-URLer med dina egna bilder:

1. **Ladda upp bilder till Sanity** (rekommenderat)
   - Gå till Sanity Studio
   - Ladda upp i Assets
   - Använd i ditt innehåll

2. **Lokala bilder**
   - Lägg bilder i `public/images/`
   - Referera som `/images/din-bild.jpg`

### Bildstorlekar och optimering

Next.js Image-komponenten optimerar automatiskt. Rekommenderade storlekar:

- **Hero:** 1920x1080px (Full HD)
- **Kollektioner:** 800x1200px (Portrait)
- **Lookbook:** 800x1200px (Portrait)
- **Blogg:** 1200x800px (Landscape)
- **Tumnaglar:** 400x400px (Square)

## 🎭 Animationer

### Anpassa animationer

Öppna valfri komponent och justera Framer Motion-parametrar:

\`\`\`typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}     // Startläge
  animate={{ opacity: 1, y: 0 }}       // Slutläge
  transition={{ duration: 0.6 }}       // Hastighet
>
\`\`\`

### Lägga till nya animationer

I `tailwind.config.ts`, lägg till under `extend`:

\`\`\`typescript
animation: {
  'your-animation': 'yourAnimation 1s ease-in-out',
},
keyframes: {
  yourAnimation: {
    '0%': { /* startläge */ },
    '100%': { /* slutläge */ },
  },
},
\`\`\`

## 📱 Responsiv Design

### Breakpoints

Tailwind CSS breakpoints:
- `sm:` 640px och uppåt (Mobil landskapsläge)
- `md:` 768px och uppåt (Surfplatta)
- `lg:` 1024px och uppåt (Laptop)
- `xl:` 1280px och uppåt (Desktop)
- `2xl:` 1536px och uppåt (Stor desktop)

### Anpassa för olika skärmar

\`\`\`typescript
<div className="text-sm md:text-base lg:text-lg xl:text-xl">
  Responsiv text
</div>
\`\`\`

## 🗂️ Sanity Schema

### Lägga till nya fält

1. Öppna relevant schema i `sanity/schemas/`
2. Lägg till nytt fält i `fields`-arrayen:

\`\`\`typescript
{
  name: 'dittFalt',
  title: 'Ditt Fält',
  type: 'string', // eller 'text', 'number', 'boolean', etc.
  validation: (Rule) => Rule.required(),
}
\`\`\`

3. Starta om Sanity Studio

### Skapa nytt schema

1. Skapa ny fil i `sanity/schemas/`, t.ex. `team.ts`
2. Definiera schema:

\`\`\`typescript
import {defineType} from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})
\`\`\`

3. Lägg till i `sanity/schemas/index.ts`:

\`\`\`typescript
import teamMember from './team'

export const schemaTypes = [
  // ... andra schemas
  teamMember,
]
\`\`\`

## 🔍 SEO

### Uppdatera metadata

Öppna `app/layout.tsx` och uppdatera:

\`\`\`typescript
export const metadata: Metadata = {
  title: 'Din Titel',
  description: 'Din beskrivning',
  keywords: ['mode', 'fashion', 'design'],
}
\`\`\`

### Lägg till metadata per sida

I varje `page.tsx`:

\`\`\`typescript
export const metadata: Metadata = {
  title: 'Sidtitel - Glamourista',
  description: 'Sidbeskrivning',
}
\`\`\`

## 📧 Kontaktformulär

### Anslut till e-postservice

För att faktiskt skicka e-post från kontaktformuläret:

1. **Använda Resend (Rekommenderat)**

\`\`\`bash
npm install resend
\`\`\`

2. Skapa `app/api/contact/route.ts`:

\`\`\`typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'din@email.com',
      subject: \`Kontaktformulär: \${body.subject}\`,
      html: \`
        <h2>Nytt meddelande från \${body.name}</h2>
        <p><strong>Email:</strong> \${body.email}</p>
        <p><strong>Telefon:</strong> \${body.phone}</p>
        <p><strong>Meddelande:</strong></p>
        <p>\${body.message}</p>
      \`,
    })
    
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ success: false, error })
  }
}
\`\`\`

3. Uppdatera formuläret i `app/contact/page.tsx`

## 🌐 Flerspråkighet

För att lägga till flera språk (t.ex. engelska):

1. Installera next-intl:

\`\`\`bash
npm install next-intl
\`\`\`

2. Följ [Next.js Internationalization guide](https://next-intl-docs.vercel.app/)

## 🚀 Prestandaoptimering

### Bildoptimering
- Använd alltid Next.js `Image`-komponenten
- Definiera `width` och `height`
- Använd lämpligt `quality`-värde (75-85)

### Code splitting
- Next.js gör detta automatiskt
- Använd `dynamic` för stora komponenter:

\`\`\`typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Laddar...</p>,
})
\`\`\`

## 📊 Analytics

### Lägga till Google Analytics

1. Installera:

\`\`\`bash
npm install @next/third-parties
\`\`\`

2. Lägg till i `app/layout.tsx`:

\`\`\`typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
\`\`\`

## 💾 Backup

### Exportera Sanity-data

\`\`\`bash
cd sanity
npx sanity dataset export production backup.tar.gz
\`\`\`

### Importera Sanity-data

\`\`\`bash
npx sanity dataset import backup.tar.gz production
\`\`\`

---

**Behöver du mer hjälp?** Kolla dokumentationen för:
- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Sanity](https://www.sanity.io/docs)
- [Framer Motion](https://www.framer.com/motion/)
