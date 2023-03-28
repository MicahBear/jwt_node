module.exports = {
    getHome: (req, res) => {
        res.json({ message: 'Testing route-> controller -> function' });
    }
}