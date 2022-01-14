class LoggingButton extends React.Component {
    handleClick(e) {
        console.log('this is:', this, e);
    }

    render() {
        // Cú pháp này đảm bảo `this` được ràng buộc trong handleClick
        return (
            <div>
                <button onClick={(e) => this.handleClick(e)}>Click me</button>
                <button onClick={this.handleClick.bind(this)}>Click me</button>
            </div>
        );
    }
}

ReactDOM.render(
    <LoggingButton />,
    document.getElementById('root')
);