const arImgs = [
    "https://icdn.dantri.com.vn/zoom/480_320/2021/04/13/onghaidoilaitienchonguoingheo-1618110484090-1618272186271.jpeg",
    "https://icdn.dantri.com.vn/zoom/480_320/2021/04/13/abc-1618261786797.jpg",
    "https://icdn.dantri.com.vn/zoom/360_240/2021/04/13/51618243284589-1618272989629.jpg",
    "https://icdn.dantri.com.vn/zoom/360_240/2021/04/13/c-130-1618269842441.jpg",
    "https://icdn.dantri.com.vn/zoom/360_240/2021/04/10/9-1617996050268.jpg"
]
let i = 1;

class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state = { url: arImgs[i] };
    }

    changeImg(n) {
        if (n) {
            i == arImgs.length - 1 ? i = 0 : i++;
        } else {
            i == 0 ? i = arImgs.length - 1 : i--;
        }
        this.state.url = arImgs[i];
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <img src={this.state.url} /><br />
                <button onClick={() => this.changeImg(0)}>Quay lại</button>
                <button onClick={() => this.changeImg(1)}>Tiếp theo</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Images />,
    document.getElementById('root')
);