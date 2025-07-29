// Types pour l'application
interface MoodActivities {
  [key: string]: string[];
}

interface BubbleConfig {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
}

class LauraSmileApp {
  private currentMood: string = '';
  private gameScore: number = 0;
  private gameActive: boolean = false;
  private bubbleInterval: number | null = null;

  private compliments: string[] = [
    "Laura, tu illumines chaque pièce dans laquelle tu entres ! ✨",
    "Ton sourire pourrait faire fondre la banquise ! 😊",
    "Tu es plus précieuse qu'un licorne arc-en-ciel ! 🦄",
    "Ton intelligence brille comme mille étoiles ! ⭐",
    "Tu as le superpower de rendre les gens heureux ! 💫",
    "Même les nuages s'écartent quand tu arrives ! ☀️",
    "Tu es la définition vivante de 'formidable' ! 🌟",
    "Ton rire est la plus belle mélodie du monde ! 🎵",
    "Tu transformes les journées ordinaires en aventures magiques ! 🎪",
    "Tu es plus cool qu'un pingouin avec des lunettes de soleil ! 🐧",
    "Ton énergie positive pourrait alimenter une ville entière ! ⚡",
    "Tu es le genre de personne que même les anges envient ! 👼",
    "Laura, tu es comme un arc-en-ciel après la pluie - tu apportes la beauté ! 🌈",
    "Ton cœur est si grand qu'il pourrait contenir tout l'univers ! 💖",
    "Tu es la raison pour laquelle le mot 'extraordinaire' existe ! 🌠",
    "Même les étoiles sont jalouses de ton éclat naturel ! ⭐",
    "Tu as cette magie rare qui transforme tout en mieux ! ✨",
    "Ton optimisme pourrait faire pousser des fleurs dans le désert ! 🌸",
    "Tu es plus rafraîchissante qu'une brise d'été ! 🍃",
    "Laura, tu es la définition parfaite de 'unique et merveilleuse' ! 💎",
    "Tes idées sont comme des feux d'artifice - brillantes et spectaculaires ! 🎆",
    "Tu rends le monde plus coloré juste en existant ! 🎨",
    "Ton authenticité est plus précieuse que tous les trésors ! 💰",
    "Tu es comme un café parfait - tu réveilles ce qu'il y a de meilleur chez les gens ! ☕",
    "Laura, tu es la preuve vivante que la perfection peut être humaine ! 👑",
    "Ton empathie pourrait guérir le monde entier ! 🌍",
    "Tu es plus inspirante qu'un lever de soleil sur l'océan ! 🌅"
  ];

