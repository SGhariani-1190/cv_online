// ============================================================
//  CONTENU DU SITE — modifiez ce fichier pour personnaliser.
//  Pour les images : déposez vos fichiers dans le dossier
//  "images/" puis renseignez  image: "images/mon-fichier.jpg"
//  (sans image, une carte de couleur est générée automatiquement)
// ============================================================

const SITE = {
  name: "Sonia Ghariani",
  role: "Communication | Content & Digital Strategy | Public Affairs | Brussels",
  // mots-clés qui défilent sous le nom (volontairement dans le désordre, une ligne par bande)
  keywords: [
    ["Responsable Communication", "Relations presse", "Rédaction de discours", "Réseaux sociaux", "Affaires publiques", "IA générative", "Stratégie de contenu"],
    ["Community Manager", "Rédaction de communiqués de presse", "Communication de crise", "Copywriting", "Communication digitale", "Content Marketer"],
    ["Communication institutionnelle", "Brand Content", "Vulgarisation", "Mise en page", "Événementiel", "Responsable Communication", "Relations presse"],
  ],
  intro:
    "Sonia Ghariani est responsable communication basée à Bruxelles. Elle est spécialisée en communication stratégique & institutionnelle, relations médias et stratégie digitale.",
  email: "ghariani.so@gmail.com",
  location: "Bruxelles, Belgique",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sonia-ghariani/" },
    { label: "Instagram", url: "https://www.instagram.com/soniaghariani/" },
  ],
};

