class KhoaPham extends React.Component {
    render() {
        return (
            <div>
                <h1 className="mauvang">{this.props.ten} - {this.props.giangvien}</h1>
                <p>{this.props.children}</p>
                <KhoaHoc />
            </div>
        );
    }
}

class KhoaHoc extends React.Component {
    render() {
        return (
            <div>
                <h3>Lập trình ReactJS</h3>
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