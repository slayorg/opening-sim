import './paramsPanel.scss';
import {h, Component } from 'preact';

import { IJobProperties, IPropertyItem } from '../models';

interface IRowProps{
	item: IPropertyItem;
	update(id: string, value: number | boolean): void;
}

class PropertyItem extends Component<IRowProps, {}>{

	update = (e?: Event): void => {
		let value: number | boolean;
		let input = e.currentTarget as HTMLInputElement;
		switch(this.props.item.type){
			case 'job':
				break;
			case 'boolean':
				value = input.checked;
				break;
			case 'number':
			case 'time':
				value = input.valueAsNumber;
				break
		}
		this.props.update(this.props.item.id, value);
	}

	render(){
		let valueElem: JSX.Element = null;
		let type = this.props.item.type;
		switch(type){
			case 'job':
				valueElem = <div className="value">JobPicker</div>;
				break;
			case 'time':
			case 'number':
				let value = this.props.item.value as number;
				valueElem = (
					<div className="value">
						<input type="number" value={type==='number'? value : value.toFixed(2)} onChange={this.update} step={type==='number'? 1 : 0.01}/>
						{ type === 'time' ? ' sec': null}
					</div>
				);
				break
			case 'boolean':
			valueElem = <div className="value"><input type="checkbox" checked={this.props.item.value as boolean} onChange={this.update}/></div>;
				break;
		}
	
		return (
			<div>
				<div className="name">{this.props.item.name}</div>
				{valueElem}
			</div>
		)
	}
}

interface IPanelProps{
	parameters: IJobProperties;
	update(id: string, value: number | boolean): void;
}

export default class ParamsPanel extends Component<IPanelProps, {}>{
	render(){
		return(
			<div className="params-panel">
				<div className="param-properties">
					{
						['job', 'aaDelay', 'critical', 'speed', 'wsStiff', 'abilityStiff', 'autoattack'].map(i =>{
							return <PropertyItem key={i} item={this.props.parameters[i]} update={this.props.update}/>
						})
					}
				</div>
			</div>
		)
	}
}