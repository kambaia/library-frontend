import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../store/hooks/useAppHooksRedux";
import { setTab } from "../../../store/tab/actions";
import { TTabPanelProps } from "../../../types/interface/App";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BasicTabs = ({ components, tabs }: TTabPanelProps) => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.tab);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(setTab(newValue));

  };
  
  return (
    <Box sx={{ width: "100%"}}>
      <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
         
        >
          {tabs.map((tab) => (
            <Tab label={tab.label} {...a11yProps(tab.numberTab)} color="secondary" />
          ))}
        </Tabs>
      </Box>

      {components.map((panel) => (
        <>
          <TabPanel value={value} index={panel.idComponent}>
             {panel.component}
          </TabPanel>
        </>
      ))}
    </Box>
  );
};

export default BasicTabs;
