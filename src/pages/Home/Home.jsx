import './Home.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import { cupcakes, weddingCakes } from '../../data/productData';

const allProducts = [...cupcakes, ...weddingCakes];



function Home() {
  return (
    <main className="home">
      <h2>Welcome to Munamii Cakery!</h2>
      <p>Delicious cupcakes and elegant wedding cakes for every occasion.</p>

      <div className="home-products">
        {allProducts.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}

export default Home;
