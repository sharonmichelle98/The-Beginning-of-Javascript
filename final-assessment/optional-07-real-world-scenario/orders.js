// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const id = generateUniqueId();
  const status = 'Menunggu';
  const totalPrice = items.reduce((acc, items) => acc + items.price, 0);
  
  const newOrders = {
    id,
    customerName,
    items,
    totalPrice,
    status,
  }

  orders.push(newOrders);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const updatedOrderIndex = orders.findIndex((order) => order.id === orderId);

  orders[updatedOrderIndex] = {
    ...orders[updatedOrderIndex],
    status,
  };
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const finishedOrder = orders.filter((order) => order.status == 'Selesai');
  return finishedOrder.reduce((acc, order) => acc + order.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const deletedOrderIndex = orders.filter((order) => order.id === id);
  orders.splice(deletedOrderIndex, 1);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
