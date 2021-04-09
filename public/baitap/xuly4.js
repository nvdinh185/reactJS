class Note extends React.Component {
    render() {
        return (
            <p>{this.props.children}</p>
        );
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mang: ["NodeJS", "Angular", "Ionic", "ReactJS"] };
    }

    change() {
        i == 0 ? i = arImgs.length - 1 : i--;

        this.state.url = arImgs[i].url;
        this.setState(this.state);
    }


    render() {
        var i = 1;
        return (
            <div>
                i;
                {
                    <div>
                        <button>Thêm</button>
                        <button>Sửa</button>
                    </div>
                }
            </div>
            // {
            // this.state.mang.map((note, index) => {
            //     return <Note key={index}>{note}</Note>
            // })
            // }
        );
    }
}

ReactDOM.render(
    <List />
    , document.getElementById("root")
);