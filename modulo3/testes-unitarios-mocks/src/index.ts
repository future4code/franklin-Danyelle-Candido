export interface Character {
  name: string;
  life: number;
  strength: number;
  defense: number;
}
export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
		input.life === undefined || 
    input.strength === undefined ||
    input.defense === undefined
  ) {
    return false;
  }

  if (input.life <=0 || input.strength <=0 || input.defense <=0) {
    return false;
  }

  return true;
};

/* 
EXO 3 A
export const performAttack = (attacker: Character, defender: Character) => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};
 */
export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};

// Exo6 a diferença é a inversão de pedendencia DIP que faz com que modulos de alto nivel não dependam de modulos de baixo nivel fazendo ambos dependerem de abstrações, ou seja,reduzimos essa dependencia fazendo com que se a classe validateCharacter sofrer alterações não seja necessário alterar a classe performAttack