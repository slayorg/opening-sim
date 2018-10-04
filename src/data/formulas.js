const LEVEL_MOD = 2170;
const BASE_SUB = 364;
const BASE_MAIN = 292;

const ClassJob = {
  "PLD": 19,
  "MNK": 20,
  "WAR": 21,
  "DRG": 22,
  "BRD": 23,
  "WHM": 24,
  "BLM": 25,
  "SMN": 27,
  "SCH": 28,
  'NIN': 30,
  "MCH": 31,
  "DRK": 32,
  "AST": 33,
  "SAM": 34,
  "RDM": 35
};

const JOB_MOD = {
  [ClassJob.PLD]: 100,
  [ClassJob.MNK]: 110,
  [ClassJob.WAR]: 105,
  [ClassJob.DRG]: 115,
  [ClassJob.BRD]: 115,
  [ClassJob.WHM]: 115,
  [ClassJob.BLM]: 115,
  [ClassJob.SMN]: 115,
  [ClassJob.SCH]: 115,
  [ClassJob.NIN]: 110,
  [ClassJob.MCH]: 115,
  [ClassJob.DRK]: 105,
  [ClassJob.AST]: 115,
  [ClassJob.SAM]: 112,
  [ClassJob.RDM]: 115
};

const AUTO_ATTACK_POTENCY = {
  [ClassJob.PLD]: 110,
  [ClassJob.MNK]: 110,
  [ClassJob.WAR]: 110,
  [ClassJob.DRG]: 110,
  [ClassJob.BRD]: 100,
  [ClassJob.WHM]: 110,
  [ClassJob.BLM]: 110,
  [ClassJob.SMN]: 110,
  [ClassJob.SCH]: 110,
  [ClassJob.NIN]: 110,
  [ClassJob.MCH]: 100,
  [ClassJob.DRK]: 110,
  [ClassJob.AST]: 110,
  [ClassJob.SAM]: 110,
  [ClassJob.RDM]: 110
};

function calculateScalar(scalingFactor, stat, base = 0) {
  return Math.floor(scalingFactor * stat / LEVEL_MOD + base) / 1000
}

// Damage formula
export function calculateDamage(potency, attackPower, weaponDamage, job) {
  const WD = Math.floor(weaponDamage + Math.floor(BASE_MAIN * JOB_MOD[job] / 1000));
  const AP = (100 + (attackPower - BASE_MAIN) * 10000 / (80 * BASE_MAIN)) / 100;
  return Math.floor(potency / 100 * WD * AP);
}

export function autoAttackPotency(weaponDelay, job) {
  return weaponDelay / 3 * AUTO_ATTACK_POTENCY[job];
}

// Critical
const CRITICAL = 200;
const CRITICAL_DAMAGE = 400; // 140% damage
const CRITICAL_CHANCE = 50; // 5% chance

export function criticalRate(critical) {
  return calculateScalar(CRITICAL, critical - BASE_SUB, CRITICAL_CHANCE);
}

export function criticalMultiplier(critical) {
  return 1 + calculateScalar(CRITICAL, critical - BASE_SUB, CRITICAL_DAMAGE);
}

// Direct Hit
const DIRECT_HIT = 550;
export const DIRECT_HIT_MULTIPLIER = 1.25;

export function directHitRate(directHit) {
  return calculateScalar(DIRECT_HIT, directHit - BASE_SUB);
}


// Determination
const DETERMINATION = 130;

export function determinationMultiplier(determination) {
  return 1 + calculateScalar(DETERMINATION, determination - BASE_MAIN);
}

// Skill Speed / Spell Speed
const SPEED = 130;

export function castTime(speed, baseCastTime = 250, modifiers = 1) {
  return Math.floor(baseCastTime * (1 - calculateScalar(SPEED, speed - BASE_SUB)) * modifiers) / 100;
}

export function speedMultiplier(speed) {
  return 1 / (1 - calculateScalar(SPEED, speed - BASE_SUB));
}

// TODO: Tenacity
const TENACITY = 100;
// tenacity healing/damage/mitigation increase %: 1 + calculateScalar(TENACITY, tenacity - BASE_SUB)