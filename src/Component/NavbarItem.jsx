import { NavLink } from "react-router-dom"

function NavbarItem({link,text}) {
  return (
    <NavLink to={link} className={"font-semibold text-xl hover:bg-white/30 hover:backdrop-brightness-50 hover:backdrop-blur-xl rounded p-1 transition-all"}>
       {text}
    </NavLink>
  )
}
export default NavbarItem