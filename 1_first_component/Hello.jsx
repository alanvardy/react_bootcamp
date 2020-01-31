class Hello extends React.Component {
    render() {
        let bangs = "!".repeat(this.props.bangs)
        return <div>
            <h1>Hello {this.props.to} from {this.props.from}, you have {this.props.num} flowers {bangs}</h1>
            <p><a href={this.props.image}><img src={this.props.image} alt=""/></a></p>
        </div>
    }
}
