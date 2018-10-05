import './skillList.scss';
import {h, Component } from 'preact';

import { skillMap } from '../services/skillService';
import { ISkill } from '../models';


interface IListProps{
	skill: ISkill;
}

function ListItem(props: IListProps){
	return (
		<div>
			<div>Time</div>
			<div>{props.skill.name}</div>
		</div>
	);
}

interface ISummary {
	total: number;
}

interface IProps{
	items: Array<number>;
}

export default class SkillList extends Component<IProps, {}> {
	render(){
		let summary: ISummary = {
			total: 0
		};
		let skillItems: Array<JSX.Element> = this.props.items.map((id) => {
			return <ListItem skill={skillMap[id]} />
		});
		return (
			<div className="skill-list">
				{skillItems}
			</div>
		);
	}
}