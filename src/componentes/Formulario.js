import React, {Component} from 'react';
import axios from 'axios';

export default class Formulario extends Component{
  state = {
    criptomoneda : []
  }

  async componentWillMount(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    await axios.get(url)
      .then(respuesta =>{
        this.setState({
          criptomoneda: respuesta
        })
      })

  }

  render(){
    return(
      <form>
        <div className="row">
          <label>Elige tu Moneda</label>
          <select className="u-full-width">
            <option value="">Elige tu moneda</option>
            <option value="USD">Dolar Estadounidense</option>
            <option value="MXN">Peso Mexicano</option>
            <option value="GBP">Libras</option>
            <option value="EUR">Euros</option>
          </select>
        </div>

        <div className="row">
          <div>
            <label>Elige tu Criptomoneda</label>
            <select className="u-full-width">
                  <option value="">Elige tu crypmoneda</option>
            </select>
          </div>
        </div>
        <input className="button-primary u-full-width" type="submit" value="Cotizar" />
      </form>
    )
  }
}