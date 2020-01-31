class App extends React.Component {
    render() {
        return (
            <div>
                <SlotMachine />
                <SlotMachine />
                <SlotMachine />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
