import type { ReactNode } from "react"

type Props = {
    children:ReactNode
}

function Body({children}: Props) {
  return (
    <>
        {children}
    </>
  )
}

export default Body