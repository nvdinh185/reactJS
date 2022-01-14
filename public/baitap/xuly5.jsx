const arImgs = [
    { url: "https://icdn.dantri.com.vn/zoom/480_320/2021/04/08/img-1938-1617869839500.jpg" },
    { url: "https://icdn.dantri.com.vn/zoom/468_310/2021/04/09/dung-dang-kiem-xe-o-to-bien-ngoai-giao-chua-sang-ten-1-1617927787224.jpg" },
    { url: "https://icdn.dantri.com.vn/zoom/468_310/2021/04/08/2021-hyundaialcazar-2-1617873828064.jpg" },
    { url: "https://icdn.dantri.com.vn/zoom/418_278/2021/04/09/xe-con-bi-vo-nat-sau-tai-nan-1617944143189.jpg" },
    { url: "https://icdn.dantri.com.vn/zoom/418_278/2021/04/09/20210409091219-1-1617936076454.jpg" }
]

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
        this.state = {
            mang: [
                { srcHinh: arImgs[0].url, content: "NodeJS" },
                { srcHinh: arImgs[1].url, content: "Angular" },
                { srcHinh: arImgs[2].url, content: "Ionic" },
            ]
        };
    }

    add() {
        this.state.mang.unshift(
            { srcHinh: arImgs[3].url, content: "Android" },
            { srcHinh: arImgs[4].url, content: "IOS" }
        );
        this.setState(this.state);
    }

    render() {
        const listItems = this.state.mang.map((note, index) =>
            <div key={index}>
                <img src={note.srcHinh} />
                <Note>{note.content}</Note>
            </div>
        )

        return (
            <div>
                <button onClick={() => this.add()}>Thêm</button>
                {listItems}
            </div>
        );
    }
}

ReactDOM.render(
    <List />
    , document.getElementById("root")
);