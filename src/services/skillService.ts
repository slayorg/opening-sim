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
	// Update time, advance time to the next period you can use a skill
	// TODO handle casting
	state.time += Math.max(0.85, state.recast[skill.group]);
	state.recast[skill.group] = state.time + skill.recast / 10;

	state.action = skill.name;
	
	return state;
}

// TODO pls fix this matt
function getDefaultGauge(job: number): {[key: string]: number} {
	switch(job) {
		case 20: // MNK
			return {
				chakra: 0,
				lightningStacks: 0,
				lightningTime: 0
			}
	}
	return {}
}

export function processSkills(params: {[key: string]: number|boolean}, skills: Array<ISkill>): Array<ICombatState> {
	let state: ICombatState = {
		statuses: [],
		damage: 0,
		time: 0,
		action: null,
		gauge: getDefaultGauge(20),
		success: false,
		recast: {}
	};

	let states: Array<ICombatState> = [];

	skills.forEach(skill => {
		state = processSkill(params, JSON.parse(JSON.stringify(state)), skill);
		states.push(state);
	});

	return states;
}