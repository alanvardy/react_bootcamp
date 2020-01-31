class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to="Ringo"
                    from="Paul"
                    num={5}
                    bangs={4}
                    image="https://media.giphy.com/media/A4MIjliVZzo8o/giphy.gif"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
