import {cn} from "@/lib/utils";
import Link from "next/link"

type TSuggestionCard = {
  className?: string,
  bg: string,
  title: string,
  href: string
}
export default function SuggestionCard (props: TSuggestionCard) {

  return (
    <Link href={props.href} style={{backgroundImage: `url('${props.bg}')`}} className={cn(props.className, ` bg-cover bg-center md:rounded`)}>
      <div className={`p-2 bg-black/40 flex justify-center w-full`}>
        <h3 className={`text-center text-2xl text-shadow uppercase tracking-widest`}>{props.title}</h3>
      </div>
    </Link>
  )
}