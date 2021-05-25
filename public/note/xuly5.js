class Note extends React.Component {
    delete() {
        $.post("/delete", { idXoa: this.props.id }, (data) => {
            list.setState({ mang: data });
        })
    }
    render() {
        return (
            <div className="div-note">
                <p>{this.props.children}</p>
                <button onClick={() => this.delete()}>Xóa</button>
            </div>
        );
    }
}

function addDiv() {
    ReactDOM.render(<InputDiv />, document.getElementById("div-add"));
}

let list;
class List extends React.Component {
    constructor(props) {
        super(props);
        list = this;
        this.state = { mang: [] };
    }

    componentDidMount() {
        $.get("/getNotes", (data) => {
            this.setState({ mang: data });
        });
    }

    render() {
        const listItems = this.state.mang.map((note, index) =>
            <Note key={index} id={index}>{note}</Note>
        )

        return (
            <div className="div-list">
                <div id="div-add"></div>
                <button onClick={addDiv}>Thêm</button>
                {listItems}
            </div>
        )
    }
}

class InputDiv extends React.Component {
    send() {
        $.post("/add", { note: this.refs.txt.value }, (data) => {
            list.setState({ mang: data });
        });
        ReactDOM.unmountComponentAtNode(document.getElementById("div-add"));
    }

    render() {
        return (
            <div>
                <input type="text" ref="txt" placeholder="Enter your note!" className="input-text" />
                <button onClick={() => this.send()}>Gửi</button>
            </div>
        );
    }
}

ReactDOM.render(
    <List />
    , document.getElementById('root')
);