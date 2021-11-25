import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../../Hook/useFirebase';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
    // const {email, id} = useParams();
    const {user} = useFirebase();
    useEffect(() => {
        fetch(`https://rocky-dawn-87593.herokuapp.com/allOrder`)
            .then(res => res.json())
        .then(data => setOrders(data))
    },[orders])
    const removeItem = (id) => {
        const proced = window.confirm("Are you sure you want to remove")
        if (proced) {
            console.log(id);
            fetch(`https://rocky-dawn-87593.herokuapp.com/allOrder/${id}`, {
              method: "DELETE",
              headers: {'content-type': 'application/json'}
            })
              .then(res => res.json())
                .then(data => {
                  console.log(data);
                  if (data.deletedCount) {
                    alert('Deleted')
                  const remaining = orders.filter(order => order._id !== id)
                  setOrders(remaining)
                }
                  
                })
         
        }
              
  }
  const handleUpdate = (id) => {
    const proced = window.confirm("Are you sure you want to remove");
    if (proced) {
      fetch(`https://rocky-dawn-87593.herokuapp.com/updateStatus/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then(res => {
        alert("update successfully")
      })
    }

    
    
  };


    return (
        <div>
            <h2 className="my-4 text-center">Manage All Orders</h2>
        <h5 className="mb-3 text-center">Total Orders: {orders?.length}</h5>
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
              <td>
                <input
                  onChange={handleStatus}
                  type="text"
                  
                  defaultValue={order.status}
                />
              </td>
              <button
                onClick={() => handleUpdate(order._id)}
                className="btn bg-warning p-2"
              >
                Update
              </button>
              <button onClick={() =>  removeItem(order._id)}
               className="  ms-1 w-50 btn-warning">Remove
             </button>
            </tr>
          </tbody>
        ))}
      </Table>
        </div>
    );
};

export default ManageAllOrder;