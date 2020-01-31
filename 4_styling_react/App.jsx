class App extends React.Component {
    render() {
        return (
            <div>
                <Friend
                    name="Elton"
                    hobbies={["Swimming", "Dancing", "Singing"]}
                />
                <Friend
                    hobbies={["Swimming", "Dancing", "Singing"]}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
