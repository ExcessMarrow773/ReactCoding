type Props = {
    body: string
}

export default function Body(props: Props) {
  return (
    <>
        <p>{props.body}</p>
    </>
  )
}