import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import Link from "next/link"

type TCustomAvatar = {
  className?: string,
  src: string,
  name?: string | 'DF'
  link: string
}

export default function CustomAvatar(props: TCustomAvatar) {
  return (
    <Link href={props.link}>
      <Avatar className={props.className}>
        <AvatarImage src={props.src}/>
        <AvatarFallback>{props.name}</AvatarFallback>
      </Avatar>
    </Link>

  )
}