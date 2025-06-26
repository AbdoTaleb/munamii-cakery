import './Products.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import { cupcakes, weddingCakes } from '../../data/productData';
import { useLocation } from 'react-router-dom';

function Products() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const selectedCategory = query.get('category') || 'cupcakes'; // fallback to cupcakes

  let products = [];
  let heading = '';

  if (selectedCategory === 'cupcakes') {
    products = cupcakes;
    heading = 'Cupcakes';
  } else if (selectedCategory === 'weddingCakes') {
    products = weddingCakes;
    heading = 'Wedding Cakes';
  } else {
    return (
      <main className="products">
        <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>
          Invalid category. Please select from the menu.
        </h2>
      </main>
    );
  }

  return (
    <main className="products">
      <h2>{heading}</h2>
      <div className="product-grid">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}

export default Products;
