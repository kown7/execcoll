import { exports } from "../../public/PdfTeXEngine.js"

export async function createPdf(fileContent: string) {
  const engine = new exports.PdfTeXEngine();
  await engine.loadEngine();

  engine.writeMemFSFile("main.tex", fileContent);

  engine.setEngineMainFile("main.tex");
  let r = await engine.compileLaTeX(); // r contains PDF binray and compilation log.

  return r;
}
