
import avatar from '@/assets/images/avatar.webp'
import Image from 'next/image'


export default function Avatar() {
  return (
    <Image src={avatar} alt="Avatar" className="aspect-square rounded-full w-full object-cover" />
  )
}