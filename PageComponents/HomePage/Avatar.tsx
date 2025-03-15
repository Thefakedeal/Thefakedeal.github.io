
import avatar from '@/assets/images/avatar.webp'
import Image from 'next/image'

type Props = {}

export default function Avatar({}: Props) {
  return (
    <Image src={avatar} alt="Avatar" className="aspect-square rounded-full w-full object-cover" />
  )
}