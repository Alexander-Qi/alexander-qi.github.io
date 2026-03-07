// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-papers",
          title: "Papers",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-updates",
          title: "Updates",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/activities/index.html";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-selected-for-the-74th-lindau-nobel-laureate-meeting",
        
          title: "Selected for the 74th Lindau Nobel Laureate Meeting",
        
        description: "Participation in the prestigious 74th Lindau Nobel Laureate Meeting and a scientific tour across Germany.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/activities/2025/lindau-meeting/";
          
        },
      },{id: "post-oral-presentation-prize-at-acs-spring-2025",
        
          title: "Oral Presentation Prize at ACS Spring 2025",
        
        description: "Presenting research on halogen atom transfer (XAT) reactivity at the ACS Spring 2025 Virtual Graduate Students Symposium.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/activities/2025/acs-spring/";
          
        },
      },{id: "post-outstanding-presentation-award-at-the-5th-beijing-tianjin-organic-chemistry-symposium",
        
          title: "Outstanding Presentation Award at the 5th Beijing-Tianjin Organic Chemistry Symposium",
        
        description: "Awarded for oral presentation at the regional organic chemistry symposium held at Nankai University.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/activities/2024/beijing-tianjin-symposium/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-metal-free-group-transfer-reaction",
          title: 'Metal-free group transfer reaction',
          description: "Realizing SN2 reactions without metal.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/group-transfer/";
            },},{id: "projects-noval-photocatalyst",
          title: 'Noval photocatalyst',
          description: "A versatile and structurally tunable fluorophore for diverse chemical tranformations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nbc/";
            },},{id: "projects-dft-study-of-pyridine-catalyzed-reactions",
          title: 'DFT study of pyridine catalyzed reactions',
          description: "My initial undergraduate research, completed during the pandemic-related lockdowns.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pyridine-dft/";
            },},{id: "projects-research-summary",
          title: 'Research summary',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/summary/";
            },},{id: "projects-u-psd-trepr",
          title: 'U-PSD TREPR',
          description: "A multifaceted research program: from advanced instrumentation to mechanistic studies.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/trepr/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_jianqingqi.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%71%6A%71%31%38@%74%73%69%6E%67%68%75%61.%6F%72%67.%63%6E", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=2v5dnLMAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
