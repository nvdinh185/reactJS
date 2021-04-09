class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
    }

    addNumber() {
        this.state.number = parseInt(this.state.number) + 1;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.addNumber() }}>Hello {this.state.number}</button>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Hello />
    </div>
    , document.getElementById("root")
);