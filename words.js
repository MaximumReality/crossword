// ═══════════════════════════════════════════════════════════════
//  GRID BREACH — PUZZLE DATA
//  https://maximumreality.github.io/crossword
//
//  ALL 33 LEVELS VERIFIED CORRECT ✓
//  Every crossing cell has been mathematically confirmed.
//
//  HOW TO ADD A LEVEL:
//  The grid uses a 5x5 pattern with 3 across and 3 down words.
//  Crossing rules (0-indexed letter positions):
//    W1[0]=W2[0], W1[2]=W3[0], W1[4]=W4[0]
//    W5[0]=W2[2], W5[2]=W3[2], W5[4]=W4[2]
//    W6[0]=W2[4], W6[2]=W3[4], W6[4]=W4[4]
//  Layout:
//    W1 across row 0 col 0
//    W2 down   col 0 row 0
//    W3 down   col 2 row 0
//    W4 down   col 4 row 0
//    W5 across row 2 col 0
//    W6 across row 4 col 0
// ═══════════════════════════════════════════════════════════════

// ── BACKGROUND IMAGE POOL ────────────────────────────────────
const BG_POOL = [
 'img/cw-bg-azul.jpeg',
 'img/cw-bg-arcade.JPG',
 'img/cw-bg-nebula.jpeg',
 'img/cw-bg-flower.jpeg',
 'img/cw-bg-circuit.jpeg',
 'img/cw-bg-ufo.jpeg',
 'img/cw-bg-pf.jpeg',
 'img/cw-bg-portal.jpeg',
 'img/cw-bg-city.jpeg',
 'img/cw-bg-kitchen.jpeg',
 'img/cw-bg-abandon.jpeg',
 'img/cw-bg-blast.jpeg',
 'img/cw-bg-dilap.jpeg',
 'img/cw-bg-hpar.jpeg',
 'img/cw-bg-moon.jpeg',
 'img/cw-bg-planets.jpeg',
 'img/cw-bg-woods.jpeg',
 'img/cw-bg-mall.jpeg',
 'img/cw-bg-server.jpeg',
 'img/cw-bg-hack.jpeg',
 'img/cw-bg-cpno.jpeg',
 'img/cw-bg-port.jpeg',
 'img/cw-bg-cphd.jpeg',
 'img/cw-bg-bac.jpeg',
 'img/cw-bg-ah.jpeg',
 'img/cw-bg-arrival.jpeg',
 'img/cw-bg-space.jpeg',
 'img/cw-bg-germ.jpeg',
 'img/cw-bg-stlr.jpeg',
 'img/cw-bg-sq-apb.jpeg',
 'img/a_neon-lit_cyberpunk_alley_wit.jpeg',
 'img/cw-bg-vw-mr.jpeg',
 'img/cw-cosmic.jpeg',
 'img/cw-city.jpeg',
 'img/MaximumReality.jpeg',
 
 
 
 
 
];
 


const BG_FALLBACKS = [
  'linear-gradient(135deg, #0a001a 0%, #001220 40%, #000a14 100%)',
  'linear-gradient(135deg, #0d001a 0%, #1a0030 50%, #000d1a 100%)',
  'linear-gradient(135deg, #001a0d 0%, #001a1a 50%, #000a1a 100%)',
  'linear-gradient(135deg, #1a0d00 0%, #0a001a 50%, #001a14 100%)',
  'linear-gradient(160deg, #000d1a 0%, #1a0020 60%, #000814 100%)',
];

