import jake from '../public/static/images/team/jake.png'
import stanley from '../public/static/images/team/stanley.png'
import amanda from '../public/static/images/team/amanda.png'
import maxx from '../public/static/images/team/maxx.png'
import kevin from '../public/static/images/team/kevin.png'
import wayne from '../public/static/images/team/wayne.png'

const roles = {
    founder: "bg-gradient-to-tl from-yellow-600 to-yellow-400",
    webmaster: "bg-gradient-to-tl from-[#0F3443] to-[#34E89E]",
    research: "bg-gradient-to-tl from-blue-800 to-blue-400",
    //community
    content: "bg-gradient-to-tl from-purple-800 to-purple-400"
}

const teamMembers = [
    {
        name: "Jake Konigsberg",
        title: "Founder",
        tags: roles.founder,
        img: jake
    },
    {
        name: "Stanley Zhao",
        title: "Webmaster",
        tags: roles.webmaster,
        img: stanley
    },
    {
        name: "Amanda Liswood",
        title: "Research Coordinator",
        tags: roles.research,
        img: amanda
    },
    {
        name: "Maxx Yung",
        title: "Content Writer",
        tags: roles.content,
        img: maxx
    },
    {
        name: "Kevin Zhang",
        title: ""
        tags: roles.content,
        img: kevin
    }, 
    {
        name: "Wayne Shih",
        tags: roles.content,
        img: wayne
    }
]