  private jokes: string[] = [
    "Pourquoi les plongeurs plongent-ils toujours en arrière ? Parce que sinon, ils tombent dans le bateau ! 🤿",
    "Que dit un escargot quand il croise une limace ? 'Regarde, un nudiste !' 🐌",
    "Comment appelle-t-on un chat tombé dans un pot de peinture le jour de Noël ? Un chat-mallow ! 🐱",
    "Que dit un café qui arrive en retard au travail ? 'Désolé, j'étais en grain de dormir !' ☕",
    "Pourquoi les poissons n'aiment pas jouer au tennis ? Parce qu'ils ont peur du filet ! 🐟",
    "Comment appelle-t-on un boomerang qui ne revient pas ? Un bâton ! 🪃",
    "Que dit un escargot quand il croise une chenille ? 'Regarde, une ambulance !' 🚑",
    "Pourquoi les plongeurs ne peuvent pas travailler ensemble ? Parce qu'ils se marrent ! 😂",
    "Comment appelle-t-on un chien sans pattes ? On ne l'appelle pas, on va le chercher ! 🐕",
    "Que dit un crocodile qui surveille la pharmacie ? Lacoste garde ! 🐊",
    "Pourquoi les dinosaures ne peuvent pas applaudir ? Parce qu'ils sont morts ! 🦕",
    "Comment appelle-t-on un pingouin dans un champ de blé ? Un pingouin perdu ! 🐧",
    "Que dit un citron pressé ? 'Ça va pas la tête ?!' 🍋",
    "Pourquoi les poules ne portent pas de culotte ? Parce que le coq n'a pas de mains ! 🐔",
    "Comment appelle-t-on un chat qui a bu du citron ? Un chat-aigre ! 😸",
    "Que dit un cannibale qui mange un clown ? 'Ça a un goût bizarre...' 🤡",
    "Pourquoi les pêcheurs n'aiment pas partager ? Parce qu'ils sont un peu radin ! 🎣",
    "Comment fait-on pour allumer un barbecue breton ? On utilise un Breizh-quet ! 🔥",
    "Que dit un vampire qui a mal aux dents ? 'Aïe love you !' 🧛‍♂️",
    "Pourquoi les footballeurs courent-ils après le ballon ? Parce que s'ils marchaient, le match durerait trop longtemps ! ⚽",
    "Comment appelle-t-on un chien magicien ? Un labracadabrador ! 🎩",
    "Que dit un chocolat qui fait du sport ? 'Je fond !' 🍫",
    "Pourquoi les pharmaciens ne peuvent pas jouer au poker ? Parce qu'ils ont toujours l'air de bluffer ! 💊",
    "Comment appelle-t-on un lapin sourd ? Comme tu veux, il n'entend pas ! 🐰",
    "Que dit un Schtroumpf qui tombe ? 'Schtroumpf !' 💙"
  ];

  private quotes: string[] = [
    "Aujourd'hui est ton jour ! Brille comme le diamant que tu es ! 💎",
    "Chaque petit pas compte, même si c'est en pyjama ! 👑",
    "Tu es plus forte que tu ne le penses, plus belle que tu ne l'imagines ! 💪",
    "La vie est trop courte pour ne pas danser en pyjama ! 💃",
    "Ton potentiel est illimité, comme le Wi-Fi du paradis ! 📡",
    "Rappelle-toi : même les super-héros ont des jours difficiles ! 🦸‍♀️",
    "Tu n'es pas perfecte, tu es limitée édition ! ✨",
    "Crois en toi autant que ton chien croit en toi ! 🐕",
    "Aujourd'hui, sois la raison pour laquelle quelqu'un sourit ! 😊",
    "Tu es en train d'écrire ton histoire, assure-toi qu'elle soit épique ! 📖"
  ];

