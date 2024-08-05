//your JS code here. If required.
document.getElementById('btn').addEventListener('click', () => {
    // Retrieve the value from the input field
    const inputNumber = parseFloat(document.getElementById('ip').value);
    
    if (isNaN(inputNumber)) {
        document.getElementById('output').textContent = 'Please enter a valid number.';
        return;
    }

    // Create a promise that resolves after 2 seconds with the input number
    const initialPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(inputNumber);
        }, 2000);
    });

    // Chain promises to perform the transformations
    initialPromise
        .then((number) => {
            document.getElementById('output').textContent = `Result: ${number}`;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(number * 2); // Multiply by 2
                }, 1000);
            });
        })
        .then((number) => {
            document.getElementById('output').textContent = `Result: ${number}`;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(number - 3); // Subtract 3
                }, 1000);
            });
        })
        .then((number) => {
            document.getElementById('output').textContent = `Result: ${number}`;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(number / 2); // Divide by 2
                }, 1000);
            });
        })
        .then((number) => {
            document.getElementById('output').textContent = `Result: ${number}`;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(number + 10); // Add 10
                }, 1000);
            });
        })
        .then((number) => {
            document.getElementById('output').textContent = `Final Result: ${number}`;
        })
        .catch((error) => {
            document.getElementById('output').textContent = `Error: ${error.message}`;
        });
});
