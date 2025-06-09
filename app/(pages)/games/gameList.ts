import { StaticImport } from 'next/dist/shared/lib/get-img-props'

import UNOImg from '../../../assest/GamesPage/UNO.png'
import MiniGolfMasterImg from '../../../assest/GamesPage/miniGolfMaster.png'
import MergestKindomImg from '../../../assest/GamesPage/mergestKingdom.png'
import SuperCityImg from '../../../assest/GamesPage/superCity.png'
import SolitaireFarmSeasonsImg from '../../../assest/GamesPage/solitaireFarmHarvestSeason.png'

import SudoKuImg from '../../../assest/GamesPage/sudoku.png'
import IdiomLittleScholarImg from '../../../assest/GamesPage/idiomLittleScholar.png'
import AngryBirdsImg from '../../../assest/GamesPage/angryBirds.png'
import VitaMahjong from '../../../assest/GamesPage/vitaMahjong.png'
import CastleCraftImg from '../../../assest/GamesPage/castleCraft.png'
import CandyRiddlesImg from '../../../assest/GamesPage/candyRiddles.png'
import PokerImg from '../../../assest/GamesPage/poker.png'
import CookingMamaImg from '../../../assest/GamesPage/cookingMama.png'

export type Games =   
  | { name: string; players: number; image: StaticImport; category?: never }
  | { name: string; category: string; image: StaticImport; players?: never };

export const PopularGames: Games[] = [
  {
    name: 'UNO',
    players: 73,
    image: UNOImg,
  },
  {
    name: 'Mini Golf Master',
    players: 158,
    image: MiniGolfMasterImg,
  },
  {
    name: 'Mergest Kingdom',
    players: 59,
    image: MergestKindomImg,
  },
  {
    name: 'SuperCity',
    players: 7.3,
    image: SuperCityImg,
  },
  {
    name: 'Solitaire Farm Seasons',
    players: 9.3,
    image: SolitaireFarmSeasonsImg,
  },
]

export const YourFavouritePick: Games[] = [
  {
    name: 'SudoKu',
    category: 'Puzzle',
    image: SudoKuImg,
  },
  {
    name: 'Idiom Little Scholar',
    category: 'Puzzle',
    image: IdiomLittleScholarImg,
  },
  {
    name: 'Angry Birds',
    category: 'Puzzle',
    image: AngryBirdsImg,
  },
  {
    name: 'Vita Mahjong',
    category: 'Puzzle',
    image: VitaMahjong,
  },
  {
    name: 'UNOImg',
    category: 'Puzzle',
    image: UNOImg,
  },
  {
    name: 'Mergest Kindom',
    category: 'Puzzle',
    image: MergestKindomImg,
  },
  {
    name: 'SuperCity',
    category: 'Builder',
    image: SuperCityImg,
  },
  {
    name: 'Castle Craft',
    category: 'Merge',
    image: CastleCraftImg,
  },
  {
    name: 'Candy Riddles',
    category: 'Puzzle',
    image: CandyRiddlesImg,
  },
  {
    name: 'Solitaire Farm Seasons',
    category: 'Puzzle',
    image: SolitaireFarmSeasonsImg,
  },
  {
    name: 'Mini Golf Master',
    category: 'Puzzle',
    image: MiniGolfMasterImg,
  },
  {
    name: 'Poker',
    category: 'Card',
    image: PokerImg,
  },
  {
    name: 'Cooking Mama',
    category: 'Merge',
    image: CookingMamaImg,
  },
]