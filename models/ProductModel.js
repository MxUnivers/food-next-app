import mongoose from 'mongoose';

// Définition du schéma du modèle
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
},{
  timestamps:true
});

// Création du modèle à partir du schéma
const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;
