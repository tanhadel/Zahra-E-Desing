import { client, queries } from '@/lib/sanity'
import Image from 'next/image'

export default async function AboutPage() {
  const aboutData = await client.fetch(queries.aboutPage)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020')`,
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-widest">
            {aboutData?.heroTitle || 'Om Glamourista'}
          </h1>
          <p className="text-xl md:text-2xl">
            {aboutData?.heroSubtitle || 'Passion för mode och tidlös elegans'}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Vår Historia</h2>
              <div className="prose prose-lg">
                <p className="text-lg text-gray-700 mb-4">
                  Glamourista grundades med en vision att förena klassisk elegans med modern design. 
                  Vår resa började för över 15 år sedan när vår grundare upptäckte sin passion för 
                  att skapa kläder som inte bara följer trender, utan sätter dem.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Vi tror på att varje plagg ska berätta en historia. Våra kollektioner är noggrant 
                  kurerade för att fånga essensen av sofistikerad skönhet och tidlös stil. Från de 
                  första skisserna till den färdiga produkten, varje steg i vår process är genomsyrad 
                  av passion och precision.
                </p>
                <p className="text-lg text-gray-700">
                  Idag arbetar vi med de bästa hantverkarna och använder endast de finaste materialen. 
                  Vårt engagemang för kvalitet och hållbarhet är orubbligt, och vi är stolta över att 
                  erbjuda exklusiva modekreationer till kunder runt om i världen.
                </p>
              </div>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea8f6024?q=80&w=2074"
                alt="Glamourista Studio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Vår Designfilosofi</h2>
          <p className="text-lg text-gray-700 mb-12">
            Vi tror på att mode är en konstform som förenar kreativitet, hantverk och individuellt 
            uttryck. Varje design börjar med en idé, en känsla, en berättelse som vi vill dela.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8">
              <h3 className="text-2xl font-display font-semibold mb-4">Elegans</h3>
              <p className="text-gray-600">
                Tidlös skönhet och sofistikerad stil i varje detalj
              </p>
            </div>
            <div className="bg-white p-8">
              <h3 className="text-2xl font-display font-semibold mb-4">Kvalitet</h3>
              <p className="text-gray-600">
                Finaste material och exceptionellt hantverk
              </p>
            </div>
            <div className="bg-white p-8">
              <h3 className="text-2xl font-display font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                Modern design som utmanar konventioner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Våra Värderingar</h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-500 text-white flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-display font-semibold mb-3">Hållbarhet</h3>
                <p className="text-gray-700">
                  Vi är engagerade i hållbar modeproduktion och arbetar kontinuerligt för att 
                  minska vår miljöpåverkan. Våra material väljs med omsorg och vi samarbetar 
                  endast med leverantörer som delar våra värderingar.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-500 text-white flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-display font-semibold mb-3">Hantverk</h3>
                <p className="text-gray-700">
                  Varje plagg är ett resultat av årtionden av erfarenhet och expertis. Vi värnar 
                  om traditionellt hantverk och kombinerar det med modern teknologi för 
                  perfektion i varje detalj.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-500 text-white flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-display font-semibold mb-3">Individualitet</h3>
                <p className="text-gray-700">
                  Vi tror på att mode ska uttrycka individuell personlighet. Våra design ger 
                  dig möjlighet att skapa din egen unika stil och känna dig självsäker i varje 
                  situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-display font-bold mb-2">15+</h3>
              <p className="text-primary-200">År av Erfarenhet</p>
            </div>
            <div>
              <h3 className="text-5xl font-display font-bold mb-2">500+</h3>
              <p className="text-primary-200">Unika Designs</p>
            </div>
            <div>
              <h3 className="text-5xl font-display font-bold mb-2">50+</h3>
              <p className="text-primary-200">Länder Världen Över</p>
            </div>
            <div>
              <h3 className="text-5xl font-display font-bold mb-2">25+</h3>
              <p className="text-primary-200">Internationella Utmärkelser</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
