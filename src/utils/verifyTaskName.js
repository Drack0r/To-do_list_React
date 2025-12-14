function verifyTaskName(taskName, existingTasks = []) {
  const trimmedTaskName = taskName.trim();

  let errorMessage;

  if (!trimmedTaskName) {
    errorMessage = "Le nom ne peut être vide !";
    return { isValid: false, message: errorMessage };
  }

  if (trimmedTaskName.length < 3) {
    errorMessage = "Le nom est trop court !";
    return { isValid: false, message: errorMessage };
  }

  if (trimmedTaskName.length > 30) {
    errorMessage = "Le nom est trop long !";
    return { isValid: false, message: errorMessage };
  }

  const forbiddenChars = /[<>]/;
  if (forbiddenChars.test(trimmedTaskName)) {
    errorMessage = "Les caractères < et > ne sont pas autorisés !";
    return { isValid: false, message: errorMessage };
  }

  const isDuplicate = existingTasks.some(
    (task) => task.name.toLowerCase() === trimmedTaskName.toLowerCase()
  );
  if (isDuplicate) {
    errorMessage = "Cette tâche existe déjà !";
    return { isValid: false, message: errorMessage };
  }

  if (/\s{2,}/.test(trimmedTaskName)) {
    errorMessage = "Les espaces multiples ne sont pas autorisés !";
    return { isValid: false, message: errorMessage };
  }

  if (/^[^a-zA-Z0-9À-ÿ]|[^a-zA-Z0-9À-ÿ]$/.test(trimmedTaskName)) {
    errorMessage =
      "Le nom doit commencer et finir par une lettre ou un chiffre !";
    return { isValid: false, message: errorMessage };
  }

  return { isValid: true, message: "" };
}

export default verifyTaskName;
