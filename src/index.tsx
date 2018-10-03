import './index.scss';
import { render, h, Component } from 'preact';

import Counter from './counter';
import SkillList from './components/skillList';

import {ISkill} from './models';

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
]

class App extends Component<{}, {}> {

	buttonClicked = (value: number): void => {
		console.log('the button was clicked ' + value + ' times');
	}

	render(){
		return (
			<div>
				<div className="super-title">App!</div>
				<Counter clicked={this.buttonClicked}/>
				<SkillList skills={skills} />
			</div>
		)
	}
}

render(<App />, document.getElementById('app'));