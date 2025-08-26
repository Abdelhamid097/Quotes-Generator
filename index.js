var quotes = [
    {'quote': '“Be yourself; everyone else is already taken.”',
        'author': '― Oscar Wilde'
     },
    {'quote': '“So many books, so little time.”',
        'author': '― Frank Zappa'
     },
    {'quote': '“A room without books is like a body without a soul.”',
        'author': '― Marcus Tullius Cicero'
     },
    {'quote': '“You only live once, but if you do it right, once is enough.”',
        'author': '― Mae West'
     },
    {'quote': '“If you tell the truth, you dont have to remember anything.”',
        'author': '― Mark Twain'
     },
    {'quote': '“A friend is someone who knows all about you and still loves you.”',
        'author': '― Elbert Hubbard'
     },
    {'quote': '“Always forgive your enemies; nothing annoys them so much.”',
        'author': '― Oscar Wilde'
     },
    {'quote': '“We accept the love we think we deserve.”',
        'author': '― Stephen Chbosky, The Perks of Being a Wallflower'
     },
    {'quote': '“Without music, life would be a mistake.”',
        'author': '― Friedrich Nietzsche, Twilight of the Idols'
     },

];

var lastRandomIndex = -1;

function generateQuote() {
    var random = Math.floor(Math.random() * quotes.length);

    if (random === lastRandomIndex) {
        random = (random + 1) % quotes.length;
    }

    lastRandomIndex = random;

    document.getElementById('qouteAndAuthor').innerHTML = `
        <p>${quotes[random].quote}</p>
        <p>${quotes[random].author}</p>
    `;
}