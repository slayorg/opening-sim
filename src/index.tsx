import './index.scss';
import { render, h, Component } from 'preact';

import Counter from './counter';

class App extends Component<{}, {}> {

	buttonClicked = (value: number): void => {
		console.log('the button was clicked ' + value + ' times');
	}

	render(){
		return (
			<div>
				<div className="super-title">App!</div>
				<Counter clicked={this.buttonClicked}/>
			</div>
		)
	}
}

render(<App />, document.getElementById('app'));