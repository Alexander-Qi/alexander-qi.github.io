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
        
        description: "Participating in the 74th Lindau Nobel Laureate Meeting and visiting research universities across Germany.",
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
        
          title: "Outstanding Presentation Award at the 5th Beijing–Tianjin Organic Chemistry Symposium",
        
        description: "Awarded for an oral presentation at the regional organic chemistry symposium held at Nankai University.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/activities/2024/beijing-tianjin-symposium/";
          
        },
      },{id: "projects-visible-light-free-hydrogen-atom-generation",
          title: 'Visible-light free hydrogen atom generation',
          description: "Unraveling the excited-state photophysics and bond-cleavage dynamics behind mild, visible-light generation of free hydrogen atoms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/free-hydrogen-atom/";
            },},{id: "projects-metal-free-group-transfer-reaction",
          title: 'Metal-free group transfer reaction',
          description: "Exploring metal-free $S_N2$ group transfer through transition-state design.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/group-transfer/";
            },},{id: "projects-pyridinium-boron-photocatalysts",
          title: 'Pyridinium(boron) photocatalysts',
          description: "A modular fluorophore whose redox and excited-state properties can be tuned independently.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nbc/";
            },},{id: "projects-dft-study-of-pyridine-catalyzed-reactions",
          title: 'DFT study of pyridine-catalyzed reactions',
          description: "My initial undergraduate research, carried out during the COVID-19 lockdowns.",
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
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5042-6315", "_blank");
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
