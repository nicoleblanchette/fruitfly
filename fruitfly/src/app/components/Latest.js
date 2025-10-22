import Image from "next/image"
import WishPoster from "../globalMedia/wishPoster.jpeg"

export const Latest = () => {
  return (
    <div>
      <Image className="w-xl" src={WishPoster} alt=""/>
    </div>
  )
}