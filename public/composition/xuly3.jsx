function FancyBorder(props) {
    return (
        <div className={'fancy-border fancy-border-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="dialog-title">
                {props.title}
            </h1>
            <p className="dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

function WelcomeDialog() {
    return (
        <React.Fragment>
            <Dialog
                title="Welcome"
                message="Thank you for visiting our spacecraft!" />
            <hr />
            <Dialog
                title="Hello"
                message="Thank you for visiting our spacecraft!" />
        </React.Fragment>
    );
}

ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
);
