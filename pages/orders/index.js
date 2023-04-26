import styles from "../../styles/orders.module.css";
import data from '../../data/data'
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    data.orders()
      .then((data) => {
        setOrders(data);
        setLoading(false);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);

  // if (loading) {
  //   return <Spinner />;
  // } else
    return (
      <>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Customer Id</th>
                <th>Total</th>
                <th>Shipping Address</th>
                <th>Items</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o, i) => (
                <tr key={i}>
                  <td data-label="Customer Id">{o.customerId}</td>
                  <td data-label="Total">{o.total}</td>
                  <td data-label="Shipping Address">{o.shippingAddress.city + ", " +
                      o.shippingAddress.state + " " + o.shippingAddress.postalCode}</td>
                  <td data-label="Items">
                    <ul>
                      {o.items.map ((item, j) => (
                        <li key={j} className={styles.item_list}>
                          {item.quantity}x {item.name} (${item.price} ea.)
                        </li>
                          ))}
                    </ul>
                  </td>
                  <td data-label="Payment">{o.payment.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default Orders;
