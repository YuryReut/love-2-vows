import { useState } from "react";

export const chakraFeelingPhrase: Record<string, string> = {
  "1": "защита, опора и тишина, в которой можно спрятаться",
  "2": "желание и страстное влечение между нами",
  "3": "внутренняя сила, ты излучаешь уважение и поддержку",
  "4": "забота, принятие и твоя искренность",
  "5": "твой способ говорить создаёт общее направление для нас",
  "6": "вдохновение, интуитивная близость и тонкое понимание",
  "7": "тишина, слияние и глубокое присутствие без слов"
};

export const userChakraOrigin: Record<string, string> = {
  "1": "чувства, что ты рядом и мир устойчив",
  "2": "внутреннего огня, наполненного страстью и желанием быть ближе",
  "3": "моего стремления дарить тебе надёжность",
  "4": "тепла и спокойствия от тебя",
  "5": "моментов, объединяющих нас в одно целое",
  "6": "мечты об одном",
  "7": "тишины, присутствия и того, что не нужно объяснять"
};

export const partnerChannelChoice: Record<string, string> = {
  "Слова поддержки": "ты говоришь с теплотой и ясностью",
  "Время вместе": "рядом со мной — полностью, не отвлекаясь ни на что",
  "Подарки": "делишься вниманием",
  "Помощь": "и делаешь всё для меня, без лишних слов",
  "Прикосновения": "касаешься — и в каждом твоём прикосновении я ощущаю тепло"
};

export const userAcceptLoveChoice: Record<string, string> = {
  "1": "узнаю в этом",
  "2": "ощущаю это как",
  "3": "принимаю это как",
  "4": "чувствую это как",
  "5": "впитываю это как",
  "6": "вижу в этом",
  "7": "улавливаю это как"
};

export const userLovePhrase: Record<string, string> = {
  "Слова поддержки": "мои слова касаются тебя с нежностью",
  "Время вместе": "могу быть с тобой, без суеты и шума",
  "Подарки": "я дарю тебе то, что отзывается в твоём сердце",
  "Помощь": "я забочусь о тебе в мелочах каждого дня",
  "Прикосновения": "я дарю тебе нежность и внимание"
};

export const chakraSeeingVerb: Record<string, string> = {
  "1": "знаю",
  "2": "ощущаю всем телом",
  "3": "принимаю",
  "4": "чувствую",
  "5": "впитываю",
  "6": "вижу",
  "7": "улавливаю"
};

export const userSoulImage: Record<string, string> = {
  "1": "замирает и дышит тобой",
  "2": "будто соединяется с тобой в танце",
  "3": "попадает в наш мир, один на двоих",
  "4": "ощущает дом — место, где я с тобой",
  "5": "раскрывается, когда ты смотришь на меня",
  "6": "поёт и звучит изнутри",
  "7": "в тишине с тобой"
};

export const chakraBuildVerb: Record<string, string> = {
  "1": "эту атмосферу, в которой спокойно",
  "2": "эту близость, в которой слышны наши дыхания",
  "3": "ощущение открытости между нами",
  "4": "эту связь, в которой мы соединены",
  "5": "это чувство доверия между нами",
  "6": "мы можем ещё больше узнать друг друга",
  "7": "понимание, где всё становится ясно без слов"
};

export const partnerSenseFinalChoice: Record<string, string> = {
  "Слова поддержки": "поддержка",
  "Время вместе": "твоё полное внимание",
  "Подарки": "твоё проявление заботы",
  "Помощь": "твоя забота",
  "Прикосновения": "твои прикосновения"
};

export const mySenseFinalChoice: Record<string, string> = {
  "Слова поддержки": "мой голос сердца",
  "Время вместе": "могу быть с тобой, без суеты и шума",
  "Подарки": "мои маленькие жесты от души",
  "Помощь": "моя тёплая забота",
  "Прикосновения": "мои тёплые прикосновения"
};


export function generateStructuredVow(data: string[]): {
  text: [string, React.ReactNode][];
  selfExample?: [string, string];
  partnerExample?: [string, string];
} {
  const [userChakra, userLang, partnerChakra, partnerLang] = data;

  const partnerQuality = chakraFeelingPhrase[partnerChakra] || partnerChakra;
  const partnerChannel = partnerChannelChoice[partnerLang] || partnerLang;
  const userAcceptLove = userAcceptLoveChoice[userChakra] || userChakra;
  const userQuality = userChakraOrigin[userChakra] || userChakra;
  const userChannel = userLovePhrase[userLang] || userLang;

  const soul = userSoulImage[userChakra];
  const build = chakraBuildVerb[userChakra];
  const partnerSenseFinal = partnerSenseFinalChoice[partnerLang];
  const mySenseFinal = mySenseFinalChoice[userLang];

  return {
    text: [
      ["Говори только одному человеку", <>
        В этот момент, когда мир замер вокруг нас, я хочу сказать…<br />
        Я здесь, я чувствую тебя: <br />
        в тебе живёт <i>{partnerQuality}</i>.
      </>],
      ["Вспомни пример", <>
        Когда ты <i>{partnerChannel}</i>,<br />
        я <i>{userAcceptLove}</i> настоящую любовь<br /><br />
        и берегу это <i>{build}</i>,<br />
        где есть <i>{partnerSenseFinal}</i><br />
        и <i>{mySenseFinal}</i>.
      </>],
      ["Посмотри в глаза", <>
        Моя любовь рождается из <i>{userQuality}</i>.<br />
        Когда <i>{userChannel}</i>,<br />
        В этот момент моя душа <i>{soul}</i>.
      </>],
      ["Пауза", <>Я люблю тебя.</>]
    ]
  };
}

