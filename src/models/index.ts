export interface ISkill {
	name: string;
	type: string;
	potency: number;
	requirements: Array<any>;
	modifiers: Array<any>;
	after: Array<any>;
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