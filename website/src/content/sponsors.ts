import { ref } from 'vue'

interface Sponsor {
  src: string
  alt: string
  rank: 'platinum' | 'gold' | 'silver' | 'bronze'
  id?: string
}

const sponsorEntries: Sponsor[] = [
  {
    src: '/images/sponsors/volksbank.svg',
    alt: 'Volksbank',
    rank: 'platinum',
    id: 'volksbank'
  },
  {
    src: '/images/sponsors/alpitronic.svg',
    alt: 'Alpitronic',
    rank: 'platinum',
    id: 'alpitronic'
  },
  {
    src: '/images/sponsors/hgv.svg',
    alt: 'HGV',
    rank: 'silver',
    id: 'hgv'
  },
  {
    src: '/images/sponsors/gravitate.svg',
    alt: 'Gravitate',
    rank: 'silver',
    id: 'gravitate'
  },
  {
    src: '/images/sponsors/wurth.svg',
    alt: 'Würth Italia',
    rank: 'silver',
    id: 'wurth'
  }
]

// Repeated for the scrolling reel effect
const sponsors = ref<Sponsor[]>([
  ...sponsorEntries,
  ...sponsorEntries,
  ...sponsorEntries,
  ...sponsorEntries
])

export default sponsors
export type { Sponsor }
