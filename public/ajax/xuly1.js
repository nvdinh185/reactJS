class Note extends React.Component {
    render() {
        return (
            <div className="div-note">
                {this.props.children}
            </div>
        );
    }
}

class List extends React.Component {
    render() {
        return (
            <div className="div-list">
                <Note>NodeJS</Note>
                <Note>Angular</Note>
                <Note>IONIC</Note>
            </div>
        );
    }
}

ReactDOM.render(
    <List />
    , document.getElementById('root')
);