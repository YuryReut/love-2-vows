import { useState } from "react";

const welcomeText =
  "Этот сервис поможет тебе выразить свою любовь и быть понятной именно твоей половинкой. Это серия из 4 вопросов настройки и списка рекомендаций.";

const startButtonText = "Начать";

const copyrightText =
  "Сервис бесплатный. Основан на разработках non profit R&D проекта Now You Can See love и запатентованой программе Чакроскоп.";

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
        <div className="text-gray-500">TODO: Вопросы и рекомендации</div>
      )}
    </div>
  );
}
