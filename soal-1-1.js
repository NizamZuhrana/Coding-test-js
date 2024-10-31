function fibonacci(n) {
    // Inisialisasi dua elemen pertama dari deret Fibonacci
    let fib = [0, 1];

    // Jika n kurang dari atau sama dengan 0, tidak ada deret yang perlu ditampilkan
    if (n <= 0) {
        return;
    }

    // Cetak elemen pertama
    console.log(fib[0]);

    // Jika n hanya 1, kita sudah selesai karena hanya menampilkan angka 0
    if (n === 1) {
        return;
    }

    // Cetak elemen kedua
    console.log(fib[1]);

    // Lanjutkan menghitung elemen berikutnya hingga mencapai n elemen
    for (let i = 2; i < n; i++) { // Sesuaikan loop sampai < n (bukan <=)
        // Hitung elemen Fibonacci berikutnya sebagai penjumlahan dari dua elemen sebelumnya
        fib[i] = fib[i - 1] + fib[i - 2];

        // Cetak elemen yang baru saja dihitung
        console.log(fib[i]);
    }

    // Cetak elemen ke-n yang terakhir, sesuai dengan keperluan akhir
    console.log(fib[n - 1] + fib[n - 2]);
}

// function tampilkanFibonacci(n) {
//     fibonacci(n);
// }