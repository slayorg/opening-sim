import './skillList.scss';
import {h, Component } from 'preact';

import { ISkill } from '../models';

function listItem(skill: ISkill, summary: ISummary){
	summary.total += skill.value;
	return (
		<div>
			<div>Name: {skill.name}</div>
			<div>Total: {summary.total}</div>
		</div>
	);
}

interface ISummary {
	total: number;
}

interface IProps{
	skills: Array<ISkill>;
}

export default class SkillList extends Component<IProps, {}> {
	render(){
		let summary: ISummary = {
			total: 0
		};
		let skillItems: Array<JSX.Element> = this.props.skills.map((skill) => {
			return listItem(skill, summary);
		});
		return (
			<div className="skill-list">
				{skillItems}
			</div>
		);
	}
}