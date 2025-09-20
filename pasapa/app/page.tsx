'use client'


import React, { useState } from 'react'
import Image from 'next/image'

type PlayKey = 'phone' | 'online' | 'irl'
type CategoryKey = keyof typeof translations['en']['categories']


const translations = {
  en: {
    contextTitle: 'Context',
    playTitle: 'Play',
    moreInfoTitle: 'More Info',
    contextParagraph:
      "Pasapa is a playful app designed to support a printable card game that sparks meaningful conversations. Whether you're with close friends or new acquaintances, it helps you dive into light or deep discussions—anytime, anywhere: in the car, on a walk, or around a meal. Inspired by the idea of “36 questions to fall in love,” Pasapa blends thoughtful prompts with game-like mechanics to make talking fun, engaging, and endlessly reusable.",
    contactTitle: 'Contact',
    modifyTitle: 'How to modify the game',
    projectsTitle: 'Other projects',
    onPhone: 'On Your Phone',
    online: 'Online',
    inRealLife: 'In Real Life',
    moreBtn: 'More info',
    lessBtn: 'Less',
    play: {
      phone: {
        short: "If you're on Android, you can download the app from the Play Store and play offline anytime with your friends.",
        long: "Details: The app includes a variety of conversation prompts and game modes designed for spontaneous or deep discussions. It's lightweight, offline-friendly, and perfect for social moments.",
        link: "View the project",
      },
      online: {
        short: "Whether you're on a computer or a mobile phone (especially for Apple users), you can play online by clicking the link below.",
        long: "Details: The online version offers interactive experiences you can share with others, including collaborative boards, multiplayer sessions, and embeddable widgets.",
        link: "https://godeta.github.io/carteIntroSpec-main/",
      },
      irl: {
        short: "You can print the game using my PDF file and play it with your friends!",
        long: "Details: The printable version includes themed cards and facilitator guides for in-person play. Great for gatherings, road trips, or casual meetups.",
        link: "https://github.com/Godeta/carteIntroSpec-main",
      },
    },
    gameRulesTitle: 'Game Rules',
    overallRules: 'Overall Rules',
    overallRulesText: "Here’s how the game works: The game is divided into 7 categories of questions, always starting with the 'Light' category. A round ends when all players have answered a card from the current category. At the end of each round, the group decides whether to continue in the same category or move to the next. Each round also includes a randomly drawn Action card, giving players the choice to either answer the classic question or follow a special prompt that involves a twist or action. It's recommended to end the game with a card from the 'Together' category, even if you haven’t played through all categories. The goal is to spark conversation—so feel free to digress, go off-topic, and talk about anything and everything!",
    categoriesRules: 'Categories Rules',
    categories: {
      situation: {
  title: "Situation",
  text: "Each player receives a real-life scenario—open-ended and designed to spark different reactions. The goal is to reflect on how you would respond, share your emotions, and maybe tell a personal story. When reading a situation, you can: 1) Describe your instinctive reaction—would you act or stay passive? 2) List the emotions you might feel—stress, joy, awkwardness, anger, surprise, pride… and how they influence your response. 3) Share a personal story—has this happened to you? How did it go? Would you react differently now? 4) Imagine other ways to respond—how might someone else react? Do you understand their perspective?"
},
      friendship: { title: 'Friendship', text: 'Questions about trust, support, and bonds.' },
      philosophy: { title: 'Philosophy', text: 'Open-ended questions about life, meaning, and values.' },
      creativity: { title: 'Creativity', text: 'Prompts that spark imagination and innovation.' },
      nature: { title: 'Nature', text: 'Discussions about environment and sustainability.' },
      culture: { title: 'Culture', text: 'Reflections on art, traditions, and identities.' },
      fun: { title: 'Fun', text: 'Light-hearted, playful questions to laugh together.' },
    },

  },
  fr: {
    contextTitle: 'Contexte',
    playTitle: 'Jouer',
    moreInfoTitle: 'Plus d\'infos',
    contextParagraph:
      "Pasapa est une appli ludique conçue pour accompagner un jeu de cartes imprimable qui favorise les échanges authentiques. Que ce soit entre proches ou avec de nouvelles connaissances, elle facilite les discussions légères ou profondes, à tout moment et en tout lieu : en voiture, en balade ou autour d’un repas. Inspirée du concept des “36 questions pour tomber amoureux”, Pasapa mêle des questions réfléchies à des mécaniques de jeu pour rendre la conversation amusante, captivante et toujours renouvelable.",
    contactTitle: 'Contact',
    modifyTitle: 'Comment modifier le jeu',
    projectsTitle: 'Autres projets',
    onPhone: 'Sur votre téléphone',
    online: 'En ligne',
    inRealLife: 'Dans la vraie vie',
    moreBtn: 'Plus',
    lessBtn: 'Réduire',
    play: {
      phone: {
        short: "Si vous êtes sur Android, vous pouvez télécharger l'application depuis le Play Store et jouer hors ligne quand vous voulez avec vos amis.",
        long: "Détails : L'application propose des cartes de discussion et des modes de jeu variés pour des échanges spontanés ou profonds. Elle est légère, utilisable hors ligne et idéale pour les moments conviviaux.",
        link: "Voir le projet",
      },
      online: {
        short: "Que ce soit sur ordinateur ou sur mobile (notamment pour les utilisateurs Apple), vous pouvez jouer en ligne en cliquant sur le lien ci-dessous.",
        long: "Détails : La version en ligne propose des expériences interactives à partager, comme des tableaux collaboratifs, des sessions multijoueurs et des widgets intégrables.",
        link: "https://godeta.github.io/carteIntroSpec-main/home",
      },
      irl: {
        short: "Vous pouvez imprimer le jeu grâce au fichier PDF et y jouer avec vos amis !",
        long: "Détails : La version imprimable contient des cartes thématiques et des guides pour animateurs, idéale pour les rencontres, les trajets ou les moments informels.",
        link: "https://github.com/Godeta/carteIntroSpec-main",
      },
    },
    gameRulesTitle: 'Règles du jeu',
    overallRules: 'Règles générales',
    overallRulesText: "Voici comment fonctionne le jeu : Le jeu se divise en 7 catégories de questions, en commençant toujours par la catégorie 'Léger'. Un tour se termine lorsque tous les joueurs ont répondu à une carte de la catégorie en cours. À la fin du tour, le groupe choisit de rejouer dans la même catégorie ou de passer à la suivante. À chaque tour, une carte Action est tirée au hasard, offrant le choix entre répondre à la question classique ou suivre une consigne spéciale qui ajoute une touche originale. Il est conseillé de terminer la partie avec une carte de la catégorie 'Ensemble', même si toutes les catégories n’ont pas été jouées. Le but est d’échanger et discuter, alors laissez-vous aller : digressez, sortez du sujet, parlez de tout et de rien !",
    categoriesRules: 'Règles par catégorie',
    categories: {
      situation: {
  title: "Situation",
  text: "Chaque joueur reçoit une situation de la vie quotidienne, volontairement ouverte pour susciter des réactions variées. Le but est de réfléchir à sa manière d’agir, partager ses émotions et éventuellement raconter une anecdote personnelle. Quand tu lis une situation, tu peux : 1) Décrire ta réaction spontanée — agirais-tu ou resterais-tu passif ? 2) Lister les émotions que tu pourrais ressentir — stress, joie, gêne, colère, surprise, fierté… influencent-elles ta réaction ? 3) Partager une histoire personnelle — est-ce que ça t’est déjà arrivé ? Comment ça s’est passé ? Aurais-tu réagi autrement aujourd’hui ? 4) Imaginer d’autres façons de réagir — comment quelqu’un d’autre pourrait-il réagir ? Est-ce que tu comprends ces autres réactions ?"
},
      friendship: { title: 'Amitié', text: 'Questions sur la confiance, le soutien et les liens.' },
      philosophy: { title: 'Philosophie', text: 'Questions ouvertes sur la vie, le sens et les valeurs.' },
      creativity: { title: 'Créativité', text: 'Invitations à l’imagination et à l’innovation.' },
      nature: { title: 'Nature', text: 'Discussions sur l’environnement et la durabilité.' },
      culture: { title: 'Culture', text: 'Réflexions sur l’art, les traditions et les identités.' },
      fun: { title: 'Fun', text: 'Questions légères et amusantes pour rire ensemble.' },
    },

  },
}


