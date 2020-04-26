window.addEventListener('DOMContentLoaded', () => {
    arrBidimensional();
})



const arrBidimensional = () => {

    let cant = parseInt(prompt('Cantidad Filas'));
    let cant2 = parseInt(prompt('Cantidad Columnas')); 

/*     let rows = document.querySelector('#rows').value;
    let cols = document.querySelector('#cols').value;
    let cant2 = parseInt(cols);
    let cant = parseInt(rows); */

    let arr = new Array(cant);

    //Armando arr bidimensional
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(cant2);

        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = (Math.random() * 100).toFixed();
        }
    }
    console.log(arr);

    //Funciones al arr Bi
    pintarArray(arr);
    pintarResultados(arr);
}

const pintarArray = (arr) => {
    let rows = '';
    let cols = '';

    //Pinta Columnas
    cols += `<th scope="col">#Indice</th>`;
    for (var i = 0; i < arr[0].length; i++) {
        cols += `
            <th scope="col">Columna Posicion ${i}</th>
        `;
    }
    document.querySelector('#cols').innerHTML = cols;


    //Pinta Filas
    for (let i = 0; i < arr.length; i++) {

        rows += `<tr><th scope="row">${i}</th>`;
        for (let j = 0; j < arr[i].length; j++) {

            rows += `
                <td>${arr[i][j]}</td>                
            `;
        }
        rows += '</tr>';

    }
    document.querySelector('#rows').innerHTML = rows;

}

const sumaFirst = (arr) => {
    let sumaFirst = 0;
    for (let i = 0; i < arr.length; i++) {
        sumaFirst += parseInt(arr[i][0]);
    }
    return sumaFirst;
}

const sumaEnds = (arr) => {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += parseInt(arr[i][(arr[i].length) - 1]);
    }
    return suma;
}
const sumaCenter = (arr) => {
    let suma = 0;

    for (let i = 0; i < arr.length; i++) {
        let nPos = arr[i].length;


        //Impar
        if (nPos % 2 !== 0) {
            let pos = (nPos / 2) - 0.5;

            //sumando
            let num = parseInt(arr[i][pos]);
            suma += num;

            //Par
        } else {
            let pos1 = (nPos / 2) - 1;
            let pos2 = pos1 + 1;

            //sumando
            let num1 = parseInt(arr[i][pos1]);
            let num2 = parseInt(arr[i][pos2]);
            let num = num1 + num2;
            suma += num;
        }

        var res = suma;
    }

    return res;

}
const sumaRows = ()=>{ 

}

const pintarResultados = (arr)=>{ 
    const q = document.querySelector.bind(document)

    let sumaPrimeros = sumaFirst(arr);
    let sumaltimos = sumaEnds(arr);
    let sumaMedios = sumaCenter(arr);


    q('#sumaFisrt').innerHTML= `La suma de los varoles[x][0] = ${sumaPrimeros}`;
    q('#sumaCenter').innerHTML= `La suma de los varoles centrales = ${sumaMedios}`;
    q('#sumaEnds').innerHTML= `La suma de los varoles[x][ultimo]= ${sumaltimos}`;
}
