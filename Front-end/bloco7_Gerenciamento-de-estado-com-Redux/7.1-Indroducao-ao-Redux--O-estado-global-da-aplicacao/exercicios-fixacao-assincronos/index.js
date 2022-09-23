const Redux = require('redux');

//==========EXEMPLO DE COMBINEREDUCERS=========
//DESSA FORMA PODEMOS TER VÁRIOS REDUCERS CONVERGINDO
//PARA O REDUCER QUE SERÁ PASSADO COMO PARÂMETRO
//PARA O STORE.
  // import { combineReducers } from 'redux';
  // import meuReducer from './meuReducer';
  // import meuOutroReducer from './meuOutroReducer';

  // const reducerCombinado = combineReducers({
  //   meuReducer,
  //   meuOutroReducer,
  // });

  // export default reducerCombinado;

//==============================================


//========DECLARANDO UMA ACTION=================
//USAMOS UMA actionCreator => UMA FUNÇÃO QUE
//RETORNA UMA ACTION A SER ENVIADA PARA O REDUCER.
// NESSE CASO A ACTIONCREATOR É fazerLogin
// E A ACTION É O OBJETO RETORNADO.
// ESSE OBJETO TEM PELO MENOS UMA CHAVE TYPE E É
// RESPONSÁVEL POR COMUNICAR AO REDUCER A MUDANÇA
// A SER FEITA.
const fazerLogin = (email) => ({
  type: "LOGIN",
  email,
});
//=============================================

//=========DECLARANDO O ESTADO INICIAL=========
// O ESTADO INICIAL É PASSADO COMO PARÂMETRO
//  PARA O REDUCER
const ESTADO_INICIAL = {
  login: false,
  email: "",
};
//=============================================

//=========DECLARANDO O REDUCE=================
//REDUCER RECEBE COMO PARÂMETRO O STATE 
// QUE É O ESTADO INICIAL E A ACTION. 
// A ACTION É A SOLICITAÇÃO PARA ALTERAÇÃO DO ESTADO.
const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: //No switch, sempre precisamos ter um caso default!
    return state;
  }
};
//A ACTION ALTERA TODO O ESTADO, ENTÃO É NECESSÁRIO
//RETORNAR O ESTADO INICIAL COM ...state + AS CHAVES
// QUE SERÃO MODIFICADAS PELA ACTION. (O ESTADO É
// IMUTÁVEL)
//=============================================

//===========CRIANDOO UMA STORE ===============
const store = Redux.legacy_createStore(reducer);

//Uma store só funciona se passarmos uma função
// como parâmetro, que será responsável por 
// alterar os dados dela: o reducer

//==============================================

//============USANDO A FUNC DISPATCH============
//A FUNC DISPATCH É USADA PARA DESPACHAR A ACTION
//PARA DENTRO DO REDUCER PARA QUE O ESTADOS SEJA ALTERADO.
store.dispatch(fazerLogin("alguem@email.com"))

//===============================================

console.log(store.getState());
