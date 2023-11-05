

function selectOption(option) {
  
  alert("You have selected option: " + option);
 }
 

export default function SideBarProducts() {
  return (

    <div className="selection-bar  flex  space-x-20  justify-center bg-slate-50 p-2.5  text-xl text-zinc-500  font-medium  max-md:flex-col max-md:items-center  max-md:text-sm max-md:mb-2.5 " >
    <button className=" hover:text-yellow-500 option" onClick="selectOption('00')">Postres</button>
    <button className=" hover:text-yellow-500 option" onClick="selectOption('01')">Desayunos</button>
    <button className=" hover:text-yellow-500 option" onClick="selectOption('02')">Pasteles</button>
    <button className=" hover:text-yellow-500 option" onClick="selectOption('02')">Cajas</button>
   </div>
  )
}
