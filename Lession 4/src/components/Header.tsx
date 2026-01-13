type Props = {
    title: string
    pagetitle: string
}

export default function Header(props: Props) {
  return (
    <>
        <h1>{props.title}</h1>
        <h2>{props.pagetitle}</h2>
        <title>{props.pagetitle}</title>
    </>
  )
}