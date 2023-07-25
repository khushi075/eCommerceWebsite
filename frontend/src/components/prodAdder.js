import { useEffect, useState } from "react";
import axios from "axios";
import { useSAuthContext } from "../hooks/useSAuthContext";
import { useProductContext } from "../hooks/useProductContext";
import BestsellerSec from "./Bestseller"

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});
  

const ProdAdder = () => {
  const { products,dispatch } = useProductContext();
  const { seller } = useSAuthContext();
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [prod, setProd] = useState({
    name: "",
    photo: "",
    store: "",
    descr: "",
    price: "",
    region: "",
    category: "",
  });

  const handleChange = (e) => {
    setProd({
      ...prod,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoto = (e) => {
    setProd({
      ...prod,
      photo: e.target.files[0],
    });
    console.log(prod.photo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(seller._id);
    if (!seller) {
      setError("You must be logged in");
      return;
    }

    const { photo, ...rest } = prod;
  const emptyFields = Object.keys(rest).filter((key) => rest[key] === "");

  if (emptyFields.length > 0) {
    setEmptyFields(emptyFields);
    setError("Please fill in all fields");
    return;
  }
    // if (Object.values(prod).some((value) => value === "")) {
    //   setEmptyFields(Object.keys(prod));
    //   setError("Please fill in all fields");
    //   return;
    // }

    const formData = new FormData();
    formData.append("name", prod.name);
    formData.append("photo", prod.photo);
    formData.append("store", prod.store);
    formData.append("descr", prod.descr);
    formData.append("price", prod.price);
    formData.append("region", prod.region);
    formData.append("category", prod.category);
    formData.append("seller_id", seller._id);

    try {
      const response = await axiosInstance.post('/api/product/add', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${seller.token}`,
        },
      });
      const json = response.data;
      console.log("New Product Added", json);
      dispatch({ type: "ADD_PRODUCT", payload: json });
      setProd({
        ...prod,
        photo: "",
      });
      setProd({
        name: "",
        store: "",
        descr: "",
        price: "",
        region: "",
        category: "",
      });
      setError(null);
      setEmptyFields([]);
    } catch (error) {
      console.log(error);
      setError("Failed to add the product. Please try again.");
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch('api/products', {
        headers: {
          'Authorization': `Bearer ${seller.token}`
        }
      });
      const json = await res.json();
      if (res.ok) {
        dispatch({ type: 'GET_PRODUCTS', payload: json });
      }
    };
  
    if (seller) {
      fetchProduct();
    }
  }, [dispatch, seller]);
  

  return (
    <>
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="flex flex-col justify-center items-center p-0 my-16 mx-0 gap-y-5"
    >
      <div className="border border-gray-500 rounded-lg py-8 px-16 flex flex-col justify-center items-center gap-y-5">
        <h2 className="text-3xl font-medium m-0 py-2 px-0">Add a Product</h2>
        <div className="flex flex-col justify-center items-start gap-y-2">
          <label htmlFor="name">Product Name</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={prod.name}
            className="py-2 px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
          <div className="flex flex-col justify-center items-start gap-y-2">
            <label htmlFor="photo">Product Image</label>
             <input required type="file" name="photo" id="photo" onChange={handlePhoto} accept=".png, .jpg, .jpeg" className="py-2 px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
            </div>
           <div className="flex flex-col justify-center items-start gap-y-2">
             <label htmlFor="store">Product Store</label>
             <input required type="text" name="store" id="store" onChange={handleChange} value={prod.store} className="py-2 px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"/>
             </div>
             <div className="flex flex-col justify-center items-start gap-y-2">
             <label htmlFor="descr">Product Description</label>
             <textarea required name="descr" id="descr" onChange={handleChange} value={prod.descr} className="py-2 px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"/>
            </div>
             <div className="flex flex-col justify-center items-start gap-y-2">
            <label htmlFor="price">Product Price</label>
            <input required type="number" name="price" id="price" onChange={handleChange} value={prod.price} className="py-2 px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"/>
             </div>
            <div className="flex flex-col justify-center items-start gap-y-2">
            <label htmlFor="region">Product Region</label>
            <input required type="text" name="region" id="region" onChange={handleChange} value={prod.region} className="py-2 px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"/>
            </div>
            <div className="flex flex-col justify-center items-start gap-y-2">
            <label htmlFor="category">Product Category</label>
             <input required type="text" name="category" id="category" onChange={handleChange} value={prod.category} className="py-2 px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"/>
             </div>
        <button
          type="submit"
          className="border-black border font-medium py-2 px-4 rounded-md bg-black text-white mt-2 hover:bg-white hover:text-black"
        >
          Add Product
        </button>
        {error && <div className="error">{error}</div>}
        {emptyFields.length > 0 && (
          <div className="error">
            Please fill in the following fields:{" "}
            {emptyFields.map((field, index) => (
              <span key={index}>{field} </span>
            ))}
          </div>
        )}
      </div>
    </form>
    <div className="">
              {products && products.map((product) =>(
                <BestsellerSec key={product._id} product={product} />
              ))}
    </div>
    </>
  );
};

export default ProdAdder;
