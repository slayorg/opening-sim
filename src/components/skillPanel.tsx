import './skillPanel.scss';
import {h, Component } from 'preact';

import skills from '../data/skills.json';
import { ISkill } from '../models';

interface ISkillProps{
	value: ISkill;
}

function SkillItem(props: ISkillProps){
	return (
		<div className="skill-item">
			<div className="skill-icon">icon</div>
			<div className="skill-name">{props.value.name}</div>
		</div>
	)
}

export default class SkillPanel extends Component<{}, {}> {
	render(){
		return(
			<div className="skill-panel">
				{
					skills.map((s: ISkill) => <SkillItem value={s}/>)
				}
			</div>
		)
	}
}