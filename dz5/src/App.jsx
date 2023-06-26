import React from 'react';

class Input extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.value1}</h2>
                <h2>{this.props.value2}</h2>
            </div>
        );
    }
}

class Refler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
        }
    }

    handleChange1 = (event) => {
        this.setState({value1: event.target.value});
    }

    handleChange2 = (event) => {
        this.setState({value2: event.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange1} value={this.state.value1} />
                <input type="text" onChange={this.handleChange2} value={this.state.value2} />
            </div>
        );
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    handleClickPlus = () => {
        this.setState({count: this.state.count + 1});
    }

    handleClickMinus = () => {
        this.setState({count: this.state.count - 1});
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.count < 0) {
            return false;
        }
        else if (nextState.count > 5) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickPlus}>+</button>
                <button onClick={this.handleClickMinus}>-</button>
                <h2>{this.state.count}</h2>
            </div>
        );
    }
}

function App() {
    const [showInput, setShowInput] = React.useState(false);

    return (
        <div>
            <button onClick={() => setShowInput(!showInput)}>Toggle Input</button>
            {showInput && <Refler />}
            <Button />
        </div>
    );
}

export default App;
