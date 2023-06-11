import { MongoClient } from 'mongodb';
import ProductModel from '../../models/ProductModel';

// Configuration de la connexion à la base de données
const uri = 'mongodb://localhost:27017'; // Remplacez par votre URL de connexion MongoDB
const client = new MongoClient(uri);


// Logique d'API route pour la création de données
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, price, description } = req.body;

    try {
      // Création d'une instance du modèle Product
      const product = new ProductModel({ name, price, description });

      // Sauvegarde du produit dans la base de données
      const result = await product.save();

      res.status(200).json({ message: 'Produit créé avec succès', data: result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la création du produit' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