  private moodActivities: MoodActivities = {
    sad: [
      "Écoute ta chanson préférée et danse comme si personne ne regardait ! 🎵",
      "Prends un bain chaud avec des bulles et imagine que tu es une sirène ! 🧜‍♀️",
      "Écris trois choses pour lesquelles tu es reconnaissante aujourd'hui 📝",
      "Regarde des vidéos de bébés animaux pendant 10 minutes 🐱",
      "Appelle quelqu'un que tu aimes juste pour dire bonjour 📞",
      "Fais-toi un chocolat chaud avec des marshmallows et des épices 🍫",
      "Regarde ton film préféré d'enfance avec une couverture douce 🎬",
      "Écris une lettre d'amour à ton futur toi dans 1 an 💌",
      "Crée une playlist de chansons qui te remontent le moral 🎶",
      "Fais du coloriage ou des mandalas pour te détendre 🎨",
      "Commande ton plat réconfort préféré et savour chaque bouchée 🍕",
      "Prends des photos de jolies choses autour de toi 📸",
      "Fais une séance de câlins avec un coussin ou une peluche 🧸",
      "Écris dans un journal intime tes émotions sans jugement 📖",
      "Regarde le coucher ou lever de soleil depuis ta fenêtre 🌅",
      "Fais une liste de tes réussites récentes, même les plus petites ⭐",
      "Envoie un message gentil à un ami pour lui dire qu'il compte pour toi 💕"
    ],
    tired: [
      "Fais une micro-sieste de 20 minutes avec une playlist relaxante 😴",
      "Bois une tisane chaude en regardant par la fenêtre 🍵",
      "Fais 5 minutes de respiration profonde avec les yeux fermés 🧘‍♀️",
      "Regarde un épisode de ta série comfort préférée 📺",
      "Prends une douche rafraîchissante en chantant à tue-tête 🚿",
      "Fais des étirements doux pendant 10 minutes 🤸‍♀️",
      "Écoute un podcast relaxant ou une méditation guidée 🎧",
      "Mange un encas sain qui te donnera de l'énergie (fruits, noix) 🍎",
      "Fais une courte promenade à l'air frais, même 5 minutes 🚶‍♀️",
      "Bois un grand verre d'eau avec du citron 🍋",
      "Fais une séance de massage des mains et des pieds 👐",
      "Change d'environnement : va dans une autre pièce 🏠",
      "Mets de la musique énergisante et fais 3 minutes de mouvement 💃",
      "Prends quelques grandes inspirations d'air frais à la fenêtre 🌬️",
      "Fais une liste de tâches courtes et faciles à accomplir ✅",
      "Appelle un ami énergique qui te boost naturellement ☎️",
      "Fais 10 jumping jacks ou quelques squats pour réveiller ton corps 💪"
    ],
    grumpy: [
      "Crie dans un oreiller pendant 10 secondes (ça marche vraiment !) 😤",
      "Fais du sport ou de la danse énergique pour évacuer 💃",
      "Écris tout ce qui t'énerve sur un papier, puis déchire-le ! 📝",
      "Mange quelque chose de délicieux qui te fait plaisir 🍫",
      "Regarde des memes drôles jusqu'à ce que tu ries 😂",
      "Fais du ménage énergique en écoutant de la musique forte 🧹",
      "Prends une douche très chaude ou très froide pour reset 🚿",
      "Fais des pompes ou des abdos pour évacuer la tension 💪",
      "Chante à tue-tête une chanson qui te défouler 🎤",
      "Dessine ou gribouille agressivement sur du papier 🖍️",
      "Mâche un chewing-gum et fait des bulles 🍬",
      "Tape dans un coussin ou fais de la boxe dans le vide 🥊",
      "Regarde des vidéos de fails ou de pranks pour rire 😹",
      "Écris une lettre de colère puis jette-la (sans l'envoyer !) 💌",
      "Fais du jardinage énergique ou rempote une plante 🌱",
      "Écoute du métal ou du rock très fort avec un casque 🎸",
      "Fais du shopping en ligne pour te faire plaisir (sans acheter !) 🛒",
      "Regarde des compilations d'animaux drôles qui font des bêtises 🐕"
    ],
    meh: [
      "Apprends quelque chose de nouveau en 15 minutes sur YouTube 📚",
      "Réorganise un petit coin de ta chambre à ton goût 🏠",
      "Essaie une nouvelle recette simple et délicieuse 👩‍🍳",
      "Fais une promenade dehors et observe 5 détails nouveaux 🚶‍♀️",
      "Crée quelque chose avec tes mains (dessin, craft, etc.) 🎨",
      "Appelle un ami que tu n'as pas vu depuis longtemps 📞",
      "Écris une histoire courte ou un poème sur ta journée ✍️",
      "Fais une séance photo de ton quotidien pour le sublimer 📸",
      "Essaie une nouvelle coiffure ou un nouveau style de maquillage 💄",
      "Plante quelque chose (herbes aromatiques, fleurs) 🌿",
      "Regarde un documentaire sur un sujet qui t'intrigue 🎬",
      "Fais du yoga ou des exercices d'étirement 🧘‍♀️",
      "Crée une playlist pour différentes humeurs 🎵",
      "Écris une lettre de remerciement à quelqu'un d'important 💌",
      "Fais du DIY simple : customise un objet que tu possèdes ✂️",
      "Planifie ton weekend idéal ou tes prochaines vacances 🗓️",
      "Fais une séance de tri et don de vêtements/objets 👕",
      "Apprends 5 mots dans une nouvelle langue 🌍",
      "Fais une séance de méditation guidée de 10 minutes 🕯️"
    ]
  };

