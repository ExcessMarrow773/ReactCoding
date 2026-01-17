import { Link } from "react-router"


function Nav() {
  const myStyle = {
    backgroundColor: "#888", // camelCase property name
    padding: "20px",
    borderRadius: "15px",
    radius: "15px",
  };
  return (
    <>
    
    <div style={myStyle}>
        <Link to="/">Home, </Link><Link to="/about">About Me</Link>
    </div>
    </>
  )
}

export default Nav
