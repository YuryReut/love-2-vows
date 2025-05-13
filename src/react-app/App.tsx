import { useState } from "react";

export const chakraCallToAction: Record<string, string> = {
  "1": "Сохрани свою любовь — пусть она всегда будет твоей тихой гаванью.",
  "2": "Зафиксируй пламя этого чувства — и пусть оно вспыхивает вновь, где бы вы ни были.",
  "3": "Пусть ваша клятва станет символом силы, которую вы дарите друг другу.",
  "4": "Сохрани вашу нежность в блокчейне, как память о принятии и любви.",
  "5": "Зафиксируй общее видение, чтобы всегда помнить, куда вы идёте вместе.",
  "6": "Сохрани эту искру вдохновения — как свидетельство вашей уникальной связи.",
  "7": "Закрепи вашу тишину и слияние навсегда — как точку возвращения к любви."
};

export const chakraFeelingPhrase: Record<string, string> = {
  "1": "защита, опора и тишина, в которой можно расслабиться",
  "2": "притяжение, телесное влечение и танец желания",
  "3": "признание, уважение и внутренняя сила, которую ты несёшь",
  "4": "забота, принятие и нежность твоего сердца",
  "5": "слова, которые соединяют, и общее направление души",
  "6": "вдохновение, интуитивная близость и тонкое понимание",
  "7": "тишина, слияние и необъяснимое ощущение целого"
};

export const userChakraOrigin: Record<string, string> = {
  "1": "чувства, что ты рядом и мир устойчив",
  "2": "внутреннего жара, телесной искры и желания быть ближе",
  "3": "силы, которая хочет защищать и вдохновлять",
  "4": "тепла сердца и тишины принятия",
  "5": "слов, что соединяют нас в одну линию смысла",
  "6": "ощущения, что мы видим сны в одну сторону",
  "7": "тишины, присутствия и того, что не нужно объяснять"
};

export const partnerChannelChoice: Record<string, string> = {
  "Слова поддержки": "говоришь сердцем — словами, в которых звучит поддержка",
  "Время вместе": "остаёшься рядом — полностью, не отвлекаясь ни на что",
  "Подарки": "даришь знаки внимания — пусть даже совсем маленькие",
  "Помощь": "заботишься обо мне в действиях, без лишних слов",
  "Прикосновения": "касаешься — и в каждом прикосновении я ощущаю тепло"
};


export const userAcceptLoveChoice: Record<string, string> = {
  "1": "узнаю в этом",
  "2": "ощущаю это как",
  "3": "принимаю это как",
  "4": "чувствую это как",
  "5": "слышу в этом",
  "6": "вижу в этом",
  "7": "улавливаю это как"
};


export const userLovePhrase: Record<string, string> = {
  "Слова поддержки": "мои слова касаются тебя с нежностью",
  "Время вместе": "я рядом с тобой, полностью и без спешки",
  "Подарки": "я дарю тебе то, что отзывается в твоём сердце",
  "Помощь": "я забочусь о тебе в деталях каждого дня",
  "Прикосновения": "я касаюсь тебя с теплом и вниманием"
};

export const chakraSeeingVerb: Record<string, string> = {
  "1": "знаю",
  "2": "ощущаю всем телом",
  "3": "принимаю",
  "4": "чувствую",
  "5": "слышу",
  "6": "вижу",
  "7": "улавливаю"
};

export const userSoulImage: Record<string, string> = {
  "1": "замирает и дышит тобой",
  "2": "танцует, словно узнала себя",
  "3": "становится спокойной и полной любви",
  "4": "ощущает дом — не место, а тебя",
  "5": "раскрывается, как цветок на солнце",
  "6": "поёт и звучит изнутри",
  "7": "просто есть — в тишине с тобой"
};

export const chakraBuildVerb: Record<string, string> = {
  "1": "тёплое пространство без слов",
  "2": "тихая нить, связывающая сердца",
  "3": "светлая комната между дыханиями",
  "4": "невидимый поток тишины",
  "5": "глубина, в которой встречаются чувства",
  "6": "ритм, в котором мы узнаём друг друга",
  "7": "тёплое пространство без слов"
};

export const partnerSenseFinalChoice: Record<string, string> = {
  "Слова поддержки": "твои важные слова",
  "Время вместе": "твоё полное присутствие",
  "Подарки": "твои знаки внимания",
  "Помощь": "твоя забота",
  "Прикосновения": "твои прикосновения"
};

export const mySenseFinalChoice: Record<string, string> = {
  "Слова поддержки": "мой голос сердца",
  "Время вместе": "моё тихое присутствие",
  "Подарки": "мои дары от души",
  "Помощь": "моя тёплая забота",
  "Прикосновения": "мои прикосновения с теплом"
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
          {result?.text.map(([label, jsx], idx) => (
                <p>{jsx}</p>
           ))}

          <div>
            <hr/>
            <p>
              Как сказать все и не забыть?<br />
              
              Важно не придумать, а вспомнить. Оно уже есть внутри. <br />
              Под каждым курсивом просто вспомни пример. Спокойно, без спешки. Это не тренировка памяти, а мягкое возвращение к настоящим чувствам, внутри<br />
              <i>«тот разговор в машине», «завтрак, когда всё было ясно без слов», «как вы смеялись вместе».</i><br />
              Собери текст как последовательность примеров. Он даст опору и вывезет, даже если вдруг захочется молчать.<br />
              И пусть слова будут любыми — главное, чтобы они были настоящими, вашими.<br />
              <br />
              Если ваши клятвы и их момент важен для вас — мы тоже так считаем.
              Мы сделали <a href="https://web3wed.io" target="_blank" style={{ color: "#000", textDecoration: "underline" }}>web3wed.io</a>, 
              чтобы этот момент остался с вами навсегда — живым и настоящим. 
              </p>
             <p>
             Ps. Еще круче - почувствуй на свадьбе то самое мгновение счастья - просто возьми телефон и запиши свои слова любви.<br />
               Просто запиши эти 5-10-50 секунд счастья. Каждый - в свой момент, для себя. <br />
               А на следующий день — дома, в пижамах — поженитесь в блокчейне.Загрузите клятвы на Web3Wed. Это останется с вами — навсегда.<br />
               И если когда-нибудь станет сложно или просто захочется вернутся в свою вселенную - это можно будет сделать.
             </p>
          </div>
        </div>
      )}
    </div>
  );
}
