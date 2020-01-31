class Friend extends React.Component {
    static defaultProps = {
        name: "Anonymouse"
    }
    render() {
        return (
            <div className="Friend">
                <h1>{this.props.name}</h1>
                <ul>
                    {this.props.hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        )
    }
}
