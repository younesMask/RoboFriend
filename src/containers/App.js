import React, { Component } from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => this.setState({ robots: users }));
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })

    }
    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if (robots.lenght === 0) {
            return <h1> Loading ....</h1>
        }
        else {

            return (

                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>

                </div>
            );
        }

    }
}
export default App;