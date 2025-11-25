# Opsætningsguide

Her er en guide til at få projektet sat korrekt op med backend,
database og miljøvariabler.

------------------------------------------------------------------------

## Indledende opsætning

1.  Navigér til `/backend`

2.  Kør følgende kommando for at oprette `database.db`:

    ``` bash
    node app.js
    ```

3.  Stop serveren igen.

------------------------------------------------------------------------

## Dotenv-fil til backend

Opret en fil ved navn `.env` i `/backend` med følgende indhold:

``` env
SESSION_SECRET=superhemmeligt123secrettilsessioner
DATABASE_PATH=./database.db
ADMINPASS=<indsæt et password til en admin bruger, som oprettes ved opstart>
USERPASS=<indsæt et password til en alm bruger, som oprettes ved opstart>
```

------------------------------------------------------------------------

## Opsætning af database

Kør følgende kommandoer i `/backend`:

### 1. Opret tabel

``` bash
npm run db-update
```

Dette opretter `users` tabellen i databasen.

### 2. Indsæt startbrugere

``` bash
npm run db-insert
```

Dette indsætter to brugere i databasen:

-   **Admin-bruger**
    -   Brugernavn: `adminusername`
    -   Password: det du har angivet i `.env`
-   **Almindelig bruger**
    -   Brugernavn: `almusername`
    -   Password: det du har angivet i `.env`

------------------------------------------------------------------------

## Kør applikationen

Når alt er sat op, kan du starte backend og frontend samtidig ved at gå
til projektets rod `/node_mandatory_II_mmh` og køre:

``` bash
npm run dev
```

Applikationen vil nu være tilgængelig på:

http://localhost:5173/

------------------------------------------------------------------------
<img width="1004" height="768" alt="image" src="https://github.com/user-attachments/assets/4c1afb13-29c3-4ac9-bc01-b96a4a3b52c4" />

<img width="1004" height="765" alt="image" src="https://github.com/user-attachments/assets/f07232e7-e8d4-4b14-9edf-d2f8b7f9647b" />

