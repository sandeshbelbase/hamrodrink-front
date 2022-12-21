import React, { useState } from 'react';
import ProductSidenav from "./ProductSidenav";
import orders from "./orders.json"

const OrderList = () => {

const [contacts, setContacts] =useState(orders);

  return (
   <div className="row">
        <div className="col-md-3">
          <ProductSidenav/>
        </div>
        <div className="col-md-9">
            <div className="Orderlists">
                <table>
                    <thead>
                    <tr>
                        <th>SN</th>
                        <th>orderID</th>
                        <th>productName</th>
                        <th>customerName</th>
                        <th>address</th>
                        <th>phoneNumber</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                        {contacts.map((Orderlists) => (
                        <tr>
                            <td>{Orderlists.SN}</td>
                            <td>{Orderlists.orderID}</td>
                            <td>{Orderlists.productName}</td>
                            <td>{Orderlists.customerName}</td>
                            <td>{Orderlists.address}</td>
                            <td>{Orderlists.phoneNumber}</td>
                            <td>{Orderlists.Total }</td>
                        </tr>
                        ))}
                    </tbody>             
            </table>
            
            </div>
        </div>
       
   </div>

  )
}

export default OrderList;