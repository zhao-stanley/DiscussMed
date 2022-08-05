import placeholder from '../public/static/images/placeholder.png'
import jake from '../public/static/images/team/jake.png'
import stanley from '../public/static/images/team/stanley.png'
import amanda from '../public/static/images/team/amanda.png'
import maxx from '../public/static/images/team/maxx.png'
import kevin from '../public/static/images/team/kevin.png'
import wayne from '../public/static/images/team/wayne.png'

const roles = {
  founder: 'from-yellow-600 to-yellow-400',
  webmaster: 'from-[#0F3443] to-[#34E89E]',
  research: 'from-blue-800 to-blue-400',
  content: 'from-purple-800 to-purple-400',
  outreach: 'from-red-800 to-red-400',
}

const teamData = [
  {
    name: 'Jake Konigsberg',
    title: 'Founder',
    tag: roles.founder,
    img: jake,
  },
  {
    name: 'Stanley Zhao',
    title: 'Webmaster',
    tag: roles.webmaster,
    img: stanley,
  },
  {
    name: 'Amanda Liswood',
    title: 'Research Coordinator',
    tag: roles.research,
    img: amanda,
  },
  {
    name: 'Pradnya Ns',
    title: 'Research Coordinator',
    tag: roles.research,
    img: placeholder,
  },
  {
    name: 'Kevin Zhang',
    title: 'Content Writer',
    tag: roles.content,
    img: kevin,
  },
  {
    name: 'Wayne Shih',
    title: 'Content Writer',
    tag: roles.content,
    img: wayne,
  },
  {
    name: 'Harini Senthilkumar',
    title: 'Content Writer',
    tag: roles.content,
    img: placeholder,
  },
  {
    name: 'Maxx Yung',
    title: 'Community Outreach',
    tag: roles.outreach,
    img: maxx,
  },
  {
    name: 'Xintong Lu',
    title: 'Community Outreach',
    tag: roles.outreach,
    img: placeholder,
  },
  {
    name: 'Awab Ahmed',
    title: 'Community Outreach',
    tag: roles.outreach,
    img: placeholder,
  },
]

export default teamData
