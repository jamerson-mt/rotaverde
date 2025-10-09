export async function sendFormData(data: Record<string, string>) {
  try {
    const apiUrl = import.meta.env.VITE_API_URL; // Ajuste para usar import.meta.env
    if (!apiUrl) {
      throw new Error("A variável de ambiente VITE_API_URL não está configurada.");
    }

    const response = await fetch(`${apiUrl}form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Define o cabeçalho como JSON
      },
      body: JSON.stringify(data), // Converte os dados para JSON
    });

    if (!response.ok) {
      const errorText = await response.text(); // Captura o corpo da resposta em caso de erro
      throw new Error(`Erro na API: ${response.status} - ${response.statusText}. Detalhes: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao enviar dados:", error instanceof Error ? error.message : error);
    throw error;
  }
}
