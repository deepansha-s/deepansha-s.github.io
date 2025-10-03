// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/al-folio/";
    },
  },{id: "nav-research",
          title: "research",
          description: "research experiences.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/research/";
          },
        },{id: "nav-publications-amp-preprints",
          title: "publications &amp; preprints",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/publications-preprints/";
          },
        },{id: "nav-industry",
          title: "industry",
          description: "industry experiences.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/industry/";
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
