import React, {useState} from "react";
import { scrapeName, scrapeImage, scrapeMaterials} from "./scraper.js";
import "./SearchBar.css";
import ProductCard from "../ProductCard/ProductCard.js";

const SearchBar = () => {
  const [itemUrl, setItemUrl] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [materials, setMaterials] = useState({});

  //const [search, setSearch] = useState(false);

  const onChange = event => {
    setItemUrl(event.target.value);
  }

  const onSearch = async () => {
    console.log(itemUrl)
    let name = await scrapeName(itemUrl);
    setName(name);
    /*let image = await scrapeImage(itemUrl);
    setImage(image);
    let materials = await scrapeMaterials(itemUrl);
    setMaterials(materials);*/
  }
  
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        onChange={onChange}
        className="search-input"
      />
      <button className="search-button" onClick={onSearch}>
        Search
      </button>
      <ProductCard
        name={name}
        image={image}
        materials={materials}
      ></ProductCard>
    </div>
  );
}

export default SearchBar;