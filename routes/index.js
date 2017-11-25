var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/header.json', function(req, res, next) {
  res.json({
  	"ret":true,
	"data":{
		"list":[{
			"title":"大家说英语",
			"id":1,
			"url":"/list/1"
		},{
			"title":"空中英语教室",
			"id":2,
			"url":"/list/2"
		},{
			"title":"彭蒙惠英语",
			"id":3,
			"url":"/list/3"
		},{
			"title":"科学美国人",
			"id":4,
			"url":"/list/4"
		},{
			"title":"东吴相对论",
			"id":5,
			"url":"/list/5"
		},{
			"title":"走遍美国",
			"id":6,
			"url":"/list/6"
		},{
			"title":"英文名著",
			"id":7,
			"url":"/list/7"
		},{
			"title":"托福考试",
			"id":8,
			"url":"/list/8"
		},{
			"title":"美国脱口秀",
			"id":9,
			"url":"/list/9"
		}],
		"standardEnglish":[{
			"id":1,
			"title":"常速英语",
			"width":114,
			"url":"/list/1"
		}],
		"slowEnglish":[{
			"id":2,
			"title":"慢速英语(中级)",
			"width":424,
			"url":"/list/2"
		}],
		"EnglishTeach":[{
			"id":3,
			"title":"英语教学(初级)",
			"width":483,
			"url":"/list/3"
		}],
		"standardEnglishList":[{
			"id":1,
			"title":"音频",
			"url":"/standardeng/1"
		},{
			"id":2,
			"title":"视频",
			"url":"/standardeng/2"
		},{
			"id":3,
			"title":"翻译",
			"url":"/standardeng/3"
		}],
		"slowEnglishList":[{
			"id":1,
			"title":"科技报道",
			"url":"/sloweng/1"
		},{
			"id":2,
			"title":"词汇整故",
			"url":"/sloweng/2"
		},{
			"id":3,
			"title":"美国故事",
			"url":"/sloweng/3"
		},{
			"id":4,
			"title":"时事新闻",
			"url":"/sloweng/4"
		},{
			"id":5,
			"title":"经济报道",
			"url":"/sloweng/5"
		},{
			"id":6,
			"title":"建国史话",
			"url":"/sloweng/6"
		},{
			"id":7,
			"title":"美国故事",
			"url":"/sloweng/7"
		},{
			"id":8,
			"title":"美国故事",
			"url":"/sloweng/8"
		},{
			"id":9,
			"title":"美国故事",
			"url":"/sloweng/9"
		},{
			"id":10,
			"title":"美国故事",
			"url":"/sloweng/10"
		},{
			"id":11,
			"title":"美国故事",
			"url":"/sloweng/11"
		},{
			"id":12,
			"title":"美国故事",
			"url":"/sloweng/12"
		},{
			"id":13,
			"title":"美国故事",
			"url":"/sloweng/13"
		},{
			"id":14,
			"title":"美国故事",
			"url":"/sloweng/14"
		}],
		"EnglishTeachList":[{
			"id":1,
			"title":"美国故事",
			"url":"/EnglishTeach/1"
		},{
			"id":2,
			"title":"美国故事",
			"url":"/EnglishTeach/2"
		},{
			"id":3,
			"title":"美国故事",
			"url":"/EnglishTeach/3"
		},{
			"id":4,
			"title":"美国故事",
			"url":"/EnglishTeach/4"
		},{
			"id":5,
			"title":"美国故事",
			"url":"/EnglishTeach/5"
		},{
			"id":6,
			"title":"美国故事",
			"url":"/EnglishTeach/6"
		},{
			"id":7,
			"title":"美国故事",
			"url":"/EnglishTeach/7"
		},{
			"id":8,
			"title":"美国故事",
			"url":"/EnglishTeach/8"
		},{
			"id":9,
			"title":"美国故事",
			"url":"/EnglishTeach/9"
		},{
			"id":10,
			"title":"美国故事",
			"url":"/EnglishTeach/10"
		},{
			"id":11,
			"title":"美国故事",
			"url":"/EnglishTeach/11"
		},{
			"id":12,
			"title":"美国故事",
			"url":"/EnglishTeach/12"
		},{
			"id":13,
			"title":"美国故事",
			"url":"/EnglishTeach/13"
		},{
			"id":14,
			"title":"美国故事",
			"url":"/EnglishTeach/14"
		},{
			"id":15,
			"title":"美国故事",
			"url":"/EnglishTeach/15"
		}]
	}
  })
});

