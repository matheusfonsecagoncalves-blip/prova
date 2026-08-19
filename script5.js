algoritmo "Cadastro_Convidados"

var
   convidados: vetor[1..10] de caractere
   quantidade, i: inteiro
   nomeRemover: caractere

inicio

   quantidade <- 7

   convidados[1] <- "Lucas"
   convidados[2] <- "Mariana"
   convidados[3] <- "Rafael"
   convidados[4] <- "Beatriz"
   convidados[5] <- "João"
   convidados[6] <- "Larissa"
   convidados[7] <- "Pedro"

   escreval("=== LISTA DE CONVIDADOS ===")
   escreval("Convidados cadastrados:")

   para i de 1 ate quantidade faca
      escreval(i, " - ", convidados[i])
   fimpara

   escreval("")
   escreval("Tentativa de cadastrar mais um convidado...")

   se quantidade >= 10 entao
      escreval("ALERTA: A lista está cheia!")
   senao
      escreval("Novo convidado pode ser cadastrado.")
   fimse

   nomeRemover <- "Larissa"

   escreval("")
   escreval("Remover convidado: ", nomeRemover)

   para i de 1 ate quantidade faca

      se convidados[i] = nomeRemover entao

         para i de i ate quantidade - 1 faca
            convidados[i] <- convidados[i + 1]
         fimpara

         quantidade <- quantidade - 1

      fimse

   fimpara

   escreval("")
   escreval("=== CONVIDADOS APÓS A REMOÇÃO ===")

   para i de 1 ate quantidade faca
      escreval(i, " - ", convidados[i])
   fimpara

fimalgoritmo