function hipHura(bilangan) {
    // Write your code here
    for (let i = 1; i <= bilangan; i++)
     if (i % 3 === 0 && i % 5 === 0) {
            console.log("Hip Hura");
        } else if (i % 3 === 0) {
            console.log("Hip");
        } else if (i % 5 === 0) {
            console.log("Hura");
        } else {
            console.log(i);
        }
        return ("done")
    }