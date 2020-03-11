import React, { useState } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Image from "./Image";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { photos } from "./photos";

const SortablePhoto = SortableElement(item => <Image {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));

function App() {
  const [items, setItems] = useState(photos);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (window.confirm("Do you want to change? Click 'ok' to yes. Otherwise cansel it.")) { 
      setItems(arrayMove(items, oldIndex, newIndex));
    }
    
  };

  return (
    <div>
      <h3>Please drag image to move.</h3>
      <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
    </div>
  );
}
render(<App />, document.getElementById("app"));
