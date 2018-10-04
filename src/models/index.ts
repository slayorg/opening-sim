export interface ISkill {
	name: string;
	recast?: number;
	pot?: number;


	value: number;
}

export interface IJobProperties{
	[key: string]: IPropertyItem;
	job?: IPropertyItem;
	aaDelay?: IPropertyItem;
	critical?: IPropertyItem;
	speed?: IPropertyItem;
	wsStiff?: IPropertyItem;
	abilityStiff?: IPropertyItem;
	autoattack?: IPropertyItem;
}

export interface IPropertyItem{
	id: string;
	name: string;
	type: 'job' |'boolean' | 'number' | 'time';
	value: number | boolean;
}