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
            main: 'Pourquoi le développement ?'
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
        subNavTitle: 'Caves & Lizards',
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
                main: 'Caves & Lizards',
                link: 'https://github.com/LoanR/caves-and-lizards'
              },
              component: 'caves-card-component'
            },
            startDisplay: 'projet perso',
            endDisplay: '',
            showDuration: true,
            start: '',
            end: '',
            bgPath: 'static/backgrounds/caves_bg.gif',
            iconPath: 'static/thumbnails/dd_pic.png'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Ruby only'
            },
            component: 'caves-board-stack-component'
          },
          {
            title: {
              tag: 'h2',
              main: 'Work in progress'
            },
            component: 'caves-board-work-component'
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
            bgPath: 'https://media.giphy.com/media/lJ84BHwqpHtVHXHBNm/source.gif',
            iconPath: 'static/thumbnails/music_pic.png'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Titres'
            },
            component: 'compose-board-setlist-component'
          }
        ]
      },
      {
        subNavIconPath: 'static/thumbnails/listen_pic.png',
        subNavTitle: 'écouter',
        cardSelectionTitle: 'Quelques albums marquants',
        cards: [
          {
            primaryColor: '#A44F0B',
            secondaryColor: '#D18B2D',
            lightSecondaryColor: '#9D0313',
            selectionName: 'Drukqs',
            selectionDetail: 'Aphex Twin',
            section: {
              title: {
                tag: 'h1',
                main: 'Drukqs',
                precision: 'Aphex Twin'
              },
              component: 'lux-card-component'
            },
            bgPath: 'https://img.discogs.com/QlbHzbOQEfwOK1Qd365juPKnnkU=/600x460/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-45-1410430154-1640.jpeg.jpg',
            iconPath: 'https://img.discogs.com/KIu79V0MgB9U58EZXLURzbRwYag=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13965-1249315114.jpeg.jpg'
          },
          {
            primaryColor: '#686868',
            secondaryColor: '#3f3f3f',
            lightSecondaryColor: '#a3a3a3',
            selectionName: 'Dice Game',
            selectionDetail: 'Apollo Brown',
            section: {
              title: {
                tag: 'h1',
                main: 'Dice Game',
                precision: 'Apollo Brown - Guilty Simpson'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/Nu5AA5Z_cEGAaXbeBz9DX-HTQXU=/600x354/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-1461629-1275150861.jpeg.jpg',
            iconPath: 'https://img.discogs.com/qr2wILj28jsN3wtk5ssAp7Fb-sg=/fit-in/600x525/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4132140-1538764708-8122.jpeg.jpg'
          },
          {
            primaryColor: '#675A68',
            secondaryColor: '#697878',
            lightSecondaryColor: '#796A6F',
            selectionName: 'Reflektor',
            selectionDetail: 'Arcade Fire',
            section: {
              title: {
                tag: 'h1',
                main: 'Reflektor',
                precision: 'Arcade Fire'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/3XKd4vkFVPcH6aOR7PPiiFqjPEs=/600x483/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-281232-1283691526.jpeg.jpg',
            iconPath: 'https://img.discogs.com/7yOEc6DNzm5PxB_yr90RhpNWBWg=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5034317-1382780009-9021.jpeg.jpg'
          },
          {
            primaryColor: '#FD413B',
            secondaryColor: '#2A3F20',
            lightSecondaryColor: '#8A976B',
            selectionName: 'Deep in the Iris',
            selectionDetail: 'Braids',
            section: {
              title: {
                tag: 'h1',
                main: 'Deep in the Iris',
                precision: 'Braids'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/bAMZCGqGEfb6BwSj597OcvAok7k=/600x399/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-1678992-1299793108.jpeg.jpg',
            iconPath: 'https://img.discogs.com/zAmjIonO-WkiJmZRaF2RqSj2Erk=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6967404-1430604535-6468.jpeg.jpg'
          },
          {
            primaryColor: '#844805',
            secondaryColor: '#2B331A',
            lightSecondaryColor: '#755C37',
            selectionName: 'Spoken Dub Manifesto',
            selectionDetail: 'Brain Damage',
            section: {
              title: {
                tag: 'h1',
                main: 'Spoken Dub Manifesto',
                precision: 'Brain Damage'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/VgKEt1Cpzxew5LKbg9x2sR_U_e0=/500x252/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-177244-1375295374-9722.jpeg.jpg',
            iconPath: 'https://img.discogs.com/ONPvwiy-mQ4KDTi-nwpAHMOycGs=/fit-in/600x535/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1072555-1206061014.jpeg.jpg'
          },
          {
            primaryColor: '#54454A',
            secondaryColor: '#6D6364',
            lightSecondaryColor: '#A39CA3',
            selectionName: 'Untrue',
            selectionDetail: 'Burial',
            section: {
              title: {
                tag: 'h1',
                main: 'Untrue',
                precision: 'Burial'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/QIiqqQHC-iGSqx-AkE3PCinwbDo=/401x254/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-306157-1425782743-3309.jpeg.jpg',
            iconPath: 'https://img.discogs.com/roSPsEQaatMKtO5yt3Z3mwWyzkA=/fit-in/597x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1125096-1195520889.jpeg.jpg'
          },
          {
            primaryColor: '#312B2F',
            secondaryColor: '#63979D',
            lightSecondaryColor: '#A5BF88',
            selectionName: 'The Groove Sessions, Vol. 2',
            selectionDetail: 'Chinese Man',
            section: {
              title: {
                tag: 'h1',
                main: 'The Groove Sessions, Vol. 2',
                precision: 'Chinese Man'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/38fKbJj4f5t1Jd9_Ab8DFP7-JHQ=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-976494-1339092866-2262.jpeg.jpg',
            iconPath: 'https://img.discogs.com/RRl5bA8BlgMJ2EoqBvTFdV_7-C8=/fit-in/600x537/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1767795-1415208237-7516.jpeg.jpg'
          },
          {
            primaryColor: '#889962',
            secondaryColor: '#836A41',
            lightSecondaryColor: '#47604B',
            selectionName: 'Saturday Night Wrist',
            selectionDetail: 'Deftones',
            section: {
              title: {
                tag: 'h1',
                main: 'Saturday Night Wrist',
                precision: 'Deftones'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/FKH6FqCjLdgbXxf4McSlTIaTFUU=/600x433/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-12210-1547150988-9482.jpeg.jpg',
            iconPath: 'https://img.discogs.com/AnRHyuYR3DPmPvy1RS7YTbzsY84=/fit-in/600x588/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-876776-1365161833-3466.jpeg.jpg'
          },
          {
            primaryColor: '#531314',
            secondaryColor: '#7D7D7D',
            lightSecondaryColor: '#B2323B',
            selectionName: 'Spirit',
            selectionDetail: 'Depeche Mode',
            section: {
              title: {
                tag: 'h1',
                main: 'Spirit',
                precision: 'Depeche Mode'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/Ty3iIC501DtD5KQ1yxEA6G2v9XM=/568x452/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-2725-1501172137-7743.jpeg.jpg',
            iconPath: 'https://img.discogs.com/_EeqUpcHq8zD8dMOr3pnQFoPr3A=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9979164-1499594391-5635.jpeg.jpg'
          },
          {
            primaryColor: '#615D5C',
            secondaryColor: '#736F6E',
            lightSecondaryColor: '#736F6E',
            selectionName: 'The Back Room',
            selectionDetail: 'Editors',
            section: {
              title: {
                tag: 'h1',
                main: 'The Back Room',
                precision: 'Editors'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/Cj9YPZOD-VncemUxnIFSisQq9Zo=/470x374/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-332911-1360238105-7216.jpeg.jpg',
            iconPath: 'https://img.discogs.com/U1Wfs2EEMztpQfCIfLSZvxCYp6M=/fit-in/500x462/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3479039-1332005452.jpeg.jpg'
          },
          {
            primaryColor: '#826E66',
            secondaryColor: '#97BAB6',
            lightSecondaryColor: '#97BAB6',
            selectionName: 'LUX',
            selectionDetail: 'Ez3kiel',
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
            primaryColor: '#F28A20',
            secondaryColor: '#3BB9D1',
            lightSecondaryColor: '#82C78B',
            selectionName: 'Some Say I So I Say Light',
            selectionDetail: 'Ghostpoet',
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
          },
          {
            primaryColor: '#3C3C5E',
            secondaryColor: '#3F4A69',
            lightSecondaryColor: '#5F6F94',
            selectionName: 'Hebron Gate',
            selectionDetail: 'Groundation',
            section: {
              title: {
                tag: 'h1',
                main: 'Hebron Gate',
                precision: 'Groundation'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/E2M8xImH_31Iu_ofySJgPgLLaIY=/500x295/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-428448-1137725437.jpeg.jpg',
            iconPath: 'https://img.discogs.com/F4sjouB-DuXeT1-g2ZIQq2OqLIo=/fit-in/550x496/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1602124-1354975133-5694.jpeg.jpg'
          },
          {
            primaryColor: '#9F030A',
            secondaryColor: '#9B6D02',
            lightSecondaryColor: '#825204',
            selectionName: 'Bass Température',
            selectionDetail: 'High Tone',
            section: {
              title: {
                tag: 'h1',
                main: 'Bass Température',
                precision: 'High Tone'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/dn1oZ-ltR9IzKjh1s5Bq0cZBmKk=/576x380/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-106717-1142617677.jpeg.jpg',
            iconPath: 'https://img.discogs.com/PGMCrU2HCWQXW-Gs7vG5LTlL354=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7318056-1438763176-3610.jpeg.jpg'
          },
          {
            primaryColor: '#40427D',
            secondaryColor: '#D0894E',
            lightSecondaryColor: '#923C71',
            selectionName: 'Stellar Rain',
            selectionDetail: 'Hilight Tribe',
            section: {
              title: {
                tag: 'h1',
                main: 'Stellar Rain',
                precision: 'Hilight Tribe'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/63oYDbD-BKKZQ6lw2yE9MQXFy88=/600x241/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-51792-1235270612.jpeg.jpg',
            iconPath: 'https://img.discogs.com/SJ23yVvmX4hxl_wUOIEoTI_Qh_0=/fit-in/600x539/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2342499-1462543047-5925.jpeg.jpg'
          },
          {
            primaryColor: '#940D1C',
            secondaryColor: '#B40E24',
            lightSecondaryColor: '#B40E24',
            selectionName: 'Turn on the Bright Lights',
            selectionDetail: 'Interpol',
            section: {
              title: {
                tag: 'h1',
                main: 'Turn on the Bright Lights',
                precision: 'Interpol'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/vn1Ek9pH2YqVNrh5LA_eLqkMerk=/600x400/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-71725-1445009082-8769.jpeg.jpg',
            iconPath: 'https://img.discogs.com/X0eY7YB4lFqJmZtbPSE8QMHLDVQ=/fit-in/400x400/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1641219-1367076650-9213.png.jpg'
          },
          {
            primaryColor: '#B47B3B',
            secondaryColor: '#817D50',
            lightSecondaryColor: '#25200C',
            selectionName: 'Repercussions',
            selectionDetail: 'Kaly Live Dub',
            section: {
              title: {
                tag: 'h1',
                main: 'Repercussions',
                precision: 'Kaly Live Dub'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/fYzz0KI8XTKdIyD73_Q65kRrFrs=/600x362/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-144368-1198626269.jpeg.jpg',
            iconPath: 'https://img.discogs.com/uW9fiScnhJiuMsFoAxpRfCIjK7o=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-583135-1379572129-5351.jpeg.jpg'
          },
          {
            primaryColor: '#917A55',
            secondaryColor: '#C66641',
            lightSecondaryColor: '#ECAB63',
            selectionName: 'Follow the Leader',
            selectionDetail: 'Korn',
            section: {
              title: {
                tag: 'h1',
                main: 'Follow the Leader',
                precision: 'Korn'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/GlL8gFbnP3EoZfzBPec-5ctLrZk=/500x329/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-18837-1122368173.jpg.jpg',
            iconPath: 'https://img.discogs.com/5R7nKFqGSllhO1bECNQeCEcpO9o=/fit-in/501x496/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-655109-1152826458.jpeg.jpg'
          },
          {
            primaryColor: '#838383',
            secondaryColor: '#021DA6',
            lightSecondaryColor: '#181818',
            selectionName: 'Ruinism',
            selectionDetail: 'Lapalux',
            section: {
              title: {
                tag: 'h1',
                main: 'Ruinism',
                precision: 'Lapalux'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/lFNpKc7EaYbR0adX9lzmkPqzfvM=/600x399/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-2198906-1426590905-9454.jpeg.jpg',
            iconPath: 'https://img.discogs.com/cvvmSJOBkHOtX8KVTsp6GOZ7C5o=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10802500-1504554111-6716.jpeg.jpg'
          },
          {
            primaryColor: '#B46467',
            secondaryColor: '#B49775',
            lightSecondaryColor: '#D6B689',
            selectionName: 'Stillness in Wonderland',
            selectionDetail: 'Little Simz',
            section: {
              title: {
                tag: 'h1',
                main: 'Stillness in Wonderland',
                precision: 'Little Simz'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/AJZniEfYVKQPmCVGiFVccfyE28k=/500x500/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-3887166-1409644092-7842.jpeg.jpg',
            iconPath: 'https://img.discogs.com/VJpLtpksmhepDr0NUKhJ8BSaBGk=/fit-in/600x595/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11150989-1513438817-1365.jpeg.jpg'
          },
          {
            primaryColor: '#FE8907',
            secondaryColor: '#3E3F5E',
            lightSecondaryColor: '#867D98',
            selectionName: 'Heligoland',
            selectionDetail: 'Massive Attack',
            section: {
              title: {
                tag: 'h1',
                main: 'Heligoland',
                precision: 'Massive Attack'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/5Hu6bYr9QcR1Y3OKSN0qcanyzVs=/600x397/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-4480-1454673366-6541.jpeg.jpg',
            iconPath: 'https://img.discogs.com/78u32XCir-LCd9YKwaZC4ksRznI=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2124924-1265382089.jpeg.jpg'
          },
          {
            primaryColor: '#2777B0',
            secondaryColor: '#025877',
            lightSecondaryColor: '#C09230',
            selectionName: 'The English Riviera',
            selectionDetail: 'Metronomy',
            section: {
              title: {
                tag: 'h1',
                main: 'The English Riviera',
                precision: 'Metronomy'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/tzb_VtPaWAZm-F5WjdLxk-OwzQs=/600x359/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-114350-1391511117-5002.jpeg.jpg',
            iconPath: 'https://img.discogs.com/lgHg-5fnK9eLYAo3kr07RkLh-2U=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2820533-1302523124.jpeg.jpg'
          },
          {
            primaryColor: '#652C21',
            secondaryColor: '#902923',
            lightSecondaryColor: '#303845',
            selectionName: 'Mr Beast',
            selectionDetail: 'Mogwai',
            section: {
              title: {
                tag: 'h1',
                main: 'Mr Beast',
                precision: 'Mogwai'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/rsNq0OwPaENiaCL0GTFIXPuMIDY=/594x600/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-2813-1389686224-8597.jpeg.jpg',
            iconPath: 'https://img.discogs.com/qbDwBIz4Z_Tx3ENFqGOp5f7EPu4=/fit-in/590x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-675530-1405586938-7115.jpeg.jpg'
          },
          {
            primaryColor: '#4C81A8',
            secondaryColor: '#2B3C82',
            lightSecondaryColor: '#3F4659',
            selectionName: 'Nevermind',
            selectionDetail: 'Nirvana',
            section: {
              title: {
                tag: 'h1',
                main: 'Nevermind',
                precision: 'Nirvana'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/19z28fIIhGmkhdxaGA5XApEzbFg=/600x609/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-125246-1501285200-3058.jpeg.jpg',
            iconPath: 'https://img.discogs.com/UoDAnoi3Cbp_JvOrz4CRgZBBSfg=/fit-in/600x592/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-367084-1263095553.jpeg.jpg'
          },
          {
            primaryColor: '#C7B167',
            secondaryColor: '#4F5436',
            lightSecondaryColor: '#B14523',
            selectionName: 'Cube',
            selectionDetail: "Le Peuple de l'Herbe",
            section: {
              title: {
                tag: 'h1',
                main: 'Cube',
                precision: "Le Peuple de l'Herbe"
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/5cRbKkQyqBOFRek7D4eXwuiEpG0=/350x503/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-19259-1142706959.jpeg.jpg',
            iconPath: 'https://img.discogs.com/vR4m-r08oVoxmK_9NzxCvGBrIDA=/fit-in/600x598/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-769010-1477953253-4878.jpeg.jpg'
          },
          {
            primaryColor: '#555D95',
            secondaryColor: '#1F213F',
            lightSecondaryColor: '#616EA2',
            selectionName: 'Dummy',
            selectionDetail: 'Portishead',
            section: {
              title: {
                tag: 'h1',
                main: 'Dummy',
                precision: 'Portishead'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/IGefZ50zVVdQE073dASqDY6qvY4=/481x348/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-2774-1209487724.jpeg.jpg',
            iconPath: 'https://img.discogs.com/nHomueQAUhexIpqG-zK2BHnXwso=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8773388-1500030939-2696.jpeg.jpg'
          },
          {
            primaryColor: '#b9a704',
            secondaryColor: '#5B2420',
            lightSecondaryColor: '#EF6C25',
            selectionName: 'Lullabies to Paralyze',
            selectionDetail: 'Queens of the Stone Age',
            section: {
              title: {
                tag: 'h1',
                main: 'Lullabies to Paralyze',
                precision: 'Queens of the Stone Age'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/Snn9sKC4FAZBy9wK_PB--JYdP8c=/600x380/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-56168-1500637484-8220.jpeg.jpg',
            iconPath: 'https://img.discogs.com/rrDbV0FDgW08JYEjdYeovKx0ts8=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-611377-1523510143-1010.jpeg.jpg'
          },
          {
            primaryColor: '#911B0B',
            secondaryColor: '#703113',
            lightSecondaryColor: '#5577AA',
            selectionName: 'Kid A',
            selectionDetail: 'Radiohead',
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
            primaryColor: '#8B4359',
            secondaryColor: '#AD8BE2',
            lightSecondaryColor: '#B02B4B',
            selectionName: 'Woodstock Session, Vol. 4',
            selectionDetail: 'Team Sleep',
            section: {
              title: {
                tag: 'h1',
                main: 'Woodstock Session, Vol. 4',
                precision: 'Team Sleep'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/kjcF7RYYnP--mwKWPh-WmGOFMpA=/576x353/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-108900-1118252663.jpg.jpg',
            iconPath: 'https://img.discogs.com/MO_sos8OMnIXmAi_XYaXMtLXPsg=/fit-in/525x536/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7241369-1436974990-4821.jpeg.jpg'
          },
          {
            primaryColor: '#32D920',
            secondaryColor: '#45423D',
            lightSecondaryColor: '#989590',
            selectionName: "Tomorrow's Modern Boxes",
            selectionDetail: 'Thom Yorke',
            section: {
              title: {
                tag: 'h1',
                main: "Tomorrow's Modern Boxes",
                precision: 'Thom Yorke'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/8bz8ly87Wk7oHK216Le_ESfZopk=/340x483/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-4854-1361188453-5929.jpeg.jpg',
            iconPath: 'https://img.discogs.com/i3zLxE78N22wh0b44TpiSnVN_pY=/fit-in/600x598/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6127488-1411745835-8877.jpeg.jpg'
          },
          {
            primaryColor: '#92EE5E',
            secondaryColor: '#C5491A',
            lightSecondaryColor: '#F9982E',
            selectionName: 'Pawn Shop',
            selectionDetail: 'Zenzile',
            section: {
              title: {
                tag: 'h1',
                main: 'Pawn Shop',
                precision: 'Zenzile'
              },
              component: 'some-card-component'
            },
            bgPath: 'https://img.discogs.com/ph0mEJPoAIAGxfRNniEPk4cX7JQ=/600x698/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-104414-1421688013-2099.jpeg.jpg',
            iconPath: 'https://img.discogs.com/1cOdAGwRm8pXdL6szuVReJih50U=/fit-in/500x446/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3385474-1362579770-2421.jpeg.jpg'
          }
        ],
        boardSections: [
          {
            title: {
              tag: 'h2',
              main: 'Playlists'
            },
            component: 'listen-board-playlists-component'
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
            primaryColor: '#F57038',
            secondaryColor: '#8AC8C5',
            lightSecondaryColor: '#E35F32',
            selectionName: 'Bladerunner 2049',
            section: {
              title: {
                tag: 'h1',
                main: 'Bladerunner 2049',
                precision: 'Denis Villeneuve'
              },
              component: 'blade-card-component'
            },
            bgPath: 'https://media.giphy.com/media/DElptuLLgCvZe/giphy.gif',
            iconPath: 'http://fr.web.img5.acsta.net/c_215_290/pictures/17/08/24/15/18/597734.jpg'
          },
          {
            primaryColor: '#0A69B1',
            secondaryColor: '#8FBE76',
            lightSecondaryColor: '#A9855F',
            selectionName: 'Le Château dans le Ciel',
            section: {
              title: {
                tag: 'h1',
                main: 'Le Château dans le Ciel',
                precision: 'Hayao Miyazaki'
              },
              component: 'castle-card-component'
            },
            bgPath: 'https://media.giphy.com/media/xULW8yNXpXJo0u4iLm/giphy.gif',
            iconPath: 'https://cdn1.booknode.com/book_cover/921/le-chateau-dans-le-ciel-921384-264-432.jpg'
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
