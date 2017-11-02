# The MEAN Artoo #

MEAN.js code container for the Artoo Campus. Ancona - 2015.

Possibile spunto per il calcolo di una taglia: https://www.madewell.com/sizecharts/main.jsp?sizeChart=0,0

## Roadmap ##

### Version 0.1 ###
* Creare il modello dell'utente [Alessia, Michele, Paolo, Roberto, Pierluigi, Stefano]
* Creare il modello del partner [Alessandro B., Gianluca T., Chiara, Alessandro C., Marco]
* Ottenere una taglia a partire dall'utente e dal partner [Cristian, Gianluca S., Vincenzo, Nderim, Giuseppe, Pasquale]

### Backlog ###
* Inserire/aggiornare i dati utente
* Inserire/aggiornare i dati partner
* Mostrare una lista dei partners
* Query per size
* Reports
* UX
* Demo
* Login

## How to contribute to develop ##
1. Il portavoce del progetto forka il repo weboxstudio/artoo-campus e abilita l'accesso in scrittura ai membri del team (una tantum).

1. I membri del team clonano il repo del portavoce (una tantum).

1. Tutti settano il rebase automatico (una tantum) digitando in console:

    ```
    git config --global pull.rebase true
    ```

1. Il portavoce va su bitbucket e si assicura che il suo repo sia sincronizzato con weboxstudio/artoo-campus.

1. Il team lavora alla propria contribution in un branch a scelta a partire da master.

1. Ogni membro del team può aggiornare il proprio repo locale a quello remoto digitando il console:

    ```
    git pull origin nome-branch
    ```

1. In caso di conflitti fixare ogni singolo conflitto e poi digitare in console:

    ```
    git add -A
    ```

    ```
    git rebase --continue
    ```

    ```
    git push origin nome-branch
    ```

1. Ogni membro del team può eseguire il commit del tuo contributo digitando in console:

    ```
    git add -A
    ```

    ```
    git commit -m "Scrivi qui la descrizione del tuo commit."
    ```

    ```
    git push origin nome-branch
    ```

1. Quando è il momento, il portavoce crea una pull request su bitbucket da suo_user/artoo-campus -> nome-branch a weboxstudio/artoo-campus -> develop

## Contributors ##
* David Sorrentino
* Chiara Pugno
* Gianluca Tinnirello