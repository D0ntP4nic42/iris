<script lang="ts">
    let cpfInput : string;
    let senhaInput : string;
</script>

<div class="container d-flex justify-content-center w-50 h-50">
    <form class="form-control form-container">
        <label id="cpfLabel" for="cpfInput" class="mt-3">CPF</label><br>
        <input class="form-control mb-3 input-group"  id="cpfInput" type="text" placeholder="000.000.000-00" />
        <label  class="mt-3" id="senhaLabel" for="senhaInput">SENHA</label><br>
        <input class="form-control mb-3 input-group" id="senhaInput" type="password" placeholder=""/>
        <input type="submit" class="btn btn-primary mt-3 mb-3" value="Entrar"/>
    </form>
</div>

<style>
    .input-group {
        background-color: #AFAEA2;
    }
    .form-container {
        background-color: #E6E6E2;
    }
    .btn-primary {
        background-color: #1351B4;
    }
</style>
