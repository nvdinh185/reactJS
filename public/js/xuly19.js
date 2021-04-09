class InputTag extends React.Component {

    show() {
        var text = this.refs.txt.value;
        var sl = this.refs.sl.value;
        alert(text + " " + sl);
    }

    render() {
        return (
            <div>
                <select ref="sl">
                    <option value="a">AAA</option>
                    <option value="b">BBB</option>
                    <option value="c">CCC</option>
                </select>
                <input type="text" ref="txt" />
                <button onClick={() => this.show()}>Hien thi</button>
            </div>
        );
    }
}

ReactDOM.render(
    <InputTag />
    , document.getElementById("root")
);