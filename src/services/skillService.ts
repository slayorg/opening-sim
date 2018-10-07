import skillData from '../data/skills.json';
import { ISkill, ICombatState, IParameterGroup } from '../models';

const skillMap: {[key: number]: ISkill} = {};
const skillArray: Array<ISkill> = [];

(skillData as Array<ISkill>).forEach((skill, index) => {
	skill.id = index
	skillMap[index] = skill;
	skillArray.push(skill);
});

export {skillMap, skillArray};

export function processSkill(params: IParameterGroup, combatState: ICombatState, skill: ISkill): ICombatState {
	// Update time, advance time to the next period you can use a skill
	// TODO handle casting
	let state: ICombatState = JSON.parse(JSON.stringify(combatState));
	state.time += Math.max(0.85, state.recast[skill.group] || 0);
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

export function processSkills(params: IParameterGroup, skills: Array<ISkill>): Array<ICombatState> {
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
		state = processSkill(params, state, skill);
		states.push(state);
	});

	console.log(states);

	return states;
}