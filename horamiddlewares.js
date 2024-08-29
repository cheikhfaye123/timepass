function horaMiddleware (req, res){
    req.heureActuelle = new Date();
}
module.exports = horaMiddleware;