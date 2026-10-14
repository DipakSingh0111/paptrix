import rawData from "@/data/paptrix.json";
import type { PaptrixTemplateData } from "@/types/paptrix.types";

const templateData: PaptrixTemplateData = rawData as unknown as PaptrixTemplateData;

export function getPaptrixSections() {
  return templateData.categories.Paptrix.sections;
}

export function getGlobalData() {
  return templateData.categories.Paptrix.sections.Global?.variants?.PaptrixGlobal1;
}

export function getHeaderData() {
  return templateData.categories.Paptrix.sections.Header?.variants?.PaptrixHeader1;
}

export function getFooterData() {
  return templateData.categories.Paptrix.sections.Footer?.variants?.PaptrixFooter1;
}

export function getPageBanners() {
  return templateData.categories.Paptrix.sections.PageBanners?.variants?.PaptrixPageBanners1?.pages;
}
