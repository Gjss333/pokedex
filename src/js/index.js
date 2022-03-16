





/*
    quando clickar no pokemon da lista temos que esconder o pokemon aberto e mostrar o proximo da lista
    
    trabalhar com dois elementos
    1 - listagem
    2 -  cartao pokemon
    

    necessário criar 2 variaveis no js  para trabalkhar com os elemetos

    vamos precisar trabalhar com evento de clique feito pelo usuário na listagem do pokemon

    -remover a classe aberto
    -
    */
    

    const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
    
    
    listaSelecaoPokemons.forEach(pokemon => {
        pokemon.addEventListener('click', () => {

            const cartaoPokemonAberto = document.querySelector('.aberto')
            cartaoPokemonAberto.classList.remove('aberto')

            const idPokemonSelecionado = pokemon.attributes.id.value

            const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
            const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
            cartaoPokemonParaAbrir.classList.add('aberto')


            const pokemonAtivoNaListagem = document.querySelector('.ativo')
            pokemonAtivoNaListagem.classList.remove('ativo')

            const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
            pokemonSelecionadoNaListagem.classList.add('ativo')
        })
    })