import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div
      id="project"
      className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-4 mb-24"
    >
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
        👩🏻‍💻 我的项目经历
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto lg:grid grid-cols-2">
        <ProjectCard
          img="moguls.jpg"
          title="雪上技巧训练视频指标提取平台"
          time="2021年1月 - 至今"
          descriptions={[
            "领导六人团队模拟软件产品精益创业过程，以及组织与加拿大体育学院合作伙伴的会议。产出的SaaS产品基于计算机视觉算法从运动训练视频中提取关键身体指标，为训练提供数据洞察。",
            "在由两名软件工程师组成的开发团队中担任前端工程师。通过React实现包括拖拽视频上传，视频在线播放，发送视频处理请求，数据云端保存，数据过滤和排序等功能，并结合Material-UI实现良好用户操作界面。",
          ]}
          demoName="网站地址（持续开发中）"
          demoLink="https://moguls-analysis.herokuapp.com/"
          tags={[
            "Javascript",
            "React",
            "JEST",
            "Material-UI",
            "Python",
            "Flask",
            "MongoDB",
          ]}
        />

        <ProjectCard
          img="vaccine.jpg"
          title="疫苗信息站"
          time="2021年3月"
          descriptions={[
            "在deCODE黑客马拉松中与数字化健康医疗公司League合作，担任前端工程师，创建旨在通过易理解的数据和步骤指导，建立并提升公众疫苗信任感。",
            "使用 Next.js 和 React 实现用户调研功能以及常见问题展示。",
            "基于 UI/UX 设计师提供的 Figma 设计稿，通过 TailwindCSS 实现出与设计稿无差异的前端界面。",
          ]}
          demoName="Web Demo"
          demoLink="https://league-tracker.vercel.app/"
          tags={["Javascript", "React", "Next.js", "TailwindCSS"]}
        />

        <ProjectCard
          img="terminal.jpg"
          title="操作系统之自定文件系统"
          time="2021年2月"
          descriptions={[
            "借助用户空间文件系统（FUSE），通过C语言实现一个客制化文件系统。支持常用Linux文件操作命令，包括 ls，touch，echo，cat，truncate，rm，mkdir，以及rmdir。",
          ]}
          tags={["C", "Operating System"]}
        />

        <ProjectCard
          img="router.jpg"
          title="简单的路由实现"
          time="2020年10月"
          descriptions={[
            "基于Mininet仿真静态路由表实现一个简单的路由器，支持接收原始以太网帧，处理数据包并将数据包转发到正确的传出接口。",
          ]}
          tags={["C", "Computer Network"]}
        />

        <ProjectCard
          img="hospital.jpg"
          title="多伦多病童医院泌尿采集分析平台"
          time="2020年1月 - 2020年4月"
          descriptions={[
            "在六人工程师团队中担任前端开发，与多伦多病童医院合作创建儿童泌尿采集分析产品，支持患者足不出户进行尿流率测量、医生远程接收采集数据和统计图表。",
            "使用Figma创建产品原型，验证客户需求。",
            "通过React和Material-UI实现仪表盘展示和数据过滤功能，并通过React Native扩展已有移动应用，完善多平台软件结合的工作流。",
          ]}
          tags={[
            "Javascript",
            "React",
            "Material-UI",
            "React Native",
            "FeathersJS",
            "Figma",
          ]}
          demoName="Video Demo"
          demoLink="https://www.youtube.com/watch?v=ID0yGLDdHhY"
        />
        <ProjectCard
          img="truck.jpg"
          title="多伦多大学餐车点餐平台"
          time="2019年9月 - 2019年12月"
          descriptions={[
            "在四人团队中担任全栈工程师，创建支持学生线上预定校园餐车食物的网站应用程序。",
            "定义数据库模式，结合 Express.js 和 Mongoose 实现应用程序的后端服务器，包括 RESTful API、CRUD操作、用户身份验证等。",
            "通过 React 和 Material-UI 实现用户前端界面，支持菜单展示、加入购物车和提货预订。",
          ]}
          tags={[
            "Javascript",
            "React",
            "RESTful API",
            "ExpressJS",
            "MongoDB",
            "Mongoose",
          ]}
        />
        <ProjectCard
          img="money.jpg"
          title="线上银行 Java 桌面应用"
          time="2019年1月 - 2019年4月"
          descriptions={[
            "带领六人小组实现一个交互式桌面应用程序，模拟支持网上银行功能（例如提款，存款和转账）的自动柜员机（ATM）系统。",
            "在产品开发过程中华整合诸如MVC模式、Factory方法等设计模式，最大限度地提高团队开发和软件迭代效率。",
            "通过JavaFX为应用程序创建简洁清晰的图形用户界面，增强用户体验。",
          ]}
          tags={["Java", "JavaFX", "Design Patterns", "OOP"]}
        />

        <ProjectCard
          img="book.jpg"
          title="自动补全引擎 Python 脚本"
          time="2018年11月"
          descriptions={[
            "根据用户提供的不完整字符串或旋律，以及输入文件作为建议，基于前缀树数据结构，设计自动补全算法引擎。算法引擎将根据建议文件里的出现频率作为主要依据返回补全结果，并支持补全旋律播放功能。",
          ]}
          tags={["Python", "Prefix Tree", "Recursion"]}
        />
      </div>
    </div>
  );
}
