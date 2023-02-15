import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import Chart from "react-apexcharts";
import CloseIcon from "@mui/icons-material/Close";
import { Containner } from "./styles";
import { useAppSelector } from "../../../store/hooks/useAppHooksRedux";
// parent Card

const Card = (props: any) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }: any) {
  const { value } = useAppSelector((state) => state.tab);

  const Png = param.png;
  return (
    <Containner>
      <motion.div
        className="CompactCard"
        style={
          value === param.cardId
            ? {
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
              }
            : { background: "linear-gradient(180deg, #6e6d6d 0%, #6e6d6d 100%)",  color: '#999'}
        }
        layoutId="expandableCard"
        onClick={setExpanded}
      >
        <div className="radialBar">
          <CircularProgressbar
            value={param.barValue}
            text={`${param.barValue}%`}
          />
          <span>{param.title}</span>
        </div>
        <div className="detail">
          <Png />
          <span>{param.balance ? `${param.balance} AO` : param.value}</span>
          <span>{param.weeklyBalance}</span>
        </div>
      </motion.div>
    </Containner>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }: any) {
  const data: any = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <Containner>
      <motion.div
        className="ExpandedCard"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
        layoutId="expandableCard"
      >
        <div
          style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}
        >
          <CloseIcon onClick={setExpanded} />
        </div>
        <span>{param.title}</span>
        <div className="chartContainer">
          <Chart options={data.options} series={param.series} type="area" />
        </div>
        <span>Last 24 hours</span>
      </motion.div>
    </Containner>
  );
}

export default Card;
