import React, { Component } from 'react'

const tabsstyle = {
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'space-around',
}

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSelection: 0
         }
         this.onClickOfTab = this.onClickOfTab.bind(this);

    }

    onClickOfTab = (selIndex) => {
        const { onSelection } = this.props;
        this.setState({
            activeSelection: selIndex
        }, () => {
            const { children } = this.props;
            const reactChild = children[selIndex];
            onSelection(reactChild);
        })
    }
    render() {
        const children = React.Children.map(this.props.children, (child, index) => {

            const allProps = {
                ...child.props,
                index,
                isActive: index === this.state.activeSelection,
                onClickOfTabs: this.onClickOfTab,
            }
            return React.cloneElement(child, {
                ...allProps
            });
        });

        return (
            <div style={tabsstyle}>
                { children }
            </div>
        )
    }
}

export default Tabs;