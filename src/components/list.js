import React, { Component } from 'react';
import { Link,IndexLink} from 'react-router';
import config from '../config/config';
import App from '../App';
import '../App.css';
import IndexHead from './indexhead.js';
import jQuery from 'jquery';
/*
*alt_title : 影片名
*author[0].name : 导演
*movie_type : 类型
*image : 图片
*summary : 故事情节 
*
*/
class List extends React.Component {
	render(){
		var value=this.state.button;
		return (
		<div className="movies">
			<IndexHead />
			<div className='list_head'>
				<div><img src={this.state.image}/></div>
				<ul>
					<li>{this.state.alt_title}</li>
					<li>{this.state.title}</li>
					<li>{this.state.movie_type}</li>
					<li>{this.state.movie_duration}</li>
					<li>评分:{this.state.average}{'('+this.state.numRaters+'人评)'}</li>
				</ul>
			</div>
			<div className={'list_summary '+this.state.list_summary}>
			<p>{this.state.summary}</p>
			</div>
			<div className="zhezhao"><button onClick={this.handleclick}>{value}</button></div>
		</div>
		)
	}
	handleclick=(e)=>{
		var cl=this.state.list_summary;
		if(cl!='list_summary2'){
			this.setState({list_summary:'list_summary2'})
		}else{
			this.setState({list_summary:' '})
		}
		this.setState({
			button:e.target.innerHTML=='展开'?'收起':'展开',
		})
	}
	constructor(props){
		super(props);
		var t=this;
	    jQuery.ajax({
	      url:"https://api.douban.com/v2/movie/"+this.props.params.id,
	      type:'POST',
	      dataType:'jsonp',
	      success:function(xhr){
	      	t.setState({
	      		data:xhr,
	      		alt_title:xhr.alt_title,
	      		author:xhr.author[0].name,
	      		movie_type:xhr.attrs.movie_type.join(' '),
	      		image:xhr.image,
	      		summary:xhr.summary,
	      		title:xhr.title,
	      		movie_duration:xhr.attrs.movie_duration.join('|'),
	      		average:xhr.rating.average,
	      		numRaters:xhr.rating.numRaters,
	      	});
	      }
	    });
		this.state={
			button:'展开',
			list_summary:'',
			alt_title:'',//电影名
			author:'',//导演
			movie_type:'',//类型
			image:'',//图片
			summary:'',//故事情节
			title:'',//英文名
			movie_duration:'',//时长
			average:'',//评分
			numRaters:' ',//评分人数
			data:{
    "rating": {
        "max": 10,
        "average": "9.6",
        "numRaters": 820086,
        "min": 0
    },
    "author": [
        {
            "name": "弗兰克·德拉邦特 Frank Darabont"
        }
    ],
    "alt_title": "肖申克的救赎 / 月黑高飞(港)",
    "image": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p480747492.jpg",
    "title": "The Shawshank Redemption",
    "summary": "20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯 Tim Robbins 饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为肖申克的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。未过多久，安迪尝试接近囚犯中颇有声望的瑞德（摩根·弗里曼 Morgan Freeman 饰），请求对方帮自己搞来小锤子。以此为契机，二人逐渐熟稔，安迪也仿佛在鱼龙混杂、罪恶横生、黑白混淆的牢狱中找到属于自己的求生之道。他利用自身的专业知识，帮助监狱管理层逃税、洗黑钱，同时凭借与瑞德的交往在犯人中间也渐渐受到礼遇。表面看来，他已如瑞德那样对那堵高墙从憎恨转变为处之泰然，但是对自由的渴望仍促使他朝着心中的希望和目标前进。而关于其罪行的真相，似乎更使这一切朝前推进了一步……\n本片根据著名作家斯蒂芬·金（Stephen Edwin King）的原著改编。",
    "attrs": {
        "pubdate": [
            "1994-09-10(多伦多电影节)",
            "1994-10-14(美国)"
        ],
        "language": [
            "英语"
        ],
        "title": [
            "The Shawshank Redemption"
        ],
        "country": [
            "美国"
        ],
        "writer": [
            "弗兰克·德拉邦特 Frank Darabont",
            "斯蒂芬·金 Stephen King"
        ],
        "director": [
            "弗兰克·德拉邦特 Frank Darabont"
        ],
        "cast": [
            "蒂姆·罗宾斯 Tim Robbins",
            "摩根·弗里曼 Morgan Freeman",
            "鲍勃·冈顿 Bob Gunton",
            "威廉姆·赛德勒 William Sadler",
            "克兰西·布朗 Clancy Brown",
            "吉尔·贝罗斯 Gil Bellows",
            "马克·罗斯顿 Mark Rolston",
            "詹姆斯·惠特摩 James Whitmore",
            "杰弗里·德曼 Jeffrey DeMunn",
            "拉里·布兰登伯格 Larry Brandenburg",
            "尼尔·吉恩托利 Neil Giuntoli",
            "布赖恩·利比 Brian Libby",
            "大卫·普罗瓦尔 David Proval",
            "约瑟夫·劳格诺 Joseph Ragno",
            "祖德·塞克利拉 Jude Ciccolella"
        ],
        "movie_duration": [
            "142 分钟"
        ],
        "year": [
            "1994"
        ],
        "movie_type": [
            "犯罪",
            "剧情"
        ]
    },
    "id": "https://api.douban.com/movie/1292052",
    "mobile_link": "https://m.douban.com/movie/subject/1292052/",
    "alt": "https://movie.douban.com/movie/1292052",
    "tags": [
        {
            "count": 169895,
            "name": "经典"
        },
        {
            "count": 141777,
            "name": "励志"
        },
        {
            "count": 123723,
            "name": "信念"
        },
        {
            "count": 108902,
            "name": "自由"
        },
        {
            "count": 85829,
            "name": "美国"
        },
        {
            "count": 76377,
            "name": "人性"
        },
        {
            "count": 54907,
            "name": "人生"
        },
        {
            "count": 49392,
            "name": "剧情"
        }
    ]
},
		}
	}
}
export default List;