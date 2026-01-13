type Props = {
  links?: Array<string>
};

export default function Footer(props: Props) {
  if (!props.links) {
    return <footer>No links available</footer>;
  }
  
  return (
    <footer>
      <ul>
        {props.links.map((link, index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
  } 