export const site = {
  name: "Tyson",
  fullName: "Tyson Tan Teck Yang",
  role: "Creative Designer",
  email: "tysontanty@gmail.com",
  location: "Available for new work",
  resumeHref: "/Tyson_Tan_Teck_Yang_Resume.pdf",
  nav: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Resume", href: "/Tyson_Tan_Teck_Yang_Resume.pdf" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    title: "Hi, I'm Tyson — Creative Designer.",
    rotatingWords: ["Creative", "Multimedia", "Visual", "Product"],
    introBefore: "I make ",
    introEmphasis: "worlds and pictures",
    introMiddle: " — with ",
    introEmphasisTwo: "2D/3D",
    introAfter: " graphics, motion, and ",
    introEmphasisThree: "UI/UX",
    introEnd: " in the mix.",
  },
  about: {
    title: "Tyson Tan Teck Yang",
    portrait: "/about/portrait.jpg",
    paragraphs: [
      "I’m a creative designer and visual arts educator. I specialise in concept art, 2D/3D visualisation, and graphic design, with UI/UX as part of that practice. BFA in Digital Art and Animation from SIT–DigiPen, and a diploma in 3D Interactive Media Technology from Temasek Polytechnic.",
      "My work spans scientific journal covers, stylised Unreal Engine environments, character development, and product interfaces. I also teach, designing lessons that bring visual design and technology together.",
      "AI sits in my process as a way to explore further — generative tools help me test more directions, then I pull the work back to something considered, with craft, clarity, and intent still leading.",
    ],
  },
  socials: [
    {
      label: "LinkedIn",
      href: "https://sg.linkedin.com/in/tyson-teck-yang-tan-b67434210",
      icon: "linkedin" as const,
    },
    {
      label: "ArtStation",
      href: "https://tysontanty.artstation.com",
      icon: "artstation" as const,
    },
  ],
  projects: [
    {
      year: "2025",
      title: "SmartBudget Mobile App",
      paragraphs: [
        "A UI/UX case study and interface design for SmartBudget, a personal budgeting app aimed at helping users develop better financial habits.",
        "The goal is an intuitive and motivating experience that simplifies expense tracking, promotes mindful spending, and empowers users to achieve their goals through thoughtful, user-centered design.",
      ],
      tags: ["UI/UX", "Mobile", "Product"],
      roles: ["UI/UX Designer", "Interface Designer"],
      href: "/projects/smartbudget",
      linkLabel: "View case study",
      thumbFit: "contain" as const,
      slides: [
        {
          src: "/projects/smartbudget/dashboard.png",
          alt: "SmartBudget dashboard with monthly balance and spending by category",
        },
        {
          src: "/projects/smartbudget/new-log.png",
          alt: "SmartBudget new log screen for adding an expense",
        },
        {
          src: "/projects/smartbudget/transactions.png",
          alt: "SmartBudget calendar of monthly transactions",
        },
        {
          src: "/projects/smartbudget/stats.png",
          alt: "SmartBudget financial trends and category breakdown",
        },
        {
          src: "/projects/smartbudget/settings.png",
          alt: "SmartBudget settings for theme, language, and privacy",
        },
      ],
    },
    {
      year: "2024",
      title: "Nano Micro Small cover illustration",
      paragraphs: [
        "I illustrated a cover for a science journal article in Nano Micro Small. It was selected as a frontispiece for Volume 20, Issue 17, published on 25 April 2024.",
        "I was commissioned to depict cell aggregates squeezing through channels — a way to visualize and measure how they deform and flow.",
      ],
      tags: ["Cover illustration", "Science"],
      roles: ["Cover Illustrator"],
      href: "/projects/nano-micro-small",
      linkLabel: "View project",
      thumbFit: "contain" as const,
      slides: [
        {
          src: "/projects/nano-micro-small/final.jpg",
          alt: "Published Nano Micro Small cover illustration of cell aggregates flowing through a microfluidic device",
        },
        {
          src: "/projects/nano-micro-small/draft-1.jpg",
          alt: "Early sketch for the Nano Micro Small cover, with a handwritten formula and isometric device",
        },
        {
          src: "/projects/nano-micro-small/draft-2.jpg",
          alt: "Refined Nano Micro Small cover draft with graph axes and a beam of light through the device",
        },
      ],
    },
    {
      year: "2023",
      title: "The Sky Islands",
      paragraphs: [
        "The Sky Islands is my final university group project: a stylised Viking environment showcase built in Unreal Engine 5. I was a 3D modeler, texture artist, and concept artist for the two-storey house.",
        "The sanctuary sits across three floating islands — a house, a windmill, and a blacksmith’s workshop — linked by portals so an adventurer can travel between them. We took our cue from Ian Worrel’s Mystery Shack diorama from Gravity Falls, and set out to build a whimsical world with the same sense of place.",
      ],
      tags: ["Unreal Engine 5", "Environment", "Stylised 3D"],
      roles: ["3D Modeler", "Texture Artist", "Concept Artist"],
      href: "/projects/sky-islands",
      linkLabel: "View project",
      videoThumb: {
        src: "/projects/sky-islands/preview.mp4",
        poster: "/projects/sky-islands/still-2.jpg",
      },
    },
    {
      year: "2022",
      title: "The Golden Drop Saloon",
      paragraphs: [
        "The Golden Drop Saloon is a cinematic environment showcase made in Unreal Engine 5, where I was the main Lighting and Cinematic Artist. I also helped to integrate the 3D models, textures and VFX into Unreal Engine. The aim of this project is to create an environment walkthrough of an old western saloon in the perspective of a detective, showing the aftermath of a bar fight which will end with the reveal of a dead sheriff and the perpetrator.",
      ],
      tags: ["Unreal Engine 5", "Environment", "Cinematic"],
      roles: ["Lighting Artist", "Cinematic Artist"],
      href: "/projects/golden-drop-saloon",
      linkLabel: "View project",
      trailer: "/projects/golden-drop-saloon/trailer.mp4",
      videoThumb: {
        src: "/projects/golden-drop-saloon/preview.mp4",
        poster: "/projects/golden-drop-saloon/tyson-teck-yang-tan-keyshot-1.jpg",
      },
    },
    {
      year: "2022",
      title: "Advanced Healthcare Materials cover illustration",
      paragraphs: [
        "I illustrated a cover for a journal article published in Advanced Healthcare Materials in December 2022.",
        "I was commissioned to depict a billion cell-scale bioprinting pipeline. Human induced pluripotent stem cells are cultured and passaged in automated bioreactors and compacted into wholly cellular bioinks for bioprinting and differentiation.",
      ],
      tags: ["Cover illustration", "Science"],
      roles: ["Cover Illustrator"],
      href: "/projects/advanced-healthcare-materials",
      linkLabel: "View project",
      thumbFit: "contain" as const,
      slides: [
        {
          src: "/projects/advanced-healthcare-materials/final.jpg",
          alt: "Published Advanced Healthcare Materials cover of a bioprinting pipeline with bioreactors and lab technicians",
        },
        {
          src: "/projects/advanced-healthcare-materials/draft.jpg",
          alt: "Draft illustration for the Advanced Healthcare Materials cover, showing the bioprinting scene before masthead and lighting",
        },
      ],
    },
    {
      year: "2022",
      title: "Ascendant of the Shadows",
      paragraphs: [
        "A 2D animation visual development pitch. It was a chance to concept compelling, visually engaging characters — and to work through research, sketches, iteration, and refinement.",
        "The pitch follows Seroth, the protagonist, and Rita, the antagonist, from early costume studies through turnarounds, expressions, action poses, poster concepts, and a finished battle splash.",
      ],
      tags: ["2D animation", "Visual development", "Character"],
      roles: ["Visual Development", "Character Design"],
      href: "/projects/ascendant-of-the-shadows",
      linkLabel: "View project",
      thumbFit: "contain" as const,
      slides: [
        {
          src: "/projects/ascendant-of-the-shadows/splash-final.jpg",
          alt: "Final splash art of Seroth and Rita in a battle scene",
        },
        {
          src: "/projects/ascendant-of-the-shadows/poster.jpg",
          alt: "Poster art of Seroth and Rita",
        },
        {
          src: "/projects/ascendant-of-the-shadows/seroth-turnaround.jpg",
          alt: "Seroth character turnaround",
        },
        {
          src: "/projects/ascendant-of-the-shadows/rita-turnaround.jpg",
          alt: "Rita character turnaround",
        },
        {
          src: "/projects/ascendant-of-the-shadows/splash-thumbnails.jpg",
          alt: "Splash art composition thumbnails",
        },
        {
          src: "/projects/ascendant-of-the-shadows/poster-thumbnails.jpg",
          alt: "Poster art composition thumbnails",
        },
        {
          src: "/projects/ascendant-of-the-shadows/seroth-poses-1.jpg",
          alt: "Seroth action poses",
        },
        {
          src: "/projects/ascendant-of-the-shadows/rita-poses-1.jpg",
          alt: "Rita action poses",
        },
        {
          src: "/projects/ascendant-of-the-shadows/seroth-expressions.jpg",
          alt: "Seroth facial expressions",
        },
        {
          src: "/projects/ascendant-of-the-shadows/rita-expressions.jpg",
          alt: "Rita facial expressions",
        },
        {
          src: "/projects/ascendant-of-the-shadows/seroth-sketches.jpg",
          alt: "Seroth costume and face sketches",
        },
        {
          src: "/projects/ascendant-of-the-shadows/rita-sketches-2.jpg",
          alt: "Rita costume sketches",
        },
        {
          src: "/projects/ascendant-of-the-shadows/seroth-poses-2.jpg",
          alt: "More Seroth action poses",
        },
        {
          src: "/projects/ascendant-of-the-shadows/rita-poses-2.jpg",
          alt: "More Rita action poses",
        },
        {
          src: "/projects/ascendant-of-the-shadows/rita-sketches-1.jpg",
          alt: "Early Rita line sketches",
        },
      ],
    },
  ],
  contact: {
    intro: "Contact me using the form below, or hit me up via email at",
    formspree: "https://formspree.io/f/mdeeqgzd",
  },
};
