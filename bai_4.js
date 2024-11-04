class Worker {
    constructor(id, name, dob, address, salary, position) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.address = address;
        this.salary = salary;
        this.position = position;
    }
}

const workers = [];

document.getElementById('workerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const salary = parseFloat(document.getElementById('salary').value);
    const position = document.getElementById('position').value;

    const worker = new Worker(workers.length + 1, name, dob, address, salary, position);
    workers.push(worker);
    document.getElementById('workerForm').reset();
});