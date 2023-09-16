// src/DataTable.js
import React, { useState, useEffect } from "react";
import database from "./firebase";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await database.ref("your_firebase_path").once("value");
        const dataVal = response.val();
        if (dataVal) {
          const dataArray = Object.values(dataVal);
          setData(dataArray);
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table className="min-w-full">
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.field1}</td>
              <td>{item.field2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
