function formatName(user) {
    return user.firstName + ' ' + user.lastName;
};

const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    avatarUrl: 'https://icdn.dantri.com.vn/zoom/360_240/2021/02/05/bds-1612536277141.jpg'
};

const element = (
    <div>
        <h1>
            Hello, {formatName(user)}!
        </h1>
        <img src={user.avatarUrl}></img>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById("root")
);