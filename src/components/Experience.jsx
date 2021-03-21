import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div
      id="experience"
      className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24"
    >
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
        💼 我的工作经历
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto">
        <ExperienceCard
          img="Tencent.jpg"
          role="产品运营实习生 - CDG事业群 JOOX国际产品组"
          title="深圳市腾讯计算机系统有限公司"
          time="2020年5月 - 2020年8月"
          descriptions={[
            "基于产品分析、竞品分析和市场分析，撰写并汇报产品分析及改进报告，提出的音乐搜索趋势、个性化搜索排序、激励广告等多项建议被纳入产品后续迭代。",
            "通过SQL和Python，提取和分析用户肖像和用户行为数据，为用户促活、防流失、提升收入的目标提供更深层洞察，并在运营发力方向上获得更细致指导。",
            "负责或跟进文案库、AB 测试、Excel 批量导入等需求，扩展自动推送平台的能力和提升操作效率。",
          ]}
        />

        <ExperienceCard
          img="Tencent.jpg"
          role="产品策划实习生 - TEG事业群 计费平台部产品组"
          title="深圳市腾讯计算机系统有限公司"
          time="2018年5月 - 2018年8月"
          descriptions={[
            "负责三大运营体系之任务体系用户端和商户端从0到1的方案规划、文档撰写、需求评审、项目推进和上线前的产品走查，期间项目里程碑均按计划交付。",
            "对腾讯权益的多项迭代进行规划和跟进，例如任务流程自助化验证功能、预算告警功能、接入外部权益等，帮助商户实现降本增效，差异化进行用户生命周期的管理。",
            "完成部分产品对外材料编写，包括用户端流程介绍文档、管理台说明文档、数据中心说明文档。",
          ]}
        />
      </div>
    </div>
  );
}
