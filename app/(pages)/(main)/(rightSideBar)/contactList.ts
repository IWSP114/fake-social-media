import { StaticImport } from 'next/dist/shared/lib/get-img-props'

//Contact Person
import AliKazaIcon from '../../../../assest/MainPage/user_icon/ali_kaza.png'
import AndreyIcon from '../../../../assest/MainPage/user_icon/andrey.png'
import BarenIcon from '../../../../assest/MainPage/user_icon/beren.png'
import FurkanIcon from '../../../../assest/MainPage/user_icon/furkan.png'
import IreneIcon from '../../../../assest/MainPage/user_icon/irene.png'
import KiteraIcon from '../../../../assest/MainPage/user_icon/kitera.png'
import SamueIcon from '../../../../assest/MainPage/user_icon/samue.png'
import TaylorIcon from '../../../../assest/MainPage/user_icon/taylor.png'
import VickyIcon from '../../../../assest/MainPage/user_icon/vicky.png'
import WellingtonIcon from '../../../../assest/MainPage/user_icon/wellington.png'

//Contact Group
import FamBamIcon from '../../../../assest/MainPage/group_icon/fam_bam.png'
import SisterSisterIcon from '../../../../assest/MainPage/group_icon/sister_sister.png'
import RideOrDietIcon from '../../../../assest/MainPage/group_icon/ride_or_diet.png'
import EscapeArtistIcon from '../../../../assest/MainPage/group_icon/escape_artist.png'
import CoffeeCrewIcon from '../../../../assest/MainPage/group_icon/coffee_crew.jpg'

type Contact = {
  name: string,
  image: StaticImport
}

export const ContactPersonList: Contact[] = [
  {
    name: 'Ali Kaza',
    image: AliKazaIcon,
  },
  {
    name: 'Andrey',
    image: AndreyIcon,
  },
  {
    name: 'Baren',
    image: BarenIcon,
  },
  {
    name: 'Furkan',
    image: FurkanIcon,
  },
  {
    name: 'Irene',
    image: IreneIcon,
  },
  {
    name: 'Kitera',
    image: KiteraIcon,
  },
  {
    name: 'Samue',
    image: SamueIcon,
  },
  {
    name: 'Taylor',
    image: TaylorIcon,
  },
  {
    name: 'Vicky',
    image: VickyIcon,
  },
  {
    name: 'Wellington',
    image: WellingtonIcon,
  },

]

export const ContactGroupList: Contact[] = [
  {
    name: 'Fam Bam',
    image: FamBamIcon,
  },
  {
    name: 'Sister, Sister',
    image: SisterSisterIcon,
  },
  {
    name: 'Ride or Diet',
    image: RideOrDietIcon,
  },
  {
    name: 'Escape Artist',
    image: EscapeArtistIcon,
  },
  {
    name: 'Coffee Crew',
    image: CoffeeCrewIcon,
  },
]