// Projets de l'accueil.
//   image  : visuel de l'affiche
//   text   : description affichée quand on ouvre le projet
//   images : visuels affichés quand on ouvre le projet
const PROJECTS = [
  {
    title: "Cabinet Clerfayt", tag: "Communication institutionnelle", year: "2021–26", image: "images/clerfayt/affiche-portrait.jpg", design: 1,
    // sous-titre affiché sous le titre dans la fenêtre du projet
    subtitle: "Cabinet de Bernard Clerfayt, Ministre bruxellois de l’Emploi et de la Formation professionnelle, de la Transition numérique, des Pouvoirs locaux, de la Simplification administrative et du Bien-être animal",
    text: [
      "Ayant commencé en tant que Community Manager, j’ai peu à peu élargi mon rôle jusqu’à devenir Responsable Communication du cabinet, avec une grande autonomie. Après la gestion des réseaux sociaux du Ministre, j’ai pris en charge des missions proches de celles d’une porte-parole : relations avec la presse, rédaction de communiqués et de dossiers de presse, organisation d’événements, stratégie et messages sur des dossiers sensibles.",
      "La fermeture du site d’Audi Bruxelles, la réforme du chômage du gouvernement Arizona, l’ordonnance « Bruxelles Numérique », l’amélioration des conditions de travail et du salaire des aides-ménagères (titres-services), le premier Code bruxellois du Bien-être animal : des sujets où chaque mot compte, chaque silence aussi, et chaque Bruxellois plus encore.",
      "Pendant les affaires courantes, j’ai porté seule la communication du cabinet, au cœur de la scène politique bruxelloise.",
    ],
    meta: [
      { label: "Fonctions", value: "Community Manager, puis Responsable Communication" },
      { label: "Missions", value: "relations presse, communiqués et dossiers de presse, conférences de presse, organisation d’événements, réseaux sociaux, conception des contenus, montage vidéo et photo, gestion du site web, discours, communication de crise" },
      { label: "Outils", value: "Canva, Adobe Creative Cloud, Belga, Mailchimp, WordPress, Meta Business Suite & Analytics, Hootsuite, IA générative & prompting" },
    ],
    // temps forts : titre + phrase
    highlights: [
      { title: "Fermeture d’Audi Brussels", text: "Communication de crise autour de la fermeture du site de Forest et de l’accompagnement des travailleurs avec Actiris, jusqu’à l’organisation d’un job day." },
      { title: "Ordonnance « Bruxelles numérique »", text: "Communication sur la transition numérique des services publics bruxellois." },
      { title: "Réforme du chômage", text: "Communication autour de la réforme du chômage portée par le gouvernement fédéral Arizona et de ses conséquences pour les demandeurs d’emploi bruxellois." },
      { title: "Secteur des titres-services", text: "Amélioration des conditions de travail et des salaires des travailleuses et travailleurs du secteur." },
      { title: "Code bruxellois du Bien-être animal", text: "Élaboration et conception du Code du Bien-être animal, le premier à Bruxelles." },
      { title: "Adoption des animaux de compagnie", text: "Campagne avec la Royale Union Saint-Gilloise pour sensibiliser à l’adoption des animaux de compagnie, en partenariat avec les refuges bruxellois." },
    ],
    // Réalisations classées par compétence ministérielle (un filtre par compétence)
    //   src   : identifiant d’un post Instagram (ce qui suit /p/)
    //   embed : adresse d’intégration (LinkedIn, YouTube…)
    //   image / images : visuel(s) ouvert(s) en grand ; cover : image de la carte
    //   url   : lien externe (ouvert dans un nouvel onglet)
    //   format: petite mention sous le titre (Instagram, Presse · RTBF, Visuel…)
    library: [
      // ---------- Emploi & Formation professionnelle ----------
      { theme: "Emploi & Formation professionnelle", title: "Audi Brussels : maintenir une activité sur le site", format: "Instagram · communication de crise", src: "C_A3eENvkb7" },
      { theme: "Emploi & Formation professionnelle", title: "Jobday Audi Brussels : 1 105 anciens travailleurs le matin, plus de 2 000 chercheurs d’emploi l’après-midi", format: "LinkedIn · communication de crise", embed: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7313587106289766400" },
      { theme: "Emploi & Formation professionnelle", title: "Près de 1 000 anciens travailleurs d’Audi Brussels ont retrouvé un emploi ou une formation", format: "Presse · BX1", image: "images/clerfayt/presse-bx1-audi.jpg", cover: "images/clerfayt/presse-bx1-audi.jpg" },
      { theme: "Emploi & Formation professionnelle", title: "Réforme du chômage : adapter l’accompagnement des Bruxellois exclus", format: "Instagram", src: "DUJhjmDEtaq" },
      { theme: "Emploi & Formation professionnelle", title: "Jeunes et emploi : activer plus vite, accompagner mieux, des solutions dès l’inscription", format: "Visuel réseaux sociaux", image: "images/clerfayt/post-reforme-jeunes-emploi.jpg", cover: "images/clerfayt/post-reforme-jeunes-emploi.jpg" },
      { theme: "Emploi & Formation professionnelle", title: "Clerfayt demande un report de la réforme du chômage et craint pour le financement des CPAS", format: "Presse · Moustique (Belga)", image: "images/clerfayt/presse-moustique-reforme.jpg", cover: "images/clerfayt/presse-moustique-reforme.jpg" },
      { theme: "Emploi & Formation professionnelle", title: "Bernard Clerfayt, ministre bruxellois de l’Emploi en affaires courantes", format: "Presse · RTBF Info (vidéo)", embed: "https://www.youtube-nocookie.com/embed/XNmV_L2cBIE" },
      { theme: "Emploi & Formation professionnelle", title: "Quel chemin de formation pour mener les jeunes Bruxellois à l’emploi ? Entretien croisé avec Ibrahim Ouassari (Molengeek)", format: "Presse · Le Soir", images: ["images/clerfayt/presse-le-soir-1.jpg", "images/clerfayt/presse-le-soir-2.jpg"], cover: "images/clerfayt/presse-le-soir-2.jpg" },
      { theme: "Emploi & Formation professionnelle", title: "Conférence de presse avec Actiris et Bruxelles Formation", format: "Photo", image: "images/clerfayt/conference-de-presse.jpg", cover: "images/clerfayt/conference-de-presse.jpg" },
      { theme: "Emploi & Formation professionnelle", title: "Chômage administratif : les chiffres expliqués", format: "Instagram", src: "C297sI4MITA" },
      { theme: "Emploi & Formation professionnelle", title: "750 000 € pour 15 projets de lutte contre les discriminations à l’embauche", format: "Visuel réseaux sociaux", image: "images/clerfayt/post-discriminations.jpg", cover: "images/clerfayt/post-discriminations.jpg" },
      { theme: "Emploi & Formation professionnelle", title: "Lutte contre les discriminations à l’embauche : le portrait de l’asbl Ras El Hanout", format: "Instagram", src: "C4yDpypNRz8" },
      { theme: "Emploi & Formation professionnelle", title: "Égalité femmes-hommes sur le marché du travail", format: "Instagram", src: "CyQeUJwt-jo" },
      { theme: "Emploi & Formation professionnelle", title: "Diversité, égalité et inclusion : des valeurs fondamentales pour nos entreprises", format: "LinkedIn", embed: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7315009543615242241" },
      { theme: "Emploi & Formation professionnelle", title: "Réfugiés ukrainiens : l’intégration par l’emploi, le portrait de Tatiana", format: "Instagram", src: "CsRNdjeOhjb" },
      { theme: "Emploi & Formation professionnelle", title: "Brussels Airport : 100 Bruxellois formés au métier de bagagiste", format: "Instagram", src: "CsRJ4hJgXJB" },
      { theme: "Emploi & Formation professionnelle", title: "Année européenne des compétences : le projet Groot Eiland", format: "Instagram", src: "C6WXOmRtkc8" },
      { theme: "Emploi & Formation professionnelle", title: "Les 30 ans de la mission locale pour l’emploi de Molenbeek", format: "Instagram", src: "C7oOhu0td_Y" },
      { theme: "Emploi & Formation professionnelle", title: "Prise de parole lors des 30 ans de Bruxelles Formation", format: "Photo", image: "images/clerfayt/bruxelles-formation.jpg", cover: "images/clerfayt/bruxelles-formation.jpg" },
      { theme: "Emploi & Formation professionnelle", title: "Conférence européenne sur les mesures de formation pour l’emploi", format: "Photo", image: "images/clerfayt/panel-europeen.jpg", cover: "images/clerfayt/panel-europeen.jpg" },
      { theme: "Emploi & Formation professionnelle", title: "Visite d’une formation", format: "Photo", image: "images/clerfayt/selfie-formation.jpg", cover: "images/clerfayt/selfie-formation.jpg" },
      // ---------- Transition numérique ----------
      { theme: "Transition numérique", title: "Les réformes de Paradigm portent déjà leurs fruits", format: "Presse · RTBF", image: "images/clerfayt/presse-rtbf-paradigm.jpg", cover: "images/clerfayt/presse-rtbf-paradigm.jpg" },
      { theme: "Transition numérique", title: "Salon du numérique avec Paradigm, acteur de la transformation numérique en Région bruxelloise", format: "Photo", image: "images/clerfayt/expo-avatar.jpg", cover: "images/clerfayt/expo-avatar.jpg" },
      // ---------- Pouvoirs locaux ----------
      { theme: "Pouvoirs locaux", title: "Absence prolongée de la bourgmestre de Molenbeek : aucune raison de la démettre de ses fonctions", format: "Presse · RTBF", image: "images/clerfayt/presse-rtbf-molenbeek.jpg", cover: "images/clerfayt/presse-rtbf-molenbeek.jpg" },
      { theme: "Pouvoirs locaux", title: "Fusion des zones de police à Bruxelles : interview sur Radio 1 (VRT)", format: "Presse · Radio 1 (via Instagram)", src: "DN75TShAnPx" },
      { theme: "Pouvoirs locaux", title: "Cimetières : garantir à chacun un départ dans la dignité", format: "Instagram", src: "C7Bov2YhF55" },
      // ---------- Bien-être animal ----------
      { theme: "Bien-être animal", title: "Code bruxellois du bien-être animal : « la balle est dans le camp des députés »", format: "Instagram", src: "DPY3mTfjZU-" },
      { theme: "Bien-être animal", title: "#CoéquipierÀVie : campagne d’adoption avec la Royale Union Saint-Gilloise", format: "Facebook", url: "https://www.facebook.com/reel/1093031228087762", cover: "images/clerfayt/usg-coequipier-a-vie.jpg" },
      { theme: "Bien-être animal", title: "Stratégie chien : plus d’espaces de liberté pour Toby, Nala et Max", format: "Instagram", src: "C76Z9zmhKE2" },
      { theme: "Bien-être animal", title: "« Un chien bien éduqué, c’est d’abord un maître responsable »", format: "Instagram", src: "DIJOo77t_Tn" },
      { theme: "Bien-être animal", title: "Appel à projets bien-être animal", format: "Visuel réseaux sociaux", image: "images/clerfayt/post-appel-a-projets.jpg", cover: "images/clerfayt/post-appel-a-projets.jpg" },
      { theme: "Bien-être animal", title: "Bien-être animal", format: "Photo", image: "images/clerfayt/poule.jpg", cover: "images/clerfayt/poule.jpg" },
      // ---------- Autres prises de parole ----------
      { theme: "Autres prises de parole", title: "Journée mondiale de lutte contre le cancer", format: "Instagram", src: "C27KweiKEls" },
      { theme: "Autres prises de parole", title: "Rencontre avec Simon Gronowski, rescapé de la Shoah", format: "Photo", image: "images/clerfayt/rencontre.jpg", cover: "images/clerfayt/rencontre.jpg" },
      { theme: "Autres prises de parole", title: "Au Parlement bruxellois", format: "Photo", image: "images/clerfayt/parlement.jpg", cover: "images/clerfayt/parlement.jpg" },
    ],
    images: [],
  },
  {
    title: "TheFork Belgium", tag: "Community management", year: "2017–20", image: "images/thefork/chef-cuisine.jpg", design: 2,
    logo: "images/thefork/logo.jpg",
    // sections dont on n’affiche que le trait (sans l’intitulé)
    hiddenGroupTitles: ["Fil Instagram"],
    // repères affichés sous l’intro
    meta: [
      { label: "Plateformes", value: "Facebook, Instagram" },
      { label: "Outils", value: "Photoshop, Canva" },
    ],
    // le ton donné à la marque, en une phrase
    tone: "Un ton complice, gourmand et plein d’humour, pour faire de TheFork le réflexe resto des Belges.",
    // résultats (grand chiffre + explication)
    results: [
      { figure: "150 → 1 700", text: "abonnés sur Instagram en 2 ans" },
      { figure: "près de 100", text: "participations au concours #1yearwiththefork" },
    ],
    // chapeau d’une section : titre + phrase
    groupIntros: {
      "Campagne Saint-Valentin": {
        title: "Campagne Saint-Valentin 2019",
        text: "Une campagne en plusieurs temps, du teasing au sondage jusqu’à la vidéo « Quand TheFork sauve votre soirée ».",
      },
    },
    text: "Gestion des réseaux sociaux de l’app TheFork en Belgique pendant 3 ans : conception des contenus (textes et visuels), planning éditorial et modération.",
    // Vidéos, regroupées par « group » (chaque groupe = une section dans la fenêtre du projet)
    //   type "facebook" : vidéo intégrée depuis Facebook
    //   type "file"     : fichier vidéo (lecture automatique en boucle, sans le son)
    //   caption         : texte du post (facultatif — inutile si le texte est déjà visible dans la vidéo)
    videos: [
      {
        group: "Fil Instagram", type: "file", wide: true,
        src: "images/thefork/fil-instagram.mp4", poster: "images/thefork/fil-instagram-poster.jpg",
        label: "Le fil Instagram @theforkbe",
      },
      {
        group: "Campagne Saint-Valentin", type: "file",
        src: "images/thefork/saint-valentin-aaaah.mp4", poster: "images/thefork/saint-valentin-aaaah-poster.jpg",
        label: "« L'Amour avec un grand Aaaah ! » — Facebook & Instagram, février 2019",
        caption: "❤️ #SaintValentin\nL'Amour avec un grand Aaaah !\nLa passion culinaire est aussi une grande histoire d'Amour, découvrez notre délicieuse sélection pour faire chavirer vos cœurs :\n📲 Réservation sur notre site ou notre Appli\nArgentin · Américain · Asiatique · Africain",
      },
      {
        group: "Campagne Saint-Valentin", type: "file",
        src: "images/thefork/rien-de-prevu.mp4", poster: "images/thefork/rien-de-prevu-poster.jpg",
        label: "« Rien de prévu encore ? » — Facebook, février 2019",
        caption: "❤️ #SaintValentin\nRien de prévu encore ? Pas de panique ! On vous a concocté une liste de restaurants spéciale « SAINT-VALENTIN »\n1. 2. 3 clics et c'est réglé ! 😉",
      },
      {
        group: "Campagne Saint-Valentin", type: "image",
        src: "images/thefork-sondage.jpg",
        label: "Sondage #SaintValentin — Facebook, 8 février 2019",
      },
      {
        group: "Campagne Saint-Valentin", type: "file", wide: true,
        src: "images/thefork/sauve-soiree-2.mp4", poster: "images/thefork/sauve-soiree-2-poster.jpg",
        label: "« Quand TheFork sauve votre soirée » — Instagram, 11 février 2019",
      },
      {
        group: "Autres vidéos", type: "file", wide: true,
        src: "images/thefork/concours-1-an-de-restos.mp4", poster: "images/thefork/concours-1-an-de-restos-poster.jpg",
        label: "Concours « 1 an de restos » #1yearwiththefork — Instagram, 19 février 2019",
        caption: "Un an de restaurants à gagner pour fêter l’anniversaire de l’app en Belgique.",
      },
      {
        group: "Autres vidéos", type: "file", wide: true,
        src: "images/thefork/citation-bourdain.mp4", poster: "images/thefork/citation-bourdain-poster.jpg",
        label: "Hommage à Anthony Bourdain — Instagram, 19 juin 2018",
        caption: "Un post de réaction à l’actualité, publié en hommage après sa disparition.",
      },
    ],
    // Images fixes : les 2 premières sont mises en avant (en grand), puis du plus esthétique au moins esthétique
images: [
      "images/thefork/tartine.jpg", "images/thefork/rouge-a-levres.jpg",
      "images/thefork/chefs-diptyque.jpg", "images/thefork/post-mood-pizza.jpg",
      "images/thefork/chef-portrait.jpg", "images/thefork/chef-cuisine.jpg", "images/thefork/femmes-gastronomie.jpg",
      "images/thefork/avis-client.jpg", "images/thefork/post-pink-outfit.jpg", "images/thefork/post-summer-festival.jpg",
      "images/thefork-cheffes.jpg", "images/thefork/post-concours-funradio.jpg", "images/thefork-nye.jpg",
      "images/thefork-yummydays.jpg", "images/thefork-foodmarket.jpg", "images/thefork-stories.jpg",
    ],
    featured: 2, // les 2 premières images s’affichent en grand, avant les vidéos ; les suivantes vont dans la galerie
  },
  {
    title: "Erbario Toscano", tag: "Social media & concept visuel", year: "2018", image: "images/erbario/gift-box-grille.jpg", imageFull: true, design: 3,
    logo: "images/erbario/logo.png", logoPlain: true,
    text: [
      "Animation du compte Instagram de la boutique bruxelloise de la marque italienne de parfums et soins : sélection des visuels, rédaction du copy et mise en valeur des produits et de l’image de marque.",
      "Pour les fêtes de fin d’année, création d’une campagne réseaux sociaux de lancement de la « Gift Box », le calendrier de l’Avent de la marque : une grille Instagram pensée comme un ensemble, qui mêle produits, textures et annotations manuscrites.",
    ],
    meta: [
      { label: "Plateforme", value: "Instagram" },
      { label: "Outils", value: "Photoshop, Lightroom, Canva" },
    ],
    groupIntros: {
      "Concept visuel Gift Box": {
        title: "Concept visuel Gift Box",
        text: "L’idée : que la grille, vue d’un coup d’œil, se lise comme une seule boîte cadeau qu’on ouvre case après case.",
      },
    },
    videos: [
      {
        group: "Concept visuel Gift Box", type: "file", wide: true,
        src: "images/erbario/gift-box-defilement.mp4", poster: "images/erbario/gift-box-defilement-poster.jpg",
        label: "La grille Instagram de la « Gift Box » — fêtes de fin d’année",
      },
      {
        group: "Concept visuel Gift Box", type: "image",
        src: "images/erbario/gift-box-grille.jpg",
        label: "Aperçu du feed Instagram — le calendrier « Gift Box »",
      },
    ],
    images: ["images/erbario/post-purity.jpg", "images/erbario-parfum.jpg", "images/erbario-fleur.jpg", "images/erbario-savon.jpg"],
  },
  {
    title: "SNCB International", tag: "Content Marketer", year: "2019", image: "images/sncb/affiche-quai.jpg", design: 4,
    logo: "images/sncb/logo.png", logoPlain: true,
    text: "En tant que Content Marketer au sein de l’équipe marketing digital, j’étais en charge de trouver des idées éditoriales et créatives, je me chargeais de la rédaction des articles et contenus marketing pour soutenir les ventes. Je rédigeais aussi les newsletters promotionnelles, traduisais les contenus du néerlandais vers le français et assurais le suivi des campagnes.",
    meta: [
      { label: "Supports", value: "site web, blog, newsletter" },
      { label: "Langues", value: "FR, NL" },
      { label: "Outils", value: "Qualifio, suivi UTM" },
    ],
    // liens externes affichés sous les repères
    links: [
      { label: "Voir le blog SNCB International", url: "https://www.b-europe.com/FR/Blog" },
    ],
    results: [
      { figure: "2", text: "articles de blog par semaine" },
      { figure: "1 à 2", text: "newsletters promotionnelles par mois" },
      { figure: "NL → FR", text: "contenus traduits du néerlandais vers le français" },
    ],
    // images de la galerie : chemin seul, ou { src, caption } pour ajouter une légende
    images: [
      { src: "images/sncb-newsletter-interrail.jpg", caption: "Newsletter Interrail « Allez où l’aventure vous prend ! », été 2019" },
      { src: "images/sncb-newsletter-londres.jpg", caption: "Newsletter promo #CrazyTrainDays — Londres dès 29 €, 2019" },
      { src: "images/sncb-blog-paris.jpg", caption: "Article de blog « Nos meilleures adresses à Paris »" },
      { src: "images/sncb-blog-bordeaux.jpg", caption: "Article de blog « Bordeaux : 5 musées à ne pas manquer »" },
    ],
  },
  {
    title: "Ricotta & Parmesan", tag: "Événement & relations presse", year: "2018", image: "images/ricotta/affiche-pates.jpg", design: 5,
    logo: "images/ricotta/logo.png", logoPlain: true, logoWide: true,
    text: [
      "Lancement du premier menu 100 % vegan de Ricotta & Parmesan, restaurant italien bien connu des Bruxellois. J’ai organisé la soirée de dégustation et géré les relations presse, en réunissant blogueurs, journalistes et experts de la santé, notamment autour de la maladie cœliaque.",
      "J’ai aussi conçu les goodies offerts aux invités, des sacs garnis d’échantillons de produits, et noué les partenariats avec les marques.",
    ],
    meta: [
      { label: "Retombées presse", value: "Brussels Life, Bruzz, comptes foodies sur les réseaux sociaux" },
    ],
    links: [
      { label: "Lire l’article de Brussels Life", url: "https://www.brusselslife.be/fr/article/ricotta-parmesan-lance-une-carte-100-gluten-free" },
    ],
    results: [
      { figure: "près de 60", text: "personnes présentes à la soirée de dégustation" },
      { figure: "50", text: "invités : blogueurs, experts santé et partenaires" },
      { figure: "5", text: "journalistes" },
    ],
    // vidéo d’un autre site intégrée telle quelle (type "iframe", avec son propre lecteur)
    videos: [
      {
        group: "Reportage Bruzz", type: "iframe", wide: true,
        src: "https://player.clevercast.com?autoplay=false&autoload=off&captions_default=nl&captions_default_show=true&chromecast=true&account_id=WXv1JD&item_id=Ak3rqZ&comm_url=&comm_url_prefetch=false",
        label: "Le reportage de Bruzz sur le lancement du menu",
      },
    ],
    images: [
      { src: "images/ricotta-soiree.jpg", caption: "La soirée de dégustation, relayée sur Instagram par les blogueurs invités" },
      { src: "images/ricotta-goodies.jpg", caption: "Le goodie bag et ses échantillons, partagé par Vegan Brussels" },
      { src: "images/ricotta-presse-brusselslife.jpg", caption: "Retombée presse — Brussels Life" },
      { src: "images/ricotta-presse-bruzz.jpg", caption: "Retombée presse — Bruzz" },
      { src: "images/ricotta/visuel-presentation.jpg", caption: "Visuel de présentation du restaurant" },
    ],
  },
  {
    title: "Union des Francophones", tag: "Social media & campagne électorale", year: "2018", image: "images/uf-force.jpg", imageFull: true, design: 6,
    logo: "images/uf/logo.png", logoPlain: true, logoWide: true,
    text: [
      "Gestion de la page Facebook de l’Union des Francophones et campagne réseaux sociaux en amont des élections provinciales de 2018 : conception des visuels et rédaction du copy.",
      "J’ai aussi rédigé le contenu du site web et mis en page le bulletin d’information distribué dans les communes à facilités.",
    ],
    meta: [
      { label: "Plateforme", value: "Facebook" },
      { label: "Supports", value: "site web, bulletin d’information" },
    ],
    links: [
      { label: "Voir le site de l’Union des Francophones", url: "https://uniondesfrancophones.be/" },
    ],
    images: [
      { src: "images/uf-force.jpg", caption: "Campagne Facebook, élections provinciales 2018" },
      { src: "images/uf-discriminations.jpg", caption: "Campagne Facebook, élections provinciales 2018" },
      { src: "images/uf-identite.jpg", caption: "Campagne Facebook, élections provinciales 2018" },
      { src: "images/uf-droits.jpg", caption: "Campagne Facebook, élections provinciales 2018" },
      { src: "images/uf-bulletin.jpg", caption: "Bulletin d’information distribué dans les communes à facilités" },
    ],
  },
  {
    title: "L'Atelier de la Truffe Noire", tag: "Contenu web", year: "2018", image: "images/truffe-accueil.jpg", design: 8,
    logo: "images/truffe/logo.png", logoPlain: true, logoWide: true,
    text: "Pour le nouveau site de ce restaurant et épicerie fine bruxellois consacré à la truffe, j’ai rédigé l’ensemble des contenus : présentation de la maison, cuisine, service traiteur, boutique, actualités et menus de saison.",
    images: [
      { src: "images/truffe-accueil.jpg", caption: "Page d’accueil du site" },
      { src: "images/truffe-histoire.jpg", caption: "Page « Notre histoire »" },
    ],
  },
];

// Page « À propos »
const ABOUT = {
  headline:
    "Bonjour, je suis Sonia. Parisienne de naissance, Bruxelloise de cœur. Mon métier : sublimer vos messages et clarifier l’essentiel. Je transforme des sujets complexes en contenus fluides, attrayants et impactants pour tous vos publics.",
  paragraphs: [
    "Depuis toujours, je suis fascinée par la façon dont les mots et les images façonnent notre regard. Formée à la communication et à la publicité à Paris, j'ai fait de cette curiosité un métier : trouver la juste façon de dire les choses, pour qu'elles soient comprises, retenues et partagées.",
    "Mon parcours m'a menée des agences aux marques, puis au cœur de l'action publique. J'ai accompagné de jeunes créateurs, des restaurants et des maisons comme Erbario Toscano, participé au lancement de TheFork en Belgique et porté la ligne éditoriale du site de SNCB International.",
    "Au cabinet du Ministre bruxellois Bernard Clerfayt, j'ai d'abord animé la communauté avant de prendre la responsabilité de la communication : relations presse, discours, événements institutionnels, et gestion de crise sur des dossiers sensibles, en lien étroit avec les autres services publics.",
    "Chacune de ces expériences a enrichi ma façon de communiquer. J'en garde une conviction : tout commence par l'écoute. Mon rôle est de comprendre vos besoins pour raconter votre histoire, avec justesse et sincérité.",
    "Et parce que l'intelligence artificielle redessine nos métiers, j'avance avec elle — au service du fond, sans jamais perdre la voix humaine.",
  ],
  // photo : "images/portrait-londres-portrait.jpg" (Londres, recadrée en portrait) — autres choix : "images/portrait-londres.jpg", "images/portrait-couleur.jpg"
  photo: "images/portrait-londres-portrait.jpg",
};

const CV = {
  // Paragraphe d'introduction (une entrée = un paragraphe)
  about: [
    "Des cabinets ministériels aux marques, des grandes institutions aux jeunes artisans créateurs, chaque expérience a enrichi ma façon de communiquer. J'en garde une conviction : tout commence par l'écoute.",
    "Mon rôle est de comprendre vos besoins pour raconter votre histoire, avec justesse et sincérité. Et parce que l'intelligence artificielle redessine nos métiers, j'avance avec elle, au service du fond, sans jamais perdre la voix humaine.",
  ],

  // Expériences regroupées par employeur (du plus récent au plus ancien)
  experience: [
    {
      company: "Cabinet du Ministre Bernard Clerfayt",
      projects: ["Cabinet Clerfayt"], // fiches projets ouvertes par « Voir le projet »
      context: "Gouvernement de la Région de Bruxelles-Capitale",
      period: "Août 2021 — Fév. 2026",
      path: "Community Manager → Responsable Communication",
      roles: [
        {
          title: "Responsable Communication",
          period: "Fév. 2024 — Fév. 2026",
          tasks: [
            "Seule en charge de toute la communication du cabinet pendant la période d'affaires courantes.",
            "Pilotage de la communication du cabinet et des prises de parole du Ministre, en toute autonomie.",
            "Gestion de la communication de crise sur des dossiers sensibles : fermeture du site Audi Brussels à Forest, réforme du chômage.",
            "Communication sur les grands dossiers du cabinet : ordonnance « Bruxelles Numérique », titres-services, premier Code bruxellois du Bien-être animal.",
            "Coordination avec les autres services publics et administrations pour définir et porter un angle de communication commun.",
            "Relations presse : communiqués, sollicitations des médias, éléments de langage.",
            "Rédaction de discours et de communiqués.",
            "Organisation d'événements institutionnels et des actions de communication associées.",
          ],
        },
        {
          title: "Community Manager",
          period: "Août 2021 — Fév. 2024",
          tasks: [
            "Gestion et animation des réseaux sociaux du cabinet.",
            "Modération des commentaires et des échanges avec la communauté.",
            "Production de contenus visuels et éditoriaux pour valoriser l'action politique et les événements.",
          ],
        },
      ],
    },
    {
      company: "SNCB International",
      projects: ["SNCB International"], // fiches projets ouvertes par « Voir le projet »
      context: "Mission de consultance",
      period: "Mars — Août 2019",
      roles: [
        {
          title: "Content Marketer / Copywriter",
          tasks: [
            "Gestion autonome de la ligne éditoriale et du marketing digital du site internet.",
            "Création des contenus : articles de blog, newsletters et visuels associés.",
            "Traduction de contenus du néerlandais vers le français.",
            "Gestion de l'outil marketing Qualifio et paramétrage du suivi des campagnes (UTM).",
          ],
        },
      ],
      work: [
        {
          title: "Blog",
          text: "Proposition et rédaction d'articles de voyage pour le blog.",
          images: [
            { src: "images/sncb-blog-paris.jpg", caption: "Article « Nos meilleures adresses à Paris »" },
            { src: "images/sncb-blog-bordeaux.jpg", caption: "Article « Bordeaux : 5 musées à ne pas manquer »" },
          ],
        },
        {
          title: "Newsletters",
          text: "Rédaction des newsletters promotionnelles.",
          images: [
            { src: "images/sncb-newsletter-londres.jpg", caption: "Newsletter #CrazyTrainDays — Londres dès 29 €" },
            { src: "images/sncb-newsletter-interrail.jpg", caption: "Newsletter Interrail — « Allez où l'aventure vous prend ! »" },
          ],
        },
      ],
    },
    {
      company: "TheFork Belgium",
      projects: ["TheFork Belgium"], // fiches projets ouvertes par « Voir le projet »
      context: "Application et site de réservation de restaurants",
      period: "Janv. 2017 — Janv. 2020",
      roles: [
        {
          title: "Community Manager",
          tasks: [
            "Accompagnement du lancement de TheFork, marque française, sur le marché belge.",
            "Collaboration étroite avec le pôle marketing.",
            "Gestion de l'ensemble des réseaux sociaux : ligne éditoriale, contenus et visuels.",
            "Conception et animation de concours et de campagnes social media.",
            "Modération et animation de la communauté.",
          ],
        },
      ],
      work: [
        {
          title: "Campagne live #FoodBallCup",
          text: "Série de stories Instagram en direct pendant les matchs de la Coupe du monde 2018.",
          images: [{ src: "images/thefork-stories.jpg", caption: "#FoodBallCup — stories Instagram, 2018" }],
        },
        {
          title: "Saint-Valentin : « TheFork sauve votre soirée ! »",
          text: "Campagne de GIFs et de vidéos mises en situation — Instagram & Facebook.",
          images: [
            { src: "images/thefork-valentin.jpg", caption: "Saint-Valentin — vidéo #SaintValentin & TheFork" },
            { src: "images/thefork-valentin-video.jpg", caption: "Saint-Valentin — épisode 1 « Ouf, soirée sauvée ! »" },
            { src: "images/thefork-sondage.jpg", caption: "Saint-Valentin — sondage Facebook" },
          ],
        },
        {
          title: "Publications social media",
          text: "Ligne éditoriale food & lifestyle, temps forts et opérations promotionnelles.",
          images: [
            { src: "images/thefork-cheffes.jpg", caption: "Journée des droits des femmes — Facebook" },
            { src: "images/thefork-yummydays.jpg", caption: "Opération #YummyDays — Facebook" },
            { src: "images/thefork-nye.jpg", caption: "Nouvel An — Instagram" },
            { src: "images/thefork-foodmarket.jpg", caption: "#FoodMarket — Facebook" },
          ],
        },
      ],
    },
    {
      company: "Indépendante",
      projects: ["Erbario Toscano", "Ricotta & Parmesan", "Union des Francophones", "L'Atelier de la Truffe Noire"], // fiches projets ouvertes par « Voir le projet »
      context: "Clients : Matière Noire Studios (agence 360°), Erbario Toscano, Ricotta & Parmesan, L'Atelier de la Truffe Noire, Union des Francophones, jeunes artisans créateurs",
      period: "2014 — 2020",
      roles: [
        {
          title: "Brand Content & Community Manager",
          tasks: [
            "Gestion des réseaux sociaux et de l'e-réputation de marques, de restaurants et de commerces.",
            "Création de concepts visuels et de campagnes social media.",
            "Organisation d'événements de lancement et relations presse.",
            "Rédaction de contenus web et mise en page de supports print.",
            "Accompagnement de jeunes créateurs dans la construction de leur image.",
          ],
        },
      ],
      work: [
        {
          title: "Erbario Toscano",
          text: "Animation du compte Instagram de la boutique bruxelloise et concept visuel pour le lancement de la « Gift Box » des fêtes de fin d'année.",
          images: [
            { src: "images/erbario-giftbox.jpg", caption: "Erbario Toscano — concept visuel « Gift Box », Instagram" },
            { src: "images/erbario-rose.jpg", caption: "Erbario Toscano — publication Instagram" },
            { src: "images/erbario-fleur.jpg", caption: "Erbario Toscano — publication Instagram" },
            { src: "images/erbario-savon.jpg", caption: "Erbario Toscano — publication Instagram" },
            { src: "images/erbario-parfum.jpg", caption: "Erbario Toscano — publication Instagram" },
          ],
        },
        {
          title: "Ricotta & Parmesan",
          text: "Lancement du premier menu dédié aux intolérances alimentaires : organisation de la soirée de dégustation et relations presse, en collaboration avec blogueurs, experts et journalistes.",
          images: [
            { src: "images/ricotta-soiree.jpg", caption: "Ricotta & Parmesan — soirée de dégustation" },
            { src: "images/ricotta-goodies.jpg", caption: "Ricotta & Parmesan — goodie bag partenaires" },
            { src: "images/ricotta-presse-brusselslife.jpg", caption: "Retombée presse — Brussels Life" },
            { src: "images/ricotta-presse-bruzz.jpg", caption: "Retombée presse — Bruzz" },
            { src: "images/ricotta/visuel-presentation.jpg", caption: "Ricotta & Parmesan — visuel de présentation" },
          ],
        },
        {
          title: "L'Atelier de la Truffe Noire",
          text: "Rédaction et structure des contenus du site internet.",
          images: [
            { src: "images/truffe-accueil.jpg", caption: "L'Atelier de la Truffe Noire — page d'accueil" },
            { src: "images/truffe-histoire.jpg", caption: "L'Atelier de la Truffe Noire — page « Notre histoire »" },
          ],
        },
        {
          title: "Union des Francophones",
          text: "Campagne visuelle Facebook pour les élections provinciales 2018 et mise en page du bulletin d'information distribué dans les communes à facilités.",
          images: [
            { src: "images/uf-force.jpg", caption: "UF — campagne élections provinciales 2018" },
            { src: "images/uf-discriminations.jpg", caption: "UF — campagne élections provinciales 2018" },
            { src: "images/uf-identite.jpg", caption: "UF — campagne élections provinciales 2018" },
            { src: "images/uf-droits.jpg", caption: "UF — campagne élections provinciales 2018" },
            { src: "images/uf-bulletin.jpg", caption: "UF — bulletin d'information (print)" },
          ],
        },
      ],
    },
  ],

  education: [
    { period: "2014", title: "Master I — Communication, spécialité publicité", company: "Sup de Com, Paris" },
    { period: "2013", title: "Bachelor européen en alternance (Bac +3) — Communication des entreprises", company: "École Plus Values, Paris" },
    { period: "2008", title: "Baccalauréat Économique et social — option Européenne / Arts", company: "Lycée Saint-James, Hauts-de-Seine" },
  ],
  skills: [
    "Vulgarisation",
    "Mise en page",
    "Communication stratégique",
    "Communication institutionnelle & affaires publiques",
    "Communication de crise",
    "Relations presse",
    "Rédaction de discours",
    "Copywriting & ligne éditoriale",
    "Réseaux sociaux & e-réputation",
    "Brand content & événementiel",
    "Outils d'IA générative",
    "Adobe Creative Cloud",
  ],
  languages: [
    // scale : nombre de niveaux acquis sur l'échelle européenne (1 = A1 … 6 = C2)
    // learning : niveau en cours d'apprentissage (affiché en hachuré)
    { label: "Français", level: "Langue maternelle", scale: 6, badge: "Natif" },
    { label: "Anglais", level: "Courant", scale: 5, badge: "C1" },
    { label: "Néerlandais", level: "Intermédiaire — cours de niveau B1 en cours", scale: 2, learning: 3, badge: "A2 → B1" },
  ],
  certifications: [
    {
      period: "Août 2026", title: "Generative AI for Everyone", company: "DeepLearning.AI (Andrew Ng) / Coursera",
      items: ["Comprendre l’IA générative, ses usages en entreprise, ses limites et ses risques"],
    },
    {
      period: "Sept. 2026", title: "Make Academy, certifications en automatisation et IA",
      // détail affiché avec des tirets sous le titre
      items: [
        "Make Foundation : automatiser des tâches sans coder (workflows entre outils)",
        "AI Automation Explorer : intégrer l’IA générative et des agents IA dans des processus métier",
      ],
    },
  ],
};
