class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tongHocVien: this.props.tongHocVien };
    }

    handleSubmit(e, number) {
        e.preventDefault();
        // console.log(this.props);

        this.state.tongHocVien = parseInt(this.state.tongHocVien) + number;
        this.setState(this.state);
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e, 5)}>
                <h4>Tổng học viên {this.state.tongHocVien}</h4>
                <button type="submit">Thêm học viên</button>
            </form>
        );
    }
}

ReactDOM.render(
    <Student tongHocVien="10">Mon hoc ReactJS</Student>
    , document.getElementById("root")
);