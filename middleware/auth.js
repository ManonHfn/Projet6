const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // on recupère le token depuis le header de la requete
    const token = req.headers.authorization.split(' ')[1];
    // on décode le token
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    // on récupère la valeur du userId depuis le token
    const userId = decodedToken.userId;
    // si le requete contient un userId dans son body
    // et que ce userId est différent du userId de l'utilisateur actuel (celui du token)
    if (req.body.userId && req.body.userId !== userId) {
      // La requete est bloqué
      throw 'Invalid user ID';
    } else {
      // sinon on passe dans le middleware suivant
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};