export default function Page() {
const [lang, setLang] = useState<'en'|'fr'>('en')
const t = translations[lang]
const [expandedPlay, setExpandedPlay] = useState([false, false, false]) // for Play cards
const [showOverall, setShowOverall] = useState(false) // for Overall Rules
const [activeCategory, setActiveCategory] = useState<CategoryKey | null>(null)


const togglePlay = (i: number) => {
  setExpandedPlay(prev => prev.map((v, idx) => idx === i ? !v : v))
}


return (
  <main className="min-h-screen bg-white text-slate-800 antialiased">
  {/* Sticky Top Menu */}
  <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-slate-200">
  <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
  <div className="flex items-center gap-6">
  <a href="#context" className="font-medium hover:underline">{t.contextTitle}</a>
  <a href="#play" className="font-medium hover:underline">{t.playTitle}</a>
  <a href="#rules" className="font-medium hover:underline">{t.gameRulesTitle}</a>
  <a href="#more" className="font-medium hover:underline">{t.moreInfoTitle}</a>
  </div>


  <div className="flex items-center gap-4">
  <button
  aria-label="Toggle language"
  onClick={() => setLang(l => l==='en' ? 'fr' : 'en')}
  className="flex items-center gap-2 px-3 py-1 rounded-md border hover:shadow-sm"
  >
  <span className="text-sm">{lang === 'en' ? 'EN' : 'FR'}</span>
  <span className="text-sm">{lang === 'en' ? '🇬🇧' : '🇫🇷'}</span>
  </button>
  </div>
  </nav>
  </header>


  <section id="context" className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
  <div>
  <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{t.contextTitle}</h1>
  <p className="text-lg leading-relaxed text-slate-700">{t.contextParagraph}</p>
  </div>
  <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow">
  <Image
  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  alt="Context image"
  fill
  style={{ objectFit: 'cover' }}
  />
  </div>
  </section>

  <section id="play" className="max-w-5xl mx-auto px-6 py-12">
  <h2 className="text-2xl font-bold mb-6">{t.playTitle}</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {([
      { key: 'phone', title: t.onPhone, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
      { key: 'online', title: t.online, img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop' },
      { key: 'irl', title: t.inRealLife, img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop' },
    ] as { key: PlayKey; title: string; img: string }[]).map((col, i) => (
      <article key={col.key} className="rounded-2xl border p-5 shadow-sm hover:shadow-md transition">
        <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
          <Image src={col.img} alt={col.title} fill style={{ objectFit: 'cover' }} />
        </div>
        <h3 className="font-semibold text-lg mb-2">{col.title}</h3>
        <p className="text-sm text-slate-600 mb-4">{t.play[col.key].short}</p>

        <div>
          <div className="mt-4 text-sm text-slate-700">
    <p className="mb-2">{t.play[col.key].long}</p>
    <a href={t.play[col.key].link} className="text-blue-500 underline">{t.play[col.key].link}</a>
  </div>
          <button
  onClick={() => togglePlay(i)}
  className="inline-flex items-center gap-2 px-3 py-2 rounded-md border text-sm"
>
  {expandedPlay[i] ? t.lessBtn : t.moreBtn}
</button>


        </div>
      </article>
    ))}
  </div>
</section>


<section id="rules" className="max-w-5xl mx-auto px-6 py-16 border-t">
  <h2 className="text-2xl font-bold mb-6">{t.gameRulesTitle}</h2>
  <div className="grid md:grid-cols-2 gap-8">
    {/* Overall Rules */}
<div className="border p-5 rounded-lg shadow-sm">
  <h3 className="font-semibold text-lg mb-2">{t.overallRules}</h3>
  <button
    onClick={() => setShowOverall(v => !v)}
    className="px-3 py-2 rounded-md border text-sm"
  >
    {showOverall ? t.lessBtn : t.moreBtn}
  </button>
  {showOverall && (
    <p className="mt-4 text-sm text-slate-700">{t.overallRulesText}</p>
  )}
</div>

{/* Categories Rules */}
<div className="border p-5 rounded-lg shadow-sm">
  <h3 className="font-semibold text-lg mb-2">{t.categoriesRules}</h3>
  <div className="flex flex-wrap gap-2 mb-4">
    {(Object.keys(t.categories) as (keyof typeof t.categories)[]).map(cat => (
      <button
        key={cat}
        onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
        className={`px-3 py-2 rounded-md border text-sm ${activeCategory === cat ? 'bg-slate-200' : ''}`}
      >
        {t.categories[cat].title}
      </button>
    ))}
  </div>
  {activeCategory && (
    <div className="mt-4 text-sm text-slate-700">
      <p>{t.categories[activeCategory].text}</p>
    </div>
  )}
</div>

  </div>
</section>



  <section id="more" className="max-w-5xl mx-auto px-6 py-16 border-t">
  <h2 className="text-2xl font-bold mb-6">{t.moreInfoTitle}</h2>


  <div className="grid md:grid-cols-3 gap-6">
  <div>
  <h3 className="font-semibold">{t.contactTitle}</h3>
  <p className="text-sm text-slate-600 mt-2">Email: <a href="mailto:godeta61@gmail.com" className="underline">godeta61@gmail.com</a></p>
  <p className="text-sm text-slate-600">Google form: <a href="https://forms.gle/skvWgiUhYQkVCEoC9" className="underline">feedback !</a></p>
  </div>


  <div>
  <h3 className="font-semibold">{t.modifyTitle}</h3>
  <p className="text-sm text-slate-600 mt-2">To modify the game: clone the repo, edit the JSON config in <code>data/config.json</code>, modify components in <code>components/</code>, and adapt the content in <code>app/page.tsx</code>. Use small, focused commits and preview with <code>npm run dev</code>.</p>
  <p className="text-sm text-slate-600 mt-2">Recommended: keep assets small, use WebP images, and test on mobile devices.</p>
  </div>


  <div>
  <h3 className="font-semibold">{t.projectsTitle}</h3>
    <h4 className='text-blue-400'> <a href='https://godeta.github.io/'> - ICI - </a></h4>
  </div>
  </div>
  </section>


  <footer className="max-w-5xl mx-auto px-6 py-8 text-sm text-slate-500">
  <p>© {new Date().getFullYear()} Pasapa website</p>
  </footer>


  <style jsx global>{`
  html { scroll-behavior: smooth }
  `}</style>
  </main>
)
}