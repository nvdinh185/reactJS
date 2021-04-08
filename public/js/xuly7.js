function formatDate(date) {
    return date.toLocaleDateString();
};

function Avatar(props) {
    return (
        <img
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
};

function UserInfo(props) {
    return (
        <div>
            <Avatar user={props.user} />
            <div>
                {props.user.name}
            </div>
        </div>
    );
};

function Comment(props) {
    return (
        <div>
            <div>
                <UserInfo user={props.author} />
            </div>
            <div>{props.text}</div>
            <div>
                {formatDate(props.date)}
            </div>
        </div>
    );
};

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};
ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />,
    document.getElementById('root')
);