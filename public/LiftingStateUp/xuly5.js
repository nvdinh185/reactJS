class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: '111' };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <input value={this.state.value} onChange={this.handleChange} />
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <TemperatureInput />
                <TemperatureInput />
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);