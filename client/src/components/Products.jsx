import Product from "./Product";
const demoProduct = [
  {
    id: 0,
    image:
      "https://cdn.shopify.com/s/files/1/0745/0201/3236/products/WSBourbon_MarinerPerfumeCombo2160x2160.jpg?v=1681894148&width=1946",
    title: "Demo Product",
    rating: 5,
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "Demo Product2",
    rating: 5,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=553&q=80",
    title: "Demo Product3",
    rating: 5,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    title: "Demo Product4",
    rating: 5,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    title: "Demo Product5",
    rating: 5,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    title: "Demo Product6",
    rating: 5,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1541108564883-bec8126021f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    title: "Demo Product7",
    rating: 5,
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1610461888750-10bfc601b874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    title: "Demo Product8",
    rating: 5,
  },
];
const Products = () => {
  return (
    <>
      <h1 className="text-center font-bold text-4xl font-[cursive] my-10 ">
        Products
      </h1>
      <div className="p-2 flex items-center justify-center w-[100vw] gap-[5rem] flex-wrap">
        {demoProduct.map((product) => {
          return (
            <Product
              key={product.id}
              image={product.image}
              title={product.title}
              rating={product.rating}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
