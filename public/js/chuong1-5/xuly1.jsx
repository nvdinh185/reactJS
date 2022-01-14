function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

function getGreeting(usr) {
    if (usr) {
        return <h1>Hello, {formatName(usr)}</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

const element2 = (
    <div>
        {getGreeting(user)}
    </div>
);

ReactDOM.render(
    element2,
    document.getElementById("root")
);