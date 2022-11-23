import type { Project } from "types";

export const projects: Project[] = [
  {
    id: 5,
    title: `React Hckrnws`,
    image: `https://raw.githubusercontent.com/rifkiandriyanto/react-hckrnws/main/shot/react-hn.png`,
    blurHash: `L4ADc400P*Zi4Tu1y;Qo00pH#YXl`,
    link: 
    `https://github.com/rifkiandriyanto/react-hckrnws`,
    desc: `React Hckrnws is a Hacker News clone built with React typescript and SCSS.`,
    technologies: [`react`, `hackernews`, `typescript`, `scss`],
  },
  {
    id: 1,
    title: `React GraphQL Hasura Todo`,
    image: `https://raw.githubusercontent.com/rifkiandriyanto/react-hasura-todo/main/shot/graphql-todo.png`,
    blurHash: `L4ADc400P*Zi4Tu1y;Qo00pH#YXl`,
    link: `https://github.com/rifkiandriyanto/react-hasura-todo`,
    desc: `React apollo Hooks`,
    technologies: [`react`, `graphql`, `hasura`],
  },
  {
    id: 2,
    title: `Instagram clone with react hook and firebase`,
    link: `https://github.com/rifkiandriyanto/react-instaapp`,
    image: `https://raw.githubusercontent.com/rifkiandriyanto/react-instaapp/main/shot/instaapp.png`,
    blurHash: `L0Aer?tjH[tPyAayj[j[00ay%xkB`,
    desc: `Instaapp is an Instagram social media clone built with ReactJs hooks, contexts, and Firebase Cloud Firestore for the database. Features: login, register, like, comment`,
    technologies: [`react`, `hook`, `firebase`],
  },
  {
    id: 3,
    title: `Today's Cryptocurrency Prices using Next.js`,
    // image: souq,
    image: `https://raw.githubusercontent.com/rifkiandriyanto/nextjs-todays-coinmarket/main/shot/cryptoapp.png`,
    blurHash: `L1O^uE0679I00AGT?.H{00y7p2tK`,
    link: `https://github.com/rifkiandriyanto/nextjs-todays-coinmarket`,
    desc: `Build Today's Cryptocurrency Prices using Next.js`,
    technologies: [`nextjs`, `typescript`, `react-hook-form`, `react-query`],
  },
  {
    id: 4,
    title: `Neovim Settings`,
    // image: workof,
    image: `https://raw.githubusercontent.com/rifkiandriyanto/neovim-init/main/shots/start.png`,
    blurHash: `L2M5%%0000EN00I:-oIp00kC?^sl`,
    link: `https://github.com/rifkiandriyanto/neovim-init`,
    desc: `Lattice Wallet Mobile is a decentralize wallet application based on web3.dart and working on lattice blockchain. It supports multiple platforms Android/iOS.`,
    technologies: [`bash`, `vim`, `terminal`],
  },
];
