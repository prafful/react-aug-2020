import React from 'react';
import AllProducts from './allproducts';


class Content extends React.Component {
    state = {  }
    render() { 
        return ( 
        <div>
            Content component!
            <AllProducts></AllProducts>
        </div>
         );
    }
}
 
export default Content;