function formatName(user) {
    return user.firstName + ' ' + user.lastName;
};

const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    avatarUrl: 'data:image/png;base64,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'
};

const element = (
    <div>
        <h1>
            Hello, {formatName(user)}!
        </h1>
        <img src={user.avatarUrl}></img>
    </div>
);

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
};

const element2 = (
    <div>
        {getGreeting(user)}
    </div>
);

ReactDOM.render(
    element,
    document.getElementById("root")
);