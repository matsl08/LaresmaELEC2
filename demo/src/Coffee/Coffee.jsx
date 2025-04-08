import React, {useEffect, useState} from "react";
import { fetchData } from "./fetch_coffee_menu";
import './Coffee.css'

const Coffee = () => {
        const [coffeeMenu, setCoffeeMenu] = useState([]);

        useEffect(() => {
            const displayData = async () => {
                const data = await fetchData();
                setCoffeeMenu(data);
            };
            displayData();
        }, []);

        

    return (
        <>
      
        <table>
            <thead>
                <tr className="table_header">
                    <th colSpan={4}>
                        <h1>
                            Joie's Daily Cofffee Menu
                        </h1>
                    </th>
                </tr>
                <tr>
                    <th>Coffee</th>
                    <th>Size</th>
                    <th>Price (Hot)</th>
                    <th>Price (Cold)</th>
                </tr>
            </thead>
            <tbody>
        {coffeeMenu.map((item, index) => (
           <tr key={index}>
            <td>{item.coffee}</td>
            <td>{item.size}</td>
            <td>{item.price_hot}</td>
            <td>{item.price_cold}</td>
           </tr> 
        ))}
            </tbody>
        </table>
       
        </>
    );
};
export default Coffee;