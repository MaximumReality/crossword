// 'img/bg-03.png',
const BG_POOL = [
 'img/cw-bg-azul.jpeg',
 'img/cw-bg-arcade.JPG',
 'img/cw-bg-nebula.jpeg',
 'img/cw-bg-flower.jpeg',
 'img/cw-bg-circuit.jpeg',
 
 
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
 {
  title: "LEVEL 04 — SIGNAL BREACH",
  words: [
    { word: "SIGNAL",  clue: "Transmission sent across the grid",        row: 0, col: 0, dir: "across" },
    { word: "SYNC",    clue: "Align data between systems",               row: 0, col: 0, dir: "down"   },
    { word: "ERROR",   clue: "Something went wrong in the system",       row: 2, col: 1, dir: "across" },
    { word: "CACHE",   clue: "Temporary stored data for quick access",   row: 0, col: 4, dir: "down"   },
    { word: "TRACE",   clue: "Follow the path of a signal",              row: 4, col: 1, dir: "across" },
    { word: "KEY",     clue: "Used to unlock encrypted data",            row: 2, col: 3, dir: "down"   },
  ]
},
 {
  title: "LEVEL 05 — SYSTEM OVERFLOW",
  words: [
    { word: "BUFFER",  clue: "Temporary data storage zone",             row: 0, col: 0, dir: "across" },
    { word: "BYTE",    clue: "Unit of digital information",             row: 0, col: 0, dir: "down"   },
    { word: "STACK",   clue: "Memory structure that grows upward",      row: 2, col: 1, dir: "across" },
    { word: "TRACE",   clue: "Follow execution path",                   row: 0, col: 3, dir: "down"   },
    { word: "CRASH",   clue: "System failure event",                    row: 4, col: 1, dir: "across" },
    { word: "PORT",    clue: "Connection endpoint",                     row: 2, col: 4, dir: "down"   },
  ]
},
 {
  title: "LEVEL 06 — DARK NET",
  words: [
    { word: "SHADOW",  clue: "Hidden presence in the system",           row: 0, col: 0, dir: "across" },
    { word: "SHELL",   clue: "Command interface layer",                 row: 0, col: 0, dir: "down"   },
    { word: "TORRENT", clue: "Decentralized file sharing method",       row: 2, col: 0, dir: "across" },
    { word: "HASH",    clue: "Encrypted data signature",                row: 0, col: 4, dir: "down"   },
    { word: "AGENT",   clue: "Autonomous program",                      row: 4, col: 1, dir: "across" },
    { word: "KEY",     clue: "Unlocks secure data",                     row: 2, col: 5, dir: "down"   },
  ]
},
 {
  title: "LEVEL 07 — VOID SIGNAL",
  words: [
    { word: "VOID",    clue: "The space between systems",               row: 0, col: 0, dir: "across" },
    { word: "VECTOR",  clue: "Directed data path",                      row: 0, col: 0, dir: "down"   },
    { word: "GLARE",   clue: "Bright distortion in display",            row: 2, col: 1, dir: "across" },
    { word: "INPUT",   clue: "Data entering the system",                row: 0, col: 3, dir: "down"   },
    { word: "ECHO",    clue: "Repeated signal response",                row: 4, col: 1, dir: "across" },
    { word: "NODE",    clue: "Point in a network",                      row: 2, col: 4, dir: "down"   },
  ]
},
 {
  title: "LEVEL 08 — AZUL PROTOCOL",
  words: [
    { word: "AZUL",    clue: "Quantum hacker cat",                      row: 0, col: 0, dir: "across" },
    { word: "ARRAY",   clue: "Structured list of data",                 row: 0, col: 0, dir: "down"   },
    { word: "GLITCH",  clue: "Unexpected system behavior",              row: 2, col: 0, dir: "across" },
    { word: "LOOP",    clue: "Repeating code cycle",                    row: 0, col: 3, dir: "down"   },
    { word: "TRACE",   clue: "Follow program execution",                row: 4, col: 1, dir: "across" },
    { word: "BYTE",    clue: "Basic data unit",                         row: 2, col: 5, dir: "down"   },
  ]
},
 {
  title: "LEVEL 09 — DEEP SPACE",
  words: [
    { word: "ORBIT",   clue: "Path around a planet",                row: 0, col: 0, dir: "across" },
    { word: "OZONE",   clue: "Protective atmospheric layer",        row: 0, col: 0, dir: "down"   },
    { word: "COMET",   clue: "Ice body with a glowing tail",        row: 2, col: 1, dir: "across" },
    { word: "BEAM",    clue: "Directed energy signal",              row: 0, col: 3, dir: "down"   },
    { word: "LUNAR",   clue: "Related to the moon",                 row: 4, col: 1, dir: "across" },
    { word: "STAR",    clue: "Burning ball of gas",                 row: 2, col: 4, dir: "down"   },
  ]
},
 {
  title: "LEVEL 10 — WORLD GRID",
  words: [
    { word: "ATLAS",   clue: "Collection of world maps",            row: 0, col: 0, dir: "across" },
    { word: "ALPS",    clue: "Famous European mountains",           row: 0, col: 0, dir: "down"   },
    { word: "OCEAN",   clue: "Massive body of saltwater",           row: 2, col: 1, dir: "across" },
    { word: "SAND",    clue: "Desert terrain material",             row: 0, col: 3, dir: "down"   },
    { word: "ROUTE",   clue: "Planned travel path",                 row: 4, col: 1, dir: "across" },
    { word: "MAP",     clue: "Visual representation of land",       row: 2, col: 4, dir: "down"   },
  ]
},
 {
  title: "LEVEL 11 — LAB PROTOCOL",
  words: [
    { word: "CELL",    clue: "Basic unit of life",                  row: 0, col: 0, dir: "across" },
    { word: "CODE",    clue: "Instructions for a system",           row: 0, col: 0, dir: "down"   },
    { word: "VIRUS",   clue: "Microscopic infectious agent",        row: 2, col: 0, dir: "across" },
    { word: "ENZYME",  clue: "Protein that speeds reactions",       row: 0, col: 3, dir: "down"   },
    { word: "GENE",    clue: "Unit of heredity",                    row: 4, col: 1, dir: "across" },
    { word: "DNA",     clue: "Genetic blueprint",                   row: 2, col: 5, dir: "down"   },
  ]
},
 {
  title: "LEVEL 12 — MED CORE",
  words: [
    { word: "HEART",   clue: "Pumps blood through the body",        row: 0, col: 0, dir: "across" },
    { word: "HEAL",    clue: "Recover from injury",                 row: 0, col: 0, dir: "down"   },
    { word: "NURSE",   clue: "Provides patient care",               row: 2, col: 0, dir: "across" },
    { word: "DRIP",    clue: "IV fluid delivery",                   row: 0, col: 3, dir: "down"   },
    { word: "PULSE",   clue: "Heartbeat rhythm",                    row: 4, col: 0, dir: "across" },
    { word: "SCAN",    clue: "Medical imaging process",             row: 2, col: 4, dir: "down"   },
  ]
},
 {
  title: "LEVEL 13 — BIO MATRIX",
  words: [
    { word: "BRAIN",   clue: "Control center of the body",          row: 0, col: 0, dir: "across" },
    { word: "BLOOD",   clue: "Circulating body fluid",              row: 0, col: 0, dir: "down"   },
    { word: "NERVE",   clue: "Transmits signals in the body",       row: 2, col: 0, dir: "across" },
    { word: "ORGAN",   clue: "Body structure with function",        row: 0, col: 3, dir: "down"   },
    { word: "TISSUE",  clue: "Group of similar cells",              row: 4, col: 0, dir: "across" },
    { word: "CELL",    clue: "Smallest life unit",                  row: 2, col: 5, dir: "down"   },
  ]
},
 {
  title: "LEVEL 14 — COSMIC DRIFT",
  words: [
    { word: "ASTRO",   clue: "Relating to stars",                row: 0, col: 0, dir: "across" },
    { word: "ATOM",    clue: "Smallest unit of matter",          row: 0, col: 0, dir: "down"   },
    { word: "COMET",   clue: "Icy body with a tail",             row: 2, col: 1, dir: "across" },
    { word: "ROVER",   clue: "Explores planetary surfaces",      row: 0, col: 3, dir: "down"   },
    { word: "LUNAR",   clue: "Related to the moon",              row: 4, col: 1, dir: "across" },
    { word: "STAR",    clue: "Burning sphere in space",          row: 2, col: 4, dir: "down"   },
  ]
},
 {
  title: "LEVEL 15 — DATA STREAM",
  words: [
    { word: "STREAM",  clue: "Continuous data flow",             row: 0, col: 0, dir: "across" },
    { word: "STACK",   clue: "Layered memory structure",         row: 0, col: 0, dir: "down"   },
    { word: "CACHE",   clue: "Quick-access memory",              row: 2, col: 1, dir: "across" },
    { word: "ERROR",   clue: "System fault",                     row: 0, col: 4, dir: "down"   },
    { word: "TRACE",   clue: "Follow execution path",            row: 4, col: 1, dir: "across" },
    { word: "PORT",    clue: "Connection endpoint",              row: 2, col: 5, dir: "down"   },
  ]
},
 {
  title: "LEVEL 16 — CITY LIGHTS",
  words: [
    { word: "NEON",    clue: "Bright electric glow",             row: 0, col: 0, dir: "across" },
    { word: "NIGHT",   clue: "Dark part of the day",             row: 0, col: 0, dir: "down"   },
    { word: "ALLEY",   clue: "Narrow city passage",              row: 2, col: 0, dir: "across" },
    { word: "TOWER",   clue: "Tall building",                    row: 0, col: 3, dir: "down"   },
    { word: "ROADS",   clue: "Paths for vehicles",               row: 4, col: 0, dir: "across" },
    { word: "SIGN",    clue: "Displays information",             row: 2, col: 4, dir: "down"   },
  ]
},
 {
  title: "LEVEL 17 — DESERT CODE",
  words: [
    { word: "SAND",    clue: "Desert ground",                    row: 0, col: 0, dir: "across" },
    { word: "SUN",     clue: "Bright star in our sky",           row: 0, col: 0, dir: "down"   },
    { word: "DUNE",    clue: "Hill of sand",                     row: 2, col: 1, dir: "across" },
    { word: "NOMAD",   clue: "Wanders without home",             row: 0, col: 3, dir: "down"   },
    { word: "OASIS",   clue: "Water in desert",                  row: 4, col: 0, dir: "across" },
    { word: "MAP",     clue: "Navigation tool",                  row: 2, col: 4, dir: "down"   },
  ]
},
 {
  title: "LEVEL 18 — OCEAN DEPTHS",
  words: [
    { word: "OCEAN",   clue: "Massive saltwater body",           row: 0, col: 0, dir: "across" },
    { word: "OTTER",   clue: "Playful sea animal",               row: 0, col: 0, dir: "down"   },
    { word: "CORAL",   clue: "Reef-building organism",           row: 2, col: 0, dir: "across" },
    { word: "ANCHOR",  clue: "Holds ships in place",             row: 0, col: 3, dir: "down"   },
    { word: "WHALE",   clue: "Largest sea mammal",               row: 4, col: 0, dir: "across" },
    { word: "EEL",     clue: "Long slippery fish",               row: 2, col: 5, dir: "down"   },
  ]
},
 {
  title: "LEVEL 19 — TIME LOOP",
  words: [
    { word: "CLOCK",   clue: "Tracks time",                      row: 0, col: 0, dir: "across" },
    { word: "CYCLE",   clue: "Repeating sequence",               row: 0, col: 0, dir: "down"   },
    { word: "HOUR",    clue: "60 minutes",                       row: 2, col: 1, dir: "across" },
    { word: "RESET",   clue: "Start over",                       row: 0, col: 3, dir: "down"   },
    { word: "TIMER",   clue: "Counts down",                      row: 4, col: 0, dir: "across" },
    { word: "AGE",     clue: "Measure of time lived",            row: 2, col: 4, dir: "down"   },
  ]
},
 {
  title: "LEVEL 20 — FOOD CORE",
  words: [
    { word: "BREAD",   clue: "Staple baked food",                row: 0, col: 0, dir: "across" },
    { word: "BEEF",    clue: "Meat from cattle",                 row: 0, col: 0, dir: "down"   },
    { word: "RICE",    clue: "Common grain",                     row: 2, col: 1, dir: "across" },
    { word: "EGG",     clue: "Breakfast staple",                 row: 0, col: 3, dir: "down"   },
    { word: "PASTA",   clue: "Italian dish",                     row: 4, col: 0, dir: "across" },
    { word: "TEA",     clue: "Hot drink",                        row: 2, col: 4, dir: "down"   },
  ]
},
 {
  title: "LEVEL 21 — WEATHER SYS",
  words: [
    { word: "STORM", clue: "Heavy weather event", row: 0, col: 0, dir: "across" },
    { word: "SNOW",  clue: "Frozen precipitation", row: 0, col: 0, dir: "down" },
    { word: "RAIN",  clue: "Falling water", row: 2, col: 1, dir: "across" },
    { word: "WIND",  clue: "Moving air", row: 0, col: 3, dir: "down" },
    { word: "CLOUD", clue: "Sky vapor mass", row: 4, col: 0, dir: "across" },
    { word: "SUN",   clue: "Source of light", row: 2, col: 4, dir: "down" },
  ]
},
{
  title: "LEVEL 22 — MUSIC GRID",
  words: [
    { word: "BEATS", clue: "Rhythm units", row: 0, col: 0, dir: "across" },
    { word: "BASS",  clue: "Low sound", row: 0, col: 0, dir: "down" },
    { word: "NOTE",  clue: "Musical tone", row: 2, col: 1, dir: "across" },
    { word: "SONG",  clue: "Musical piece", row: 0, col: 3, dir: "down" },
    { word: "TRACK", clue: "Recorded music", row: 4, col: 0, dir: "across" },
    { word: "KEY",   clue: "Musical scale base", row: 2, col: 4, dir: "down" },
  ]
},
{
  title: "LEVEL 23 — ANIMAL FILE",
  words: [
    { word: "TIGER", clue: "Striped predator", row: 0, col: 0, dir: "across" },
    { word: "TOAD",  clue: "Amphibian", row: 0, col: 0, dir: "down" },
    { word: "EAGLE", clue: "Bird of prey", row: 2, col: 0, dir: "across" },
    { word: "GOAT",  clue: "Horned animal", row: 0, col: 3, dir: "down" },
    { word: "ZEBRA", clue: "Striped horse", row: 4, col: 0, dir: "across" },
    { word: "ANT",   clue: "Tiny insect", row: 2, col: 4, dir: "down" },
  ]
},
{
  title: "LEVEL 24 — COLOR CODE",
  words: [
    { word: "RED", clue: "Color of fire", row: 0, col: 0, dir: "across" },
    { word: "RGB", clue: "Color system", row: 0, col: 0, dir: "down" },
    { word: "BLUE", clue: "Sky color", row: 2, col: 0, dir: "across" },
    { word: "GREEN", clue: "Color of grass", row: 0, col: 2, dir: "down" },
    { word: "PINK", clue: "Soft red tone", row: 4, col: 0, dir: "across" },
    { word: "INK", clue: "Used for writing", row: 2, col: 3, dir: "down" },
  ]
},
{
  title: "LEVEL 25 — SCHOOL SYS",
  words: [
    { word: "CLASS", clue: "Group of students", row: 0, col: 0, dir: "across" },
    { word: "CHAIR", clue: "You sit on it", row: 0, col: 0, dir: "down" },
    { word: "BOOK", clue: "Contains lessons", row: 2, col: 1, dir: "across" },
    { word: "RULE", clue: "Must be followed", row: 0, col: 3, dir: "down" },
    { word: "TEST", clue: "Measures knowledge", row: 4, col: 0, dir: "across" },
    { word: "INK", clue: "Used to write", row: 2, col: 4, dir: "down" },
  ]
},
{
  title: "LEVEL 26 — SPORTS MODE",
  words: [
    { word: "SCORE", clue: "Points gained", row: 0, col: 0, dir: "across" },
    { word: "SOCCER", clue: "Popular sport", row: 0, col: 0, dir: "down" },
    { word: "GOAL", clue: "Score target", row: 2, col: 1, dir: "across" },
    { word: "RACE", clue: "Speed contest", row: 0, col: 3, dir: "down" },
    { word: "TEAM", clue: "Group of players", row: 4, col: 0, dir: "across" },
    { word: "MAT", clue: "Gym surface", row: 2, col: 4, dir: "down" },
  ]
},
{
  title: "LEVEL 27 — HOME BASE",
  words: [
    { word: "HOUSE", clue: "Place to live", row: 0, col: 0, dir: "across" },
    { word: "HALL", clue: "Connecting space", row: 0, col: 0, dir: "down" },
    { word: "ROOM", clue: "Part of a house", row: 2, col: 1, dir: "across" },
    { word: "WALL", clue: "Vertical structure", row: 0, col: 3, dir: "down" },
    { word: "TABLE", clue: "Furniture", row: 4, col: 0, dir: "across" },
    { word: "BED", clue: "You sleep here", row: 2, col: 4, dir: "down" },
  ]
},
{
  title: "LEVEL 28 — TECH CORE",
  words: [
    { word: "PHONE", clue: "Communication device", row: 0, col: 0, dir: "across" },
    { word: "PIXEL", clue: "Screen unit", row: 0, col: 0, dir: "down" },
    { word: "CODE", clue: "Programming instructions", row: 2, col: 1, dir: "across" },
    { word: "EMAIL", clue: "Digital message", row: 0, col: 3, dir: "down" },
    { word: "CHIP", clue: "Electronic component", row: 4, col: 0, dir: "across" },
    { word: "APP", clue: "Mobile software", row: 2, col: 4, dir: "down" },
  ]
},
{
  title: "LEVEL 29 — NATURE GRID",
  words: [
    { word: "PLANT", clue: "Living organism", row: 0, col: 0, dir: "across" },
    { word: "POND", clue: "Small water body", row: 0, col: 0, dir: "down" },
    { word: "TREE", clue: "Tall plant", row: 2, col: 1, dir: "across" },
    { word: "LEAF", clue: "Part of plant", row: 0, col: 3, dir: "down" },
    { word: "GRASS", clue: "Ground cover", row: 4, col: 0, dir: "across" },
    { word: "SUN", clue: "Gives light", row: 2, col: 4, dir: "down" },
  ]
},
{
  title: "LEVEL 30 — ENERGY FLOW",
  words: [
    { word: "POWER", clue: "Energy source", row: 0, col: 0, dir: "across" },
    { word: "PLUG", clue: "Connects electricity", row: 0, col: 0, dir: "down" },
    { word: "WATT", clue: "Energy unit", row: 2, col: 1, dir: "across" },
    { word: "GRID", clue: "Power network", row: 0, col: 3, dir: "down" },
    { word: "SPARK", clue: "Small electric flash", row: 4, col: 0, dir: "across" },
    { word: "ARC", clue: "Electric jump", row: 2, col: 4, dir: "down" },
  ]
},
{
  title: "LEVEL 31 — TRAVEL MODE",
  words: [
    { word: "TRAIN", clue: "Rail transport", row: 0, col: 0, dir: "across" },
    { word: "TAXI", clue: "City transport", row: 0, col: 0, dir: "down" },
    { word: "ROAD", clue: "Travel path", row: 2, col: 1, dir: "across" },
    { word: "AIR", clue: "Flight medium", row: 0, col: 3, dir: "down" },
    { word: "TRIP", clue: "Journey", row: 4, col: 0, dir: "across" },
    { word: "MAP", clue: "Navigation guide", row: 2, col: 4, dir: "down" },
  ]
},
{
  title: "LEVEL 32 — VOID ECHO",
  words: [
    { word: "ECHO", clue: "Reflected sound", row: 0, col: 0, dir: "across" },
    { word: "ERROR", clue: "System fault", row: 0, col: 0, dir: "down" },
    { word: "VOID", clue: "Empty space", row: 2, col: 1, dir: "across" },
    { word: "DATA", clue: "Information", row: 0, col: 3, dir: "down" },
    { word: "TRACE", clue: "Follow signal", row: 4, col: 0, dir: "across" },
    { word: "ARC", clue: "Curved path", row: 2, col: 4, dir: "down" },
  ]
},
{
  title: "LEVEL 33 — FINAL NODE",
  words: [
    { word: "FINAL", clue: "Last stage", row: 0, col: 0, dir: "across" },
    { word: "FRAME", clue: "Single image unit", row: 0, col: 0, dir: "down" },
    { word: "NODE", clue: "Network point", row: 2, col: 1, dir: "across" },
    { word: "EDGE", clue: "Boundary line", row: 0, col: 3, dir: "down" },
    { word: "CORE", clue: "Central part", row: 4, col: 0, dir: "across" },
    { word: "END", clue: "Finish", row: 2, col: 4, dir: "down" },
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
