import "./Categoria.css"

function Cateogria() {
  return (
    <div>
      <h2 className="sidebar-title">Categoria</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark">
            Todos
          </span>
        </label>
        <div />
        <div>
          <label className="sidebar-label-container ">
            <input type="radio" name="test" />
            <span className="checkmark">
              Postres
            </span>
          </label>
        </div>
        <div>
          <label className="sidebar-label-container ">
            <input type="radio" name="test" />
            <span className="checkmark">
              Pasteles
            </span>
          </label>
        </div>
        <div>
          <label className="sidebar-label-container ">
            <input type="radio" name="test" />
            <span className="checkmark">
              Desayunos
            </span>
          </label>
        </div>

      </div>

    </div>


  )
}
export default Cateogria;