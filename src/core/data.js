export const HOME_DATA = {
  path: '/',
  displayTitle: 'Loan ROBERT',
  pageParts: [
    {
      subNavIconPath: '',
      subNavTitle: '',
      cardSelectionTitle: '',
      cards: [
        {
          primaryColor: '',
          secondaryColor: '',
          lightSecondaryColor: '',
          selectionName: '',
          section: {
            title: {
              tag: 'h1',
              main: 'Developpeur web'
            },
            component: 'profile-card-component'
          },
          bgPath: 'https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif',
          iconPath: 'static/thumbnails/lr_pic.jpg'
        }
      ],
      boardSections: [
        {
          title: {
            tag: 'h2',
            main: 'Titre'
          },
          component: 'profile-board-1-component'
        },
        {
          title: {
            tag: 'h2',
            main: 'Titre'
          },
          component: ''
        }
      ]
    }
  ]
}

export const PAGES_DATA = [
  {
    path: '/experience',
    displayTitle: 'expérience',
    pageParts: [
      {
        subNavIconPath: 'static/thumbnails/aw_pic.jpg',
        subNavTitle: 'Actiwine',
        cardSelectionTitle: '',
        cards: [
          {
            primaryColor: '#7d2f59',
            secondaryColor: '#b4a123',
            lightSecondaryColor: '#e2d257',
            selectionName: '',
            section: {
              title: {
                tag: 'h1',
                main: 'Developpeur Vue.js | django',
                precision: 'Actiwine',
                link: 'https://www.actiwine.com/'
              },
              component: 'actiwine-card-component'
            },
            startDisplay: 'octobre 2016',
            endDisplay: "aujourd'hui",
            showDuration: true,
            start: '2016-10',
            end: 'today',
            bgPath: 'static/backgrounds/actiwine_bg.gif',
            iconPath: 'static/thumbnails/aw_pic.jpg'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Environnement technique'
            },
            component: 'actiwine-board-environment-component'
          },
          {
            title: {
              tag: 'h2',
              main: 'Quelques réalisations'
            },
            component: 'actiwine-board-realisations-component'
          }
        ]
      },
      {
        subNavIconPath: 'static/thumbnails/tyti_pic.png',
        subNavTitle: 'Typetime',
        cardSelectionTitle: '',
        cards: [
          {
            primaryColor: '#f7b633',
            secondaryColor: '#1d45ac',
            lightSecondaryColor: '#6376ac',
            selectionName: '',
            section: {
              title: {
                tag: 'h1',
                main: 'Typetime',
                link: 'https://loanr.github.io/typetime/'
              },
              component: 'typetime-card-component'
            },
            startDisplay: 'projet perso',
            endDisplay: '',
            showDuration: true,
            start: '',
            end: '',
            bgPath: 'static/backgrounds/typetime_bg.gif',
            iconPath: 'static/thumbnails/tyti_pic.png'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Choix techniques'
            },
            component: 'typetime-board-stack-component'
          },
          {
            title: {
              tag: 'h2',
              main: 'Fonctionnement'
            },
            component: 'typetime-board-operation-component'
          },
          {
            title: {
              tag: 'h2',
              main: 'Todo'
            },
            component: 'typetime-board-todo-component'
          }
        ]
      },
      {
        subNavIconPath: 'static/thumbnails/dd_pic.png',
        subNavTitle: 'Doors & Dragons',
        cardSelectionTitle: '',
        cards: [
          {
            primaryColor: '#666',
            secondaryColor: '#990000',
            lightSecondaryColor: '#00b401',
            selectionName: '',
            section: {
              title: {
                tag: 'h1',
                main: 'Doors & Dragons'
              },
              component: 'caves-card-component'
            },
            startDisplay: 'projet perso',
            endDisplay: '',
            showDuration: true,
            start: '',
            end: '',
            bgPath: '',
            iconPath: 'static/thumbnails/dd_pic.png'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          },
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          }
        ]
      },
      {
        subNavIconPath: 'static/thumbnails/si_pic.png',
        subNavTitle: 'solidarité int.',
        cardSelectionTitle: 'Quelques missions',
        cards: [
          {
            primaryColor: '#E98535',
            secondaryColor: '#50AF78',
            lightSecondaryColor: '#A0ADD0',
            selectionName: "Cool'eurs du Monde",
            section: {
              title: {
                tag: 'h1',
                main: 'Chargé de projet événementiel',
                precision: "Cool'eurs du Monde"
              },
              component: 'cdm-card-component'
            },
            startDisplay: 'août 2013',
            endDisplay: 'novembre 2013',
            showDuration: true,
            start: '2013-08',
            end: '2013-11',
            bgPath: '',
            iconPath: 'static/thumbnails/cm_pic.png'
          },
          {
            primaryColor: '#C80077',
            secondaryColor: '#F8AB00',
            lightSecondaryColor: '#FFE451',
            selectionName: 'RADSI',
            section: {
              title: {
                tag: 'h1',
                main: 'Chargé de projet événementiel',
                precision: 'RADSI'
              },
              component: 'radsi-card-component'
            },
            startDisplay: 'janvier 2013',
            endDisplay: 'juillet 2013',
            showDuration: true,
            start: '2013-01',
            end: '2013-07',
            bgPath: '',
            iconPath: 'static/thumbnails/radsi_pic.png'
          },
          {
            primaryColor: '#EB6A34',
            secondaryColor: '#658633',
            lightSecondaryColor: '#658633',
            selectionName: 'Projet SEM',
            section: {
              title: {
                tag: 'h1',
                main: 'Bénévolat en chantier international',
                precision: 'Projet SEM'
              },
              component: 'sem-card-component'
            },
            startDisplay: 'mars 2013',
            endDisplay: 'octobre 2013',
            showDuration: true,
            start: '2013-03',
            end: '2013-10',
            bgPath: '',
            iconPath: 'static/thumbnails/ps_pic.png'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          },
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          }
        ]
      },
      {
        subNavIconPath: 'static/thumbnails/ed_pic.png',
        subNavTitle: 'éducation populaire',
        cardSelectionTitle: 'Différentes expériences',
        cards: [
          {
            primaryColor: '#1462AD',
            secondaryColor: '#0099CC',
            lightSecondaryColor: '#F0027F',
            selectionName: 'Planète Sciences',
            section: {
              title: {
                tag: 'h1',
                main: 'Médiateur en environnement',
                precision: 'Planète Sciences'
              },
              component: 'plasci-card-component'
            },
            startDisplay: 'mars 2012',
            endDisplay: 'août 2012',
            showDuration: true,
            start: '2012-03',
            end: '2012-08',
            bgPath: '',
            iconPath: 'static/thumbnails/plsc_pic.png'
          },
          {
            primaryColor: '#7A4B9C',
            secondaryColor: '#00BDF4',
            lightSecondaryColor: '#D8DF20',
            selectionName: 'Les Petits Débrouillards',
            section: {
              title: {
                tag: 'h1',
                main: 'Animateur scientifique',
                precision: 'Les Petits Débrouillards'
              },
              component: 'debs-card-component'
            },
            bgPath: '',
            iconPath: 'static/thumbnails/pdeb_pic.png'
          },
          {
            primaryColor: '#FB803F',
            secondaryColor: '#FB803F',
            lightSecondaryColor: '#FB803F',
            selectionName: 'Les Robins des Villes',
            section: {
              title: {
                tag: 'h1',
                main: 'Médiateur risque inondation',
                precision: 'Les Robins des Villes'
              },
              component: 'robins-card-component'
            },
            bgPath: '',
            iconPath: 'static/thumbnails/lrv_pic.png'
          },
          {
            primaryColor: '#05287D',
            secondaryColor: '#e68a3d',
            lightSecondaryColor: '#C34937',
            selectionName: 'Le Mondial des Cultures de Drummondville',
            section: {
              title: {
                tag: 'h1',
                main: 'Animateur scientifique',
                precision: 'Mondial des Cultures de Drummondville'
              },
              component: 'mond-card-component'
            },
            startDisplay: 'juillet 2009',
            endDisplay: '',
            showDuration: true,
            start: '2009-07',
            end: '2009-08',
            bgPath: '',
            iconPath: 'static/thumbnails/mc_pic.png'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          },
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          }
        ]
      }
    ]
  },
  {
    path: '/formation',
    displayTitle: 'formation',
    pageParts: [
      {
        subNavIconPath: 'static/thumbnails/cesi_pic.png',
        subNavTitle: 'CESI',
        cardSelectionTitle: '',
        cards: [
          {
            primaryColor: '#00A3B3',
            secondaryColor: '#aeb3bd',
            lightSecondaryColor: '#aeb3bd',
            selectionName: '',
            section: {
              title: {
                tag: 'h1',
                main: 'Web concepteur',
                precision: 'Cesi alternance'
              },
              component: 'cesi-card-component'
            },
            startDisplay: 'octobre 2016',
            endDisplay: 'janvier 2018',
            showDuration: false,
            start: '',
            end: '',
            bgPath: '',
            iconPath: 'static/thumbnails/cesi_pic.png'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          },
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          }
        ]
      },
      {
        subNavIconPath: 'static/thumbnails/wg_pic.png',
        subNavTitle: 'Le Wagon',
        cardSelectionTitle: '',
        cards: [
          {
            primaryColor: '#FD1015',
            secondaryColor: '#ff7479',
            lightSecondaryColor: '#ff7479',
            selectionName: '',
            section: {
              title: {
                tag: 'h1',
                main: 'Développeur web fullstack',
                precision: 'Le Wagon'
              },
              component: 'wagon-card-component'
            },
            startDisplay: 'juillet 2016',
            endDisplay: 'septembre 2016',
            showDuration: false,
            start: '',
            end: '',
            bgPath: '',
            iconPath: 'static/thumbnails/wg_pic.png'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          },
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          }
        ]
      },
      {
        subNavIconPath: 'static/thumbnails/fsamu_pic.png',
        subNavTitle: 'M2 méd. env.',
        cardSelectionTitle: '',
        cards: [
          {
            primaryColor: '#005BB1',
            secondaryColor: '#31CDF2',
            lightSecondaryColor: '#FFB637',
            selectionName: '',
            section: {
              title: {
                tag: 'h1',
                main: 'Master Médiation en environnement',
                precision: 'Université Aix-Marseille'
              },
              component: 'medenv-card-component'
            },
            startDisplay: 'septembre 2010',
            endDisplay: 'septembre 2012',
            showDuration: false,
            start: '',
            end: '',
            bgPath: '',
            iconPath: 'static/thumbnails/fsamu_pic.png'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          },
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          }
        ]
      },
      {
        subNavIconPath: 'static/thumbnails/amu_pic.png',
        subNavTitle: 'L3 BEE',
        cardSelectionTitle: '',
        cards: [
          {
            primaryColor: '#005BB1',
            secondaryColor: '#31CDF2',
            lightSecondaryColor: '#FFB637',
            selectionName: '',
            section: {
              title: {
                tag: 'h1',
                main: 'Licence biologie évolution evironnement',
                precision: 'Université Aix-Marseille'
              },
              component: 'lbio-card-component'
            },
            startDisplay: 'septembre 2009',
            endDisplay: 'septembre 2010',
            showDuration: false,
            start: '',
            end: '',
            bgPath: '',
            iconPath: 'static/thumbnails/amu_pic.png'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          },
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          }
        ]
      },
      {
        subNavIconPath: 'static/thumbnails/uo_pic.png',
        subNavTitle: 'astronomie astrophysique',
        cardSelectionTitle: '',
        cards: [
          {
            primaryColor: '#01A769',
            secondaryColor: '#3176B0',
            lightSecondaryColor: '#3176B0',
            selectionName: '',
            section: {
              title: {
                tag: 'h1',
                main: 'Formation de base astronomie & astrophysique',
                precision: "Université d'Orléans - CNED"
              },
              component: 'astro-card-component'
            },
            startDisplay: 'septembre 2009',
            endDisplay: 'juin 2010',
            showDuration: false,
            start: '',
            end: '',
            bgPath: '',
            iconPath: 'static/thumbnails/uo_pic.png'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          },
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          }
        ]
      },
      {
        subNavIconPath: 'static/thumbnails/un_pic.png',
        subNavTitle: 'DUT GB GE',
        cardSelectionTitle: '',
        cards: [
          {
            primaryColor: '#004683',
            secondaryColor: '#c0b21b',
            lightSecondaryColor: '#c0b21b',
            selectionName: '',
            section: {
              title: {
                tag: 'h1',
                main: "DUT Génie biologique, génie de l'environnement",
                precision: 'IUT de la Roche-sur-Yon'
              },
              component: 'gb-card-component'
            },
            startDisplay: 'septembre 2007',
            endDisplay: 'septembre 2009',
            showDuration: false,
            start: '',
            end: '',
            bgPath: '',
            iconPath: 'static/thumbnails/un_pic.png'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          },
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          }
        ]
      }
    ]
  },
  {
    path: '/hobbies',
    displayTitle: 'loisirs',
    pageParts: [
      {
        subNavIconPath: 'static/thumbnails/music_pic.png',
        subNavTitle: 'composer',
        cardSelectionTitle: '',
        cards: [
          {
            primaryColor: '',
            secondaryColor: '',
            lightSecondaryColor: '',
            selectionName: '',
            section: {
              title: {
                tag: 'h1',
                main: 'Composition musicale'
              },
              component: 'compose-card-component'
            },
            bgPath: '',
            iconPath: 'static/thumbnails/music_pic.png'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          },
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          }
        ]
      },
      {
        subNavIconPath: 'static/thumbnails/listen_pic.png',
        subNavTitle: 'écouter',
        cardSelectionTitle: 'Des albums marquants',
        cards: [
          {
            primaryColor: '#826E66',
            secondaryColor: '#97BAB6',
            lightSecondaryColor: '#97BAB6',
            selectionName: 'LUX (Ez3kiel)',
            section: {
              title: {
                tag: 'h1',
                main: 'LUX',
                precision: 'Ez3kiel'
              },
              component: 'lux-card-component'
            },
            bgPath: 'https://img.discogs.com/hLvgm7J6qvo8TUYMQvH274oXfbI=/600x353/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-140203-1415800442-4095.jpeg.jpg',
            iconPath: 'https://img.discogs.com/pU62yLqGpzDbKuyCb3HK90FeE8k=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6260212-1415012248-8601.jpeg.jpg'
          },
          {
            primaryColor: '#911B0B',
            secondaryColor: '#703113',
            lightSecondaryColor: '#5577AA',
            selectionName: 'Kid A (Radiohead)',
            section: {
              title: {
                tag: 'h1',
                main: 'Kid A',
                precision: 'Radiohead'
              },
              component: 'kida-card-component'
            },
            bgPath: 'https://img.discogs.com/omECGW3Dpn8yf8OT-_TXLsw-lq4=/600x400/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-3840-1462781416-2615.jpeg.jpg',
            iconPath: 'https://img.discogs.com/JTh2dRSnfa_dk2KYY5WCbR4ufy8=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-86729-1146733406.jpeg.jpg'
          },
          {
            primaryColor: '#F28A20',
            secondaryColor: '#3BB9D1',
            lightSecondaryColor: '#82C78B',
            selectionName: 'Some Say I So I Say Light (Ghostpoet)',
            section: {
              title: {
                tag: 'h1',
                main: 'Some Say I So I Say Light',
                precision: 'Ghostpoet'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/3wXdLvioHyMrRU7OyDo-ZoL1C5s=/600x450/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-1835598-1387715897-5247.jpeg.jpg',
            iconPath: 'https://img.discogs.com/Bu0VkUatXk0rvWEzJYDUXtF-Dfo=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5879034-1405233032-4477.jpeg.jpg'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          }
        ]
      },
      {
        subNavIconPath: 'static/thumbnails/book_pic.png',
        subNavTitle: 'lire',
        cardSelectionTitle: 'Quelques livres',
        cards: [
          {
            primaryColor: '',
            secondaryColor: '',
            lightSecondaryColor: '',
            selectionName: 'Flowers for Algernon',
            section: {
              title: {
                tag: 'h1',
                main: 'Flowers for Algernon',
                precision: 'Daniel Keyes'
              },
              component: 'flowers-card-component'
            },
            bgPath: '',
            iconPath: 'static/thumbnails/book_pic.png'
          },
          {
            primaryColor: '',
            secondaryColor: '',
            lightSecondaryColor: '',
            selectionName: 'Le Passage',
            section: {
              title: {
                tag: 'h1',
                main: 'Le Passage',
                precision: 'Justin Cronin'
              },
              component: 'passage-card-component'
            },
            bgPath: '',
            iconPath: 'static/thumbnails/book_pic.png'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          }
        ]
      },
      {
        subNavIconPath: 'static/thumbnails/ticket_pic.png',
        subNavTitle: 'voir',
        cardSelectionTitle: "Les films que j'apprécie",
        cards: [
          {
            primaryColor: '',
            secondaryColor: '',
            lightSecondaryColor: '',
            selectionName: 'Bladerunner 2049',
            section: {
              title: {
                tag: 'h1',
                main: 'Bladerunner 2049',
                precision: 'Denis Villeneuve'
              },
              component: 'blade-card-component'
            },
            bgPath: '',
            iconPath: 'static/thumbnails/ticket_pic.png'
          },
          {
            primaryColor: '',
            secondaryColor: '',
            lightSecondaryColor: '',
            selectionName: 'Le Château dans le Ciel',
            section: {
              title: {
                tag: 'h1',
                main: 'Le Château dans le Ciel',
                precision: 'Hayao Miyazaki'
              },
              component: 'castle-card-component'
            },
            bgPath: '',
            iconPath: 'static/thumbnails/ticket_pic.png'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          }
        ]
      },
      {
        subNavIconPath: 'static/thumbnails/sport_pic.png',
        subNavTitle: 'se dépenser',
        cardSelectionTitle: '',
        cards: [
          {
            primaryColor: '',
            secondaryColor: '',
            lightSecondaryColor: '',
            selectionName: '',
            section: {
              title: {
                tag: 'h1',
                main: 'Faire du sport parfois'
              },
              component: 'sport-card-component'
            },
            bgPath: '',
            iconPath: 'static/thumbnails/sport_pic.png'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Titre'
            },
            component: ''
          }
        ]
      }
    ]
  }
]
