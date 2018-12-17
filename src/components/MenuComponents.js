import React, { Component } from 'react';
import { Media } from 'reactstrap';
 class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                {
                  id: 0,
                  name:'Whole Wheat Pizza',
                  image: 'assets/images/wholewheatpizza.JPG',
                  category: 'mains',
                  label:'Hot',
                  price:'4.99',
                  description:'Fresh baked whole wheat pizza'                        },
               {
                  id: 1,
                  name:'Chickpea Stew',
                  image: 'assets/images/chickpeastew.jpg',
                  category: 'appetizer',
                  label:'',
                  price:'1.99',
                  description:'Organic vegetarian friendly chickpea stew'                        },
               {
                  id: 2,
                  name:' Apple Cinnamon Low carb donuts',
                  image: 'assets/images/lowcarbdonuts.jpg',
                  category: 'appetizer',
                  label:'New',
                  price:'1.99',
                  description:'Keto friendly low carb apple cinnamon donuts'                        },
               {
                  id: 3,
                  name:'Chocolate Vegan Low carb Cheesecake',
                  image: 'assets/images/cheesecake.jpeg',
                  category: 'dessert',
                  label:'',
                  price:'2.99',
                  description:'Dairy,gluten and soy free'                        }
               ],
        };
    }
     render() {
        const menu = this.state.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object src={dish.image} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                  </Media>
                </Media>
              </div>
            );
        });
         return (
          <div className="container">
            <div className="row">
              <Media list>
                  {menu}
              </Media>
            </div>
          </div>
        );
    }
}
 export default Menu; 