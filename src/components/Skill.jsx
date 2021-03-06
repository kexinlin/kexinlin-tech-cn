import SkillSection from "./SkillSection";

export default function Skill() {
  return (
    <div className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-4 mb-24">
      <h2 className="font-black uppercase pb-4 text-3xl text-yellow-500">
        π§ ζηζθ½
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto">
        <SkillSection
          title="β¨οΈ ηΌη¨θ―­θ¨"
          skills={[
            { name: "Python", icon: "fab fa-python fa-3x" },
            { name: "Javascript", icon: "fab fa-js-square fa-3x" },
            { name: "Java", icon: "fab fa-java fa-3x" },
            { name: "C", icon: "fas fa-copyright fa-3x" },
            { name: "SQL", icon: "fas fa-database fa-3x" },
            { name: "R", icon: "fas fa-registered fa-3x" },
            { name: "HTML", icon: "fab fa-html5 fa-3x" },
            { name: "CSS", icon: "fab fa-css3-alt fa-3x" },
          ]}
        />

        <SkillSection
          title="π εΊεζ‘ζΆ"
          skills={[
            { name: "React", icon: "fab fa-react fa-3x" },
            { name: "ExpressJS", icon: "fas fa-server fa-3x" },
            { name: "Mongoose", icon: "fas fa-sitemap fa-3x" },
            { name: "jQuery", icon: "fas fa-copyright fa-3x" },
            { name: "NumPy", icon: "fas fa-table fa-3x" },
            { name: "Pandas", icon: "fas fa-file-csv fa-3x" },
            { name: "Bootstrap", icon: "fab fa-bootstrap fa-3x" },
            { name: "EJS", icon: "fas fa-file-code fa-3x" },
          ]}
        />

        <SkillSection
          title="π¨ ηΈε³ε·₯ε·"
          skills={[
            { name: "Git", icon: "fab fa-git-square fa-3x" },
            { name: "Unix Shell", icon: "fas fa-terminal fa-3x" },
            { name: "LaTex", icon: "fas fa-subscript fa-3x" },
            { name: "Heroku", icon: "fas fa-code-branch fa-3x" },
            { name: "MongoDB Atlas", icon: "fas fa-cloud fa-3x" },
            { name: "Tableau", icon: "far fa-chart-bar fa-3x" },
            { name: "Figma", icon: "fab fa-figma fa-3x" },
            { name: "Axure", icon: "far fa-object-group fa-3x" },
          ]}
        />

        <p className="font-rubik font-semibold text-xl text-center text-gray-800 mt-8">
          ... ζη»­ε’ε δΈ­
        </p>
      </div>
    </div>
  );
}
