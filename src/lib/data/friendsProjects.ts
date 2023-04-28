import type { Project } from './projects'

type FriendProject = Project & {
  author: string,
  authorLink: string,
}

export default [
  {
    name: 'Crab.Fit',
    description: 'Find a time to meet with friends',
    imageID: 'd84213f9-0f86-4fdb-dbd4-a6104d779600',
    link: 'https://crab.fit',
    author: 'Benji Grant',
    authorLink: '',
    dark: true,
  },
  {
    name: 'Elementary',
    description: 'Experiment with 1D elementary automata',
    imageID: 'c3f83532-39da-47ca-8721-cebce448bf00',
    link: 'https://elementary.tdib.xyz',
    author: 'Thomas Dib',
    authorLink: '',
    dark: true,
  },
  {
    name: 'Beyond the Lens',
    description: 'Explore a strange environment and capture surreal photos',
    imageID: 'ef464973-0907-4fa8-22f3-2b0b2d6fa800',
    link: 'https://benkoder.itch.io/beyondthelens',
    author: 'Ben Koder',
    authorLink: '',
    dark: true,
  },
] as readonly FriendProject[]
