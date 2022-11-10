function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');
    let newUL = document.createElement('ul')

    for (let i = 0; i < 5; i++) {
        let newLI = document.createElement('li');
        newLI.innerHTML = "Item add " + (i + 1);
        newUL.append(newLI);
    }

    ul.after(newUL);
}