# 🚀 Snabbstartsguide för Glamourista

Denna guide hjälper dig att komma igång med Glamourista fashion designer-webbplatsen.

## 📋 Steg-för-steg Installation

### 1️⃣ Installera Node-moduler

Öppna terminalen i projektmappen och kör:

\`\`\`powershell
npm install
\`\`\`

### 2️⃣ Skapa Sanity-projekt

1. Gå till [sanity.io](https://www.sanity.io/) och skapa ett gratis konto
2. I terminalen, navigera till sanity-mappen:

\`\`\`powershell
cd sanity
npm install
\`\`\`

3. Initiera Sanity-projektet:

\`\`\`powershell
npx sanity init
\`\`\`

4. Följ instruktionerna:
   - **Login/Create Account:** Logga in med ditt Sanity-konto
   - **Create new project:** Ja
   - **Project name:** Glamourista Fashion Designer
   - **Use default dataset:** Ja (production)
   - **Output path:** Lämna som standard

5. Kopiera ditt **Project ID** som visas efter installationen

### 3️⃣ Konfigurera miljövariabler

1. I root-mappen (ZahraE-design), skapa/redigera `.env.local`:

\`\`\`
NEXT_PUBLIC_SANITY_PROJECT_ID=ditt-projekt-id-här
NEXT_PUBLIC_SANITY_DATASET=production
\`\`\`

2. Öppna `sanity/sanity.config.ts` och uppdatera:

\`\`\`typescript
projectId: 'ditt-projekt-id-här', // Ersätt med ditt riktiga projekt-ID
\`\`\`

3. Öppna `sanity/sanity.cli.ts` och uppdatera samma projekt-ID där.

### 4️⃣ Lägg till CORS-ursprung

För att webbplatsen ska kunna hämta data från Sanity:

1. Gå till [sanity.io/manage](https://www.sanity.io/manage)
2. Välj ditt projekt
3. Gå till **API** > **CORS Origins**
4. Klicka på **Add CORS origin**
5. Lägg till: `http://localhost:3000`
6. Markera **Allow credentials**
7. Klicka på **Save**

### 5️⃣ Starta Sanity Studio

I terminalen (från sanity-mappen):

\`\`\`powershell
npm run dev
\`\`\`

Sanity Studio öppnas på **http://localhost:3333**

### 6️⃣ Lägg till innehåll i Sanity

1. Öppna Sanity Studio på http://localhost:3333
2. Lägg till innehåll i följande ordning:

   **a) Site Settings:**
   - Fyll i grundläggande webbplatsinformation
   - Ladda upp logotyp
   - Lägg till sociala medier-länkar
   - Konfigurera hero-sektion

   **b) Author (Författare):**
   - Skapa minst en författare för blogginlägg
   - Lägg till namn, bild och bio

   **c) Collections (Kollektioner):**
   - Skapa 3-5 kollektioner
   - Ladda upp coverbilder
   - Lägg till säsong och år
   - Markera några som "Featured"

   **d) Lookbook:**
   - Skapa 2-3 lookbooks
   - Ladda upp huvudbild och galleribilder
   - Lägg till beskrivningar

   **e) Blog Posts (Blogginlägg):**
   - Skapa 3-5 blogginlägg
   - Koppla till författare
   - Ladda upp bilder
   - Markera några som "Featured"

   **f) About Page:**
   - Fyll i om oss-innehåll
   - Ladda upp bilder
   - Lägg till värderingar

### 7️⃣ Starta Next.js utvecklingsserver

Öppna en **ny terminal** i root-mappen och kör:

\`\`\`powershell
npm run dev
\`\`\`

Webbplatsen är nu live på **http://localhost:3000** 🎉

## 📸 Tips för bilder

För bästa resultat, använd:
- **Hero-bilder:** 1920x1080px (16:9)
- **Kollektionsbilder:** 800x1200px (2:3 portrait)
- **Lookbook-bilder:** 800x1200px (2:3 portrait)
- **Blogg-bilder:** 1200x800px (3:2 landscape)
- **Format:** JPG eller PNG
- **Kvalitet:** Högupplösta bilder (Sanity optimerar automatiskt)

## 🎨 Bildresurser (Gratis)

- [Unsplash](https://unsplash.com/) - Högkvalitativa gratisbilder
- [Pexels](https://www.pexels.com/) - Gratis stock-foton
- [Pixabay](https://pixabay.com/) - Gratis bilder och videos

## 🔧 Felsökning

### Sanity-fel: "Project ID not found"
- Kontrollera att du har uppdaterat projekt-ID i alla konfigurationsfiler
- Se till att `.env.local` finns i root-mappen

### Bilder visas inte
- Kontrollera CORS-inställningar i Sanity
- Se till att `cdn.sanity.io` är tillåtet i `next.config.js`

### Sanity Studio laddar inte
- Kör `npm install` i sanity-mappen igen
- Kontrollera att port 3333 inte används av annat

### Next.js startar inte
- Kontrollera att du är i rätt mapp (root)
- Ta bort `node_modules` och `.next`, kör sedan `npm install` igen

## 📚 Nästa steg

1. **Anpassa design:** Ändra färger i `tailwind.config.ts`
2. **Lägg till fler sidor:** Skapa nya sidor i `app/`-mappen
3. **Utöka schema:** Lägg till fler innehållstyper i `sanity/schemas/`
4. **Deploy:** Publicera till Vercel eller annan hosting

## 💡 Användbara kommandon

\`\`\`powershell
# Installera beroenden
npm install

# Starta utveckling
npm run dev

# Bygg för produktion
npm run build

# Starta produktionsserver
npm start

# Kör Sanity Studio
cd sanity && npm run dev

# Deploya Sanity Studio
cd sanity && npm run deploy
\`\`\`

## 🆘 Behöver du hjälp?

- **Sanity Docs:** https://www.sanity.io/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs

---

Lycka till med ditt Glamourista-projekt! ✨
