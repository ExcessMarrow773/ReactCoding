type Props = {
  name: string;
}

function Footer(props: Props) {
  return (
    <footer>
      <h4>{props.name}</h4>
    </footer>
  )
}

export default Footer;