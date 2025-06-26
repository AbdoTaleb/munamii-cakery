import './Products.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import { cupcakes, weddingCakes } from '../../data/productData';
import { useLocation } from 'react-router-dom';

function Products() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const selectedCategory = query.get('category') || 'cupcakes'; 

  return (
    <main className="products">
      {selectedCategory === 'cupcakes' && (
        <section>
          <h2>Cupcakes</h2>
          <div className="product-grid">
            {cupcakes.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      )}

      {selectedCategory === 'weddingCakes' && (
        <section>
          <h2>Wedding Cakes</h2>
          <div className="product-grid">
            {weddingCakes.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default Products;
