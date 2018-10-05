import './skillPanel.scss';
import {h, Component } from 'preact';

import { skillArray } from '../services/skillService';
import { ISkill } from '../models';

interface ISkillProps{
	value: ISkill;
	addSkill(id: number): void;
}
class SkillItem extends Component<ISkillProps, {}>{
	render(){
		return (
			<div className="skill-item" onClick={() => this.props.addSkill(this.props.value.id)}>
				<div className="skill-icon">icon</div>
				<div className="skill-name">{this.props.value.name}</div>
			</div>
		);
	}
}

interface IProps{
	addSkill(id: number): void;
}

export default class SkillPanel extends Component<IProps, {}> {
	render(){
		return(
			<div className="skill-panel">
				{
					skillArray.map((s: ISkill) => <SkillItem value={s} addSkill={this.props.addSkill}/>)
				}
			</div>
		)
	}
}