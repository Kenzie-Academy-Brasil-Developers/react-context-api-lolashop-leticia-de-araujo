import { createContext } from "react";

import { v4 as uuidv4 } from "uuid";

export const ProductsContext = createContext({});

export const ProductsProvider = ({children}) => {

    const products = [
        {
          id: uuidv4(),
          src: "https://i.ibb.co/mHRg786/wood-notebooks-mockup-opened-and-closed.jpg",
          alt: "wood-notebook",
          category: "Notebooks",
          name: "Wood Notebook",
          description:
            "Take your notes in a dotted notebook in a wood-like colour and large size leaving plenty of room for all your bright ideas.",
          price: 11.99,
        },
        {
          id: uuidv4(),
          src: "https://i.ibb.co/9nnkXHW/notebooks-with-plastic-rings-mockup-top-view.jpg",
          alt: "christmas-planner",
          category: "Notebooks",
          name: "Christmas Planner",
          description:
            "Make it easy to plan your days and keep your notes safe with this beautiful christmas-themed daily planner.",
          price: 15.99,
        },
        {
          id: uuidv4(),
          src: "https://i.ibb.co/SxdyDSB/collapsible-silicone-water-bottles-mockup.jpg",
          alt: "purple-bottles",
          category: "Bottles",
          name: "Purple Water Bottle Kit",
          description:
            "Keep yourself hydrated with this beautiful kit, which contains a large and a smaller bottle in a vibrant purple shade.",
          price: 18.99,
        },
        {
          id: uuidv4(),
          src: "https://i.ibb.co/PQvCR7t/bottle-with-sport-cap-mockup-isometric-right-view.jpg",
          alt: "blue-bottle",
          category: "Bottles",
          name: "Sports Water Bottle",
          description:
            "Stay hydrated with this cute light blue water bottle with sports cap.",
          price: 10.99,
        },
        {
          id: uuidv4(),
          src: "https://i.ibb.co/xKkH54T/multicolor-retractable-pens-mockup.jpg",
          alt: "pens-kit",
          category: "Pens & pencils",
          name: "Multicolor Pen Set",
          description:
            "Enjoy the convenience of this fun retractable 4-in-1 pen set.",
          price: 9.99,
        },
        {
          id: uuidv4(),
          src: "https://i.ibb.co/894bzy1/hexagonal-pencils-mockup.jpg",
          alt: "pencil-set",
          category: "Pens & pencils",
          name: "Hexagonal Pencil Set",
          description: "Write down your best ideas with this hexagonal pencil set.",
          price: 5.99,
        },
      ];


    return (
        <ProductsContext.Provider  value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}