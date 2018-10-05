import './index.scss';
import { render, h, Component } from 'preact';

import SkillList from './components/skillList';
import ParamsPanel from './components/paramsPanel';
import SkillPanel from './components/skillPanel';

import {ISkill, IJobProperties} from './models';


let skills: Array<ISkill> = [
];

interface IAppState {
	params: {[key: string]: number | boolean};
}

class App extends Component<{}, IAppState> {

	state: IAppState = {
		params: {
			damage: 104,
			delay: 2.56,
			str: 2919,
			dex: 307,
			vit: 2279,
			int: 148,
			mind: 265,
			crit: 1155,
			determination: 1394,
			direct: 1329,
			skillspeed: 1660,
			spellspeed: 364,
			autoattack: true
		}
	}

	updateParameter = (id: string, value: number | boolean): void => {
		let parameters = this.state.params;
		parameters[id] = value;
		this.setState({params: parameters});
	}

	render(){
		return (
			<div>
				<ParamsPanel
					value={this.state.params}
					update={this.updateParameter}
				/>
				<div className="right-panel">
					<SkillPanel />
					<SkillList skills={skills} />
				</div>	
			</div>
		)
	}
}

render(<App />, document.getElementById('app'));