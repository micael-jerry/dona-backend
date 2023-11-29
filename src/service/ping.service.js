const ping = (req, res) => {
    res.json({
        pong: "HELLO"
    });
}

module.exports.ping = ping;