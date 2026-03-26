import { ref } from 'vue'

interface Sponsor {
  src: string
  alt: string
  rank: 'platinum' | 'gold' | 'silver' | 'bronze',
  id?: string
}

const sponsors = ref<Sponsor[]>([
  {
    src: '/images/sponsors/volksbank.svg',
    alt: 'Volksbank',
    rank: 'platinum',
    id: 'volksbank'
  },
  {
    src: '/images/sponsors/innova.svg',
    alt: 'Innova',
    rank: 'gold',
    id: 'innova'
  },
  {
    src: '/images/sponsors/gravitate.svg',
    alt: 'Gravitate',
    rank: 'gold',
    id: 'gravitate'
  },
  {
    src: '/images/sponsors/alpitronic.svg',
    alt: 'Alpitronic',
    rank: 'gold',
    id: 'alpitronic'
  },
  {
    src: '/images/sponsors/hgv.svg',
    alt: 'HGV',
    rank: 'silver',
    id: 'hgv'
  },
  {
    src: '/images/sponsors/wurth.svg',
    alt: 'wuerth italia',
    rank: 'bronze',
    id: 'wurth'
  },
  {
    src: '/images/sponsors/longo.svg',
    alt: 'longo',
    rank: 'bronze',
    id: 'longo'
  },
  {
    src: '/images/sponsors/volksbank.svg',
    alt: 'Volksbank',
    rank: 'platinum',
    id: 'volksbank'
  },
  {
    src: '/images/sponsors/innova.svg',
    alt: 'Innova',
    rank: 'gold',
    id: 'innova'
  },
  {
    src: '/images/sponsors/gravitate.svg',
    alt: 'Gravitate',
    rank: 'gold',
    id: 'gravitate'
  },
  {
    src: '/images/sponsors/alpitronic.svg',
    alt: 'Alpitronic',
    rank: 'gold',
    id: 'alpitronic'
  },
  {
    src: '/images/sponsors/hgv.svg',
    alt: 'HGV',
    rank: 'silver',
    id: 'hgv'
  },
  {
    src: '/images/sponsors/wurth.svg',
    alt: 'wuerth italia',
    rank: 'bronze',
    id: 'wurth'
  },
  {
    src: '/images/sponsors/longo.svg',
    alt: 'longo',
    rank: 'bronze',
    id: 'longo'
  },
  {
    src: '/images/sponsors/volksbank.svg',
    alt: 'Volksbank',
    rank: 'platinum',
    id: 'volksbank'
  },
  {
    src: '/images/sponsors/innova.svg',
    alt: 'Innova',
    rank: 'gold',
    id: 'innova'
  },
  {
    src: '/images/sponsors/gravitate.svg',
    alt: 'Gravitate',
    rank: 'gold',
    id: 'gravitate'
  },
  {
    src: '/images/sponsors/alpitronic.svg',
    alt: 'Alpitronic',
    rank: 'gold',
    id: 'alpitronic'
  },
  {
    src: '/images/sponsors/hgv.svg',
    alt: 'HGV',
    rank: 'silver',
    id: 'hgv'
  },
  {
    src: '/images/sponsors/wurth.svg',
    alt: 'wuerth italia',
    rank: 'bronze',
    id: 'wurth'
  },
  {
    src: '/images/sponsors/longo.svg',
    alt: 'longo',
    rank: 'bronze',
    id: 'longo'
  },
  {
    src: '/images/sponsors/volksbank.svg',
    alt: 'Volksbank',
    rank: 'platinum',
    id: 'volksbank'
  },
  {
    src: '/images/sponsors/innova.svg',
    alt: 'Innova',
    rank: 'gold',
    id: 'innova'
  },
  {
    src: '/images/sponsors/gravitate.svg',
    alt: 'Gravitate',
    rank: 'gold',
    id: 'gravitate'
  },
  {
    src: '/images/sponsors/alpitronic.svg',
    alt: 'Alpitronic',
    rank: 'gold',
    id: 'alpitronic'
  },
  {
    src: '/images/sponsors/hgv.svg',
    alt: 'HGV',
    rank: 'silver',
    id: 'hgv'
  },
  {
    src: '/images/sponsors/wurth.svg',
    alt: 'wuerth italia',
    rank: 'bronze',
    id: 'wurth'
  },
  {
    src: '/images/sponsors/longo.svg',
    alt: 'longo',
    rank: 'bronze',
    id: 'longo'
  }
])

export default sponsors
export type { Sponsor }
