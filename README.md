
## Layout of Bitebuddy App

* Header
    - Logo 
    - Nav-items

* Body 
    - Search Bar
    - Restraunt Container
      - Restraunt Cards
        - Food img
        - Rest Name
        - Cuisines, Star rating, Preperation Time
* Footer
    - Copyright
    - links
    - Contact Details
    - Address


const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="item-card">Hello World!</div>
      ))}
    </div>
  );
};

export default ItemList;

COVCELQ4KIDwt425hIXsDjCnEzgB
COVCELQ4KIDwt425hIXsDjCnEzgB
