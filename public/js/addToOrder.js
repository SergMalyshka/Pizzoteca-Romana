const buttons = document.querySelectorAll('.add')

for (button of buttons) {
    button.addEventListener('click', async function (event) {
        const name = event.target.dataset.name;
        const price = event.target.dataset.price;

        const response = await fetch('/api/orders/addToOrder', {
            method: 'POST',
            body: JSON.stringify({ name, price }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            alert("item added to card")
        } else {
            alert("sadface")
        }
    })
}