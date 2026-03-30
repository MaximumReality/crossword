// 'img/bg-03.png',
];

// ── FALLBACK GRADIENTS (used when BG_POOL is empty) ──────────
const BG_FALLBACKS = [
  'linear-gradient(135deg, #0a001a 0%, #001220 40%, #000a14 100%)',
  'linear-gradient(135deg, #0d001a 0%, #1a0030 50%, #000d1a 100%)',
  'linear-gradient(135deg, #001a0d 0%, #001a1a 50%, #000a1a 100%)',
  'linear-gradient(135deg, #1a0d00 0%, #0a001a 50%, #001a14 100%)',
  'linear-gradient(160deg, #000d1a 0%, #1a0020 60%, #000814 100%)',
];

// ── LEVELS ───────────────────────────────────────────────────
const LEVELS = [

  // ── LEVEL 01 ─────────────────────────────────────────────
  {
    title: "LEVEL 01 — BOOT SEQUENCE",
    words: [
      { word: "GLITCH",   clue: "Signal corruption in the grid",         row: 0, col: 0, dir: "across" },
      { word: "GRID",     clue: "Networked matrix of nodes",              row: 0, col: 0, dir: "down"   },
      { word: "LOOP",     clue: "Recursive code trap",                    row: 2, col: 2, dir: "across" },
      { word: "HACK",     clue: "Unauthorized system access",             row: 0, col: 4, dir: "down"   },
      { word: "NODE",     clue: "Single point in a network",              row: 4, col: 0, dir: "across" },
      { word: "INPUT",    clue: "Data fed into a system",                 row: 2, col: 4, dir: "down"   },
    ]
  },

  // ── LEVEL 02 ─────────────────────────────────────────────
  {
    title: "LEVEL 02 — DEEP PROTOCOL",
    words: [
      { word: "NEURAL",   clue: "Brain-like computing architecture",      row: 0, col: 0, dir: "across" },
      { word: "NEON",     clue: "Electric glow of the city",              row: 0, col: 0, dir: "down"   },
      { word: "ECHO",     clue: "Signal bounced back from a wall",        row: 2, col: 1, dir: "across" },
      { word: "UPLOAD",   clue: "Transfer data to the cloud",             row: 0, col: 3, dir: "down"   },
      { word: "ROGUE",    clue: "Uncontrolled AI or agent",               row: 4, col: 1, dir: "across" },
      { word: "LINK",     clue: "Connection between two nodes",           row: 2, col: 5, dir: "down"   },
    ]
  },

  // ── LEVEL 03 ─────────────────────────────────────────────
  {
    title: "LEVEL 03 — SHADOW MATRIX",
    words: [
      { word: "CIPHER",   clue: "Encrypted code or algorithm",            row: 0, col: 0, dir: "across" },
      { word: "CORE",     clue: "Central processing unit",                row: 0, col: 2, dir: "down"   },
      { word: "PIXEL",    clue: "Smallest unit of a display",             row: 2, col: 0, dir: "across" },
      { word: "PHASE",    clue: "Stage of a system cycle",                row: 0, col: 5, dir: "down"   },
      { word: "SPAWN",    clue: "Create a new process or entity",         row: 4, col: 0, dir: "across" },
      { word: "WIRE",     clue: "Physical data transmission path",        row: 2, col: 3, dir: "down"   },
    ]
  },

  // ── ADD MORE LEVELS BELOW ────────────────────────────────
  // {
  //   title: "LEVEL 04 — YOUR TITLE HERE",
  //   words: [
  //     { word: "AZUL",   clue: "Quantum physicist hacker cat",    row: 0, col: 0, dir: "across" },
  //     { word: "AGENT",  clue: "Autonomous program in the grid",  row: 0, col: 0, dir: "down"   },
  //     // ...more words...
  //   ]
  // },

]; // ← end of LEVELS — don't delete this line
