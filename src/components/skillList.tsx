import './skillList.scss';
import {h, Component } from 'preact';

import { skillMap, processSkills } from '../services/skillService';
import { ISkill, IParameterGroup, ICombatState } from '../models';


interface IListProps{
	combatState: ICombatState;
}

class ListItem extends Component<IListProps, {}>{
	render(){
		return (
			<div>
				<div>{this.props.combatState.time}</div>
				<div>{this.props.combatState.action}</div>
			</div>
		);
	}
}


interface IProps{
	items: Array<number>;
	params: IParameterGroup;
}

export default class SkillList extends Component<IProps, {}> {
	render(){
		let skills = this.props.items.map(s => skillMap[s]);
		let combatStates = processSkills(this.props.params, skills);

		let skillItems: Array<JSX.Element> = combatStates.map((state) => {
			return <ListItem combatState={state} />
		});
		return (
			<div className="skill-list">
				{skillItems}
			</div>
		);
	}
}