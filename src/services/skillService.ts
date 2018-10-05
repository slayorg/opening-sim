import skillData from '../data/skills.json';
import { ISkill, ICombatState } from '../models';

const skillMap: {[key: number]: ISkill} = {};
const skillArray: Array<ISkill> = [];

(skillData as Array<ISkill>).forEach((skill, index) => {
	skill.id = index
	skillMap[index] = skill;
	skillArray.push(skill);
});

export {skillMap, skillArray};

export function processSkill(params: {[key: string]: number|boolean}, state: ICombatState, skill: ISkill): ICombatState {
	return null;
}


export function processSkills(params: {[key: string]: number|boolean}, skills: Array<ISkill>): void {
	let state: ICombatState = {
		statuses: [],
		debuffs: [],
		damage: 0,
		time: 0
	};
}