function random_number() {
    return Math.floor(Math.random() * 4);
}

class SlotMachine extends React.Component {
    render() {
        let one = random_number();
        let two = random_number();
        let three = random_number();
        let message = one === two && two === three ? "You win!" : "You lose!"
        let types = [
            "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/33/0276.png",
            "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/33/0265.png",
            "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/33/0269.png",
            "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/33/0278.png",
            "https://s3.amazonaws.com/pix.iemoji.com/andr33/0272.png"
        ]
        return (
            <div>
                <p>
                    <img src={types[one]} alt="" />
                    <img src={types[two]} alt="" />
                    <img src={types[three]} alt="" />
                </p>
                <p>
                    {message}
                </p>
            </div>
        )
    }
}
