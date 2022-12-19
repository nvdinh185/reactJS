function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = { onEdit: false };
    }

    delete() {
        $.post("http://localhost:3000/delete", { idXoa: this.props.id }, () => {
            list.state.mang = list.state.mang.filter(note => note.id !== this.props.id);
            list.setState(list.state);
        });
    }

    edit() {
        this.setState({ onEdit: true });
    }

    save() {
        $.post("http://localhost:3000/update", { idSua: this.props.id, noiDung: this.refs.txt.value }, () => {
            list.state.mang = list.state.mang.map(
                note => (note.id === this.props.id ? { id: this.props.id, name: this.refs.txt.value } : note)
            );
            list.setState(list.state);
            this.setState({ onEdit: false });
        });
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
        $.get("http://localhost:3000/getNotes", data => {
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
        let note = { id: uuidv4(), name: this.refs.txt.value };
        $.post("http://localhost:3000/add", note, () => {
            list.state.mang = [...list.state.mang, note];
            list.setState(list.state);
            ReactDOM.unmountComponentAtNode(document.getElementById("div-add"));
        });
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