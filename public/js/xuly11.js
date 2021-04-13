function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <a href="https://www.google.com.vn/" onClick={handleClick}>
            Click me
        </a>
    );
}

ReactDOM.render(
    <ActionLink />,
    document.getElementById('root')
);