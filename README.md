# Projector - TypeScript - TP

Ce dépot fait partie des solutions d'un exercice venant du cours *Polyglot Programming - TS, Go, and Rust* de @ThePrimeagen sur le site FrontendMasters.

Vous pouvez trouvez la version GoLang [ici](https://github.com/lpreaux/projector-go).  
Et la version Rust [ici](https://github.com/lpreaux/projector-rust).

## Objectifs de l'exercice

Programmer une application de type CLI dans 3 languages de programmations différents : TypeScript, GoLang et Rust ; afin de découvrir GoLang et Rust.

**Les objectifs pédagogiques étaient :**

Avec les 3 langages :

- Récuperer et utiliser les arguments passés à l'éxécution.
- Manipuler des fichiers locaux
- Manipuler des données JSON
- Gerer les erreurs
- Impression sur la console

## Ennoncé de l'exercice

### Description de Projector

A simple CLI application that stores, deletes, or presents variables based on the current working directory or a path provided.

Breaking the problem up

```
   +----------+    +----------+      +----------+    +----------+
   | cli opts | -> | project  | -+-> |  print   | -> | display  |
   +----------+    |  config  |  |   +----------+    +----------+
                   +----------+  |
                                 |   +----------+    +----------+
                                 +-> |   add    | -> |   save   |
                                 |   +----------+    +----------+
                                 |
                                 |   +----------+    +----------+
                                 +-> |    rm    | -> |   save   |
                                     +----------+    +----------+
```


## Links

[Frontend Masters](https://frontendmasters.com/)  
[Le cours *Polyglot Programming - TS, Go, and Rust*](https://frontendmasters.com/courses/typescript-go-rust/) par ThePrimeagen  
[ThePrimeagen sur Frontend Masters](https://frontendmasters.com/teachers/the-primeagen/)  
[Le profil GitHub de ThePrimeagen (avec c'est autres liens)](https://github.com/ThePrimeagen)  
