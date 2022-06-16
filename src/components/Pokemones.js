import React, { Component } from 'react'
import axios from 'axios';

export default class NotesList extends Component {
    state = {
        pokes: []
    }
    componentDidMount(){
        this.getPokes();
    }
    async getPokes(){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=30')
            .then(resp => {
                let array = []
                for (let i = 0; i < resp.data.results.length; i++) {
                    axios.get(resp.data.results[i].url)
                        .then(result => {
                            array.push(result.data)
                            this.setState({pokes: array})

                    })
                }
            })
    }
    render() {
        return (
            <div className="row">
                {
                    this.state.pokes.map(poke => 
                    <div className="col-md-4 p-2" key={poke.id}>
                        <div className="card">
                            <div className="card-body text-center">
                                <img className="img-fluid" src={poke.sprites.front_default} style={{width:'50%'}} alt=""/>
                            </div>
                            <div className="card-header justify-content-between bg-danger">
                                <h5 className="text-capitalize text-white text-center">{poke.name}</h5>
                            </div>
                        </div>
                    </div>
                    
                    )
                }
            </div>
        )
    }
}
