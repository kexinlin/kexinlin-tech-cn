import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <div
      id="education"
      className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24"
    >
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
        👩🏻‍🎓 我的教育经历
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto">
        <EducationCard
          img="UofT.jpg"
          title="多伦多大学"
          time="2017年9月 - 2021年6月"
          p1="我是多伦多大学主校区精修计算机专业的大四学生，预计将于2021年6月获得荣誉理学学士学位。"
          p2="我当前的总绩点是 3.99/4.00，在校期间多次获得院长荣誉名单奖学金 (Dean's List Scholar) 
          和因尼斯学院奖学金 (Innis College Later Life Learning Scholar)。"
        />

        <EducationCard
          img="HGS.jpg"
          title="哈利法克斯文法学校"
          time="2015年9月 - 2017年6月"
          p1="我的高中生活是在哈利法克斯度过的，那是在加拿大东岸一个小而平静的城市，
          和我成长的家乡深圳很不一样。我完成了国际文凭体系课程 (IB)，以全校最高均分毕业，
          并获得加拿大总督奖学术奖章 (Governor General's Academic Medal)。"
          p2="那也是我学习吉他和编程的开始，美好的时光！"
        />
      </div>
    </div>
  );
}
