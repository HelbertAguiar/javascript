function renderizaTabela(event) {

    var input = event.target;
    var reader = new FileReader();
    var id_table = 'table';

    let el_hr = document.getElementById("progress");
    el_hr.setAttribute('class', 'determinate');

    reader.onload = function () {
        
        let text = reader.result;
        constroiTabela(text, id_table);

        let el_busca = document.getElementById("pesquisa");
        el_busca.removeAttribute('disabled');

        let el_btn = document.getElementById("btn_estatistica");
        el_btn.removeAttribute('disabled');

    };
    
    reader.readAsText(input.files[0]);
    
};

function constroiTabela ( csv , id_table ) {

    var rows = csv.split('\n'),
    table = document.getElementById(id_table);
    tr = null, td = null,
    tds = null;

    for ( var i = 0; i < rows.length; i++ ) {
        
        tr = document.createElement('tr');
        tds = rows[i].split(';');

        for ( var j = 0; j < tds.length; j++ ) {
           td = document.createElement('td');
           td.innerHTML = tds[j];
           tr.appendChild(td);
        }

        if ( i === 0) {
            tr.setAttribute('id', 'tr_cabecalho');
        } else {
            tr.setAttribute('id', tds[0]);
            tr.setAttribute('style', 'display:none');
        }
        table.appendChild(tr);
    }

    // PERMITE PREENCHER O CAMPO INPUT, DESBLOQUEIA-O
    theader = document.getElementById('tr_cabecalho').removeAttribute('disabled');

}

function trata_input(event){

    const rows = document.querySelectorAll('tr');
    rows.forEach(function(row) {
        row.setAttribute('style', 'display:none');
    })

    var input = event.target;
    console.log('A chave eh: ' + input.value);
    
    el = document.getElementById(input.value)
    if (typeof(el) != 'undefined' && el != null) {
        el.removeAttribute('style');
    } else {
        console.log('Não foi localizado o registro nº: ' + input.value + ' na tabela');
        M.toast({html: 'Não foi localizado o registro nº: ' + input.value + ' na tabela'})
    }

    header = document.getElementById('tr_cabecalho').removeAttribute('style');

}