  private animalGifs: string[] = [
    // Chats adorables
    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", // Chaton mignon
    "https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif", // Chat qui joue
    "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif", // Chat qui dort
    "https://media.giphy.com/media/LEKtRCGyA90QM/giphy.gif", // Chat surpris
    "https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif", // Chat qui fait la toilette
    "https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif", // Chat orange mignon
    "https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif", // Chat qui bâille
    "https://media.giphy.com/media/tBxyh2hbwMiqc/giphy.gif", // Chat qui joue avec ses pattes

    // Chiens adorables  
    "https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif", // Chiot qui joue
    "https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif", // Golden retriever heureux
    "https://media.giphy.com/media/kRmg8zeReOYXm/giphy.gif", // Chiot qui court
    "https://media.giphy.com/media/l1AsBL4S36yDJain6/giphy.gif", // Corgi adorable
    "https://media.giphy.com/media/l2JhOVyjSLKeKCRfa/giphy.gif", // Husky qui joue
    "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif", // Beagle mignon
    "https://media.giphy.com/media/10dU7AN7xsi1I/giphy.gif", // Chiot labrador
    "https://media.giphy.com/media/lJNoBCvQYp7nq/giphy.gif", // Bulldog français

    // Pandas et ours
    "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif", // Bébé panda
    "https://media.giphy.com/media/EatwJZRUIv41G/giphy.gif", // Panda qui joue
    "https://media.giphy.com/media/n2IPMGMhGkqaY/giphy.gif", // Panda qui mange
    "https://media.giphy.com/media/EvYHHSntaIl5m/giphy.gif", // Panda qui roule
    "https://media.giphy.com/media/H4uE6w9G1uK4M/giphy.gif", // Ourson polaire
    "https://media.giphy.com/media/ujUdrdpX7Ok5W/giphy.gif", // Ours brun mignon

    // Animaux aquatiques
    "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif", // Loutre adorable
    "https://media.giphy.com/media/pls8xeXFbASfS/giphy.gif", // Loutre qui nage
    "https://media.giphy.com/media/6Q3M4BIK0lX44/giphy.gif", // Penguin qui glisse  
    "https://media.giphy.com/media/H7ZrrA9V2pd3G/giphy.gif", // Bébé pingouin
    "https://media.giphy.com/media/bLBIXynXe1x5e/giphy.gif", // Phoque mignon
    "https://media.giphy.com/media/2sdxXbKeCmKFwHCaDL/giphy.gif", // Dauphin qui joue
    "https://media.giphy.com/media/l46CeaoQNEyakFCXS/giphy.gif", // Baleine adorable

    // Lapins et rongeurs
    "https://media.giphy.com/media/q1MeAPDDMb43K/giphy.gif", // Lapin mignon
    "https://media.giphy.com/media/YRtLgsajXrz1a/giphy.gif", // Lapin qui mange
    "https://media.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.gif", // Hamster qui mange
    "https://media.giphy.com/media/1BXa2alBjrCXC/giphy.gif", // Écureuil adorable
    "https://media.giphy.com/media/1AgDOo4LJ0nUaL4koT/giphy.gif", // Cochon d'Inde
    "https://media.giphy.com/media/VxbP9tLeKzazS/giphy.gif", // Chinchilla mignon

    // Renards et animaux sauvages
    "https://media.giphy.com/media/EizPK3InQbrNK/giphy.gif", // Renard roux adorable
    "https://media.giphy.com/media/6bWqIhWriQBAQ/giphy.gif", // Renard arctique
    "https://media.giphy.com/media/ZZflpBhAdItib1tvg7/giphy.gif", // Raton laveur
    "https://media.giphy.com/media/QxssH3MwFLEdO/giphy.gif", // Koala endormi
    "https://media.giphy.com/media/TEFplLVRDMWBi/giphy.gif", // Paresseux adorable

    // Éléphants et gros animaux
    "https://media.giphy.com/media/yFQ0ywscgobJK/giphy.gif", // Bébé éléphant
    "https://media.giphy.com/media/KymorXV2DC2o8/giphy.gif", // Éléphant qui joue
    "https://media.giphy.com/media/l0Hlx0M5OTd5W9S48/giphy.gif", // Hippopotame bébé
    "https://media.giphy.com/media/10KIsXhwdoerHW/giphy.gif", // Girafe mignonne

    // Oiseaux adorables
    "https://media.giphy.com/media/H1dxi8xdh4d0s/giphy.gif", // Chouette mignonne
    "https://media.giphy.com/media/c5PHIq9P8hZe0/giphy.gif", // Perroquet qui danse
    "https://media.giphy.com/media/VhVyKLClyKNMc/giphy.gif", // Caneton adorable
    "https://media.giphy.com/media/EEzUgMbjhIK8o/giphy.gif", // Poussin jaune

    // Animaux de ferme mignons
    "https://media.giphy.com/media/NKmZROCeLuJMI/giphy.gif", // Cochon miniature
    "https://media.giphy.com/media/1mikGEwIrb5dC/giphy.gif", // Agneau qui saute
    "https://media.giphy.com/media/4Cpgf1zzMMy4w/giphy.gif", // Chèvre bébé
    "https://media.giphy.com/media/qtwGJAUZgWW5i/giphy.gif", // Veau adorable

    // Animaux exotiques
    "https://media.giphy.com/media/3Mo1LLB7Nb7Ig/giphy.gif", // Alpaga mignon
    "https://media.giphy.com/media/8dYmJ6Buo3lYY/giphy.gif", // Lemure qui danse
    "https://media.giphy.com/media/o5QXt8mjIsOiI/giphy.gif", // Tapir bébé
    "https://media.giphy.com/media/1n5PQXCqBsUcIIreFP/giphy.gif", // Capybara zen

    // Animaux domestiques spéciaux
    "https://media.giphy.com/media/cIz4iJkIk55jJJaXq8/giphy.gif", // Furet qui joue
    "https://media.giphy.com/media/K6lCJYXq5nQ3e/giphy.gif", // Hérisson adorable
    "https://media.giphy.com/media/YQBqzrOcUZ9OE/giphy.gif", // Tortue mignonne

    // Chatons spéciaux
    "https://media.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif", // Chat Maine Coon
    "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif", // Chat persan
    "https://media.giphy.com/media/12K2WXKt4A0TSw/giphy.gif", // Chat siamois
    "https://media.giphy.com/media/cfL8a1rB1przO/giphy.gif", // Chat ragdoll
  ];

