class InputTag extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    show() {
        console.log(this.input.current.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.input} />
                <button onClick={() => this.show()}>Hien thi</button>
            </div>
        );
    }
}

ReactDOM.render(
    <InputTag />
    , document.getElementById("root")
);