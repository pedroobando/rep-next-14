# Admin-Todo

Ana aplicacion apirest en next-js

1.- Levantarla base de datos

```
sudo docker compose up -d
```

2.- Crear una copia de el .env.template y renombrarlo a .env
3.- Reemplazar las variables de entorno
4.- Ejecutar el comando `yarn install` para reconstruir los módulos de node
5.- Ejecutar el comando `yarn dev` para ejecutar aplicación en desarrollo
6.- Ejecutar estos comandos de Prisma

```
npx prisma migrate dev
npx prisma generate
```

7.- Ejecutar el SEED para crear la base de datos local

## Prisma Commands

Guia de utlizacion de [prisma en next.js](https://vercel.com/guides/nextjs-prisma-postgres)
Guia [prisma CLI](https://www.prisma.io/docs/orm/reference/prisma-cli-reference)

```
- yarn add prisma
- npx prisma init  /// <= crea los archivos de prisma en el proyecto
- npx prisma migrate dev  /// <=> actualiza el modelo de la aplicacion con la base de datos (sincroniza)
- npx prisma generate   /// <=> crea e cl cliente para poder utilizar prisma en la aplicacion

```

## Guia de Snipet nextjs

Command Description

```
- prc 	Create a new page component.
- lmrc  Create a new layout root component with metadata.
- lrc   Create a new layout root component.
- crc	  Create a new client component.
- mr	  Create a new metadata.
- gmrf	Create a new generateMetaData for SEO.
- gsp	  Create a new generateStaticParams function for dynamic page static
- rag	  Create a function Route Handler API GET.
- ragd	Create a function Route Handler API GET with Dynamic.
- rags	Create a function Route Handler API GET and Search.
- rap	  Create a function Route Handler API POST.
- rau	  Create a function Route Handler API UPDATE.
- rad	  Create a function Route Handler API DELETE.
- load	Create a Loading component
- err	  Create a Error component with error handling and recovery
```
