let counter = 0;
while (counter <= 10) {
    console.log(counter);
    counter++;

    if (counter == 3) {
        break;
    }
};


do {
    console.log(counter);
    counter++;
}
while (counter <= 10);