import React, { useEffect, useState } from 'react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/footer';
import ProductDetails from '../components/Products/ProductDetails.jsx';
import { useParams } from 'react-router-dom';
import { productData } from '../static/data';
import SuggestedProduct from '../components/Products/SuggestedProducts.jsx';

const ProductDetailsPage = () => {
    const { name } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        // Check if name is defined before using it
        if (name) {
            const productName = name.replace(/-/g, '');
            const product = productData.find(
                (item) => item.name.toLowerCase().replace(/\s+/g, '') === productName.toLowerCase()
            );

            if (product) {
                setData(product);
            }
        }
    }, [name]);

    return (
        <div>
            <Header />
            <ProductDetails data={data} />
            {data && <SuggestedProduct data={data} />}
            <Footer />
        </div>
    );
};

export default ProductDetailsPage;
