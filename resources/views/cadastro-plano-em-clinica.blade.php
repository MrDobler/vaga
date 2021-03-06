<form  id="create-plano-clinica" method="POST">
    <h4>Adicionar Plano de Saúde na Clínica</h4>
    <div class="form-group">
        <label>Nome do Plano</label>
        <select name="plano_id">
        @foreach ($planos as $p)
            @if ($p->status != 0)
                <option value="{{$p->id}}">{{$p->nome}}</option>
            @endif
        @endforeach
        </select>
    </div>
    <div class="form-group">
        <label>Nome da Clínica</label>
        <select name="clinica_id">
        @foreach ($clinicas as $c)
                <option value="{{$c->id}}">{{$c->nome}}</option>
        @endforeach
        </select>
    </div>
    <div class="modal-footer">
        <button class="btn btn-primary" onclick="createPlanoClinica()" type="button">Cadastrar</button>
    </div>
</form>
