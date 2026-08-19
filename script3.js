algoritmo "Registro_Venda"

var
   valorVenda, valorFinal: real
   formaPagamento, confirmacao: inteiro

inicio

   valorVenda <- 200
   formaPagamento <- 1
   confirmacao <- 1

   valorFinal <- valorVenda

   se formaPagamento = 1 entao
      valorFinal <- valorVenda - (valorVenda * 0.05)
   fimse

   escreval("Valor da venda: R$ ", valorVenda:0:2)

   se formaPagamento = 1 entao
      escreval("Forma de pagamento: Dinheiro")
   fimse

   escreval("Valor final da venda: R$ ", valorFinal:0:2)
   escreval("Confirma a operação? (1-Sim / 0-Não): ", confirmacao)

   se confirmacao = 1 entao
      escreval("Venda realizada com sucesso!")
   senao
      escreval("Venda cancelada.")
   fimse

fimalgoritmo
Saída
Valor da venda: R$ 200,00
Forma de pagamento: Dinheiro
Valor final da venda: R$ 190,00
Confirma a operação? (1-Sim / 0-Não): 1
Venda realizada com sucesso!
Cálculo do desconto

5% de R$ 100,00:

200 × 0,05 = R$ 10,00

Valor final:

200 − 5 = R$ 195,00

Resultado: o cliente pagará R$ 190,00 e a venda será realizada com sucesso.