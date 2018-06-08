### Hace falta que tengan instalado docker y docker-compose.

### Para correr los contenedores tienen que hacer:
    
    docker-compose -p soa up -d

### Para ver si estan corriendo tiene que hacer

    docker ps

### Cuando terminen de trabajar deberian hacer un 
    
    docker-compose -p soa down

### Los cambios que vayan haciendo en el codigo deberian reiniciar cada uno de los servidores automaticamente.

### Los microservicios corren de la siguiente manera:

| Puerto | Microservicio |
| ---------- | ---------- |
| 8083   | estado  |
| 8080   | costo   |
| 8081   | asignacione   |
| 8082   | generador   |
| 27017   | db   |

### Para levantar una consola dentro de los contenedores:

    docker exec -it soa_NOMBREMICROSERVICIO_1 bash