  constructor() {
    this.initializeApp();
  }

  private initializeApp(): void {
    this.setupEventListeners();
    this.createFloatingElements();
  }

  private setupEventListeners(): void {
    // Sélecteurs d'humeur
    const moodButtons = document.querySelectorAll('.mood-btn') as NodeListOf<HTMLButtonElement>;
    moodButtons.forEach(btn => {
      btn.addEventListener('click', (e) => this.selectMood(e.target as HTMLButtonElement));
    });

    // Boutons d'action
    const complimentBtn = document.getElementById('compliment-btn') as HTMLButtonElement;
    const jokeBtn = document.getElementById('joke-btn') as HTMLButtonElement;
    const quoteBtn = document.getElementById('quote-btn') as HTMLButtonElement;
    const activityBtn = document.getElementById('activity-btn') as HTMLButtonElement;
    const animalBtn = document.getElementById('animal-btn') as HTMLButtonElement;
    const gameBtn = document.getElementById('start-game-btn') as HTMLButtonElement;

    complimentBtn?.addEventListener('click', () => this.showCompliment());
    jokeBtn?.addEventListener('click', () => this.showJoke());
    quoteBtn?.addEventListener('click', () => this.showQuote());
    activityBtn?.addEventListener('click', () => this.showActivity());
    animalBtn?.addEventListener('click', () => this.showAnimal());
    gameBtn?.addEventListener('click', () => this.toggleBubbleGame());
  }

