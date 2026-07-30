import type { Metadata } from 'next'
import Link from 'next/link'
import { FlaskConical, Flag, Gift, Target, Calculator, Dumbbell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Despre GymBro.ro | Echipa din spatele platformei',
  description: 'GymBro.ro este platforma de fitness creată de pasionați pentru pasionați. Calculatoare gratuite, programe personalizate și ghiduri bazate pe știință pentru comunitatea din România.',
  alternates: { canonical: 'https://gymbro.ro/despre' },
  openGraph: {
    title: 'Despre GymBro.ro',
    description: 'Platforma de fitness #1 în România — creat de pasionați pentru pasionați.',
    url: 'https://gymbro.ro/despre',
    type: 'website',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GymBro.ro',
  url: 'https://gymbro.ro',
  logo: 'https://gymbro.ro/logo.png',
  description: 'Platforma de fitness și nutriție pentru România — calculatoare gratuite, programe personalizate, ghiduri bazate pe știință',
  foundingDate: '2026',
  areaServed: 'RO',
  inLanguage: 'ro-RO',
  knowsAbout: [
    'fitness',
    'nutriție',
    'antrenament',
    'calculul caloriilor',
    'meal prep',
    'masă musculară',
    'slăbit sănătos',
  ],
  sameAs: [],
}

const features = [
  {
    icon: FlaskConical,
    title: 'Bazat pe știință',
    description:
      'Toate calculele și recomandările noastre sunt bazate pe cercetări validate și formule recunoscute internațional (Mifflin-St Jeor, NSCA guidelines etc.)',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
  },
  {
    icon: Flag,
    title: 'Făcut pentru România',
    description:
      'Prețuri în lei, produse din Lidl și Kaufland, contextul specific pieței românești',
    gradient: 'from-yellow-500/20 to-orange-500/20',
    border: 'border-yellow-500/30',
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-500/10',
  },
  {
    icon: Gift,
    title: '100% Gratuit',
    description:
      'Nu vindem date, nu avem paywall. Tool-urile noastre sunt și vor rămâne gratuite',
    gradient: 'from-green-500/20 to-emerald-500/20',
    border: 'border-green-500/30',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/10',
  },
  {
    icon: Target,
    title: 'Personalizat, nu generic',
    description:
      'Nu îți dăm un plan standard. Fiecare calcul, fiecare program e generat pentru profilul tău specific',
    gradient: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/30',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
  },
]

const stats = [
  { value: '25+', label: 'Ghiduri complete' },
  { value: '6', label: 'Tool-uri gratuite' },
  { value: '2026', label: 'Actualizat' },
]

export default function DesprePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* JSON-LD Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-400 mb-6">
            <Dumbbell className="h-4 w-4 text-blue-400" />
            <span>Echipa GymBro</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
            Cine suntem?
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            O echipă de pasionați care cred că accesul la informații corecte despre fitness
            nu ar trebui să fie un privilegiu — ci un drept.
          </p>
        </div>
      </section>

      {/* Misiunea noastră */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Misiunea noastră
            </h2>
            <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
              <p>
                GymBro.ro a fost creat dintr-o frustrare simplă: informațiile despre fitness
                în română erau ori incomplete, ori pline de mituri, ori ascunse în spatele unor
                abonamente scumpe. Am vrut să schimbăm asta.
              </p>
              <p>
                Suntem o echipă de pasionați de fitness, nutriție și tehnologie, cu peste 10 ani
                de experiență combinată în domeniu. Credem că fiecare român merită acces la
                informații corecte, bazate pe știință, complet gratuit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* De ce GymBro? */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            De ce <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">GymBro</span>?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`bg-gradient-to-br ${feature.gradient} border ${feature.border} rounded-2xl p-6 md:p-8 hover:scale-[1.02] transition-transform`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.iconBg} mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia noastră */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Metodologia noastră
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Folosim formule validate științific: BMR cu ecuația Mifflin-St Jeor (cea mai precisă
              pentru populația generală), TDEE cu factorii de activitate standard, distribuție
              macronutrienți adaptată obiectivului tău. Programele de antrenament respectă
              principiile de periodizare liniară și progressive overload din literatura de specialitate.
            </p>
          </div>
        </div>
      </section>

      {/* Cifrele noastre */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Cifrele noastre
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/8 transition-colors"
              >
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gata să începi?
            </h2>
            <p className="text-slate-400 mb-8 text-base md:text-lg">
              Folosește tool-urile noastre gratuite și ia-ți fitnesul în propriile mâini.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/calculator"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/25"
              >
                <Calculator className="h-5 w-5" />
                Calculator Calorii
              </Link>
              <Link
                href="/program-antrenament"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 rounded-xl font-semibold transition-all shadow-lg hover:shadow-purple-500/25"
              >
                <Dumbbell className="h-5 w-5" />
                Generator Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
