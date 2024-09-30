module.exports = {
    HealthCheck: async function (req, res) {
        try {
            return res.json({
                status: 'OK',
                timestamp: new Date()
            });
        } catch (err) {
            return res.status(500),json({
                status: 'Not Okay',
                error: err
            })
        }
    }
}