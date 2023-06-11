import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

// Configuration de la connexion à la base de données
const uri = 'mongodb://localhost:27017'; // Remplacez par votre URL de connexion MongoDB
const client = new MongoClient(uri);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Effectuez la logique de lecture dans votre base de données ou tout autre traitement nécessaire
    res.status(200).json({ data: {"data":"Aymar"} });
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
