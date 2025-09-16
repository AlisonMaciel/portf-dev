import { PieChartSkillsCss } from "../ChartSkills/PieChartSkillsCss";
import { PieChartSkillsHtml } from "../ChartSkills/PieChartSkillsHtml";
import { PieChartSkillsJS } from "../ChartSkills/PieChartSkillsJS";
import { PieChartSkillsNext } from "../ChartSkills/PieChartSkillsNext";
import { PieChartSkillsReact } from "../ChartSkills/PieChartSkillsReact";

import { TechnologicalSkillsContainer } from "./styles";

interface TechnologicalSkillsProps {
  id: string
}

export function TechnologicalSkills({id}:TechnologicalSkillsProps) {
  return (
    <TechnologicalSkillsContainer id={id}>
      <div className="skills">
        <div className="borderOne"></div>
        <h2>Minhas Skills</h2>
        <div className="borderTwo"></div>
      </div>
      <div className="charts">
        <PieChartSkillsHtml />
        <PieChartSkillsCss />
        <PieChartSkillsJS />
        <PieChartSkillsReact />
        <PieChartSkillsNext />
      </div>
    </TechnologicalSkillsContainer>
  );
}
