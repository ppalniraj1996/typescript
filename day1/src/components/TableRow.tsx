import React from 'react';

type propsType = {
    value: {
        id: number;
        model: string;
        make_year: string;
        operating_system: string;
        price: number;
        screen_height: number;
        screen_width: number;
    }
    
    }
export const TableRow =(props:propsType)=>{

    const {id,model,make_year,operating_system,price,screen_height,screen_width}=props.value;

    return(
       <>
         <tr>
              <td>{id}</td>
              <td>{model}</td>
              <td>{make_year}</td>
              <td>{operating_system}</td>
              <td>{screen_height}</td>
              <td>{screen_width}</td>
              <td>{price}</td>
          </tr>   
       </> 
    )
}