
## Installation

Arranque del proyecto  OMEGA 

1º descargar el repositorio con el proyecto desde GitHub
https://github.com/JonCas22/ejecicio-full-stack.git

2º Abrimos nuestro editor de codigo(Visual Code Studio en nuestro caso)

3º veremos 2 carpetas Frontend y Backend

4º Abrimos  una terminal

5ºen la terminal escribimos los siguientes comandos:


```bash
cd frontend/
```

```bash
npm install
```

```bash
ionic serve
```

6 abrimos otra terminal desde el visual code, y escribimos los siguientes comandos:

```bash
cd backend/
```

```bash
npm install
```

```bash
npm run start:dev
```

Con esto tendremos nuesto proyecto corriendo

podemos verificar que  todo esta correcto en http://localhost:8100



## Tecnologías Base

    La Base de datos a utilizar en Backend en MongoDB -----(100%)
    El backend deberá estar escrito en NodeJS y ExpressJS y se restringirá a un API Rest o como mucho un GraphQL----- (100%)
    El Frontend de la aplicación se realizará en Angular (no Angular JS) (v)

## Modelo de Datos


 Usuarios: ID, Nombre de usuario(único), email(único), avatar (string - url imagen del usuario), contraseña encriptada, activo (boolean), clave_activación (hash), grupos de usuarios ['admin','redactor','editor', 'subscriber', 'visitor'], API_TOKEN_KEY, versión, fecha_creacion, ultima_fecha_modif
--- (falta fecha de modificacion, el token le faltan unos apaños)
   
 Publicaciones: id, título, main (boolean), tipo (pagina,post,listado,post_subscripción, menu, bloques ..),  url [], publicado (boolean), publico (boolean), autor, ultimo_editor, entradilla, imagen_portada, texto_completo, tags [], versión, fecha_creacion, ultima_fecha_modif  -------(100%)
   
 Menus (Tipo de publicación): id, título, icono (string), posicion_icono(string), main (boolean), enlaces [] (MenuItem), publicado(boolean), publico (boolean),  autor, ultimo_editor,  versión, fecha_creacion, ultima_fecha_modif  ----(100%)
   
 Menu Item: id, título, nombre, icono (string), posicion_icono(string), url, autor, ultimo_editor,  versión, fecha_creacion, ultima_fecha_modif 


    Los permisos de aplicarán por grupo al que pertenezca el usuario: admin - control total; Editor- Crear, Editar y borrar publicaciones y publicarlas o despublicarlas; Usuario Redactor- crear publicaciones, modificar propias; Visitante - Ver publicaciones publicadas y menus, subscriptor - Ver publcaciones de subscripción
-------(80%)

## Backend:


    Crea un backend que permita gestionar el registro, login en el servicio REST y la gestión de Usuarios
    Disponer de la opción de dar de alta un subscriptor directamente sin pasar por el registro
    Crea un backend REST para el resto de entidades: Publicaciones y menús
    Todos los acceso al backend de datos deberá realizarse con un TOKEN API generado por el servicio de usuarios
    El backend tirará de la base de datos MongoDB
------(faltan detalles en el token)



## Front End 



    Crea un frontend Angular que sea capaz de registrarse, loguearse en el backend de usuarios
    Desde el frontend deberemos ser capaces de subscribirnos y dessubscribirnos al boletín, mediante un email y un Nombre de Usuario
    El Frontend deberá presentar el menú principal de contenidos (Backend Menús)
    Deberá tener un servicio de consulta al backend de datos (BackEnd Publicaciones)
    Deberá presentar una plantilla por publicación
    Presentar el listado (paginado) las últimas publicaciones
    Tendrá una parte pública par ver los menús y contenidos públicos
    Deberá disponer de un area de administración para gestionar menús, publicaciones y subscriptores. -----(80%)

  
