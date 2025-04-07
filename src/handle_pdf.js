// handle_pdf.js
import { PDFDocument } from "pdf-lib";

export async function merge(fileList) {
  const mergedPdf = await PDFDocument.create();

  for (const file of fileList) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await PDFDocument.load(arrayBuffer);
    const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    pages.forEach((page) => mergedPdf.addPage(page));
  }

  const mergedBytes = await mergedPdf.save();

  const now = new Date();
  const filename = `merged-${now.toISOString().replace(/[:.]/g, "-")}.pdf`;

  return new File([mergedBytes], filename, {
    type: "application/pdf",
  });
}
