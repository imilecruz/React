import React from 'react';

class Entao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lampada = 'desligada';
        }
    }
        

    desligar = () => {
        this.setState({
            lampada: 'desligada',
    });
}

    ligar = () => {
        this.setState({
            lampada: 'ligada',
        });
    }

    render() {
        return (
            <div>
                <h1 className='title'>{this.lampada}</h1>
                <span>
                    <button onClick={this.apagar}>apagar</button>
                    <button onClick={this.acender}>acender</button>
                </span>
            </div>    
        )
    }
}

export default Entao;