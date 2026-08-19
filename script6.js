algoritmo "Sistema_Escolar"

var
   mediaLucas, mediaMariana, mediaRafael: real

inicio

   mediaLucas <- (9 + 8) / 2
   mediaMariana <- (6 + 5) / 2
   mediaRafael <- (3 + 4) / 2

   escreval("=== RELATÓRIO ESCOLAR ===")
   escreval("")

   escreval("Lucas - Média: ", mediaLucas:0:1)
   se mediaLucas >= 7 entao
      escreval("Status: Aprovado")
   senao
      se mediaLucas >= 4 entao
         escreval("Status: Em Recuperação")
      senao
         escreval("Status: Reprovado")
      fimse
   fimse

   escreval("")

   escreval("Mariana - Média: ", mediaMariana:0:1)
   se mediaMariana >= 7 entao
      escreval("Status: Aprovado")
   senao
      se mediaMariana >= 4 entao
         escreval("Status: Em Recuperação")
      senao
         escreval("Status: Reprovado")
      fimse
   fimse

   escreval("")

   escreval("Rafael - Média: ", mediaRafael:0:1)
   se mediaRafael >= 7 entao
      escreval("Status: Aprovado")
   senao
      se mediaRafael >= 4 entao
         escreval("Status: Em Recuperação")
      senao
         escreval("Status: Reprovado")
      fimse
   fimse

fimalgoritmo