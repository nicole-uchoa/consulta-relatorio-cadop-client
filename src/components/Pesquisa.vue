<template>
  <div class="container">
    <div class="row">
        <b-container fluid>
          <div class="col-sm-10">
            <h1>Lista de cadastro de operadoras ANS</h1>
            <hr><br><br>
              <h4>Buscar por Razão Social, Nome Fantasia ou Representante:</h4>
              <br>
          <b-form inline>
              <b-form-input
              v-model="message"
              id="inline-form"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="Busca textual">
              </b-form-input>
              <div class="evento">
                  <b-button v-on:click="getByNome" variant="outline-dark" size="sm">Busca</b-button>
              </div>
        </b-form>
        <br><br>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Registro ANS</th>
              <th scope="col">CNPJ</th>
              <th scope="col">Nome Fantasia</th>
              <th scope="col">Razão Social</th>
              <th scope="col">Representante</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <tr v-for="(consulta, index) in result" :key="index">
              <td>{{ consulta.registro_ans }}</td>
              <td>{{ consulta.cnpj }}</td>
              <td>{{ consulta.nome_fantasia }}</td>
              <td>{{ consulta.razao_social }}</td>
              <td>{{ consulta.representante }}</td>
            </tr>
          </tbody>
        </table>
          </div><!-- final div class="col-sm-10" -->
        </b-container>
    </div><!-- final div class="row" -->
  </div><!-- final div class="container" -->
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      result: [],
      message: '',
    };
  },
  methods: {
    initial() {
      axios.get('https://heroku-app-flask-vue.herokuapp.com/')
        .then((res) => {
          this.result = res.data.search;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    getByNome() {
      axios.get(`https://heroku-app-flask-vue.herokuapp.com/result?nome=${this.message}`)
        .then((res) => {
          this.result = res.data.search;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
};
</script>
