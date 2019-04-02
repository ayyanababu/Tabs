import React, { Component} from 'react';
import Tabs from '../Components/Tabs';
import Tab from '../Components/Tab';

class Main extends Component {
    state = {
        activeTab: ''
     }

    onSelectionOfTab = (tabSelected) => {
        this.setState({
            activeTab: tabSelected
        })
    }
    render() {
        const { activeTab } = this.state;
        return (
            <div>
                <Tabs onSelection={this.onSelectionOfTab}>
                    <Tab value='Home'>
                        <h1>HomeComponent</h1>
                    </Tab>
                    <Tab value='About'>
                        <h1>AboutComponent</h1>
                    </Tab>
                    <Tab value='Contact'>
                        <h1>ContactComponent</h1>
                    </Tab>
                </Tabs>
               { activeTab && <div>
                    {activeTab.props.children}
                </div>}
            </div>
        );
    }
}

export default Main;