import './paramsPanel.scss';
import {h, Component } from 'preact';

import { IJobProperties, IPropertyItem } from '../models';

import parameters from '../data/parameters.json';

interface IRowProps{
	param: string;
	value: {[key: string]: number | boolean};
	update(id: string, value: number | boolean): void;
}

class PropertyItem extends Component<IRowProps, {}>{
	update = (e?: Event): void => {
		let value: number | boolean;
		let input = e.currentTarget as HTMLInputElement;
		switch(parameters[this.props.param].type){
			case 'boolean':
				value = input.checked;
				break;
			case 'number':
			case 'time':
				value = input.valueAsNumber;
				break
		}
		this.props.update(this.props.param, value);
	}

	render(){
		let valueElem: JSX.Element = null;
		let parameter = parameters[this.props.param];
		switch(parameter.type){
			case 'time':
			case 'number':
				let value = (this.props.value[this.props.param] as number) || 0;
				valueElem = (
					<div className="value">
						<input type="number" 
							value={parameter.type==='number'? value : value.toFixed(2)}
							onChange={this.update}
							step={parameter.type==='number'? 1 : 0.01}
						/>
						{ parameter.type === 'time' ? ' sec': null}
					</div>
				);
				break
			case 'boolean':
				valueElem = (
					<div className="value">
						<input type="checkbox"
							checked={this.props.value[this.props.param] as boolean}
							onChange={this.update}
						/>
					</div>
				);
				break;
		}
	
		return (
			<div>
				<div className="name">{parameter.name}</div>
				{valueElem}
			</div>
		)
	}
}

interface IGroupProps{
	title: string;
	params: Array<string>;
	value: {[key: string]: number | boolean};
	update(id: string, value: number | boolean): void;
}

function PropertyGroup(props: IGroupProps){
	return (
		<div className="param-group">
			<div className="title">{props.title}</div>
			<div className="group">
				{
					props.params.map(p => {
						return (
							<PropertyItem
								param={p}
								value={props.value}
								update={props.update}
							/>
						);
					})
				}
			</div>
		</div>
	);
}

interface IPanelProps{
	value: {[key: string]: number | boolean};
	update(id: string, value: number | boolean): void;
}

export default class ParamsPanel extends Component<IPanelProps, {}>{
	render(){
		return(
			<div className="params-panel">
				<div className="param-properties">
					<PropertyGroup
						title="Weapon"
						params={['damage', 'delay']}
						value={this.props.value}
						update={this.props.update}
					/>
					<PropertyGroup
						title="Attributes"
						params={['str', 'dex', 'vit', 'int', 'mind']}
						value={this.props.value}
						update={this.props.update}
					/>
					<PropertyGroup
						title="Offensive"
						params={['crit', 'direct', 'determination', 'skillspeed', 'spellspeed', 'autoattack']}
						value={this.props.value}
						update={this.props.update}
					/>
				</div>
			</div>
		)
	}
}