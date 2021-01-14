import React from "react";

const CatList = (props) => {
  const listCats = props.catPics.map((cat) => {
    return <img key={cat.id} src={cat.url} alt={cat.id} />;
  });
  return <div>{listCats}</div>;
};
export default CatList;
