// src/pages/Products/Products.jsx

import ProductCard from '../../components/ProductCard/ProductCard';
import './Products.css';

// بيانات وهمية (مؤقتة)
const cupcakes = [
  { id: 1, title: 'Chocolate Dream', price: '$3.50', image: '/images/cupcakes/cupcake1.jpg' },
  { id: 2, title: 'Vanilla Bliss', price: '$3.00', image: '/images/cupcakes/cupcake2.jpg' },
  { id: 3, title: 'Strawberry Love', price: '$3.75', image: '/images/cupcakes/cupcake3.jpg' },
  { id: 4, title: 'Lemon Twist', price: '$3.20', image: '/images/cupcakes/cupcake4.jpg' },
  { id: 5, title: 'Red Velvet', price: '$3.90', image: '/images/cupcakes/cupcake5.jpg' },
  { id: 6, title: 'Mint Choco', price: '$3.60', image: '/images/cupcakes/cupcake6.jpg' },
  { id: 7, title: 'Caramel Kiss', price: '$3.80', image: '/images/cupcakes/cupcake7.jpg' },
  { id: 8, title: 'Oreo Crunch', price: '$3.70', image: '/images/cupcakes/cupcake8.jpg' },
];

const weddingCakes = [
  { id: 1, title: 'Elegant Rose', price: '$150', image: '/images/cakes/cake1.jpg' },
  { id: 2, title: 'White Bloom', price: '$200', image: '/images/cakes/cake2.jpg' },
  { id: 3, title: 'Golden Charm', price: '$250', image: '/images/cakes/cake3.jpg' },
  { id: 4, title: 'Rustic Love', price: '$180', image: '/images/cakes/cake4.jpg' },
  { id: 5, title: 'Classic Tier', price: '$220', image: '/images/cakes/cake5.jpg' },
  { id: 6, title: 'Vintage Lace', price: '$210', image: '/images/cakes/cake6.jpg' },
  { id: 7, title: 'Peach Blush', price: '$230', image: '/images/cakes/cake7.jpg' },
  { id: 8, title: 'Modern Glam', price: '$260', image: '/images/cakes/cake8.jpg' },
];

function Products() {
  return (
    <main className="products">
      <section>
        <h2>Cupcakes</h2>
        <div className="product-grid">
          {cupcakes.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section>
        <h2>Wedding Cakes</h2>
        <div className="product-grid">
          {weddingCakes.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Products;
