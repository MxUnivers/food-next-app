import mongoose from 'mongoose';

// URL de connexion à MongoDB
const dbUrl = 'mongodb://localhost:27017/nextjs_db_test'; // Remplacez avec votre URL et nom de la base de données

// Connexion à la base de données
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB'))
  .catch((error) => console.error('Erreur de connexion à MongoDB :', error));