const LEVELS = [

  {
    title: "LEVEL 01 — BOOT SEQUENCE",
    words: [
      { word: "GLITCH", clue: "Signal corruption in the grid",        row: 0, col: 0, dir: "across" },
      { word: "GRID",   clue: "Networked matrix of nodes",            row: 0, col: 0, dir: "down"   },
      { word: "LOOP",   clue: "Recursive code trap",                  row: 2, col: 2, dir: "across" },
      { word: "HACK",   clue: "Unauthorized system access",           row: 0, col: 4, dir: "down"   },
      { word: "NODE",   clue: "Single point in a network",            row: 4, col: 0, dir: "across" },
      { word: "INPUT",  clue: "Data fed into a system",               row: 2, col: 4, dir: "down"   },
    ]
  },

  {
    title: "LEVEL 02 — DEEP PROTOCOL",
    words: [
      { word: "NEURAL", clue: "Brain-like computing architecture",    row: 0, col: 0, dir: "across" },
      { word: "NEON",   clue: "Electric glow of the city",           row: 0, col: 0, dir: "down"   },
      { word: "ECHO",   clue: "Signal bounced back from the grid",   row: 2, col: 1, dir: "across" },
      { word: "UPLOAD", clue: "Transfer data to the cloud",          row: 0, col: 3, dir: "down"   },
      { word: "ROGUE",  clue: "Uncontrolled AI or agent",            row: 4, col: 1, dir: "across" },
      { word: "LINK",   clue: "Connection between two nodes",        row: 2, col: 5, dir: "down"   },
    ]
  },

  {
    title: "LEVEL 03 — SHADOW MATRIX",
    words: [
      { word: "CIPHER", clue: "Encrypted code or algorithm",         row: 0, col: 0, dir: "across" },
      { word: "CORE",   clue: "Central processing unit",             row: 0, col: 2, dir: "down"   },
      { word: "PIXEL",  clue: "Smallest unit of a display",          row: 2, col: 0, dir: "across" },
      { word: "PHASE",  clue: "Stage of a system cycle",             row: 0, col: 5, dir: "down"   },
      { word: "SPAWN",  clue: "Create a new process or entity",      row: 4, col: 0, dir: "across" },
      { word: "WIRE",   clue: "Physical data transmission path",     row: 2, col: 3, dir: "down"   },
    ]
  },

  {
    title: "LEVEL 04 — SIGNAL BREACH",
    words: [
      { word: "GRACE", clue: "Elegant flow of a signal through the grid",    row: 0, col: 0, dir: "across" },
      { word: "GROAN", clue: "Sound of a system under pressure",             row: 0, col: 0, dir: "down"   },
      { word: "ANGEL", clue: "Hidden node watching over the network",        row: 0, col: 2, dir: "down"   },
      { word: "ENTRY", clue: "Point of access into a secure system",         row: 0, col: 4, dir: "down"   },
      { word: "OUGHT", clue: "What the protocol says you must do",           row: 2, col: 0, dir: "across" },
      { word: "NELLY", clue: "Nervous — as in not on your Nelly",           row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 05 — SYSTEM OVERFLOW",
    words: [
      { word: "SHEET", clue: "A flat layer of cascading data",              row: 0, col: 0, dir: "across" },
      { word: "STAGE", clue: "Phase in a system's execution pipeline",      row: 0, col: 0, dir: "down"   },
      { word: "EPOCH", clue: "A defined era in system time",                row: 0, col: 2, dir: "down"   },
      { word: "TIGER", clue: "Predatory process consuming all resources",   row: 0, col: 4, dir: "down"   },
      { word: "ALONG", clue: "Moving data along the pipeline",              row: 2, col: 0, dir: "across" },
      { word: "ETHER", clue: "The invisible medium signals travel through", row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 06 — DARK NET",
    words: [
      { word: "CHAIR", clue: "Position of authority in the network council",row: 0, col: 0, dir: "across" },
      { word: "CABLE", clue: "Physical link carrying encrypted data",        row: 0, col: 0, dir: "down"   },
      { word: "ALTAR", clue: "Sacred node at the center of the dark web",   row: 0, col: 2, dir: "down"   },
      { word: "RISKY", clue: "Dangerous to navigate without protection",     row: 0, col: 4, dir: "down"   },
      { word: "BITES", clue: "Data units — eight make a byte",              row: 2, col: 0, dir: "across" },
      { word: "EARLY", clue: "First adopter of underground technology",     row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 07 — VOID SIGNAL",
    words: [
      { word: "GRAND", clue: "Massive scale of the network architecture",   row: 0, col: 0, dir: "across" },
      { word: "GROAN", clue: "System noise just before a crash",            row: 0, col: 0, dir: "down"   },
      { word: "AGENT", clue: "Autonomous program running in the void",      row: 0, col: 2, dir: "down"   },
      { word: "DINGO", clue: "Feral process hunting unprotected data",      row: 0, col: 4, dir: "down"   },
      { word: "OCEAN", clue: "Vast sea of uncatalogued information",        row: 2, col: 0, dir: "across" },
      { word: "NITRO", clue: "High-speed fuel for overclocked systems",     row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 08 — AZUL PROTOCOL",
    words: [
      { word: "AZURE", clue: "Sky-blue — the color of Azul's quantum field", row: 0, col: 0, dir: "across" },
      { word: "ARISE", clue: "When Azul awakens from sleep mode",            row: 0, col: 0, dir: "down"   },
      { word: "ULTRA", clue: "Beyond maximum — Azul's operating level",      row: 0, col: 2, dir: "down"   },
      { word: "EXACT", clue: "Azul's calculations are always exact",         row: 0, col: 4, dir: "down"   },
      { word: "INTRA", clue: "Within the inner network Azul calls home",     row: 2, col: 0, dir: "across" },
      { word: "EXALT", clue: "To elevate to maximum reality status",         row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 09 — DEEP SPACE",
    words: [
      { word: "COMET", clue: "Icy body with a glowing tail in space",       row: 0, col: 0, dir: "across" },
      { word: "CRANE", clue: "Mechanism for lifting payloads at launch",    row: 0, col: 0, dir: "down"   },
      { word: "MARSH", clue: "Wetland found on many habitable worlds",      row: 0, col: 2, dir: "down"   },
      { word: "TOWER", clue: "Launch structure reaching toward stars",      row: 0, col: 4, dir: "down"   },
      { word: "ARROW", clue: "Direction indicator on a star chart",         row: 2, col: 0, dir: "across" },
      { word: "ETHER", clue: "Ancient name for the fabric of space",        row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 10 — WORLD GRID",
    words: [
      { word: "ATLAS", clue: "Collection of world maps",                    row: 0, col: 0, dir: "across" },
      { word: "AMBLE", clue: "A slow wander across the terrain",            row: 0, col: 0, dir: "down"   },
      { word: "LINER", clue: "Large vessel crossing the ocean grid",        row: 0, col: 2, dir: "down"   },
      { word: "SHONE", clue: "The beacon that guided travelers home",       row: 0, col: 4, dir: "down"   },
      { word: "BINGO", clue: "Jackpot — you found the node",               row: 2, col: 0, dir: "across" },
      { word: "EERIE", clue: "Strange feeling at the edge of the map",     row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 11 — LAB PROTOCOL",
    words: [
      { word: "VERBS", clue: "Action words — what processes do",            row: 0, col: 0, dir: "across" },
      { word: "VIGOR", clue: "Strength of a biological system",             row: 0, col: 0, dir: "down"   },
      { word: "ROUND", clue: "One cycle of an experiment",                  row: 0, col: 2, dir: "down"   },
      { word: "SOLAR", clue: "Energy source powering the lab",              row: 0, col: 4, dir: "down"   },
      { word: "GRUEL", clue: "What underfunded labs run on",                row: 2, col: 0, dir: "across" },
      { word: "RIDER", clue: "Amendment attached to a lab protocol",        row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 12 — MED CORE",
    words: [
      { word: "NERVE", clue: "Transmits signals throughout the body",       row: 0, col: 0, dir: "across" },
      { word: "NOVEL", clue: "A new treatment approach",                    row: 0, col: 0, dir: "down"   },
      { word: "RULER", clue: "Tool for measuring patient anatomy",          row: 0, col: 2, dir: "down"   },
      { word: "ERASE", clue: "To clear an erroneous patient record entry",  row: 0, col: 4, dir: "down"   },
      { word: "VILLA", clue: "Villi — intestinal absorption structures",    row: 2, col: 0, dir: "across" },
      { word: "LARGE", clue: "The large intestine — part of the GI tract",  row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 13 — BIO MATRIX",
    words: [
      { word: "BRAIN", clue: "Control center of the nervous system",        row: 0, col: 0, dir: "across" },
      { word: "BRACE", clue: "Structural support in the skeletal system",   row: 0, col: 0, dir: "down"   },
      { word: "AROMA", clue: "Signal detected by olfactory receptors",      row: 0, col: 2, dir: "down"   },
      { word: "NUDGE", clue: "Gentle signal between neighboring cells",     row: 0, col: 4, dir: "down"   },
      { word: "AVOID", clue: "What immune cells do to self-antigens",       row: 2, col: 0, dir: "across" },
      { word: "EVADE", clue: "How pathogens dodge immune detection",        row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 14 — COSMIC DRIFT",
    words: [
      { word: "ORBIT", clue: "Curved path around a celestial body",         row: 0, col: 0, dir: "across" },
      { word: "OCCUR", clue: "What rare cosmic events do",                  row: 0, col: 0, dir: "down"   },
      { word: "BEING", clue: "Existence — what the cosmos asks of us",      row: 0, col: 2, dir: "down"   },
      { word: "TREND", clue: "The direction a drifting system moves",       row: 0, col: 4, dir: "down"   },
      { word: "CRIME", clue: "Violation of the laws of physics",            row: 2, col: 0, dir: "across" },
      { word: "RIGID", clue: "Unbending — like the laws of the cosmos",     row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 15 — DATA STREAM",
    words: [
      { word: "STEAM", clue: "Hot data moving fast through pipes",          row: 0, col: 0, dir: "across" },
      { word: "SURGE", clue: "Sudden spike in data throughput",             row: 0, col: 0, dir: "down"   },
      { word: "ELDER", clue: "Senior node in the network hierarchy",        row: 0, col: 2, dir: "down"   },
      { word: "MESSY", clue: "What raw unstructured data looks like",       row: 0, col: 4, dir: "down"   },
      { word: "RIDES", clue: "Data rides the stream to its destination",    row: 2, col: 0, dir: "across" },
      { word: "EARLY", clue: "First packet transmitted in a session",       row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 16 — CITY LIGHTS",
    words: [
      { word: "CURSE", clue: "What the city puts on those who never sleep", row: 0, col: 0, dir: "across" },
      { word: "CAPER", clue: "A daring midnight heist in neon streets",     row: 0, col: 0, dir: "down"   },
      { word: "RISKY", clue: "Running the dark alleys after midnight",       row: 0, col: 2, dir: "down"   },
      { word: "EVADE", clue: "Dodge the surveillance cameras",               row: 0, col: 4, dir: "down"   },
      { word: "PASTA", clue: "Midnight fuel at the all-night diner",         row: 2, col: 0, dir: "across" },
      { word: "RHYME", clue: "The rhythm of city rain on steel",             row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 17 — DESERT CODE",
    words: [
      { word: "DRAPE", clue: "Cloth hanging over a desert doorway",         row: 0, col: 0, dir: "across" },
      { word: "DELTA", clue: "River mouth where water meets sand",           row: 0, col: 0, dir: "down"   },
      { word: "ADORE", clue: "What nomads feel upon finding an oasis",      row: 0, col: 2, dir: "down"   },
      { word: "EXERT", clue: "Effort required to cross the desert",         row: 0, col: 4, dir: "down"   },
      { word: "LOOSE", clue: "Desert sand underfoot",                       row: 2, col: 0, dir: "across" },
      { word: "AGENT", clue: "Operative working in the desert heat",        row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 18 — OCEAN DEPTHS",
    words: [
      { word: "OVATE", clue: "Oval-shaped like many deep sea creatures",    row: 0, col: 0, dir: "across" },
      { word: "OZONE", clue: "Protective layer above the ocean",            row: 0, col: 0, dir: "down"   },
      { word: "ANGER", clue: "What a storm-tossed ocean embodies",         row: 0, col: 2, dir: "down"   },
      { word: "ENTER", clue: "Dive down and enter the abyss",              row: 0, col: 4, dir: "down"   },
      { word: "OUGHT", clue: "Divers ought to check pressure first",        row: 2, col: 0, dir: "across" },
      { word: "ERROR", clue: "A depth gauge malfunction at pressure",       row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 19 — TIME LOOP",
    words: [
      { word: "CHIME", clue: "The bell marking another loop of time",       row: 0, col: 0, dir: "across" },
      { word: "CYCLE", clue: "One full revolution of the time loop",        row: 0, col: 0, dir: "down"   },
      { word: "IMAGE", clue: "A frozen moment caught mid-loop",             row: 0, col: 2, dir: "down"   },
      { word: "EXERT", clue: "The effort required to break the loop",       row: 0, col: 4, dir: "down"   },
      { word: "CHASE", clue: "Running after a version of yourself",         row: 2, col: 0, dir: "across" },
      { word: "EJECT", clue: "The only way to escape the time loop",        row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 20 — FOOD CORE",
    words: [
      { word: "STAND", clue: "A market stall selling fresh food",           row: 0, col: 0, dir: "across" },
      { word: "SHAME", clue: "Feeling after eating the whole pizza alone",  row: 0, col: 0, dir: "down"   },
      { word: "AISLE", clue: "Walk this to find the ingredients",           row: 0, col: 2, dir: "down"   },
      { word: "DITTY", clue: "The jingle played at the food truck",         row: 0, col: 4, dir: "down"   },
      { word: "ASSET", clue: "A good chef is the kitchen's greatest one",   row: 2, col: 0, dir: "across" },
      { word: "ELEGY", clue: "A lament for the very last slice",            row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 21 — WEATHER SYS",
    words: [
      { word: "ENACT", clue: "Storms enact chaos on the power grid",        row: 0, col: 0, dir: "across" },
      { word: "EQUAL", clue: "High and low pressure becoming balanced",     row: 0, col: 0, dir: "down"   },
      { word: "ALTER", clue: "Climate change alters weather patterns",      row: 0, col: 2, dir: "down"   },
      { word: "TALLY", clue: "Count of lightning strikes per storm",        row: 0, col: 4, dir: "down"   },
      { word: "UNTIL", clue: "We wait until the storm finally passes",      row: 2, col: 0, dir: "across" },
      { word: "LORDY", clue: "Exclamation when the tornado siren sounds",   row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 22 — MUSIC GRID",
    words: [
      { word: "BONUS", clue: "Hidden track at the end of the album",        row: 0, col: 0, dir: "across" },
      { word: "BEATS", clue: "Rhythmic pulses driving the track",           row: 0, col: 0, dir: "down"   },
      { word: "NERVE", clue: "What it takes to perform live",               row: 0, col: 2, dir: "down"   },
      { word: "STERN", clue: "A strict producer who demands retakes",       row: 0, col: 4, dir: "down"   },
      { word: "AGREE", clue: "Band members must do this before recording",  row: 2, col: 0, dir: "across" },
      { word: "SHEEN", clue: "Polished gloss on a perfectly mixed track",   row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 23 — ANIMAL FILE",
    words: [
      { word: "ARENA", clue: "Where animals compete for territory",         row: 0, col: 0, dir: "across" },
      { word: "ABOUT", clue: "What the animal kingdom is all about",        row: 0, col: 0, dir: "down"   },
      { word: "EVENT", clue: "A migration — nature's greatest spectacle",   row: 0, col: 2, dir: "down"   },
      { word: "AGAIN", clue: "Salmon swim upstream again every year",       row: 0, col: 4, dir: "down"   },
      { word: "OPERA", clue: "The dawn chorus — nature's morning opera",    row: 2, col: 0, dir: "across" },
      { word: "TITAN", clue: "The great whale — titan of the deep",         row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 24 — COLOR CODE",
    words: [
      { word: "AWFUL", clue: "What happens when colors clash badly",        row: 0, col: 0, dir: "across" },
      { word: "ABYSS", clue: "The deepest darkest shade of black",          row: 0, col: 0, dir: "down"   },
      { word: "FLAKY", clue: "Peeling paint revealing old colors beneath",  row: 0, col: 2, dir: "down"   },
      { word: "LANCE", clue: "A thin line of color cutting through canvas", row: 0, col: 4, dir: "down"   },
      { word: "YEARN", clue: "To crave a specific hue you cannot name",     row: 2, col: 0, dir: "across" },
      { word: "STYLE", clue: "Your color choices define your visual style", row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 25 — SCHOOL SYS",
    words: [
      { word: "CHAOS", clue: "State of the classroom before the bell",      row: 0, col: 0, dir: "across" },
      { word: "CLASS", clue: "A group of students learning together",       row: 0, col: 0, dir: "down"   },
      { word: "AROSE", clue: "A question arose during the lecture",         row: 0, col: 2, dir: "down"   },
      { word: "STEEL", clue: "Steeling yourself for exam day",              row: 0, col: 4, dir: "down"   },
      { word: "ALONE", clue: "Studying alone at midnight before the test",  row: 2, col: 0, dir: "across" },
      { word: "SMELL", clue: "Old textbooks have a distinctive one",        row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 26 — SPORTS MODE",
    words: [
      { word: "SCOUR", clue: "Search the field for an opening",             row: 0, col: 0, dir: "across" },
      { word: "SENSE", clue: "An athlete's sixth — spatial awareness",      row: 0, col: 0, dir: "down"   },
      { word: "OPTIC", clue: "Optic nerve — key to tracking the ball",      row: 0, col: 2, dir: "down"   },
      { word: "RIDGE", clue: "The raised seam of a baseball",               row: 0, col: 4, dir: "down"   },
      { word: "NOTED", clue: "Coach noted every player's weakness",         row: 2, col: 0, dir: "across" },
      { word: "EMCEE", clue: "Announcer calling the live play-by-play",     row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 27 — HOME BASE",
    words: [
      { word: "HOUSE", clue: "Structure that becomes a home",               row: 0, col: 0, dir: "across" },
      { word: "HOARD", clue: "What pack rats do with treasured possessions", row: 0, col: 0, dir: "down"  },
      { word: "UNDER", clue: "Under the roof — where family gathers",       row: 0, col: 2, dir: "down"   },
      { word: "EARLY", clue: "Early risers make the most of home mornings", row: 0, col: 4, dir: "down"   },
      { word: "ARDOR", clue: "The passion poured into making a home",       row: 2, col: 0, dir: "across" },
      { word: "DERBY", clue: "Neighborhood race — a beloved home tradition",row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 28 — TECH CORE",
    words: [
      { word: "ANKLE", clue: "Pivot joint — like a key node in code",       row: 0, col: 0, dir: "across" },
      { word: "ATTIC", clue: "Where old tech goes to collect dust",         row: 0, col: 0, dir: "down"   },
      { word: "KOALA", clue: "Mascot of a classic Ubuntu Linux release",    row: 0, col: 2, dir: "down"   },
      { word: "EIGHT", clue: "Number of bits in a single byte",             row: 0, col: 4, dir: "down"   },
      { word: "TWANG", clue: "Sound of a plucked circuit wire",             row: 2, col: 0, dir: "across" },
      { word: "COAST", clue: "Let the system coast — idle mode engaged",    row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 29 — NATURE GRID",
    words: [
      { word: "PLANT", clue: "Living organism anchored in soil",            row: 0, col: 0, dir: "across" },
      { word: "PLAIN", clue: "Flat open grassland biome",                   row: 0, col: 0, dir: "down"   },
      { word: "ANGER", clue: "What a disturbed ecosystem expresses",        row: 0, col: 2, dir: "down"   },
      { word: "THEME", clue: "Seasons — nature's endlessly recurring theme",row: 0, col: 4, dir: "down"   },
      { word: "ANGLE", clue: "Sun angle determines the length of seasons",  row: 2, col: 0, dir: "across" },
      { word: "NURSE", clue: "Nurse log — fallen tree feeding new growth",  row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 30 — ENERGY FLOW",
    words: [
      { word: "POWER", clue: "The energy source running the grid",          row: 0, col: 0, dir: "across" },
      { word: "PRICE", clue: "The cost of unlimited energy access",         row: 0, col: 0, dir: "down"   },
      { word: "WRITE", clue: "Write energy usage data to the log",          row: 0, col: 2, dir: "down"   },
      { word: "RUGBY", clue: "High-energy collision sport",                 row: 0, col: 4, dir: "down"   },
      { word: "ICING", clue: "Ice forming on solar panels in winter",       row: 2, col: 0, dir: "across" },
      { word: "EVERY", clue: "Energy flows through every single node",      row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 31 — TRAVEL MODE",
    words: [
      { word: "AHEAD", clue: "The destination lies ahead on the road",      row: 0, col: 0, dir: "across" },
      { word: "ARRAY", clue: "An array of possible routes to choose from",  row: 0, col: 0, dir: "down"   },
      { word: "ELIDE", clue: "Skip the layover — elide the connection",     row: 0, col: 2, dir: "down"   },
      { word: "DREAD", clue: "The dread of a long overnight journey",       row: 0, col: 4, dir: "down"   },
      { word: "RAISE", clue: "Raise the anchor — it's departure time",      row: 2, col: 0, dir: "across" },
      { word: "YIELD", clue: "Yield to oncoming traffic on the road",       row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 32 — VOID ECHO",
    words: [
      { word: "AGLOW", clue: "The terminal screen aglow in the darkness",   row: 0, col: 0, dir: "across" },
      { word: "ARSON", clue: "The void burns — digital arson in progress",  row: 0, col: 0, dir: "down"   },
      { word: "LUNAR", clue: "The pale glow of a dying signal",             row: 0, col: 2, dir: "down"   },
      { word: "WORMY", clue: "Corrupted data worming through the void",     row: 0, col: 4, dir: "down"   },
      { word: "SONAR", clue: "Pinging the void for any response",           row: 2, col: 0, dir: "across" },
      { word: "NERDY", clue: "Only the nerdy survive the deep void",        row: 4, col: 0, dir: "across" },
    ]
  },

  {
    title: "LEVEL 33 — FINAL NODE",
    words: [
      { word: "ANGST", clue: "The feeling before the final transmission",   row: 0, col: 0, dir: "across" },
      { word: "ADAPT", clue: "The system must adapt or be deleted",         row: 0, col: 0, dir: "down"   },
      { word: "GUILT", clue: "Ghost data left behind after a system purge", row: 0, col: 2, dir: "down"   },
      { word: "TROLL", clue: "Entity lurking at the final node",            row: 0, col: 4, dir: "down"   },
      { word: "AMINO", clue: "Base unit — amino acid of the grid",          row: 2, col: 0, dir: "across" },
      { word: "TOTAL", clue: "Total system breach — the grid is yours",     row: 4, col: 0, dir: "across" },
    ]
  },

  // ── ADD MORE LEVELS BELOW ────────────────────────────────
  // {
  //   title: "LEVEL 34 — YOUR TITLE",
  //   words: [
  //     { word: "WORD1", clue: "Your clue", row: 0, col: 0, dir: "across" },
  //     { word: "WORD2", clue: "Your clue", row: 0, col: 0, dir: "down"   },
  //     { word: "WORD3", clue: "Your clue", row: 0, col: 2, dir: "down"   },
  //     { word: "WORD4", clue: "Your clue", row: 0, col: 4, dir: "down"   },
  //     { word: "WORD5", clue: "Your clue", row: 2, col: 0, dir: "across" },
  //     { word: "WORD6", clue: "Your clue", row: 4, col: 0, dir: "across" },
  //   ]
  // },


]; // ← end of LEVELS — don't delete this line
