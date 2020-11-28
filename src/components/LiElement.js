import React from 'react'
import Link from './Link'
import Search from './Search'
import MenuChild from './MenuChild1'


class LiElement extends React.Component {
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
    const elementLis = this.state.deepMenu.map((ele, index) =>  {

      // const li = document.createElement('li')
      // li.classList.add('menu__item')
      // console.log(li)
      //   li.className="menu__item relative active"
      //   li.setAttribute('key',`${index}`)

    // const link = <><Link data={ ele } /></>
    // if( ele.isActive) {
    //   li.classList.add('active')

    // } else if (ele.children) {
    //   li.classList.add('relative')
    // }
    // li.insertAdjacentHTML("beforeend", )
    // return li

      if (ele.children && ele.isActive) {
        return  <li className="menu__item active" key={ index }>
                  <Link data={ ele } />
                  <MenuChild child={ ele.children } />
                </li>
      }

      if (ele.isActive) {
        return <li className="menu__item active" key={ index }>
                <Link data={ ele } />
              </li>

      } else if (ele.children) {
        return  <li className="menu__item relative" key={ index }>
                  <Link data={ ele } />
                  <MenuChild child={ ele.children } />
                </li>

      } else {
        return  <li className="menu__item" key={ index }>
                  <Link data={ ele } />
                </li>
      }
    })

    return(
      <>
        { elementLis }
        <Search />
      </>
    )
  }
}

export default LiElement