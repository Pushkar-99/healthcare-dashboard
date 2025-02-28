import React, { useContext, useState, useEffect, useMemo } from "react";
import Context from "../ContextAPI/Context.js";
import InterpolationChart from "./InterpolationChart.js";

const Chart = () => {
  const { result } = useContext(Context);

  const patientData = result
    ? Object.values(result).find((values) => values.name === "Jessica Taylor")
    : null;

    const lastSixMonthsData = useMemo(() => {
        if (patientData?.diagnosis_history) {
          return patientData.diagnosis_history.slice(0, 6).reverse();
        }
        return [];
      }, [patientData]);

  const rangeOfDiastolic = useMemo(() => {
    return lastSixMonthsData?.[lastSixMonthsData.length - 1]?.blood_pressure?.diastolic ?? {};
  }, [lastSixMonthsData]);

  const rangeOfSystolic = useMemo(() => {
    return lastSixMonthsData?.[lastSixMonthsData.length - 1]?.blood_pressure?.systolic ?? {};
  }, [lastSixMonthsData]);

  const [diagnosis, setDiagnosis] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    setDiagnosis({
      labels: lastSixMonthsData.map((entry) => `${entry.month}, ${entry.year}`),
      datasets: [
        {
          label: "Systolic",
          data: lastSixMonthsData.map(
            (entry) => entry.blood_pressure.systolic?.value ?? 0
          ),
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          tension: 0.4,
        },
        {
          label: "Diastolic",
          data: lastSixMonthsData.map(
            (entry) => entry.blood_pressure.diastolic?.value ?? 0
          ),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          tension: 0.4,
        },
      ],
    });
  }, [lastSixMonthsData]);

  return (
    <div>
      <InterpolationChart
        chartData={diagnosis}
        diastolic={rangeOfDiastolic}
        systolic={rangeOfSystolic}
      />
    </div>
  );
};

export default Chart;
