function getName(name) {
    alert(name);
}

class KhoaPham extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tongHocVien: 10 };
    }
    render() {
        return (
            <div>
                <h1 className="mauvang">{this.props.ten} - {this.props.giangvien}</h1>
                <p>{this.props.children}</p>
                <p>So hoc vien: {this.state.tongHocVien}</p>
                <button onClick={() => { var str = this.props.ten + " - " + this.props.giangvien; getName(str); }}>Thong Tin</button>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <KhoaPham ten="ReactJS" giangvien="Mr. Khoa">Mon hoc ReactJS</KhoaPham>
        <KhoaPham ten="NodeJS" giangvien="Mr. Pho">Mon hoc NodeJS</KhoaPham>
    </div>
    , document.getElementById("root")
);