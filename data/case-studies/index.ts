import type { CaseStudy } from "@/types";
import { zenvioCaseStudy } from "./zenvio";
import { lmsCaseStudy } from "./lms";
import { greencartCaseStudy } from "./greencart";
import { realEstateCaseStudy } from "./real-estate";


export const caseStudies: CaseStudy[] = [zenvioCaseStudy, lmsCaseStudy, greencartCaseStudy, realEstateCaseStudy];