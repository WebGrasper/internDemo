import "./CatalogueStyle.css";

const Catalogue = (props) => {
  const data = [
    {
      link: "https://bit.ly/48L0uSn",
      name: "Grocery",
    },
    {
      link: "https://bit.ly/46FgP90",
      name: "Mobiles",
    },
    {
      link: "https://img.freepik.com/premium-photo/closeup-red-blank-t-shirt-with-empty-space-yours-design-white-background-3d-rendering_476612-5218.jpg",
      name: "Fashion",
    },
    {
      link: "https://bit.ly/3td9Rtx",
      name: "Electronics",
    },
  ];
  return (
    <div
      id={props?.id}
      className={props?.className || "catalogue-main-container"}
    >
      <h1 className="catalogue-heading">Catalogue</h1>
      <div className="catalogue-container">
        {data.map((item, index) => (
          <div key={index} className="catalogue-item-container">
            <img src={item.link} alt={item.name} className="catalogue-image" />
            <h3 className="catalogue-item-name">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
