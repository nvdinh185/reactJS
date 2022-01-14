class LoggingButton extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }

    render() {
        // Cú pháp này đảm bảo `this` được ràng buộc trong handleClick
        return (
            <button onClick={() => this.handleClick()}>
                Click me
            </button>
        );
    }
}

ReactDOM.render(
    <LoggingButton />,
    document.getElementById('root')
);