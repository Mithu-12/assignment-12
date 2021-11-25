import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hook/useFirebase';
import { Table } from "react-bootstrap";


const Orderlist = () => {
    const [orders, setOrders] = useState([]);
    // const {email, id} = useParams();
    const {user} = useFirebase();
    useEffect(() => {
        fetch(`https://rocky-dawn-87593.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
        .then(data => setOrders(data))
    }, [orders])
  console.log(orders);
    const handleDelete = id => {
        const proced = window.confirm("Are you sure you want to remove")
        if (proced) {
          console.log(id);
          const uri = `https://rocky-dawn-87593.herokuapp.com/orders/${id}`;
            fetch(uri, {
              method: "DELETE",
              headers: {'content-type': 'application/json'}
            })
              .then(res => res.json())
                .then(data => {
                  console.log(data);
                  if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = orders.filter(order => order._id !== id);
                  setOrders(remaining)
                }
                  
                })
         
        }
              
  }

    return (
        <div>
            
            <h3 className="my-5 text-center">My Orders: {orders?.length}</h3>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders?.map((order, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{order?.name}</td>
              <td>$ {order?.price}</td>
              <td> {order.status}</td>
              <button onClick={() =>  handleDelete(order._id)}
               className="  ms-1 w-50 btn-warning">Remove
             </button>
            </tr>
          </tbody>
        ))}
      </Table>
        </div>
    );
};

export default Orderlist;

