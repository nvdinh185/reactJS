class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
    }

    handleClick() {
        this.state.isToggleOn = !this.state.isToggleOn;
        this.setState(this.state);
    }

    render() {
        return (
            <button onClick={() => this.handleClick()}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);