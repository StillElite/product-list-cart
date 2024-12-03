import { ProductsPage } from '@/Products/ProductsPage';

// Using getStaticProps instead of getServerSideProps for GitHub Pages compatibility.
// This simulates server-side rendering by fetching data at build time.

export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};

export default ProductsPage;
