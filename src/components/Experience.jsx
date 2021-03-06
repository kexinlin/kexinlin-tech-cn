import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div
      id="experience"
      className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24"
    >
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
        ð¼ æçå·¥ä½ç»å
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto">
        <ExperienceCard
          img="Tencent.jpg"
          role="äº§åè¿è¥å®ä¹ ç - CDGäºä¸ç¾¤ JOOXå½éäº§åç»"
          title="æ·±å³å¸è¾è®¯è®¡ç®æºç³»ç»æéå¬å¸"
          time="2020å¹´5æ - 2020å¹´8æ"
          descriptions={[
            "åºäºäº§ååæãç«ååæåå¸åºåæï¼æ°åå¹¶æ±æ¥äº§ååæåæ¹è¿æ¥åï¼æåºçé³ä¹æç´¢è¶å¿ãä¸ªæ§åæç´¢æåºãæ¿å±å¹¿åç­å¤é¡¹å»ºè®®è¢«çº³å¥äº§ååç»­è¿­ä»£ã",
            "éè¿SQLåPythonï¼æåååæç¨æ·èååç¨æ·è¡ä¸ºæ°æ®ï¼ä¸ºç¨æ·ä¿æ´»ãé²æµå¤±ãæåæ¶å¥çç®æ æä¾æ´æ·±å±æ´å¯ï¼å¹¶å¨è¿è¥ååæ¹åä¸è·å¾æ´ç»è´æå¯¼ã",
            "è´è´£æè·è¿ææ¡åºãAB æµè¯ãExcel æ¹éå¯¼å¥ç­éæ±ï¼æ©å±èªå¨æ¨éå¹³å°çè½ååæåæä½æçã",
          ]}
        />

        <ExperienceCard
          img="Tencent.jpg"
          role="äº§åç­åå®ä¹ ç - TEGäºä¸ç¾¤ è®¡è´¹å¹³å°é¨äº§åç»"
          title="æ·±å³å¸è¾è®¯è®¡ç®æºç³»ç»æéå¬å¸"
          time="2018å¹´5æ - 2018å¹´8æ"
          descriptions={[
            "è´è´£ä¸å¤§è¿è¥ä½ç³»ä¹ä»»å¡ä½ç³»ç¨æ·ç«¯ååæ·ç«¯ä»0å°1çæ¹æ¡è§åãææ¡£æ°åãéæ±è¯å®¡ãé¡¹ç®æ¨è¿åä¸çº¿åçäº§åèµ°æ¥ï¼æé´é¡¹ç®éç¨ç¢åæè®¡åäº¤ä»ã",
            "å¯¹è¾è®¯æççå¤é¡¹è¿­ä»£è¿è¡è§ååè·è¿ï¼ä¾å¦ä»»å¡æµç¨èªå©åéªè¯åè½ãé¢ç®åè­¦åè½ãæ¥å¥å¤é¨æçç­ï¼å¸®å©åæ·å®ç°éæ¬å¢æï¼å·®å¼åè¿è¡ç¨æ·çå½å¨æçç®¡çã",
            "å®æé¨åäº§åå¯¹å¤ææç¼åï¼åæ¬ç¨æ·ç«¯æµç¨ä»ç»ææ¡£ãç®¡çå°è¯´æææ¡£ãæ°æ®ä¸­å¿è¯´æææ¡£ã",
          ]}
        />
      </div>
    </div>
  );
}
