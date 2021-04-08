class KhoaPham extends React.Component {
    layThongTin() {
        console.log(this.props.children);
    }

    render() {
        return (
            <div>
                <h1 className="mauvang">{this.props.ten} - {this.props.giangvien}</h1>
                <p>{this.props.children}</p>
                <button onClick={() => this.layThongTin()}>Thong Tin</button>
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