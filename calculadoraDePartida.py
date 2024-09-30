def calcular_nivel (vitorias, derrotas):
    saldo_vitorias = vitorias - derrotas

    if vitorias < 10:
        nivel = "Ferro"
    elif 11 <= vitorias <= 20:
        nivel = "Bronze"
    elif 21 <= vitorias <= 50:
        nivel = "Prata"
    elif 51 <= vitorias <= 80:
        nivel = "Ouro"
    elif 81 <= vitorias <= 90:
        nivel = "Diamante"
    elif 91 <= vitorias <= 100:
        nivel = "Lendario"
    else:
        nivel = "Imortal"
    return saldo_vitorias, nivel                        


def exibir_resultado (vitorias, derrotas):
    saldo_vitorias, nivel = calcular_nivel (vitorias, derrotas)

    print (f"O heroi tem saldo de {saldo_vitorias} e esta no nivel {nivel}")

while True:
    try:
        vitorias = int (input("Digite a quantidade de vitórias: "))
        derrotas = int (input("Digite a quantidade de vitórias: "))

        exibir_resultado(vitorias, derrotas)  

        continuar = int (input("Deseja calcular outro jogador? (S/N): "))
        if continuar != "S":
            break
    except ValueError:
        print ("Por favor, insira um número válido.")    
