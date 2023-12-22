import "./cadastro.css"

function Cadastro() {
  return (
    <div className='main'>
        <form className='Form-cadastro'>
            <h1>Cadastro de mercadoria</h1>

            <label>Qual a planta?</label>
            <input type="text" placeholder='Ex: morango'/>

            <label>Qual o tamanho da planta?</label>
            <input type="number"  />
            
            <label>Qual a idade da planta?</label>
            <input type="number "/>
        
            <label>Especifique a espécie </label> {/*buscar na API de plantas depois*/}
            <input type="text"/>

            <select >
                <label>Estágio de crescimento</label>
                <option disabled>Selecione</option>
                <option value="Broto">Broto</option>
                <option value="Muda">Muda</option>
                <option value="Jovem">Jovem</option>
                <option value="Adulta">Adulta</option>
            </select>
            
            <label>Data de entrega:</label>
            <input type="date" name="data" id="data" />

            <label>Quantidade:</label>
            <input type="number"  />
            
            <button type="submit">Enviar</button>
        </form>
        
    </div>
  )
}

export default Cadastro