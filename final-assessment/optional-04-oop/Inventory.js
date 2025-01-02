/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
    constructor(items) {
        this.items = [];
    }

    addItem(newItem) {
        return this.items.push(newItem);
    }

    removeItem(itemId) {
        const deletedItemIndex = this.items.findIndex((item) => item.id === itemId);
        this.items.splice(deletedItemIndex, 1);
    }

    listItems() {
        return this.items.map(eachItem => eachItem.displayDetails()).join('\n');
    }
}


// Jangan hapus kode di bawah ini!
export default Inventory;
