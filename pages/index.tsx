import React, {useEffect} from "react"
import play from "../playground";

export default function Home() {

  useEffect(() => {
    play()
  }, [])

  const message:string = "Hallo!"
  return (
    <div>Hello World!</div>
  )
}
