const Category = (props) => {
  const data = [
    {
      link: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/s/m/y/m-st1-vebnor-original-imagn69kcwphkfrf.jpeg",
      name: "Black Casual Shirt",
      price:"499",
      oldPrice:"799"
    },
    {
      link: "https://rukminim2.flixcart.com/image/832/832/kflftzk0-0/t-shirt/y/b/n/m-aps-12-ausk-original-imafwyf9ecyzy7xn.jpeg",
      name: "Summer T-Shirt",
      price:"399",
      oldPrice:"599"
    },
    {
      link: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/2/w/i/38-epsjean-iceblu-urbano-fashion-original-imagm6ru959jfhp9.jpeg",
      name: "Denim Blue Jeans",
      price:"899",
      oldPrice:"1399"
    },
    {
      link: "https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/b/t/d/xxl-no-u28-jkt-wind-american-navy-ad-av-original-imagjkm5cvbcjwh3.jpeg",
      name: "Navy Blue Jacket",
      price:"1899",
      oldPrice:"999"
    },
  ];
  return (
    <div
      id={props?.id}
      className={props?.className}
    >
      <h1>Best of Fashion</h1>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <img src={item.link} alt={item.name} />
            <p>{item.name}</p>
            <p>₹{item.price}</p>
            <p>₹{item.oldPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
