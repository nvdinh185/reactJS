class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = { onEdit: false };
    }

    delete() {
        $.post("/delete", { idXoa: this.props.id }, () => { });
        list.state.mang = list.state.mang.filter((note) => note.id !== this.props.id);
        list.setState(list.state);
    }

    edit() {
        this.setState({ onEdit: true });
    }

    save() {
        $.post("/update", { idSua: this.props.id, noiDung: this.refs.txt.value }, () => { });
        list.state.mang = list.state.mang.map(
            note => (note.id === this.props.id ? { id: this.props.id, name: this.refs.txt.value } : note)
        );
        list.setState(list.state);
        this.setState({ onEdit: false });
    }

    cancel() {
        this.setState({ onEdit: false });
    }

    render() {
        if (this.state.onEdit) {
            return (
                <div>
                    <input defaultValue={this.props.children} ref="txt" className="input-text" />
                    <button onClick={() => this.save()}>Lưu</button>
                    <button onClick={() => this.cancel()}>Hủy</button>
                </div>
            )
        } else {
            return (
                <div className="div-note">
                    <p>{this.props.children}</p>
                    <button onClick={() => this.delete()}>Xóa</button>
                    <button onClick={() => this.edit()}>Sửa</button>
                </div>
            )
        }
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
        const listItems = this.state.mang.map(note =>
            <Note key={note.id} id={note.id}>{note.name}</Note>
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
        $.post("/add", { note: this.refs.txt.value }, () => { });
        let user = { id: list.state.mang.length, name: this.refs.txt.value };
        list.state.mang = [...list.state.mang, user];
        list.setState(list.state);
        ReactDOM.unmountComponentAtNode(document.getElementById("div-add"));
    }

    render() {
        return (
            <div>
                <input type="text" ref="txt" placeholder="Enter your note!" className="input-text" />
                <button onClick={() => this.send()}>Gửi</button>
            </div>
        )
    }
}

ReactDOM.render(
    <List />
    , document.getElementById('root')
);