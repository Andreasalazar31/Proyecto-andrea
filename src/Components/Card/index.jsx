// This is a functional component named "Card" that takes a "data" prop.
const Card = (data) => {
  
  // The component returns JSX to render a card with product information.
  return (
      <div className="bg-pink-300 cursor-pointer w-56 h-96 rounded-ig overflow-hidden shadow-ig transition-transform transform hover:scale-105">
          {/* The figure element contains the product name and image */}
          <figure className="relative mb-13 w-full h-4/5">
              {/* Display the product name on a white background */}
              <span className="absolute bottom-0 left-0 bg-white/80 rounded-Ig text-black text-xs m-2 px-7 py-0.5">
                  {data.data.name}
              </span>
              
              {/* Display the product image with specified styling */}
              <img
                  className="w-full h-full object-cover rounded-t-lg mt-0"
                  src={data.data.photo}
                  alt=""
                  srcSet=""
              />
              
              {/* Display additional product details */}
              <div>
                  <p>{data.data.color}</p>
                  <p>{data.data.size}</p>
                  <p>{data.data.material}</p>
                  <p>{data.data.price}</p>
              </div>
          </figure>
          
          {/* Display product details in a flex container */}
          <p className="flex justify-between">
              {/* Display individual product details with appropriate styling */}
              <span className="text-lg font-medium ">{data.color}</span>
              <span className="text-lg font-medium ">{data.size}</span>
              <span className="text-lg font-medium ">{data.material}</span>
              <span className="text-sm font-light">${data.data.price}</span>
          </p>
      </div>
  );
};

// Export the Card component as the default export.
export default Card;
