# Admin-Todo

Ana aplicacion apirest en next-js

1.- Levantarla base de datos

```
sudo docker compose up -d
```

2.- Prisma Commands
Guia de utlizacion de [prisma en next.js](https://vercel.com/guides/nextjs-prisma-postgres)

```
- yarn add prisma
- npx prisma init  /// <= crea los archivos de prisma en el proyecto
- npx prisma migrate dev  /// <=> actualiza el modelo de la aplicacion con la base de datos (sincroniza)
- npx prisma generate   /// <=> crea e cl cliente para poder utilizar prisma en la aplicacion


```
