var KhoaPham = (props) => {
    return (
        <div>
            <h1 className="mauvang">{props.ten} - {props.giangvien}</h1>
            <p>{props.children}</p>
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
        <KhoaPham ten="ReactJS" giangvien="Mr. Khoa">Mon hoc ReactJS</KhoaPham>
        <KhoaPham ten="NodeJS" giangvien="Mr. Pho">Mon hoc NodeJS</KhoaPham>
    </div>,
    document.getElementById("root")
);