  private selectMood(button: HTMLButtonElement): void {
    // Retirer la classe active de tous les boutons
    document.querySelectorAll('.mood-btn').forEach(btn => btn.classList.remove('active'));
    
    // Ajouter la classe active au bouton cliqué
    button.classList.add('active');
    
    // Sauvegarder l'humeur actuelle
    this.currentMood = button.getAttribute('data-mood') || '';
    
    // Animation de célébration
    this.createCelebration();
    
    // Message personnalisé selon l'humeur
    this.showMoodMessage();
  }

  private showMoodMessage(): void {
    const messages: { [key: string]: string } = {
      sad: "Je vois que tu es un peu triste aujourd'hui. Ne t'inquiète pas, je suis là pour t'aider ! 💙",
      tired: "Tu as l'air fatiguée... Prenons soin de toi ensemble ! 💤",
      grumpy: "Allez, on va transformer cette mauvaise humeur en super énergie ! ⚡",
      meh: "Un petit coup de boost ne ferait pas de mal ! Allons-y ! 🚀"
    };

    const activityDisplay = document.getElementById('activity-display');
    if (activityDisplay && this.currentMood && messages[this.currentMood]) {
      const message = messages[this.currentMood];
      if (message) {
        activityDisplay.textContent = message;
        activityDisplay.style.transform = 'scale(1.05)';
        setTimeout(() => {
          if (activityDisplay.style) {
            activityDisplay.style.transform = 'scale(1)';
          }
        }, 300);
      }
    }
  }

  private showCompliment(): void {
    const randomCompliment = this.getRandomItem(this.compliments);
    const display = document.getElementById('compliment-display');
    
    if (display) {
      display.style.opacity = '0';
      setTimeout(() => {
        display.textContent = randomCompliment;
        display.style.opacity = '1';
        this.createSparkles(display);
      }, 200);
    }
  }

  private showJoke(): void {
    const randomJoke = this.getRandomItem(this.jokes);
    const display = document.getElementById('joke-display');
    
    if (display) {
      display.style.opacity = '0';
      setTimeout(() => {
        display.textContent = randomJoke;
        display.style.opacity = '1';
        this.createLaughter();
      }, 200);
    }
  }

  private showQuote(): void {
    const randomQuote = this.getRandomItem(this.quotes);
    const display = document.getElementById('quote-display');
    
    if (display) {
      display.style.opacity = '0';
      setTimeout(() => {
        display.textContent = randomQuote;
        display.style.opacity = '1';
        this.createMotivationEffect();
      }, 200);
    }
  }

  private showActivity(): void {
    let activities: string[] = ["Choisis d'abord ton humeur pour une suggestion personnalisée ! 😊"];
    
    if (this.currentMood && this.moodActivities[this.currentMood]) {
      activities = this.moodActivities[this.currentMood]!;
    }
    
    const randomActivity = this.getRandomItem(activities);
    const display = document.getElementById('activity-display');
    
    if (display) {
      display.style.opacity = '0';
      setTimeout(() => {
        display.textContent = randomActivity;
        display.style.opacity = '1';
      }, 200);
    }
  }

  private showAnimal(): void {
    const randomGif = this.getRandomItem(this.animalGifs);
    const img = document.getElementById('animal-gif') as HTMLImageElement;
    const container = document.getElementById('animal-display');
    
    if (img && container) {
      img.style.display = 'none';
      img.src = randomGif;
      
      img.onload = () => {
        const text = container.querySelector('p');
        if (text) text.style.display = 'none';
        
        img.style.display = 'block';
        img.style.opacity = '0';
        setTimeout(() => {
          img.style.opacity = '1';
          this.createHearts(container);
        }, 100);
      };
    }
  }

