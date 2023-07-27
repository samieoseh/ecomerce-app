import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import axios from 'axios';

function Section() {
  const [categories, setCategory] = useState(null);
  const [results, setResults] = useState({});

  const getCategory = () => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then((response) => setCategory(response.data))
      .catch((error) => console.error('Axios error:', error));
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    if (categories) {
      const fetchProducts = async () => {
        const productsByCategory = {};

        // Use Promise.all to fetch products for all categories simultaneously
        const promises = categories.map((category) =>
          axios.get(`https://fakestoreapi.com/products/category/${category}`)
        );

        try {
          const responses = await Promise.all(promises);

          responses.forEach((response, index) => {
            const category = categories[index];
            productsByCategory[category] = response.data;
          });

          setResults(productsByCategory);
        } catch (error) {
          console.error('Axios error:', error);
        }
      };

      fetchProducts();
    }
  }, [categories]);

  return (
    <div>
      {categories &&
        categories.map((category, index) => (
          <Container key={index}>
            <h2>{category}</h2>
            <Wrap>
              {results[category] &&
                results[category].map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    backgroundImg={product.image}
                    price={product.price}
                    description={product.description.slice(0, 50)}
                  />
                ))}
            </Wrap>
          </Container>
        ))}
    </div>
  );
}

export default Section;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8vw;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  row-gap: 25px;
  flex-wrap: wrap;
`;
