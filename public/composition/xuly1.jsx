function FancyBorder(props) {
    return (
        <div className={'fancy-border fancy-border-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="dialog-title">
                Welcome
            </h1>
            <p className="dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}

ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
);
