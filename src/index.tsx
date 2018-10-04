import './index.scss';
import { render, h, Component } from 'preact';

import SkillList from './components/skillList';
import ParamsPanel from './components/paramsPanel';
import SkillPanel from './components/skillPanel';

import {ISkill, IJobProperties, IPropertyItem} from './models';

import parameters from './data/parameters.json';

let skills: Array<ISkill> = [
	{
		name: 'Skill 1',
		value: 1
	},
	{
		name: 'skill 2',
		value: 2
	},
	{
		name: 'skill 3',
		value: 1.5
	}
];

interface IAppState {
	parameters: IJobProperties;
}

class App extends Component<{}, IAppState> {

	state: IAppState = {
		parameters: parameters as IJobProperties
	}

	updateParameter = (id: string, value: number | boolean): void => {
		let parameters = this.state.parameters;
		parameters[id].value = value;
		this.setState({parameters});
	}

	render(){
		return (
			<div>
				<ParamsPanel parameters={this.state.parameters} update={this.updateParameter}/>
				<div className="right-panel">
					<SkillPanel />
					<SkillList skills={skills} />
				</div>	
			</div>
		)
	}
}

render(<App />, document.getElementById('app'));