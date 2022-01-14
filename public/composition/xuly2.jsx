function Contacts() {
    return <div className="contacts" />;
}

function Chat() {
    return <div className="chat" />;
}

function SplitPane(props) {
    return (
        <div className="split-pane">
            <div className="split-pane-left">
                {props.left}
            </div>
            <div className="split-pane-right">
                {props.right}
            </div>
        </div>
    );
}

function App() {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            } />
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