  private toggleBubbleGame(): void {
    const gameBtn = document.getElementById('start-game-btn') as HTMLButtonElement;
    const container = document.getElementById('bubbles-container');
    
    if (!this.gameActive) {
      this.startBubbleGame();
      if (gameBtn) gameBtn.textContent = 'Arrêter le jeu 🛑';
    } else {
      this.stopBubbleGame();
      if (gameBtn) gameBtn.textContent = 'Commencer le jeu 🎮';
      if (container) container.innerHTML = '';
    }
  }

  private startBubbleGame(): void {
    this.gameActive = true;
    this.gameScore = 0;
    this.updateScore();
    
    this.bubbleInterval = setInterval(() => {
      this.createBubble();
    }, 800) as unknown as number;
  }

  private stopBubbleGame(): void {
    this.gameActive = false;
    if (this.bubbleInterval) {
      clearInterval(this.bubbleInterval);
      this.bubbleInterval = null;
    }
  }

  private createBubble(): void {
    const container = document.getElementById('bubbles-container');
    if (!container || !this.gameActive) return;

    const bubble = document.createElement('div');
    const config: BubbleConfig = {
      x: Math.random() * (container.offsetWidth - 60),
      y: Math.random() * (container.offsetHeight - 60),
      size: 30 + Math.random() * 40,
      color: this.getRandomColor(),
      speed: 2 + Math.random() * 3
    };

    bubble.className = 'bubble';
    bubble.style.left = `${config.x}px`;
    bubble.style.top = `${config.y}px`;
    bubble.style.width = `${config.size}px`;
    bubble.style.height = `${config.size}px`;
    bubble.style.backgroundColor = config.color;

    bubble.addEventListener('click', () => this.popBubble(bubble));
    
    container.appendChild(bubble);

    // Supprimer automatiquement la bulle après 5 secondes
    setTimeout(() => {
      if (bubble.parentNode) {
        bubble.parentNode.removeChild(bubble);
      }
    }, 5000);
  }

  private popBubble(bubble: HTMLElement): void {
    bubble.classList.add('popping');
    this.gameScore += 10;
    this.updateScore();
    
    // Effet de pop
    this.createPopEffect(bubble);
    
    setTimeout(() => {
      if (bubble.parentNode) {
        bubble.parentNode.removeChild(bubble);
      }
    }, 300);
  }

