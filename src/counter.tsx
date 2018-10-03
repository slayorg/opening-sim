import './counter.scss';
import {h, Component } from 'preact';

interface IProps{
	clicked?(value: number): void;
}

interface IState{
	value: number;
}

export default class Counter extends Component<IProps, IState>{

	state = {value: 0};

	onClick = (): void => {
		this.setState({value: this.state.value+1});

		if(this.props.clicked){
			this.props.clicked(this.state.value);
		}
	}

	render(){
		return (
			<button onClick={() => this.onClick()}>
				Clicked {this.state.value} times!
			</button>
		)
	}
}
