//let host = process.env.NEXT_PUBLIC_BACKEND_HOST;

let host = "http://localhost:8082";

let findAllOrders = () => {
 return fetch(host + '/orders')
        .then(x => x.json()); 
};

let saveOrder = (order) => {
    return fetch(host + "/orders", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            customerId: order.customerId,
            total: order.total,
            shippingAddress: {
                state: order.state,
                city: order.city,
                postalCode: order.postalCode
            },
            items: [
                {
                    name: order.itemName,
                    quantity: order.itemQuantity,
                    price: order.itemPrice
                }
            ],
            payment: {
                method: order.paymentMethod,
                number: order.paymentNumber,
                billingAddress: {
                    state: order.billingState,
                    city: order.billingCity,
                    postalCode: order.billingPostalCode
                }
            }
        })
    }).then(response =>
    {
        if (response.status == 200 || response.status == 201) return response.json();
        return null;
    })
        .then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}

let data = {
    orders: findAllOrders,
    saveOrder: saveOrder
};

export default data;