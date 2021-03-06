
//Funções do Plano
function getPlano(id) {
    fetch('/getPlano/' + id)
        .then((response) => {
           response.json().then((data) => {
                document.querySelector(`#nome-${id}`).value = data.nome;
                document.querySelector(`#status-${id}`).value = data.status;
            });
        }) 
        .catch(() => alert('Erro'));
}

function deletePlano(id) {
    let init = {
        method: 'delete'
    };
    fetch('/deletePlano/' + id, init)
        .then(() => window.location.reload())
        .catch(() => alert('Erro'));
}

function createPlano() {
    let values = document.querySelector('#create-plano');
    let form = new FormData(values);
    fetch('/createPlano', {
        method: 'post',
        body: form
    })
        .then(() => window.location.reload())
        .catch(() => alert('Erro'));
}

function updatePlano(id) {
    let values = document.getElementById(`update-plano-${id}`);
    let form = new FormData(values);
    let header = new Headers();
    fetch(`/updatePlano/${id}`, {
        method: 'post',
        body: form
    })
        .then(() => window.location.reload())
        .catch(() => alert('Erro'));
}

//Funções da Clínica
function getClinica(id) {
    fetch('/getClinica/' + id)
        .then((response) => {
           response.json().then((data) => {
                document.querySelector(`#cnpj-${id}`).value = data.cnpj;
                document.querySelector(`#nome-${id}`).value = data.nome;
            });
        }) 
        .catch(() => alert('Erro'));
}


function createClinica() {
    let values = document.querySelector('#create-clinica');
    let form = new FormData(values);
    fetch('/createClinica', {
        method: 'post',
        body: form
    })
        .then(() => window.location.reload())
        .catch(() => alert('Erro'));
}

function deleteClinica(id) {
    let init = {
        method: 'delete'
    };
    fetch('/deleteClinica/' + id, init)
        .then(() => window.location.reload())
        .catch(() => alert('Erro'));
}

function updateClinica(id) {
    let values = document.getElementById(`update-clinica-${id}`);
    let form = new FormData(values);
    let header = new Headers();
    fetch(`/updateClinica/${id}`, {
        method: 'post',
        body: form
    })
        .then(() => window.location.reload())
        .catch(() => alert('Erro'));
}

//Funções de Relacionamento Clinica x Plano
function getPlanosEmClinicas(id) {
    fetch('/getPlanosEmClinicas/'+ id)
        .then((response) => {
            response.json().then((data) => {
                return data.pivot;
            });
        }) 
        .catch(() => alert('Erro'));
}

function createPlanoClinica() {
    let values = document.querySelector('#create-plano-clinica');
    let planoId = values.plano_id.value;
    let clinicaId = values.clinica_id.value;
    let form = new FormData(values);
    fetch(`/createPlanosEmClinicas/plano/${planoId}/clinica/${clinicaId}`, {
        method: 'post',
        body: form
    })
        .then(() => window.location.reload())
        .catch(() => alert('Erro'));
}

function deletePlanoEmClinica(planoId, clinicaId) {
    let init = {
        method: 'delete'
    };
    fetch(`/deletePlanosEmClinicas/plano/${planoId}/clinica/${clinicaId}`, init)
        .then(() => window.location.reload())
        .catch(() => alert('Erro'));
}
