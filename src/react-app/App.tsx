import { useState } from "react";

const welcomeText =
  "Этот сервис поможет тебе выразить свою любовь и быть понятной именно твоей половинкой. Это серия из 4 вопросов настройки и списка рекомендаций.";

const startButtonText = "Начать";

const copyrightText =
  "Сервис бесплатный. Основан на разработках non profit R&D проекта Now You Can See love и запатентованой программе Чакроскоп.";

const q1 = "Как ты чувствуешь любовь?";
const q2 = "Как ты воспринимаешь любовь?";
const q3 = "Как твоя половинка чувствует любовь?";
const q4 = "Как она воспринимает любовь?";

const chakraOptions = [
  "Безопасность и забота",
  "Притяжение и страсть",
  "Поддержка и признание",
  "Забота и принятие",
  "Общие смыслы и видение",
  "Вдохновение и интуиция",
  "Тишина и слияние"
];

const loveLanguages = [
  "Слова поддержки",
  "Время вместе",
  "Подарки",
  "Помощь",
  "Прикосновения"
];

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center">
      {!started ? (
        <>
          <p className="text-lg max-w-xl mb-6 leading-relaxed">{welcomeText}</p>
          <button
            onClick={() => setStarted(true)}
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            {startButtonText}
          </button>
          <p className="mt-10 text-xs text-gray-500 max-w-xs">{copyrightText}</p>
        </>
      ) : (
        <div className="space-y-8 max-w-xl w-full">
          <div>
            <h2 className="text-lg font-semibold mb-4">{q1}</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {chakraOptions.map((text, idx) => (
                <button
                  key={idx}
                  className="px-4 py-2 bg-white border rounded-full hover:bg-gray-100"
                >
                  {text}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">{q2}</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {loveLanguages.map((text, idx) => (
                <button
                  key={idx}
                  className="px-4 py-2 bg-white border rounded-full hover:bg-gray-100"
                >
                  {text}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">{q3}</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {chakraOptions.map((text, idx) => (
                <button
                  key={"p" + idx}
                  className="px-4 py-2 bg-white border rounded-full hover:bg-gray-100"
                >
                  {text}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">{q4}</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {loveLanguages.map((text, idx) => (
                <button
                  key={"pl" + idx}
                  className="px-4 py-2 bg-white border rounded-full hover:bg-gray-100"
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
