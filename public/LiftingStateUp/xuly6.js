class TemperatureInput1 extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue1 = this.changeValue1.bind(this);
    }

    changeValue1(e) {
        this.props.onChangeValue1(e.target.value);
    }

    render() {
        return (
            <input value={this.props.value1} onChange={this.changeValue1} />
        );
    }
}

class TemperatureInput2 extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue2 = this.changeValue2.bind(this);
    }

    changeValue2(e) {
        this.props.onChangeValue2(e.target.value);
    }

    render() {
        return (
            <input value={this.props.value2} onChange={this.changeValue2} />
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: '111' };
    }

    handleChange(e) {
        this.setState({ value: e });
    }

    render() {

        return (
            <div>
                <TemperatureInput1 value1={this.state.value} onChangeValue1={this.handleChange} />
                <TemperatureInput2 value2={this.state.value} onChangeValue2={this.handleChange} />
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);