var arImgs = [
    { url: "https://icdn.dantri.com.vn/zoom/480_320/2021/04/08/img-1938-1617869839500.jpg" },
    { url: "https://icdn.dantri.com.vn/zoom/468_310/2021/04/09/dung-dang-kiem-xe-o-to-bien-ngoai-giao-chua-sang-ten-1-1617927787224.jpg" },
    { url: "https://icdn.dantri.com.vn/zoom/468_310/2021/04/08/2021-hyundaialcazar-2-1617873828064.jpg" },
    { url: "https://icdn.dantri.com.vn/zoom/418_278/2021/04/09/xe-con-bi-vo-nat-sau-tai-nan-1617944143189.jpg" },
    { url: "https://icdn.dantri.com.vn/zoom/418_278/2021/04/09/20210409091219-1-1617936076454.jpg" }
]
let i = 2;

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = { url: arImgs[i].url };
    }

    changeImage(n) {
        if (n) {
            i < arImgs.length - 1 ? i++ : i = 0;
        } else {
            i > 0 ? i-- : i = arImgs.length - 1;
        }
        this.state.url = arImgs[i].url;
        this.setState(this.state);
    }


    render() {
        return (
            <div>
                <img src={this.state.url} /><br />
                <button onClick={() => { this.changeImage(0) }}>Quay lại</button>
                <button onClick={() => { this.changeImage(1) }}>Tiếp theo</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Image />
    , document.getElementById("root")
);