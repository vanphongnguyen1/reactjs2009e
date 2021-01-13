import React from 'react'
import LiElement from './LiElement'
import Search from './Search'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deepMenu: [
        {
          title: 'Home',
          subTitle: 'sweet home',
          link: '/home',
          icon: 'fa fa-home',
        },
        {
          title: 'Home',
          subTitle: 'About us',
          link: '/about-us',
          icon: 'fa fa-edit',
          isActive: true
        },
        {
          title: 'Features',
          subTitle: 'sweet home',
          link: '/features',
          icon: 'fa fa-gift',
        },
        {
          title: 'News',
          subTitle: 'sweet home',
          link: '/news',
          icon: 'fa fa-globe',
        },
        {
          title: 'Blog',
          subTitle: 'what they say',
          link: '/blog',
          icon: 'fa fa-globe',
          children: [
            {
              title: 'Mission',
              link: '/blog/mission',
              icon: 'fa fa-globe',
            },
            {
              title: 'Our Team',
              link: '/blog/our-team',
              icon: 'fas fa-users',
              children: [
                {
                  title: 'Leyla Sparks',
                  link: '/blog/our-team/leyla-sparks',
                  icon: 'fa fa-female',
                },
                {
                  title: 'Gleb Ismailov',
                  link: '/blog/our-team/gleb-ismailov',
                  icon: 'fa fa-male',
                  children: [
                    {
                      title: 'About',
                      link: '/blog/our-team/gleb-ismailov/about',
                      icon: 'fa fa-leaf',
                    },
                    {
                      title: 'Skills',
                      link: '/blog/our-team/gleb-ismailov/skills',
                      icon: 'fa fa-tasks',
                    }
                  ]
                },
                {
                  title: 'Viktoria Gibbers',
                  link: '/blog/our-team/viktoria-gibbers',
                  icon: 'fa fa-female',
                },
              ]
            },
          ]
        },
        {
          title: 'Portfolio',
          subTitle: 'sweet home',
          link: '/portfolio',
          icon: 'far fa-image',
        },
        {
          title: 'Contacts',
          subTitle: 'drop a line',
          link: '/contacts',
          icon: 'fas fa-envelope',
        },
      ]
    }
  }
  render() {
    return(
      <>
        <div className="menu">
          <ul className="menu__list">
            <LiElement data={ this.state.deepMenu } />
            <Search />
          </ul>
        </div>
      </>
    )
  }
}

export default Menu
