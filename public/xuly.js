var KhoaPham = (props) => {
    return (
        <div>
            <h1 className="mauvang">{props.ten} - {props.giangvien}</h1>
            <KhoaHoc />
        </div>
    );
};

var KhoaHoc = () => {
    return (
        <div>
            <h3>Lập trình ReactJS</h3>
        </div>
    );
};

ReactDOM.render(
    <div>
        <KhoaPham ten="ReactJS" giangvien="Mr. Khoa" />
        <KhoaPham ten="NodeJS" giangvien="Mr. Pho" />
    </div>,
    document.getElementById("root")
);