import { useState } from "react";

const welcomeText =
  "Этот сервис поможет тебе выразить свою любовь и быть понятной именно твоей половинкой. Это серия из 4 вопросов настройки и списка рекомендаций.";

const startButtonText = "Начать";

const copyrightText =
  "Сервис бесплатный. Основан на разработках non profit R&D проекта Now You Can See love и запатентованой программе Чакроскоп.";

const questions = [
  {
    text: "Как ты чувствуешь любовь?",
    options: [
      "Безопасность и забота",
      "Притяжение и страсть",
      "Поддержка и признание",
      "Забота и принятие",
      "Общие смыслы и видение",
      "Вдохновение и интуиция",
      "Тишина и слияние"
    ]
  },
  {
    text: "Как ты воспринимаешь любовь?",
    options: [
      "Слова поддержки",
      "Время вместе",
      "Подарки",
      "Помощь",
      "Прикосновения"
    ]
  },
  {
    text: "Как твоя половинка чувствует любовь?",
    options: [
      "Безопасность и забота",
      "Притяжение и страсть",
      "Поддержка и признание",
      "Забота и принятие",
      "Общие смыслы и видение",
      "Вдохновение и интуиция",
      "Тишина и слияние"
    ]
  },
  {
    text: "Как она воспринимает любовь?",
    options: [
      "Слова поддержки",
      "Время вместе",
      "Подарки",
      "Помощь",
      "Прикосновения"
    ]
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center">
      {step === -1 ? (
        <>
          <p className="text-lg max-w-xl mb-6 leading-relaxed">{welcomeText}</p>
          <button
            onClick={() => setStep(0)}
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            {startButtonText}
          </button>
          <p className="mt-10 text-xs text-gray-500 max-w-xs">{copyrightText}</p>
        </>
      ) : step < questions.length ? (
        <div className="space-y-6 max-w-xl w-full">
          <h2 className="text-lg font-semibold mb-4">{questions[step].text}</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {questions[step].options.map((text, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(text)}
                className="px-4 py-2 bg-white border rounded-full hover:bg-gray-100"
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-gray-600 max-w-xl">
          <h2 className="text-lg font-semibold mb-4">Как выразить свои чувства точнее</h2>
          <div className="mb-6 p-4 border rounded">Рекомендации как сказать о своих чувствах</div>
          <div className="mb-6 p-4 border rounded">Рекомендации как выразить свои чувства</div>
          <div className="space-y-2 text-sm text-left">
            <div>• Будь конкретной, избегай абстракций.</div>
            <div>• Учитывай язык любви партнёра.</div>
            <div>• Говори в моменте, не откладывай.</div>
          </div>
        </div>
      )}
    </div>
  );
}
