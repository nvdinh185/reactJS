class ActionLink extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    render() {
        return (
            <a href="https://www.google.com.vn/" onClick={(e) => this.handleClick(e)} >
                Click me
            </a>
        );
    }
}

ReactDOM.render(
    <ActionLink />,
    document.getElementById('root')
);