import { StaticImport } from 'next/dist/shared/lib/get-img-props'

import Forest1Img from '../../../../assest/MainPage/stories/forest1.png'
import Forest2Img from '../../../../assest/MainPage/stories/forest2.png'
import SnowMountainImg from '../../../../assest/MainPage/stories/snowMountain.png'
import DesertImg from '../../../../assest/MainPage/stories/desert.png'
import ChipsImg from '../../../../assest/MainPage/stories/chips.png'
import NoodlesImg from '../../../../assest/MainPage/stories/noodles.png'
import Switch2Img from '../../../../assest/MainPage/stories/switch2.png'

type Story = {
  name: string,
  image: StaticImport
}

export const Stories: Story[] = [
  {
    name: 'Grote',
    image: Forest1Img,
  },
  {
    name: 'Kia',
    image: Forest2Img,
  },
  {
    name: 'Jacky',
    image: SnowMountainImg,
  },
  {
    name: 'Patra',
    image: DesertImg,
  },
  {
    name: 'Ude',
    image: ChipsImg,
  },
  {
    name: 'Emy',
    image: NoodlesImg,
  },
  {
    name: 'JoJo',
    image: Switch2Img,
  },
]