import React, {Component} from 'react'
import axios from 'axios'

import Currency from './currency'
import './api.css'


class Crypto extends Component {
	fetchCurrencyData = () => {
		axios
			.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
			.then(response =>{
				const cryptocurrency = ['bitcoin', 'enthereum', 'ripple', 'eos', 'litecoin']
				const result = response.data.filter( currency => cryptocurrency.includes(currency.id),)
				this.setState({data: result})

			})

			.catch(err => console.log(err))
	}

	componentDidMount() {
		this.fetchCurrencyData()
		this.interval = setInterval(()=>this.fetchCurrencyData(), 1 * 1000)
	}
	constructor(props){
		super(props)
		this.state = {
			data: [],
		}
	}

	render(){
		let crypto = this.state.data.map(currency => (
			<Currency data={currency} key={currency.id}/>
			))

		return (
			<div className="crypto-container">
				<ul className="crypto">{crypto}</ul>

			</div>

			)
	}
}

export default Crypto