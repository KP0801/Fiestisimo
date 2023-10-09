import {logo} from '../design/Fiestisimo.jpg'

export const NavBar = () => {
  return (
    <>
    <ul className="bg-red-500 flex items-center p-[10px]">
        <li>
        < img src={logo} alt="Logo" className=' h-auto w-6/12'></img>
        </li>
    </ul>
    
</>
  )
}
export default NavBar;