import { Container } from "react-bootstrap";
import Navbar1 from "./components/Navbar";
import Header1 from "./components/Header";
import Categories1 from "./components/category"
import CardItems1 from "./components/CardItems";
import Items from "./Data";
import { useState } from "react";



function App() {
  const [DataItems, setDataItems] = useState(Items);
  const allCateories = [ "الكل" ,...new Set(Items.map((i)=> i.Category))]
  console.log(allCateories)


//filtterby category
  const filterCategory = (cat) => {
    if (cat === "الكل") {
      setDataItems(Items)
    } else {
      const newArr = Items.filter((item) => item.Category === cat);
      setDataItems(newArr);
    }

  };
  //fiterBysearch
  const fiterBysearch = (word)=> {
    if(word !== ""){
      const newArr = Items.filter((item)=> item.title === word );
      setDataItems(newArr);

    }
  }

  return (
    <div className="color-body">
      <Navbar1 fiterBysearch={fiterBysearch} />
      <Container>
        <Header1 />
        <Categories1 filterCategory={filterCategory} allCateories={allCateories}  />
        <CardItems1 DataItems={DataItems}  />

      </Container>
    </div>
  );
}

export default App;
