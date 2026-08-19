algoritmo "Custo_Viagem"

var
   distancia, consumo, precoGasolina, pessoas: real
   litros, custoTotal, custoPessoa: real

inicio

   distancia <- 600
   consumo <- 20
   precoGasolina <- 12
   pessoas <- 8

   litros <- distancia / consumo
   custoTotal <- litros * precoGasolina
   custoPessoa <- custoTotal / pessoas

   escreval("Distância da viagem: ", distancia, " km")
   escreval("Consumo do veículo: ", consumo, " km/L")
   escreval("Preço da gasolina: R$ ", precoGasolina)
   escreval("Número de pessoas: ", pessoas:0:0)
   escreval("Custo total da gasolina: R$ ", custoTotal:0:2)
   escreval("Valor por pessoa: R$ ", custoPessoa:0:2)

fimalgoritmo
Saída
Distância da viagem: 600 km
Consumo do veículo: 20 km/L
Preço da gasolina: R$ 12,00
Número de pessoas: 8
Custo total da gasolina: R$ 280,00
Valor por pessoa: R$ 90,00
Cálculos

Litros necessários:

600 ÷ 10 = 60 litros

Custo total:

30 × 12 = R$ 900,00

Valor por pessoa:

180 ÷ 8 = R$ 22,50

Resultado final: a viagem custará R$ 180,00 de gasolina, e cada uma das 4 pessoas deverá pagar R$ 45,00.