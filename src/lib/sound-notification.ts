export const playNotificationSound = (
  soundPath: string = "../assets/sound/notification.wav"
) => {
  const audio = new Audio(soundPath);
  audio.play().catch((error) => {
    console.error("Erro ao reproduzir o som:", error);
  });
};
