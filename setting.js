const {ref} = require('vue')
module.exports = {
    day: '2024-04-02 09:00:00',
    // 男方信息
    bridegroom: '顾浩',
    // 中间的消息可以是 love 也可以是 ❤️
    love: 'has been acquainted with',
    // 女方信息
    bride: '张奕淳',
    // 在一起发生事件的信息
    calendarList: [
        {
            // 日期
            date: '2024-04-02',
            // 事件
            desc: '鹄谒淼诰初识鱼衍衍'
        },
        {
            date: '2024-04-05',
            desc: '顾浩と张奕淳相识'
        },
        {
            date: '2024-04-07',
            desc: '淳淳居然是一中校友，好巧欸~'
        },
        {
            date: '2024-04-10',
            desc: '嘿嘿~，从扬大的7个校区中找到了淳淳'
        },
        {
            date: '2024-04-12',
            desc: '讲睡前小故事，包上头的'
        },
        {
            date: '2024-04-13',
            desc: '第一次做旅游攻略（做的不好请见谅哦）'
        },
        {
            date: '2024-04-14',
            desc: '我居然萌生了一个五一去见你的想法'
        },
       {
            date: '2024-04-15',
            desc: '也许我不该问，直接出发会有不一样的结果嘛（可惜没如果）'
        },
        {
            date: '2024-04-16',
            desc: '第一次跟淳淳语音，紧张唉'
        },
       {
            date: '2024-04-17',
            desc: '挑战杯路演很成功哦'
        },
       {
            date: '2024-04-27',
            desc: '哈尔滨的春梅开花好晚'
        },
        {
            date: '2024-05-01',
            desc: '今天出来野炊啦，希望未来能回到过去那一刻'
        },
      {
            date: '2024-05-09',
            desc: '开始沉淀，专心搞论文和健身'
        },
      {
            date: '2024-06-01',
            desc: '愿淳宝能够无忧无虑，不烦世事，满心欢喜'
        },
       {
            date: '2024-07-09',
            desc: '得知扬州地震，心乱'
        },
       {
            date: '2024-07-10',
            desc: '小论文终于投了，希望能够开花结果'
        },
{
            date: '2024-07-11',
            desc: '当我跑完Z1.3公里时，期望终点有人等'
        },
{
            date: '2024-07-16',
            desc: '挑战杯拿了省二ovo'
        },
{
            date: '2024-07-17',
            desc: '大论文实验完结撒花'
        },
{
            date: '2024-07-19',
            desc: '可爱的薯片宝宝会不经意地出现哦~'
        },
{
            date: '2024-08-04',
            desc: '时间会检验一切'
        },
{
            date: '2024-08-25',
            desc: '倘若你不需要现在的我，那我在未来等你'
        }
    ],
    // 照片墙的信息
    recordList: [
        {
            // 照片的地址
            src: require('@/assets/zyc00001.jpg'),
            // 照片的时间
            time: '2024-04-05 18:20:00',
            // 照片的描述
            desc: '这是谁的宝宝呀~'
        },
        {
            src: require('@/assets/zyc00002.jpg'),
            time: '2024-04-05 20:40:00',
            desc: '海棠依旧在，含情落花红'
        },
        {
            src: require('@/assets/zyc00003.jpg'),
            time: '2024-04-09 11:20:00',
            desc: '眼镜和淳宝的气质很搭哦~'
        },
 {
            src: require('@/assets/zyc00004.jpg'),
            time: '2024-04-09 12:30:00',
            desc: '淳の美食之旅—这个不认识欸~'
        },
{
            src: require('@/assets/zyc00005.jpg'),
            time: '2024-04-09 12:30:00',
            desc: '淳の美食之旅—京酱肉丝'
        },
{
            src: require('@/assets/zyc00006.jpg'),
            time: '2024-04-09 12:30:00',
            desc: '淳の美食之旅—芙蓉手撕鸡'
        },
{
            src: require('@/assets/zyc00007.jpg'),
            time: '2024-04-09 20:30:00',
            desc: '一见茉莉，心生欢喜'
        },
{
            src: require('@/assets/zyc00051.jpg'),
            time: '2024-04-12 23:49:00',
            desc: '睡前小故事：月洒不见盛长安'
        },
{
            src: require('@/assets/zyc00008.jpg'),
            time: '2024-04-13 14:00:00',
            desc: '旅游攻略已送达，请签收哦'
        },
{
            src: require('@/assets/zyc00009.jpg'),
            time: '2024-04-19 15:18:00',
            desc: '淳の美食之旅—水原'
        },
{
            src: require('@/assets/zyc00010.jpg'),
            time: '2024-04-20 11:49:00',
            desc: '淳の美食之旅—滋奇火锅（以后少吃辣锅哦~）'
        },
{
            src: require('@/assets/zyc00011.jpg'),
            time: '2024-04-27 10:00:00',
            desc: '哈尔滨的春天总是这么晚'
        },
{
            src: require('@/assets/zyc00012.jpg'),
            time: '2024-05-05 00:48:00',
            desc: '淳の美食之旅—蟹园'
        },
       {
            src: require('@/assets/zyc00013.jpg'),
            time: '2024-05-07 09:43:00',
            desc: '淳の美食之旅—洛壳韩餐厅'
        },
{
            src: require('@/assets/zyc00014.jpg'),
            time: '2024-05-09 17:47:00',
            desc: '蔷舞霞光伴，风拂醉意长。'
        },
{
            src: require('@/assets/zyc00015.jpg'),
            time: '2024-05-13 21:10:00',
            desc: '淳の美食之旅—像素研食'
        },
{
            src: require('@/assets/zyc00016.jpg'),
            time: '2024-05-24 11:20:00',
            desc: '小八：“让我看看到底好不好吃~”'
        },
{
            src: require('@/assets/zyc00017.jpg'),
            time: '2024-05-24 11:20:00',
            desc: '小八：“哼，还是我更可爱~”'
        },
{
            src: require('@/assets/zyc00018.jpg'),
            time: '2024-05-25 18:35:00',
            desc: '余晖洒静水，孤舟泛晚晖'
        },
{
            src: require('@/assets/zyc00019.jpg'),
            time: '2024-05-26 15:15:00',
            desc: ' 历尽沧桑斩浪行，终至星海万古涯（Per Aspera ad Astra）'
        },
{
            src: require('@/assets/zyc00020.jpg'),
            time: '2024-05-31 16:28:00',
            desc: '花彩春烂漫，庭香满温馨'
        },
{
            src: require('@/assets/zyc00021.jpg'),
            time: '2024-05-31 16:32:00',
            desc: '夕阳染林间，寒枝映暮天'
        },
{
            src: require('@/assets/zyc00022.jpg'),
            time: '2024-05-31 17:15:00',
            desc: '夕照金波漾，澜宁意自悠'
        },
{
            src: require('@/assets/zyc00023.jpg'),
            time: '2024-06-18 09:25:00',
            desc: '淳の美食之旅—扬州早茶'
        },
{
            src: require('@/assets/zyc00024.jpg'),
            time: '2024-06-18 09:26:00',
            desc: '苦什么不能苦孩子'
        },
{
            src: require('@/assets/zyc00025.jpg'),
            time: '2024-06-22 11:54:00',
            desc: '小八：“吃了兔兔可就不能吃我了哟ξ( ✿＞◡❛)”'
        },
{
            src: require('@/assets/zyc00026.jpg'),
            time: '2024-07-03 04:32:00',
            desc: '宝宝都好乖໒꒰ྀི๑•͈ ༝ •͈๑꒱ྀི১'
        },
{
            src: require('@/assets/zyc00027.jpg'),
            time: '2024-07-04 12:41:00',
            desc: '淳の美食之旅—来樂'
        },
{
            src: require('@/assets/zyc00028.jpg'),
            time: '2024-07-11 18:51:00',
            desc: '浩の自律之旅—537跑起'
        },
{
            src: require('@/assets/zyc00029.jpg'),
            time: '2024-07-13 17:55:00',
            desc: '浩の自律之旅—进步了一点'
        },
{
            src: require('@/assets/zyc00030.jpg'),
            time: '2024-07-14 15:15:00',
            desc: '可可爱爱，没有脑袋'
        },
{
            src: require('@/assets/zyc00031.jpg'),
            time: '2024-07-18 17:57:00',
            desc: '浩の自律之旅—状态不太好'
        },
{
            src: require('@/assets/zyc00032.jpg'),
            time: '2024-07-20 17:52:00',
            desc: '浩の自律之旅—咿呀哈~（元气满满）'
        },
{
            src: require('@/assets/zyc00034.jpg'),
            time: '2024-07-25 17:12:00',
            desc: '浩の自律之旅—星海挑战'
        },
{
            src: require('@/assets/zyc00035.jpg'),
            time: '2024-07-27 19:17:00',
            desc: '浩の自律之旅—周末有氧'
        },
{
            src: require('@/assets/zyc00036.jpg'),
            time: '2024-07-29 17:36:00',
            desc: '落日映霞红，树影伴灯融'
        },
{
            src: require('@/assets/zyc00041.jpg'),
            time: '2024-07-29 18:49:00',
            desc: '春予浪漫，夏显活力（* ꕥ◝ 𝒮𝓅𝓇𝒾𝓃ℊ 𝒶𝓃𝒹 𝓈𝓊𝓂𝓂ℯ𝓇 ⁺ ˚🦦∗）'
        },
{
            src: require('@/assets/zyc00037.jpg'),
            time: '2024-07-31 13:35:00',
            desc: '锦鲤赐福，见鱼则喜'
        },
{
            src: require('@/assets/zyc00038.jpg'),
            time: '2024-08-01 11:48:00',
            desc: '浩の奖牌'
        },
{
            src: require('@/assets/zyc00039.jpg'),
            time: '2024-08-01 11:48:00',
            desc: '淳の项链'
        },
{
            src: require('@/assets/zyc00040.jpg'),
            time: '2024-08-01 17:55:00',
            desc: '浩の自律之旅—暑期加班最后一跑'
        },
{
            src: require('@/assets/zyc00042.jpg'),
            time: '2024-08-02 20:45:00',
            desc: '在东北，回家前的最后一顿当然得吃铁锅炖'
        },
{
            src: require('@/assets/zyc00043.jpg'),
            time: '2024-08-04 18:20:00',
            desc: '浩の自律之旅—回家第一跑'
        },
{
            src: require('@/assets/zyc00046.jpg'),
            time: '2024-08-05 7:24:00',
            desc: '浩の自律之旅—真的没有卡配速哦~'
        },
{
            src: require('@/assets/zyc00047.jpg'),
            time: '2024-08-05 18:49:00',
            desc: '浩の自律之旅—力量后的有氧真的好累'
        },

{
            src: require('@/assets/zyc00044.jpg'),
            time: '2024-08-05 20:13:00',
            desc: '浩の毕业照'
        },
{
            src: require('@/assets/zyc00045.jpg'),
            time: '2024-08-05 20:14:00',
            desc: '淳の毕业照'
        },
{
            src: require('@/assets/zyc00048.jpg'),
            time: '2024-08-06 7:14:00',
            desc: '浩の自律之旅—不小心多跑了10m'
        },
{
            src: require('@/assets/zyc00049.jpg'),
            time: '2024-08-13 9:08:00',
            desc: '浩の自律之旅—第一个100公里'
        },
{
            src: require('@/assets/zyc00050.jpg'),
            time: '2024-08-24 23:45:00',
            desc: '淳の美食之旅—吧唧真的太可爱了（别不理我( ๑ŏ ﹏ ŏ๑ )）'
        }

    ],
    // tcp备案
    websiteFiling: '晋ICP备2023000118号',
    // tcp备案链接
    websiteFilingLink: 'https://www.beianx.cn/search/晋ICP备2023000118号' ,
    // 公安备案
    policeFiling: '晋公网安备 14112402160014号',
    // 公安备案链接
    policeFilingLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=14112402160014'
}
