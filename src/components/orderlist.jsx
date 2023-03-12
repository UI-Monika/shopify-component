import React from "react";
import ordersData from "../assets/orders";
import productData from "../assets/products";

function Orderlist() {
  const orders = ordersData.orders;
  const products = productData.products;

  console.log(orders);
  return (
    <div className="p-6">
      <div className="bg-white">
        <table className="w-full text-left">
          <thead colSpan={7}>
            <tr className="border-b-2 border-gray-200 ">
              <th className="px-4 py-3.5"><input type="checkbox"/></th>
              <th className="px-4 py-3.5	">Order Id</th>
              <th className="px-4 py-3.5	">Date</th>
              <th className="px-4 py-3.5	">Total</th>
              <th className="px-4 py-3.5	">Payment Status</th>
              <th className="px-4 py-3.5	">Fulfilment Status</th>
              <th className="px-4 py-3.5	">Items</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td colSpan={7}>
                  <table className="w-full text-left" >
                   
                      <tr
                        key={order.id}
                        className="border-b-2 border-gray-200 "
                      >
                        <td className="p-4"><input type="checkbox" /></td>
                        <td className="p-4">
                          <h2>{order.id}</h2>
                        </td>
                        <td className="p-4">{order.processed_at}</td>
                        <td className="p-4">{order.total_price}</td>
                        <td className="p-4">{order.financial_status}</td>
                        <td className="p-4">
                          {order.fulfillment_status ? "Done" : "Unfulfillment"}
                        </td>
                        <td className="p-4">{order.line_items.length}</td>
                      </tr>

                      {order.line_items.map((lineitem) => (
                        <tr
                          key={lineitem.id}
                          className="border-b-2 p-4	 border-gray-200"
                        >
                          {products.find(
                            (product) => product.id === lineitem.product_id
                          ) && (
                            <td className="p-4">
                              <img
                                src={
                                  products.find(
                                    (product) => product.id === lineitem.product_id )?.image.src
                                }
                                className="w-14"
                                alt={lineitem.name}
                              />
                            </td>
                          )}
                          <td className="p-4" colSpan={1}>{lineitem.name}</td>
                          <td className="p-4">{lineitem.product_id}</td>
                          <td className="p-4">{lineitem.price}</td>
                          <td className="p-4">{lineitem.variant_title}</td>
                        </tr>
                      ))}
                   
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orderlist;