const welcomeText =
  "Этот сервис поможет тебе выразить свою любовь и быть понятной именно твоей половинкой. Это серия из 4 вопросов настройки и списка рекомендаций.";

const startButtonText = "Начать";

const copyrightText =
  "Сервис бесплатный. Основан на разработках non profit R&D проекта Now You Can See love и запатентованой программе Чакроскоп.";

const chakraOptions = [
  { id: "1", label: "Когда я чувствую защиту, стабильность и надёжность рядом" },
  { id: "2", label: "Когда между нами есть притяжение, живое желание и страсть" },
  { id: "3", label: "Когда ты поддерживаешь мои усилия и признаёшь мою силу" },
  { id: "4", label: "Когда ты проявляешь тепло, заботу и принимаешь меня целиком" },
  { id: "5", label: "Когда мы разделяем смыслы, говорим на одном языке и видим общее будущее" },
  { id: "6", label: "Когда ты вдохновляешь меня, чувствуешь без слов и веришь в моё видение" },
  { id: "7", label: "Когда между нами тишина, слияние и глубокое присутствие без слов" }
];

const langOptions = [
  { id: "Слова поддержки", label: "Через слова и поддержку" },
  { id: "Время вместе", label: "Через время вместе" },
  { id: "Подарки", label: "Через подарки и знаки внимания" },
  { id: "Помощь", label: "Через действия и заботу" },
  { id: "Прикосновения", label: "Через прикосновения" }
];

const questions = [
  {
    text: "Как ты чувствуешь любовь?",
    options: chakraOptions
  },
  {
    text: "Как ты воспринимаешь любовь?",
    options: langOptions
  },
  {
    text: "Как твоя половинка чувствует любовь?",
    options: chakraOptions
  },
  {
    text: "Как она воспринимает любовь?",
    options: langOptions
  }
];

export default function App() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleOptionClick = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[step] = value;
    setAnswers(newAnswers);
    setStep(step + 1);
  };

  const result = answers.length === 4 ? generateStructuredVow(answers) : null;

  return (
    <div style={{ fontFamily: "'EB Garamond', serif", backgroundColor: "white", color: "#222", padding: "2rem", maxWidth: "640px", margin: "0 auto", textAlign: "center" as const }}>
      {step === -1 ? (
        <>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>{welcomeText}</p>
          <button style={{ padding: "0.5rem 1.2rem", background: "black", color: "white", borderRadius: "999px", border: "none", cursor: "pointer", marginTop: "1rem" }} onClick={() => setStep(0)}>
            {startButtonText}
          </button>
          <p style={{ fontSize: "0.8rem", color: "#666", marginTop: "2rem" }}>{copyrightText}</p>
        </>
      ) : step < questions.length ? (
        <div>
          <h2 style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "1rem" }}>{questions[step].text}</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
            {questions[step].options.map(({ id, label }) => (
              <button
                key={id}
                style={{ padding: "0.5rem 1.2rem", background: "#eee", color: "#000", borderRadius: "999px", border: "none", cursor: "pointer" }}
                onClick={() => handleOptionClick(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ marginTop: "1.5rem" }}>
          <h2 style={{ fontWeight: "bold", fontSize: "1.4rem", marginBottom: "1.5rem" }}>Твоя клятва любви</h2>
          {result?.text.map(([label, jsx]) => (
            <div>
              <p style={{ paddingTop: "1.5rem", fontSize: "0.9rem", color: "#444" }}>
                {label}
              </p>
              <p style={{ fontSize: "1.5rem" }}>
                {jsx}
              </p>
            </div>
          ))}

          <div style={{ borderTop: "1px solid #ccc", paddingTop: "1.5rem", fontSize: "0.9rem", color: "#444" }}>
            <p style={{ lineHeight: "1.5" }}>
              Как сказать все и не забыть?<br />
              
              Важно не придумать, а вспомнить. Оно уже есть внутри. <br />
              Под каждым курсивом просто вспомни пример. Спокойно, без спешки. Это не тренировка памяти, а мягкое возвращение к настоящим чувствам, внутри<br />
              <i>«тот разговор в машине», «завтрак, когда всё было ясно без слов», «как вы смеялись вместе».</i><br />
              Собери текст как последовательность примеров. Он даст опору и вывезет, даже если вдруг захочется молчать.<br />
              И пусть слова будут любыми — главное, чтобы они были настоящими, вашими.<br />
              <br />
              Если ты считаешь, что ваши клятвы важны для вас — то мы тоже так считаем.
              Мы сделали <a href="https://web3wed.io" target="_blank" style={{ color: "#000", textDecoration: "underline" }}>web3wed.io</a>, 
              Сохрани их в блокчейн и этот момент останется с вами навсегда — живым и настоящим. 
              </p>
             <p>
             Ps. Как словить момент любви?<br/>
               Вы почувствуете этот момент на свадьбе... то самое мгновение счастья...<br /> 
               Просто возьмите телефоны (все подождут, это ваш день) и запиши слова любви. 5-10-50 секунд счастья. Каждый - в свой момент, для себя. <br />
               А на следующий день — дома, в пижамах — поженитесь в блокчейне. Загрузите клятвы на Web3Wed. Это останется с вами — навсегда.<br />
               И если когда-нибудь станет сложно или просто захочется вернутся в свою вселенную - это можно будет сделать.
             </p>
          </div>
        </div>
      )}
    </div>
  );
}
