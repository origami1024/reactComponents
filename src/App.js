import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import UserFilter from './components/UserFilter.js'
import UserProfile from './components/UserProfile.js'

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brand: "Ford",
      l: [1,2,3,4,5,6],
      appScreen: 'users-page-users',
      user1: {
        nick: 'Wes Bos',
        age: 30,
        city: 'Simferopol',
        photoUrl: './../assets/img/usr1.jpg',
        tags: [
          {
            id: 1,
            label: 'катаю',
            type: 'icon',
            content: {
              icon: 'somesome'
            }
          }, {
            id: 2,
            label: 'время',
            type: 'text',
            content: {
              text: '10:30-17:30'
            }
          }, {
            id: 3,
            label: 'реквестов',
            type: 'text',
            content: {
              text: '3'
            }
          }
        ]
      },
      user2: {
        nick: 'Flavio Copes',
        age: 35,
        city: 'Ufa',
        photoUrl: './../assets/img/usr2.jpg',
        tags: [
          {
            id: 1,
            label: 'катаю',
            type: 'icon',
            content: {
              icon: 'somesome'
            }
          }, {
            id: 2,
            label: 'время',
            type: 'text',
            content: {
              text: '10:30-17:30'
            }
          }, {
            id: 3,
            label: 'реквестов',
            type: 'text',
            content: {
              text: '3'
            }
          }, {
            id: 4,
            label: 'что-то текст',
            type: 'text',
            content: {
              text: '35'
            }
          }
        ]
      }
    }
  }
  test1 = () => {
    let screens = ['users-page-users','users-page-friends', 'request-page-search']
    this.setState({l: [...this.state.l, Math.random()*25 | 0]})
  }
  render() {
    return (
      <div className="App">
        <main>
          <Button onClick={this.test1}>Not working button</Button>
          <div className="flex-columned">
          <UserProfile user={this.state.user1}></UserProfile>
          <UserProfile user={this.state.user2}></UserProfile>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
