import { useEffect, useRef } from "react";

type FieldError = {
  message?: string; // A mensagem do erro (se existir)
  type?: string; // O tipo do erro
};

type ErrorsForm = {
  errors: {
    name?: FieldError;
    lastName?: FieldError;
    email?: FieldError;
    phone?: FieldError;
    service?: FieldError;
    message?: FieldError;
  };
};

const ErrorDisplay = ({ errors }: ErrorsForm) => {
  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      errorRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [errors]);

  return Object.keys(errors).length > 0 ? (
    <div ref={errorRef} className="bg-red-300 rounded-2xl mt-4 p-4 space-y-2">
      {Object.entries(errors).map(([key, error]) => (
        <div key={key} className="text-red-600">
          {/* Verifica se o erro existe e exibe a mensagem */}*{" "}
          {error?.message || "Erro desconhecido"}
        </div>
      ))}
    </div>
  ) : null;
};

export default ErrorDisplay;
