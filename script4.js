algoritmo "Totem_Sanduiche"

var
   sanduiche: inteiro
   acompanhamentos, valorSanduiche, valorAcompanhamentos, valorTotal: real

inicio

   sanduiche <- 1
   valorSanduiche <- 18
   acompanhamentos <- 4
   valorAcompanhamentos <- acompanhamentos * 3
   valorTotal <- valorSanduiche + valorAcompanhamentos

   escreval("=== TOTEM DE PEDIDOS ===")
   escreval("Sanduíche escolhido: Hambúrguer")
   escreval("Valor do sanduíche: R$ ", valorSanduiche:0:2)

   escreval("")
   escreval("Acompanhamentos:")
   escreval("1 - Maionese - R$ 3,00")
   escreval("2 - Carne - R$ 3,00")
   escreval("3 - Queijo - R$ 3,00")
   escreval("4 - Bacon - R$ 3,00")
   escreval("5 - Salada - R$ 3,00")

   escreval("")
   escreval("Acompanhamentos selecionados:")
   escreval("- Carne")
   escreval("- Queijo")
   escreval("- Bacon")
   escreval("- Salada")

   escreval("")
   escreval("=== PEDIDO FINAL ===")
   escreval("Sanduíche: Hambúrguer")
   escreval("Acompanhamentos: Carne, Queijo, Bacon e Salada")
   escreval("Valor total: R$ ", valorTotal:0:2)

fimalgoritmo