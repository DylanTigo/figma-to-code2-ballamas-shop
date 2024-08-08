import image from "../assets/image/imageCard.png"
import Badge from "./ui/Badge"
import Button from "./ui/Button"
import card from "../assets/svg/card.svg"

export default function Card() {
  return (
    <article className="w-xl space-y-4 group">
        <div className="h-xl relative rounded-4xl overflow-hidden">
          <div className="w-full h-full absolute top-0 left-0 bg-black/50 rounded-4xl flex justify-center items-end gap-1 p-7 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="secondary" className="outline-none"><img src={card} alt="card icon" />Add to cart</Button>
            <Button variant="tertiary">BUY NOW</Button>
          </div>
          <Badge className="absolute top-7 left-7 z-10">GET OFF 20%</Badge>
          <img src={image} alt="card" className="w-full h-full object-cover"/>
        </div>
        <div className="space-y-0.5">
            <p className="text-3xl font-bold uppercase line-clamp-1">SUMMER SHIRT</p>
            <p className="text-gray-dark text-[28px] font-semibold">$99</p>
        </div>
    </article>
  )
}