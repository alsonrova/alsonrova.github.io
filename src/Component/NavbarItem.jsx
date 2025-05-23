import { NavLink } from "react-router-dom"

function NavbarItem({link,text}) {
  return (
    <NavLink to={link} className={"font-semibold text-xl hover:underline text-shadow-xl rounded p-1 transition-all"}>
       {text}
    </NavLink>
  )
}
export default NavbarItem