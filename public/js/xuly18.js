class KhoaPham extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tongHocVien: this.props.tongHocVien };
    }

    addStudent() {
        this.state.tongHocVien = parseInt(this.state.tongHocVien) + 1;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <h1 className="mauvang">{this.props.ten} - {this.props.giangvien}</h1>
                <p>{this.props.children}</p>
                <p>So hoc vien: {this.state.tongHocVien}</p>
                <button onClick={() => this.addStudent()}>Them hoc vien</button>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <KhoaPham ten="ReactJS" giangvien="Mr. Khoa" tongHocVien="10">Mon hoc ReactJS</KhoaPham>
        <KhoaPham ten="NodeJS" giangvien="Mr. Pho" tongHocVien="20">Mon hoc NodeJS</KhoaPham>
    </div>
    , document.getElementById("root")
);