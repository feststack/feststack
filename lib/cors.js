// lib/cors.js
export function cors(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://ton-app.vercel.app'); // ou '*' en dev
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return true; // Pour dire que c'est une requête prévol
    }
    
    return false;
  }
  