// ============================================================
//  VERSION ANGLAISE DU SITE
//  Ce fichier ne contient que les textes : il remplace les textes français de data.js
//  quand le site est affiché en anglais (?lang=en). Les images, liens et réglages restent ceux de data.js.
//  Les listes suivent le même ordre que dans data.js (1er élément = 1er élément, etc.).
// ============================================================

if (LANG === "en") (function () {
  // remplace les textes de data.js par ceux d'ici, élément par élément
  const merge = (fr, en) => {
    if (Array.isArray(en)) {
      // liste de textes : remplacée en entier ; liste de fiches : fusionnée une à une
      if (!en.length || typeof en[0] !== "object" || Array.isArray(en[0])) return en;
      return fr.map((x, i) => (en[i] === undefined ? x : typeof x === "object" ? merge(x, en[i]) : en[i]));
    }
    if (en && typeof en === "object") {
      const out = { ...fr };
      for (const k in en) out[k] = fr && k in fr ? merge(fr[k], en[k]) : en[k];
      return out;
    }
    return en;
  };

  const EMPLOI = "Employment & Vocational Training", NUM = "Digital Transition", LOCAL = "Local Government",
    ANIMAL = "Animal Welfare", AUTRES = "Other topics";
  const FB_2018 = "Facebook campaign, 2018 provincial elections";

  const EN = {
    SITE: {
      keywords: [
        ["Head of Communications", "Press relations", "Speechwriting", "Social media", "Public affairs", "Generative AI", "Content strategy"],
        ["Community Manager", "Press release writing", "Crisis communication", "Copywriting", "Digital communication", "Content Marketer"],
        ["Institutional communication", "Brand content", "Simplifying complex topics", "Layout & design", "Events", "Head of Communications", "Press relations"],
      ],
      intro: "Sonia Ghariani is a communications manager based in Brussels, specialising in strategic and institutional communication, media relations and digital strategy.",
      location: "Brussels, Belgium",
    },

    ABOUT: {
      headline: "Hello, I’m Sonia. Parisian by birth, Brussels at heart. My craft: elevating your messages and bringing clarity to what matters. I make the complex compelling, in words and in pictures.",
      key: "elevating your messages and bringing clarity to what matters",
    },

    PROJECTS: [
      {
        title: "Office of Minister Clerfayt",
        tag: "Institutional communication",
        subtitle: "Office of Bernard Clerfayt, Brussels Minister for Employment and Vocational Training, Digital Transition, Local Government, Administrative Simplification and Animal Welfare",
        text: [
          "I started out as Community Manager and gradually broadened my role to become the Office’s Head of Communications, with a great deal of autonomy. After managing the Minister’s social media, I took on responsibilities close to those of a spokesperson: press relations, writing press releases and press kits, organising events, and shaping strategy and messaging on sensitive issues.",
          "The closure of the Audi Brussels plant, the Arizona government’s unemployment reform, the “Digital Brussels” ordinance, better working conditions and pay for domestic workers (service vouchers), Brussels’ first Animal Welfare Code: topics where every word counts, every silence too, and every Brussels resident even more so.",
          "During the caretaker period, I single-handedly ran the Office’s communication, at the heart of Brussels politics.",
        ],
        meta: [
          { label: "Roles", value: "Community Manager, then Head of Communications" },
          { label: "Responsibilities", value: "press relations, press releases and press kits, press conferences, event organisation, social media, content creation, video and photo editing, website management, speeches, crisis communication" },
          { label: "Tools", value: "Canva, Adobe Creative Cloud, Belga, Mailchimp, WordPress, Meta Business Suite & Analytics, Hootsuite, generative AI & prompting" },
        ],
        highlights: [
          { title: "Closure of Audi Brussels", text: "Crisis communication around the closure of the Forest plant and support for workers with Actiris, culminating in a job day." },
          { title: "“Digital Brussels” ordinance", text: "Communication on the digital transition of Brussels public services." },
          { title: "Unemployment reform", text: "Communication on the unemployment reform led by the federal Arizona government and its consequences for jobseekers in Brussels." },
          { title: "Service voucher sector", text: "Better working conditions and wages for workers in the sector." },
          { title: "Brussels Animal Welfare Code", text: "Drafting and design of the Animal Welfare Code, the first in Brussels." },
          { title: "Pet adoption", text: "Campaign with Royale Union Saint-Gilloise to raise awareness of pet adoption, in partnership with Brussels animal shelters." },
        ],
        library: [
          { theme: EMPLOI, title: "Audi Brussels: keeping activity on the site", format: "Instagram · crisis communication" },
          { theme: EMPLOI, title: "Audi Brussels job day: 1,105 former workers in the morning, over 2,000 jobseekers in the afternoon", format: "LinkedIn · crisis communication" },
          { theme: EMPLOI, title: "Nearly 1,000 former Audi Brussels workers have found a job or training", format: "Press · BX1" },
          { theme: EMPLOI, title: "Unemployment reform: adapting support for Brussels residents who lose their benefits", format: "Instagram" },
          { theme: EMPLOI, title: "Young people and employment: faster activation, better support, solutions from day one", format: "Social media visual" },
          { theme: EMPLOI, title: "Clerfayt calls for the unemployment reform to be postponed and fears for the funding of public social welfare centres (CPAS)", format: "Press · Moustique (Belga)" },
          { theme: EMPLOI, title: "Bernard Clerfayt, Brussels Employment Minister in a caretaker government", format: "Press · RTBF Info (video)" },
          { theme: EMPLOI, title: "Which training path leads young people in Brussels to work? Joint interview with Ibrahim Ouassari (Molengeek)", format: "Press · Le Soir" },
          { theme: EMPLOI, title: "Press conference with Actiris and Bruxelles Formation", format: "Photo" },
          { theme: EMPLOI, title: "Administrative unemployment: the figures explained", format: "Instagram" },
          { theme: EMPLOI, title: "€750,000 for 15 projects tackling discrimination in hiring", format: "Social media visual" },
          { theme: EMPLOI, title: "Tackling discrimination in hiring: a portrait of the non-profit Ras El Hanout", format: "Instagram" },
          { theme: EMPLOI, title: "Gender equality in the labour market", format: "Instagram" },
          { theme: EMPLOI, title: "Diversity, equality and inclusion: core values for our businesses", format: "LinkedIn" },
          { theme: EMPLOI, title: "Ukrainian refugees: integration through work, Tatiana’s story", format: "Instagram" },
          { theme: EMPLOI, title: "Brussels Airport: 100 Brussels residents trained as baggage handlers", format: "Instagram" },
          { theme: EMPLOI, title: "European Year of Skills: the Groot Eiland project", format: "Instagram" },
          { theme: EMPLOI, title: "30 years of the Molenbeek local employment office", format: "Instagram" },
          { theme: EMPLOI, title: "Speech at Bruxelles Formation’s 30th anniversary", format: "Photo" },
          { theme: EMPLOI, title: "European conference on training measures for employment", format: "Photo" },
          { theme: EMPLOI, title: "Visiting a training course", format: "Photo" },
          { theme: NUM, title: "Paradigm’s reforms are already bearing fruit", format: "Press · RTBF" },
          { theme: NUM, title: "Digital fair with Paradigm, a driver of digital transformation in the Brussels Region", format: "Photo" },
          { theme: LOCAL, title: "Molenbeek mayor’s prolonged absence: no grounds to remove her from office", format: "Press · RTBF" },
          { theme: LOCAL, title: "Merging the Brussels police zones: interview on Radio 1 (VRT)", format: "Press · Radio 1 (via Instagram)" },
          { theme: LOCAL, title: "Cemeteries: ensuring a dignified farewell for everyone", format: "Instagram" },
          { theme: ANIMAL, title: "Brussels Animal Welfare Code: “the ball is in the MPs’ court”", format: "Instagram" },
          { theme: ANIMAL, title: "#CoéquipierÀVie (Teammate for Life): adoption campaign with Royale Union Saint-Gilloise", format: "Facebook" },
          { theme: ANIMAL, title: "Dog strategy: more off-leash areas for Toby, Nala and Max", format: "Instagram" },
          { theme: ANIMAL, title: "“A well-trained dog starts with a responsible owner”", format: "Instagram" },
          { theme: ANIMAL, title: "Animal welfare call for projects", format: "Social media visual" },
          { theme: ANIMAL, title: "Animal welfare", format: "Photo" },
          { theme: AUTRES, title: "World Cancer Day", format: "Instagram" },
          { theme: AUTRES, title: "Meeting Simon Gronowski, Holocaust survivor", format: "Photo" },
          { theme: AUTRES, title: "At the Brussels Parliament", format: "Photo" },
        ],
      },
      {
        tag: "Community management",
        hiddenGroupTitles: ["Instagram feed"],
        meta: [{ label: "Platforms" }, { label: "Tools" }],
        tone: "A playful, foodie tone full of humour, to make TheFork the go-to app for eating out in Belgium.",
        results: [
          { figure: "150 → 1,700", text: "Instagram followers in 2 years" },
          { figure: "nearly 100", text: "entries to the #1yearwiththefork contest" },
        ],
        groupIntros: {
          "Valentine’s Day campaign": {
            title: "Valentine’s Day campaign 2019",
            text: "A campaign in several stages, from teasers and a poll to the video “Quand TheFork sauve votre soirée” (When TheFork saves your evening).",
          },
        },
        text: "Managed social media for the TheFork app in Belgium for 3 years: content creation (copy and visuals), editorial planning and moderation.",
        videos: [
          { group: "Instagram feed", label: "The @theforkbe Instagram feed" },
          { group: "Valentine’s Day campaign", label: "“L’Amour avec un grand Aaaah !” (Love with a capital Aaaah!), Facebook & Instagram, February 2019" },
          { group: "Valentine’s Day campaign", label: "“Rien de prévu encore ?” (No plans yet?), Facebook, February 2019" },
          { group: "Valentine’s Day campaign", label: "#SaintValentin poll, Facebook, 8 February 2019" },
          { group: "Valentine’s Day campaign", label: "“Quand TheFork sauve votre soirée” (When TheFork saves your evening), Instagram, 11 February 2019" },
          { group: "Other videos", label: "“1 an de restos” (A year of restaurants) contest, #1yearwiththefork, Instagram, 19 February 2019", caption: "A year of restaurant meals up for grabs to celebrate the app’s anniversary in Belgium." },
          { group: "Other videos", label: "Tribute to Anthony Bourdain, Instagram, 19 June 2018", caption: "A reactive post, published as a tribute after his death." },
        ],
      },
      {
        tag: "Social media & visual concept",
        text: [
          "Ran the Instagram account of the Brussels boutique of this Italian perfume and body care brand: selecting visuals, writing copy and showcasing the products and the brand image.",
          "For the festive season, created a social media launch campaign for the “Gift Box”, the brand’s Advent calendar: an Instagram grid designed as a whole, blending products, textures and handwritten notes.",
        ],
        meta: [{ label: "Platform" }, { label: "Tools" }],
        groupIntros: {
          "Gift Box visual concept": {
            title: "Gift Box visual concept",
            text: "The idea: at a glance, the grid reads as a single gift box, opened square by square.",
          },
        },
        videos: [
          { group: "Gift Box visual concept", label: "The “Gift Box” Instagram grid, festive season" },
          { group: "Gift Box visual concept", label: "Instagram feed preview: the “Gift Box” calendar" },
        ],
      },
      {
        tag: "Content Marketer",
        text: "As Content Marketer in the digital marketing team, I came up with editorial and creative ideas and wrote articles and marketing content to support sales. I also wrote promotional newsletters, translated content from Dutch into French and tracked campaign performance.",
        meta: [
          { label: "Channels", value: "website, blog, newsletter" },
          { label: "Languages" },
          { label: "Tools", value: "Qualifio, UTM tracking" },
        ],
        links: [{ label: "See the SNCB International blog" }],
        results: [
          { text: "blog articles a week" },
          { figure: "1 to 2", text: "promotional newsletters a month" },
          { text: "content translated from Dutch into French" },
        ],
        images: [
          { caption: "Interrail newsletter “Allez où l’aventure vous prend !” (Go where adventure takes you!), summer 2019" },
          { caption: "#CrazyTrainDays promotional newsletter: London from €29, 2019" },
          { caption: "Blog article “Nos meilleures adresses à Paris” (Our favourite places in Paris)" },
          { caption: "Blog article “Bordeaux : 5 musées à ne pas manquer” (Bordeaux: 5 museums not to miss)" },
        ],
      },
      {
        tag: "Event & press relations",
        text: [
          "Launch of the first 100% vegan menu at Ricotta & Parmesan, an Italian restaurant well known in Brussels. I organised the tasting evening and handled press relations, bringing together bloggers, journalists and health experts, notably around coeliac disease.",
          "I also designed the goodie bags given to guests, filled with product samples, and set up the brand partnerships.",
        ],
        meta: [{ label: "Press coverage", value: "Brussels Life, Bruzz, foodie accounts on social media" }],
        links: [{ label: "Read the Brussels Life article" }],
        results: [
          { figure: "nearly 60", text: "people at the tasting evening" },
          { text: "guests: bloggers, health experts and partners" },
          { text: "journalists" },
        ],
        videos: [{ group: "Bruzz report", label: "Bruzz’s report on the menu launch" }],
        images: [
          { caption: "The tasting evening, shared on Instagram by the invited bloggers" },
          { caption: "The goodie bag and its samples, shared by Vegan Brussels" },
          { caption: "Press coverage: Brussels Life" },
          { caption: "Press coverage: Bruzz" },
          { caption: "Restaurant presentation visual" },
        ],
      },
      {
        tag: "Social media & election campaign",
        text: [
          "Managed the Union des Francophones Facebook page and ran a social media campaign ahead of the 2018 provincial elections: visual design and copywriting.",
          "I also wrote the website content and laid out the newsletter distributed in the municipalities with language facilities.",
        ],
        meta: [{ label: "Platform" }, { label: "Channels", value: "website, newsletter" }],
        links: [{ label: "Visit the Union des Francophones website" }],
        images: [
          { caption: FB_2018 }, { caption: FB_2018 }, { caption: FB_2018 }, { caption: FB_2018 },
          { caption: "Newsletter distributed in the municipalities with language facilities" },
        ],
      },
      {
        tag: "Web content",
        text: "For the new website of this Brussels restaurant and delicatessen devoted to truffles, I wrote all the content: the story of the house, the cuisine, catering, the shop, news and seasonal menus.",
        images: [{ caption: "Website home page" }, { caption: "“Notre histoire” (Our story) page" }],
      },
    ],

    CV: {
      experience: [
        {
          company: "Office of Minister Bernard Clerfayt",
          projects: ["Office of Minister Clerfayt"],
          context: "Government of the Brussels-Capital Region",
          period: "Aug. 2021 — Feb. 2026",
          path: "Community Manager → Head of Communications",
          roles: [
            {
              title: "Head of Communications",
              period: "Feb. 2024 — Feb. 2026",
              tasks: [
                "Single-handedly ran all of the Office’s communications during the caretaker period.",
                "Led the Office’s communication and the Minister’s public statements, fully autonomously.",
                "Managed crisis communication on sensitive issues: the closure of the Audi Brussels plant in Forest, the unemployment reform.",
                "Communicated on the Office’s major files: the “Digital Brussels” ordinance, service vouchers, Brussels’ first Animal Welfare Code.",
                "Coordinated with other public services and administrations to define and carry a shared communication angle.",
                "Press relations: press releases, media requests, key messages.",
                "Wrote speeches and press releases.",
                "Organised institutional events and the related communication activities.",
              ],
            },
            {
              title: "Community Manager",
              period: "Aug. 2021 — Feb. 2024",
              tasks: [
                "Managed and ran the Office’s social media channels.",
                "Moderated comments and conversations with the community.",
                "Produced visual and editorial content to showcase the Minister’s policy work and events.",
              ],
            },
          ],
        },
        {
          context: "Consultancy assignment",
          period: "Mar. — Aug. 2019",
          roles: [
            {
              tasks: [
                "Independently managed the website’s editorial line and digital marketing.",
                "Created content: blog articles, newsletters and accompanying visuals.",
                "Translated content from Dutch into French.",
                "Managed the Qualifio marketing tool and set up campaign tracking (UTM).",
              ],
            },
          ],
        },
        {
          context: "Restaurant booking app and website",
          period: "Jan. 2017 — Jan. 2020",
          roles: [
            {
              tasks: [
                "Supported the launch of TheFork, a French brand, on the Belgian market.",
                "Worked closely with the marketing team.",
                "Managed all social media channels: editorial line, content and visuals.",
                "Designed and ran social media contests and campaigns.",
                "Moderated and engaged the community.",
              ],
            },
          ],
        },
        {
          company: "Freelance",
          context: "Clients: Matière Noire Studios (360° agency), Erbario Toscano, Ricotta & Parmesan, L'Atelier de la Truffe Noire, Union des Francophones, young independent designers",
          roles: [
            {
              tasks: [
                "Managed social media and online reputation for brands, restaurants and shops.",
                "Created visual concepts and social media campaigns.",
                "Organised launch events and handled press relations.",
                "Wrote web content and laid out print materials.",
                "Helped young designers build their brand image.",
              ],
            },
          ],
        },
      ],
      education: [
        { title: "Master’s degree (first year), Communication, specialising in advertising" },
        { title: "European Bachelor’s degree, work-study programme, Corporate communication" },
        { title: "French Baccalauréat, Economics and Social Sciences, European section / Arts" },
      ],
      skills: [
        "Simplifying complex topics",
        "Layout & design",
        "Strategic communication",
        "Institutional communication & public affairs",
        "Crisis communication",
        "Press relations",
        "Speechwriting",
        "Copywriting & editorial line",
        "Social media & online reputation",
        "Brand content & events",
        "Generative AI tools",
        "Adobe Creative Cloud",
      ],
      languages: [
        { label: "French", level: "Native language", badge: "Native" },
        { label: "English", level: "Fluent" },
        { label: "Dutch", level: "Intermediate, B1 course in progress" },
      ],
      certifications: [
        { period: "Aug. 2026", items: ["Understanding generative AI, its business uses, its limits and its risks"] },
        {
          period: "Sept. 2026", title: "Make Academy, automation and AI certifications",
          items: [
            "Make Foundation: automating tasks without code (workflows between tools)",
            "AI Automation Explorer: integrating generative AI and AI agents into business processes",
          ],
        },
      ],
    },
  };

  Object.assign(SITE, merge(SITE, EN.SITE));
  Object.assign(ABOUT, merge(ABOUT, EN.ABOUT));
  Object.assign(CV, merge(CV, EN.CV));
  merge(PROJECTS, EN.PROJECTS).forEach((p, i) => (PROJECTS[i] = p));
})();