  private updateScore(): void {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
      scoreElement.textContent = this.gameScore.toString();
      scoreElement.style.transform = 'scale(1.2)';
      setTimeout(() => {
        if (scoreElement.style) {
          scoreElement.style.transform = 'scale(1)';
        }
      }, 200);
    }
  }

  // Fonctions utilitaires
  private getRandomItem<T>(array: T[]): T {
    if (array.length === 0) {
      throw new Error('Array cannot be empty');
    }
    return array[Math.floor(Math.random() * array.length)]!;
  }

  private getRandomColor(): string {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
    return this.getRandomItem(colors);
  }

  // Effets visuels
  private createCelebration(): void {
    const celebration = document.createElement('div');
    celebration.className = 'celebration';
    document.body.appendChild(celebration);

    for (let i = 0; i < 20; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.backgroundColor = this.getRandomColor();
      confetti.style.animationDelay = Math.random() * 2 + 's';
      celebration.appendChild(confetti);
    }

    setTimeout(() => {
      document.body.removeChild(celebration);
    }, 3000);
  }

  private createSparkles(element: Element): void {
    for (let i = 0; i < 5; i++) {
      const sparkle = document.createElement('div');
      sparkle.textContent = '✨';
      sparkle.style.position = 'absolute';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.animation = 'float 2s ease-in-out';
      sparkle.style.pointerEvents = 'none';
      sparkle.style.zIndex = '1000';
      
      element.appendChild(sparkle);
      
      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle);
        }
      }, 2000);
    }
  }

  private createLaughter(): void {
    const laughs = ['😂', '🤣', '😄', '😆'];
    for (let i = 0; i < 8; i++) {
      const laugh = document.createElement('div');
      laugh.textContent = this.getRandomItem(laughs);
      laugh.style.position = 'fixed';
      laugh.style.left = Math.random() * window.innerWidth + 'px';
      laugh.style.top = Math.random() * window.innerHeight + 'px';
      laugh.style.fontSize = '2rem';
      laugh.style.animation = 'float 3s ease-in-out';
      laugh.style.pointerEvents = 'none';
      laugh.style.zIndex = '1000';
      
      document.body.appendChild(laugh);
      
      setTimeout(() => {
        document.body.removeChild(laugh);
      }, 3000);
    }
  }

  private createMotivationEffect(): void {
    const stars = ['⭐', '🌟', '✨', '💫'];
    for (let i = 0; i < 10; i++) {
      const star = document.createElement('div');
      star.textContent = this.getRandomItem(stars);
      star.style.position = 'fixed';
      star.style.left = Math.random() * window.innerWidth + 'px';
      star.style.top = Math.random() * window.innerHeight + 'px';
      star.style.fontSize = '1.5rem';
      star.style.animation = 'float 4s ease-in-out';
      star.style.pointerEvents = 'none';
      star.style.zIndex = '1000';
      
      document.body.appendChild(star);
      
      setTimeout(() => {
        document.body.removeChild(star);
      }, 4000);
    }
  }

  private createHearts(container: Element): void {
    const hearts = ['💖', '💕', '💗', '🥰'];
    for (let i = 0; i < 6; i++) {
      const heart = document.createElement('div');
      heart.textContent = this.getRandomItem(hearts);
      heart.style.position = 'absolute';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.top = Math.random() * 100 + '%';
      heart.style.fontSize = '1.5rem';
      heart.style.animation = 'float 2.5s ease-in-out';
      heart.style.pointerEvents = 'none';
      heart.style.zIndex = '100';
      
      container.appendChild(heart);
      
      setTimeout(() => {
        if (heart.parentNode) {
          heart.parentNode.removeChild(heart);
        }
      }, 2500);
    }
  }

  private createPopEffect(bubble: HTMLElement): void {
    const rect = bubble.getBoundingClientRect();
    const sparkles = ['✨', '💥', '⭐', '🎉'];
    
    for (let i = 0; i < 4; i++) {
      const sparkle = document.createElement('div');
      sparkle.textContent = this.getRandomItem(sparkles);
      sparkle.style.position = 'fixed';
      sparkle.style.left = rect.left + rect.width / 2 + 'px';
      sparkle.style.top = rect.top + rect.height / 2 + 'px';
      sparkle.style.fontSize = '1.2rem';
      sparkle.style.animation = 'float 1s ease-out';
      sparkle.style.pointerEvents = 'none';
      sparkle.style.zIndex = '1000';
      
      document.body.appendChild(sparkle);
      
      setTimeout(() => {
        document.body.removeChild(sparkle);
      }, 1000);
    }
  }

  private createFloatingElements(): void {
    // Créer des éléments flottants en arrière-plan
    setInterval(() => {
      if (Math.random() > 0.7) {
        this.createRandomFloatingEmoji();
      }
    }, 3000);
  }

  private createRandomFloatingEmoji(): void {
    const emojis = ['🌈', '⭐', '✨', '💫', '🦄', '🌸', '🎈', '🎭'];
    const emoji = document.createElement('div');
    emoji.textContent = this.getRandomItem(emojis);
    emoji.style.position = 'fixed';
    emoji.style.left = Math.random() * window.innerWidth + 'px';
    emoji.style.top = window.innerHeight + 'px';
    emoji.style.fontSize = '2rem';
    emoji.style.animation = 'confetti-fall 8s linear';
    emoji.style.pointerEvents = 'none';
    emoji.style.zIndex = '10';
    emoji.style.opacity = '0.7';
    
    document.body.appendChild(emoji);
    
    setTimeout(() => {
      if (document.body.contains(emoji)) {
        document.body.removeChild(emoji);
      }
    }, 8000);
  }
}

// Initialiser l'application quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
  new LauraSmileApp();
}); 