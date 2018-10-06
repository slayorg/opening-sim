export interface ISkillProperty{
	type: string;
	value?: {[key: string]: number | string} | string | Array<string> | number | Array<number>;
}

export interface ISkillModifier{
	requirements?: Array<ISkillProperty>;
	effects: Array<ISkillProperty>;
}

// TODO expand this to in game types
export enum DamageAspect {
	Blunt = "blunt",
	Piercing = "piercing",
	Slashing = "slashing",
	Unaspected = "unaspected",
}

export interface ISkill {
	id: number;
	name: string;
	type: string;
	potency?: number;
	cast?: number;
	recast?: number;
	group?: number;
	aspect?: DamageAspect;
	icon?: number;
	// TODO make a proper type out of this? in game it's two values, cost type and cost valu
	// the cost type covers hp, mp, tp, hp percentage, 'all mp', plus guage costs, like tornado kick
	cost?: { 									
		[key: string]: number;
	},
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
	start: number;
	duration: number;
}

export interface ICombatState{
	statuses: Array<IStatusEffect>;
	action: string;
	success: boolean; // Action completed successfully (e.g. combo prerequisites met)
	gauge: {
		[key: string]: any;
	},
	recast: {
		[key: number]: number;
	},
	damage: number;
	time: number;
}