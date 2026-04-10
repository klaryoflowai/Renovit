(async function bootRenovitTool() {
  const root = document.getElementById("root");
  const status = document.getElementById("status");
  const script = document.currentScript;
  const src = script.dataset.src;

  function showError(error) {
    console.error(error);
    if (status) {
      status.textContent = "Nu am putut incarca instrumentul. Verifica consola browserului.";
      status.style.color = "#e04a4a";
    }
  }

  try {
    const response = await fetch(src, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Cannot load ${src}: ${response.status}`);
    }

    let code = await response.text();

    code = code.replace(
      /import\s+\{\s*useState\s*\}\s+from\s+["']react["'];?\s*/,
      "const { useState } = React;\n",
    );
    code = code.replace(
      /export\s+default\s+function\s+App\s*\(/,
      "function App(",
    );

    code += "\nReactDOM.createRoot(document.getElementById('root')).render(<App />);";

    const compiled = Babel.transform(code, {
      presets: ["react"],
      filename: src,
    }).code;

    if (status) {
      status.remove();
    }

    (0, eval)(compiled);
  } catch (error) {
    showError(error);
  }
})();
