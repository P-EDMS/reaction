import React, {Component} from "react";



export default class What extends Component {

    add(x, y = 3) {
        var k = [1,2,3];
        k.push(...k);
        console.log(k);
        return x + y;
    }

    render() {
        return (
            <div className ="greeting">
                Hello Lah, {this.add(4)}!
            </div>
        )
    }
};