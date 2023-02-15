import { DashboardReport } from "../../components/admin";
import BasicTabs from "../../components/shared/Tabs";
import "./styles";
import { Containner } from "./styles";
export const tabComponents = {
  tabs: [
    { label: "Transfências", numberTab: 0 },
    { label: "Livros Lidos", numberTab: 1 },
    { label: "Acessos diarios", numberTab: 2 },
    { label: "Livros Baixados", numberTab: 3 },

  ],
  components: [
    { component: <DashboardReport />, idComponent: 0 },
    { component: <DashboardReport />, idComponent: 1 },
    { component: <DashboardReport />, idComponent: 2 },
    { component: <DashboardReport />, idComponent: 3 },
  ],
};


const Dashboard = () => {
  
  return (
    <Containner>
      <div className="MainDash">
        <h1>RELATÓRIO</h1>
        <BasicTabs tabs={tabComponents.tabs} components={tabComponents.components}/>
      </div>
    </Containner>
  );
};

export default Dashboard;
