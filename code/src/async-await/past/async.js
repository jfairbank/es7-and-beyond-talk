async function fetchCustomerNameForOrder(orderId) {
  let order, customer;

  try {
    order = await fetchOrder(orderId);
  } catch(err) {
    logError(err);
    throw err;
  }

  try {
    customer = await fetchCustomer(order.customerId);
    return customer.name;
  } catch(err) {
    logError(err);
    throw err;
  }
}
