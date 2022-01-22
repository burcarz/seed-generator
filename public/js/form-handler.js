
const seedArr = [];

async function getSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('form');
    let modelName = document.getElementById('modelName').value.trim();
    const key = document.getElementById('key').value;
    const option = document.getElementById('option');
    let value = option.options[option.selectedIndex].text;
    seedArr.push({key: key, value: value});
    console.log(seedArr);

    form.reset();
}

async function sendData(seedData) {
    console.log('clicked');
    const res = await fetch('../api/seeds', {
        method: 'POST',
        body: JSON.stringify(seedData),
        headers: { 
            'Content-Type': 'application/json' 
        }
    });

    if (res.ok) {
        console.log('success')
    } else {
        console.log('failed');
    }
}

document.getElementById('submit-btn').addEventListener('click', getSubmit);
document.getElementById('create-btn').addEventListener('click', (e) => {
    sendData(seedArr)
});