router.get('/index.json', function(req, res, next) {
	res.json({
	"ret":true,
	"data":{
		"list":[{
			"id":1,
			"category":"空中英语教室",
			"title":"本年度亚洲最佳英文教学奖:《空中英语教室》系列杂志!",
			"time":"2017-01-25",
			"isnew":true,
			"link":"/detail/1"
		},{
			"id":2,
			"category":"VOA常速英语",
			"title":"Islamic State Losing Grip on Mosul",
			"time":"2017-01-25",
			"isnew":true,
			"link":"/detail/2"	
		},{
			"id":3,
			"category":"科技报道",
			"title":"Looking Back -- Climate Change Mitigation Milestones",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/3"
		},{
			"id":4,
			"category":"VOA常速英语",
			"title":"Religious Freedom Day",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/4"
		},{
			"id":5,
			"category":"科技报道",
			"title":"U.S. Condemns Jerusalem Terrorist Attack",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/5"
		},{
			"id":6,
			"category":"科技报道",
			"title":"ISIL Under Pressure",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/6"
		},{
			"id":7,
			"category":"AS IT IS",
			"title":"Russia Designated Over 150 NGOs Foreign Agents",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/7"
		},{
			"id":8,
			"category":"VOA常速英语",
			"title":"U.S. Will Defend Against North Korean Threat",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/8"
		},{
			"id":9,
			"category":"AS IT IS",
			"title":"Hamza Bin Laden Designated a Terrorist",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/9"
		},{
			"id":10,
			"category":"VOA常速英语",
			"title":"Innovation in Defense Partnership",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/10"
		},{
			"id":11,
			"category":"AS IT IS",
			"title":"In 'Hidden Figures' 3 African American Women Help NASA Win 60s Space Race",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/11"
		},{
			"id":12,
			"category":"科技报道",
			"title":"Importance of Inter-Religious Harmony",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/12"
		},{
			"id":13,
			"category":"VOA常速英语",
			"title":"U.S.-South Korea Defense Policy",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/13"
		},{
			"id":14,
			"category":"科技报道",
			"title":"Lebanon's New Government",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/14"
		},{
			"id":15,
			"category":"VOA常速英语",
			"title":"Promoting International Labor Rights",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/15"
		},{
			"id":16,
			"category":"科技报道",
			"title":"Big Challenges Await New US Defense Team in 2017",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/16"
		},{
			"id":17,
			"category":"VOA常速英语",
			"title":"Signatory to USSR’s Collapse Rejects Gorbachev, Putin Criticism",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/17"
		},{
			"id":18,
			"category":"VOA常速英语",
			"title":"Belarus' Post-Soviet Economy: Tractors to World of Tanks",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/18"
		},{
			"id":19,
			"category":"VOA常速英语",
			"title":"Belarus' Post-Soviet Economy: Tractors to World of Tanks",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/19"
		},{
			"id":20,
			"category":"VOA常速英语",
			"title":"Belarus' Post-Soviet Economy: Tractors to World of Tanks",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/18"
		},{
			"id":21,
			"category":"VOA常速英语",
			"title":"Belarus' Post-Soviet Economy: Tractors to World of Tanks",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/18"
		},{
			"id":22,
			"category":"VOA常速英语",
			"title":"Belarus' Post-Soviet Economy: Tractors to World of Tanks",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/18"
		},{
			"id":23,
			"category":"VOA常速英语",
			"title":"Belarus' Post-Soviet Economy: Tractors to World of Tanks",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/18"
		},{
			"id":24,
			"category":"VOA常速英语",
			"title":"Belarus' Post-Soviet Economy: Tractors to World of Tanks",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/18"
		},{
			"id":25,
			"category":"VOA常速英语",
			"title":"Belarus' Post-Soviet Economy: Tractors to World of Tanks",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/18"
		},{
			"id":26,
			"category":"VOA常速英语",
			"title":"Belarus' Post-Soviet Economy: Tractors to World of Tanks",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/18"
		},{
			"id":27,
			"category":"VOA常速英语",
			"title":"Belarus' Post-Soviet Economy: Tractors to World of Tanks",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/18"
		},{
			"id":28,
			"category":"VOA常速英语",
			"title":"Belarus' Post-Soviet Economy: Tractors to World of Tanks",
			"time":"2017-01-18",
			"isnew":false,
			"link":"/detail/18"
		}]
	}
})
});
router.get('/list.json', function(req, res, next) {
	res.json({
		"ret":true,
		"data":{
			"content":[{
				"id":1,
				"title":req.query.id+"VOA > VOA常速英语 >"
			}],
			"list":[{
				"id":1,
				"category":"VOA常速英语",
				"title":"African Leaders to Choose New AU Chair at Busy Summit",
				"time":"2017-01-25",
				"isnew":true,
				"link":"/list/1"
			},{
				"id":2,
				"category":"VOA常速英语",
				"title":"Islamic State Losing Grip on Mosul",
				"time":"2017-01-25",
				"isnew":true,
				"link":"/list/2"
			},{
				"id":3,
				"category":"VOA常速英语",
				"title":"Looking Back -- Climate Change Mitigation Milestones",
				"time":"2017-01-25",
				"isnew":true,
				"link":"/list/3"
			},{
				"id":4,
				"category":"VOA常速英语",
				"title":"Religious Freedom Day",
				"time":"2017-01-25",
				"isnew":true,
				"link":"/list/4"
			},{
				"id":5,
				"category":"VOA常速英语",
				"title":"U.S. Condemns Jerusalem Terrorist Attack",
				"time":"2017-01-25",
				"isnew":true,
				"link":"/list/5"
			},{

				"id":6,
				"category":"VOA常速英语",
				"title":"Russia Designated Over 150 NGOs Foreign Agents",
				"time":"2017-01-25",
				"isnew":true,
				"link":"/list/6"
			}]
		}
	})
});
router.get('/detail.json', function(req, res, next) {
	res.json({
		"ret": true,
		"data": {
			"detail": {
				"title": req.query.id+"Japan Seeks to Expand Influence in Southeast Asia",
				"content": "<p>Today we are talking about Gerald Ford. Ford was the 38th president, but he was never elected to the position.</p><p>Gerald Ford official presidential portrait by David Hume Kennerly Gerald Ford official presidential portrait by David Hume Kennerly</p><p>As the United States pulls back from large free trade deals in the Asia-Pacific, Japan is competing with China for influence in the area.</p><p>As the United States pulls back from large free trade deals in the Asia-Pacific, Japan is competing with China for influence in the area.</p><p>As the United States pulls back from large free trade deals in the Asia-Pacific, Japan is competing with China for influence in the area.</p><p>Many historians have described Ford as a good man facing a difficult situation. He tried to fix a troubled economy, end United States' involvement in Vietnam, and show people that the U.S. government could continue to operate after a crisis.</p><p>Instead, an unusual series of events brought him there.</p><p>As the United States pulls back from large free trade deals in the Asia-Pacific, Japan is competing with China for influence in the area.</p><p>Critics from the two main political parties had problems with Ford’s efforts. And voters did not elect him president when they had the chance in 1976.</p><p>But the boy’s father was abusive. His mother separated from him a short time after their son was born. She asked a court for permission to cancel their marriage. Her request was quickly approved.</p><p>As the United States pulls back from large free trade deals in the Asia-Pacific, Japan is competing with China for influence in the area.</p>",
				"img":"<img src='http://www.easyvoa.com/uploads/allimg/171116/1KJ02K7-0.jpg'>"
			}
		}
	})
})
module.exports = router;
