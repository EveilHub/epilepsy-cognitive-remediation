import { AttentionSelectiveType, AttentSouContentType, FonctionExecutivesType, MemoEpisodicType, MemoTravailTypes, VitesseTraiementType } from "./definitions";

export const MemoTravailContent: MemoTravailTypes = {
    sequChiff: {
        title: "Séquences de chiffres:",
        description: "Mémoriser une suite, la répéter à l'envers"
    },
    nback: {
        title: "N-back:",
        description: "Indiquer si le stimulus actuel correspond à celui d'il y a N étapes",
    },
    grillePoint: {
        title: "Grilles de points:",
        description: "Mémoriser des positions, les reproduire"
    }
};

export const MemoEpisodic: MemoEpisodicType = {
    pairesMotsImg: {
        title: "Paires mot-image:",
        description: "Associer un mot à une image, retrouver la pair"
    },
    storyShort: {
        title: "Histoire courte:",
        description: "Lire un texte, répondre à des questions différées"
    },
    lieuxObjets: {
        title: "Lieux et objets:",
        description: "Mémoriser où sont placer les objets dans une pièce"
    },
};

export const AttentionSelectiveContent: AttentionSelectiveType = {
    stroopAdapted: {
        title: "Stroop adapté:",
        description: "Nommer la couleur d'un mot (mot = couleur)"
    },
    doubleTask: {
        title: "Double tâche légère:",
        description: "Mémoriser une liste et classer des images"
    }
};

export const AttentSouContent: AttentSouContentType = {
    cpt: {
        title: "CPT (continuous Performance Task)",
        description: "Appuyer quand une cible apparaît, ignorer les distractions"
    },
    barrageSymboles: {
        title: "Barrage de Symboles",
        description: "Trouver un symbole cible parmi d'autres"
    },
    comptageCibles: {
        title: "Comptage de Cibles",
        description: "Compter combien de fois un élément apparaît"
    }
};

export const FonctionExecutives: FonctionExecutivesType = {
    trailMakingB: {
        title: "Trail Making B:",
        description: "Alterner chiffres et lettres (1-A-2-B...)"
    },
    tourHanoi: {
        title: "Tours de Hanoï simplifiée:",
        description: "Déplacer des disques selon des règles" 
    },
    triDeCartes: {
        title: "Tri de cartes (WCST adapté):",
        description: "Deviner la règle de tri qui change" 
    }
};

export const VitesseTraiementContent: VitesseTraiementType = {
    tempsReact: {
        title: "Temps de réaction simple:",
        description: "Appuyer dès qu'un symbole apparaît"
    },
    matchingFast: {
        title: "Matching rapide:",
        description: "Indiquer si 2 images sont identiques"
    },
    trailMakingA: {
        title: "Trail Making A:",
        description: "Relier des chiffres dans l'ordre le plus vite possible"
    }
};