const filmes = require("./database")


filmes.sort((a,b)=> a.Tempo - b.Tempo)

const read = require("readline-sync")

const verfilmesPorCategoria = read.question("Você deseja encontrar um filme por categoria?(S/N)")

if(verfilmePorCategoria.toLocaleUpperCase() === "S") {
    console.log("Essas são as opções disponíveis:")
    console.log("Drama/", "Ação/", "Ficção científica/", "Suspense/", "Romance/", "Animação/", "Aventura/", "Misterio")

    const qualCategoria = read.question("Qual categoria você escolhe?")

    const categoria = filmes.filter(filmes =>filmes.categoria === qualCategoria)

    console.table(categoria)
} else {

    const recomenda = filmes.filter(filmes =>filmes.recomenda === true && filmes.assistiu === true)
    console.log("Recomendações de Filmes:")
    console.table(recomenda)

    const listaDeDesejos = filmes.filter(livros => filmes.recomenda === true && filmes.assistiu === false)
    console.log("Lista de desejos:")
    console.table(listaDeDesejos)

    console.table("Esses são todos os filmes disponíveis:")
    console.table(filmes)

}
