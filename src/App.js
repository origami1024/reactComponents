import React from 'react';
import './App.css';
//import styled from 'styled-components'
import Profile from './components/Profile.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
              icon: 'tags-helmet'
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
            id: 6,
            label: 'нужна помощь',
            type: 'icon',
            content: {
              icon: 'tags-hand'
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
              icon: 'tags-helmet'
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
          }, {
            id: 5,
            label: 'профи',
            type: 'icon',
            content: {
              icon: 'tags-skill'
            }
          }, {
            id: 6,
            label: 'нужна помощь',
            type: 'icon',
            content: {
              icon: 'tags-hand'
            }
          }
        ]
      }
    }
  }
  render() {
    return (
      <div className="App">
        <main>
          <div className="flex-columned">
          <Profile user={this.state.user1}></Profile>
          <Profile user={this.state.user2}></Profile>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
