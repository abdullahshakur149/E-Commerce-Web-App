import React, { useEffect, useState } from "react";
import { productData } from "../../static/data";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";

const SuggestedProducts = ({ data }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (data && productData) {
      const relatedProducts = productData.filter((product) => product.category === data.category);
      setProducts(relatedProducts);
    }
  }, [data]);

  return (
    <div>
      {data ? (
        <div className={`${styles.section} `}>
          <h2 className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}>
            Related Products
          </h2>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {products &&
              products.map((product, index) => (
                <ProductCard data={product} key={index} />
              ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SuggestedProducts;
