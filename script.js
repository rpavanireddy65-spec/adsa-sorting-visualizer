let array = [];

let comparisons = 0;

let swaps = 0;


// CREATE ARRAY
function createArray() {

    let input =
        document.getElementById("inputArray").value;


    array = input
        .split(",")
        .map(Number)
        .filter(number => !isNaN(number));


    if (array.length === 0) {

        alert("Please enter numbers!");

        return;
    }


    comparisons = 0;

    swaps = 0;


    updateInformation();

    displayArray();
}


// RANDOM ARRAY
function generateRandom() {

    array = [];


    for (let i = 0; i < 10; i++) {

        let number =
            Math.floor(Math.random() * 90) + 10;

        array.push(number);
    }


    comparisons = 0;

    swaps = 0;


    updateInformation();

    displayArray();
}


// DISPLAY ARRAY
function displayArray(highlight = []) {

    let box =
        document.getElementById("arrayBox");


    box.innerHTML = "";


    let max =
        Math.max(...array);


    array.forEach((number, index) => {

        let bar =
            document.createElement("div");


        bar.className = "bar";


        bar.style.height =
            `${(number / max) * 200 + 40}px`;


        bar.innerText = number;


        if (highlight.includes(index)) {

            bar.style.background =
                "#e74c3c";
        }


        box.appendChild(bar);

    });
}


// UPDATE INFORMATION
function updateInformation() {

    document.getElementById("comparisons")
        .innerText = comparisons;


    document.getElementById("swaps")
        .innerText = swaps;
}


// DELAY
function wait(milliseconds) {

    return new Promise(resolve => {

        setTimeout(resolve, milliseconds);

    });
}


// START SORTING
async function startSort() {

    if (array.length === 0) {

        alert("Create an array first!");

        return;
    }


    comparisons = 0;

    swaps = 0;


    updateInformation();


    let algorithm =
        document.getElementById("algorithm").value;


    if (algorithm === "bubble") {

        document.getElementById("algorithmName")
            .innerText = "Bubble Sort";


        document.getElementById("complexity")
            .innerText = "O(n²)";


        document.getElementById("explanation")
            .innerText =
            "Bubble Sort compares neighboring elements and swaps them when they are in the wrong order.";


        await bubbleSort();

    }


    else if (algorithm === "selection") {

        document.getElementById("algorithmName")
            .innerText = "Selection Sort";


        document.getElementById("complexity")
            .innerText = "O(n²)";


        document.getElementById("explanation")
            .innerText =
            "Selection Sort finds the smallest element and places it in the correct position.";


        await selectionSort();

    }


    else if (algorithm === "insertion") {

        document.getElementById("algorithmName")
            .innerText = "Insertion Sort";


        document.getElementById("complexity")
            .innerText = "O(n²)";


        document.getElementById("explanation")
            .innerText =
            "Insertion Sort builds the sorted array one element at a time.";


        await insertionSort();

    }


    displayArray();

}


// BUBBLE SORT
async function bubbleSort() {

    for (
        let i = 0;
        i < array.length;
        i++
    ) {


        for (
            let j = 0;
            j < array.length - i - 1;
            j++
        ) {


            comparisons++;


            displayArray([j, j + 1]);


            await wait(400);


            if (
                array[j] >
                array[j + 1]
            ) {


                let temp =
                    array[j];


                array[j] =
                    array[j + 1];


                array[j + 1] =
                    temp;


                swaps++;

            }


            updateInformation();

        }

    }

}


// SELECTION SORT
async function selectionSort() {

    for (
        let i = 0;
        i < array.length;
        i++
    ) {


        let minimum = i;


        for (
            let j = i + 1;
            j < array.length;
            j++
        ) {


            comparisons++;


            displayArray([
                minimum,
                j
            ]);


            await wait(400);


            if (
                array[j] <
                array[minimum]
            ) {

                minimum = j;

            }


            updateInformation();

        }


        if (minimum !== i) {


            let temp =
                array[i];


            array[i] =
                array[minimum];


            array[minimum] =
                temp;


            swaps++;


            displayArray([
                i,
                minimum
            ]);


            await wait(400);

        }

    }

}


// INSERTION SORT
async function insertionSort() {

    for (
        let i = 1;
        i < array.length;
        i++
    ) {


        let key =
            array[i];


        let j =
            i - 1;


        while (
            j >= 0 &&
            array[j] > key
        ) {


            comparisons++;


            displayArray([
                j,
                j + 1
            ]);


            await wait(400);


            array[j + 1] =
                array[j];


            swaps++;


            j--;


            updateInformation();

        }


        array[j + 1] =
            key;

    }

}