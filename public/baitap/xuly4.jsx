class Note extends React.Component {
    render() {
        return (
            <p>{this.props.children}</p>
        );
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mang: ["NodeJS", "Angular", "Ionic", "ReactJS"] };
    }

    add() {
        this.state.mang.push("Android", "IOS");
        this.setState(this.state);
    }

    render() {
        const listItems = this.state.mang.map((note, index) =>
            <Note key={index}>{note}</Note>
        )

        return (
            <div>
                <button onClick={() => this.add()}>Thêm</button>
                {listItems}
            </div>
        );
    }
}

ReactDOM.render(
    <List />
    , document.getElementById("root")
);