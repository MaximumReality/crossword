# GRID BREACH 
Features:
	∙	3 levels built in, fully playable — tap/click cells, type letters, Tab toggles direction
	∙	Active clue bar highlights the current word’s clue at all times
	∙	CHECK / CLEAR / REVEAL buttons + progress bar
	∙	Win screen fires when the grid is complete and correct
	∙	Neon cyberpunk aesthetic with scanlines
To expand it — everything lives at the top of the file:
Adding backgrounds: Fill the BG_POOL array with your PNG paths:

const BG_POOL = [
  'backgrounds/city01.png',
  'backgrounds/glitch02.png',
  // etc.
];


Each level randomly picks one, avoiding repeats until the pool is exhausted.
Adding levels: Just push another object into LEVELS:

{
  title: "LEVEL 04 — YOUR TITLE",
  words: [
    { word: "AZUL", clue: "Quantum physicist hacker cat", row: 0, col: 0, dir: "across" },
    // ...
  ]
}

Words just need word, clue, row, col, dir — the grid size auto-calculates. One tip: make sure intersecting cells share the same letter at their crossing point!​​​​​​​​​​​​​​​​
