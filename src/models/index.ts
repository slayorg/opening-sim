export interface ISkill {
	name: string;
	recast?: number;
	pot?: number;


	value: number;
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
