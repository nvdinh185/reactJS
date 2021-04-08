function formatDate(date) {
    return date.toLocaleDateString();
};

function Comment(props) {
    return (
        <div>
            <div>
                <img
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div>
                    {props.author.name}
                </div>
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