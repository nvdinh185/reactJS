var KhoaPham = () => {
    return (
        <div>
            <h1 className="mauvang">Khoa Pham React</h1>
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
        <KhoaPham />
        <KhoaPham />
    </div>,
    document.getElementById("root")
);