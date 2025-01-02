function fibonacci(n) {
    if (n === 0) {
        return [0];
    }
    
    if (n === 1) {
        return [0, 1];
    }

    const fiboArray = fibonacci(n - 1);
    return [...fiboArray, fiboArray[n - 1] + fiboArray[n - 2]];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
