export interface ISkillProperty{
	type: string;
	value?: {[key: string]: number | string} | string | Array<string> | number | Array<number>;
}

export interface ISkillModifier{
	requirements?: Array<ISkillProperty>;
	effects: Array<ISkillProperty>;
}

export interface ISkill {
	id: number;
	name: string;
	type: string;
	potency?: number;
	recast?: number;
	gcd?: boolean;
	requirements?: Array<ISkillProperty>;
	modifiers?: Array<ISkillModifier>;
	after?: Array<any>;
}

export interface IJobProperties{
	[key: string]: IPropertyItem;
}

export interface IPropertyItem{
	id: string;
	name: string;
	type: 'boolean' | 'number' | 'time';
	value: number | boolean;
}

export interface IStatusEffect{
	id: string;
	value: number;
}

export interface ICombatState{
	statuses: Array<IStatusEffect>;
	debuffs: Array<any>;
	damage: number;
	time: number;
}