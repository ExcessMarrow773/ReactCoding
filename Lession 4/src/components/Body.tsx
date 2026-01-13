type Props = {
    body: string
}

export default function Body(props: Props) {
  return (
    <>
        <div>{props.body}</div>
    </>
  )
}