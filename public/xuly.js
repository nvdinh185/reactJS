function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
};

class Clock2 extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
};

function tick() {
    ReactDOM.render(
        <Clock2 date={new Date()} />,
        document.getElementById('root')
    );
};

setInterval(tick, 1000);