import React, {Component} from 'react'

export default class PaywayComponent extends Component{
    render(){

        return (
            <div className="dialog" ref="dialog">
                <div></div>
                <div>
                    <ul>
                        <li><i>1</i>支付宝</li>
                        <li><i>2</i>微信</li>
                        <li><i>3</i>银联</li>
                    </ul>
                </div>
                <div className="dialog-control">
                    <input type="button" value="确定" />
                    <input type="button" value="取消"/>
                </div>
            </div>
        )
    }
}