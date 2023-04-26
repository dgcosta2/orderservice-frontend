
import styles from "../../styles/orders.add.module.css";
import { useForm } from 'react-hook-form';
import data from '../../data/data'

const Order = () => {
    const { register, handleSubmit, errors, reset } = useForm();

    let save = async (values) => {

        console.log(values);
        const response = await data.saveOrder(values);
        console.log(response);
        if(response != null){
            reset();

        }

    }

    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.form_title}>Add a new order</h1>
                <form action="#" onSubmit={handleSubmit(save)}>
                    <div className={styles.main_user_info}>
                        <div className={styles.user_input_box}>
                            <label htmlFor="customerId">Customer Id</label>
                            <input type="number"
                                   id="customerId"
                                   name="customerId"
                                   {...register('customerId',
                                       {required: true,
                                               message: 'please enter a customer Id' })}
                                   placeholder="Enter Customer Id"/>

                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="Total">Total</label>
                            <input type="number"
                                   id="total"
                                   name="total"
                                   {...register('total',
                                       {required: true,
                                               message: 'please enter the total of the order' })}
                                   placeholder="Enter Order Total"/>

                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="ShippingAddress">Shipping Address State</label>
                            <input type="text"
                                   id="state"
                                   name="state"
                                   {...register('state',
                                       {required: true,
                                               message: 'please enter the state for the shipping address' })}
                                   placeholder="Enter State"/>
                            <label htmlFor="ShippingAddress">Shipping Address City</label>
                            <input type="text"
                                   id="city"
                                   name="city"
                                   {...register('city',
                                       {required: true,
                                               message: 'please enter the city for the shipping address' })}
                                   placeholder="Enter City"/>
                            <label htmlFor="ShippingAddress">Shipping Address Postal Code</label>
                            <input type="text"
                                   id="postalCode"
                                   name="postalCode"
                                   {...register('postalCode',
                                       {required: true,
                                               message: 'please enter the postal code for the shipping address' })}
                                   placeholder="Enter Postal Code"/>

                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="item">Item Name</label>
                            <input type="text"
                                   id="itemName"
                                   name="itemName"
                                   {...register('itemName',
                                       {required: true,
                                           message: 'please enter the item name' })}
                                   placeholder="Enter item name"/>
                            <label htmlFor="item">Item Quantity</label>
                            <input type="number"
                                   id="itemQuantity"
                                   name="itemQuantity"
                                   {...register('itemQuantity',
                                       {required: true,
                                           message: 'please enter the item quantity' })}
                                   placeholder="Enter item quantity"/>
                            <label htmlFor="item">Item Price</label>
                            <input type="text"
                                   id="itemPrice"
                                   name="itemPrice"
                                   {...register('itemPrice',
                                       {required: true,
                                           message: 'please enter the item price' })}
                                   placeholder="Enter item price"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="paymentMethod">Payment Method</label>
                            <input type="text"
                                   id="paymentMethod"
                                   name="paymentMethod"
                                   {...register('paymentMethod',
                                       {required: true,
                                           message: 'please enter the payment method' })}
                                   placeholder="Enter Payment Method"/>
                            <label htmlFor="paymentMethod">Payment Number</label>
                            <input type="text"
                                   id="paymentNumber"
                                   name="paymentNumber"
                                   {...register('paymentNumber',
                                       {required: true,
                                           message: 'please enter the payment number' })}
                                   placeholder="Enter Payment Number"/>
                            <label htmlFor="Billing State">Billing State</label>
                            <input type="text"
                                   id="billingState"
                                   name="billingState"
                                   {...register('billingState',
                                       {required: true,
                                           message: 'please enter the billing state' })}
                                   placeholder="Enter Billing State"/>
                            <label htmlFor="Billing City">Billing City</label>
                            <input type="text"
                                   id="billingCity"
                                   name="billingCity"
                                   {...register('billingCity',
                                       {required: true,
                                           message: 'please enter the billing city' })}
                                   placeholder="Enter Billing City"/>
                            <label htmlFor="Billing City">Billing Postal Code</label>
                            <input type="text"
                                   id="billingPostalCode"
                                   name="billingPostalCode"
                                   {...register('billingPostalCode',
                                       {required: true,
                                           message: 'please enter the billing postal code' })}
                                   placeholder="Enter Billing Postal Code"/>
                        </div>


                    </div>

                    <div className={styles.form_submit_btn}>
                        <input type="submit" value="save" ></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Order;