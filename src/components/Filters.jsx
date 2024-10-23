import { useState } from 'react'
import './Filters.css'

function Filters ({setFilters}) {
    const [minPrice, setMinPrice] = useState(0);

    const handleChangeMinPrice = (event) => {
         // event= es el onChange, target = es el input.  (leer onChange)
        setMinPrice(event.target.value)                                     

        // Cuano usamos actualizacion del useState React automáticamente pasa el estado inicial como argumento (OJO)
        setFilters(prevState => ({  
            //Spread Operator = asegura que las otras propiedades del estado filters no se pierdan cuando actualizas una propiedad específica                                                     
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    
    return (
        <section className="filters">
            <div>
                <label htmlFor="price"> Price </label>                      {/*htmlFor =  asociar una etiqueta <label> con un elemento de formulario específico */}
                <input type="range" 
                    id="price" 
                    min='0' 
                    max='1000'
                    onChange={handleChangeMinPrice}                         
                />                                                        {/* onChange = se activa el event cuando el valor del (<input>, <textarea>, <select>)  cambia */}
                <span>${minPrice}</span>    
            </div>

            <div>
                <label htmlFor="category">Category</label>
                <select id="category"  onChange= {handleChangeCategory} >
                    <option value='all'>Todas</option>
                    <option value='hoy'>Hoy</option>
                    <option value='promos'>Promos</option>
                </select>
            </div>

        </section>
    )
}

export default Filters