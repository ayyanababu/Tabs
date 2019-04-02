import React, { Component } from 'react';


const activeStyle={
    backgrondColor: 'pink'
}

const inactiveStyle={
    backgrondColor: 'grey'
}

class Tab extends Component {
    constructor(props) {
        super(props);

         this.onClickOfEachTab = this.onClickOfEachTab.bind(this);

    }

    onClickOfEachTab = () => {
        const { onClickOfTabs, index} = this.props;
        onClickOfTabs(index);
    }

    render() {
        const { index, onClickOfTabs, isActive, value } = this.props;
        // console.log('in render of tab', isActive);

        const bgColor = !isActive? '#808080': '#f00';
        return (
            <div>
                <button onClick={this.onClickOfEachTab} style={{backgroundColor: bgColor}}>
                    <h1>{value}</h1>
                </button>
            </div>
        );
    }
}

export default Tab;