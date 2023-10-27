import os

# Limpiar la terminal
os.system('cls' if os.name == 'nt' else 'clear')


# list1 = [1, 2, 3, 4, 5]

# print(list1[2],",", list1[4])

# list2 = ['A', 'B', 'C']

# list3 = ["Hello", 1, True, 40, 22]

# list4 = [1, 2, 3, [1, 2, 3, 4], 4, 5]
# print(list4[3],list4[4],list4[5])
# print(list4[3][1], list4[3][3])

# list5 = [1, 2, 4, 7, 10, 54, 43, 25, 12, 17, 54]
# print(*list5)
# print(list5, sep=" ")
# print(len(list5))
# list5.insert(len(list5),6)
# print(list5, sep=" ")
# print(len(list5))
# list5.extend([3,5,7,5,7])
# print(len(list5))
# print(list5)
# list5.pop(1)
# print(len(list5))
# print(list5, sep=" ")
# print(*list5, sep=" | ")
# del list5[0]
# print(*list5)
# for num in list5:
#     print("number: ", num)


#Diccionario

mi_dic = {1: "Primero", 2: "Segundo", 'Nombre' : "Daniel"}

print(mi_dic) #Imprime mi lista completa
print(mi_dic[1]) #Imprime el elemento con la clave 1
print(mi_dic[2]) #Imprime elemento de la clave 2
print(mi_dic["Nombre"]) #Imprime el elemento de la clave Nombre

mi_dic2 = {"Edad": 23, 
           "Nombre" : "Salvador", 
           "Apellido" : "Matias", 
           "Nacionalidad" : "Paraguay"}

print(mi_dic2)
print(mi_dic2["Edad"])
del mi_dic2["Nacionalidad"] #del borra la clave junto con el elemento
print(mi_dic2)
