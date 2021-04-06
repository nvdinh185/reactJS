var KhoaPham = () => {
    return (
        <div>
            <h1 className="mauvang">Khoa Pham React</h1>
            <h1 className="mauxanh">Khoa Pham React</h1>
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