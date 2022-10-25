#Checagem de pontos de CNH
#velocidade = input('Digite a velocidade registrada? ')#
velocidade = 65
if velocidade <=50:
    print('Vc n foi multado.')
elif velocidade >= 51 and velocidade <= 60:
    print ('Vc levou multa de 2 pontos na sua CNH.')   
elif velocidade >= 61 and velocidade <= 75:
    print ('Vc levou multa de 3 pontos na sua CNH.')   
else:
    print('Vc levou multa de 7 pontos na sua CNH.')     