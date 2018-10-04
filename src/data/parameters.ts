import {IJobProperties, IPropertyItem} from '../models';

const parameterArray: Array<IPropertyItem> = [
	{
		id: 'job',
		name: 'Job',
		type: 'job',
		value: 0
	},
	{
		id: 'aaDelay',
		name: 'AA-Delay',
		type: 'time',
		value: 3
	},
	{
		id: 'critical',
		name: 'Critical',
		type: 'number',
		value: 364
	},
	{
		id: 'speed',
		name: 'Speed',
		type: 'number',
		value: 364
	},
	{
		id: 'wsStiff',
		name: 'WS stiff',
		type: 'time',
		value: 0.85
	},
	{
		id: 'abilityStiff',
		name: 'Ability stiff',
		type: 'time',
		value: 0.85
	},
	{
		id: 'autoattack',
		name: 'Autoattack',
		type: 'boolean',
		value: true
	}
];

let parameters: IJobProperties = {};
parameterArray.forEach(p => parameters[p.id] = p);

export default parameters;