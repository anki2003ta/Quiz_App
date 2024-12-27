import React, { useEffect, useState } from 'react';
import { getServerData } from '../helper/helper';
import '../styles/Result.css';

function ResultTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
        setData(res)
    })
  })
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);

  /*useEffect(() => {
    getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);*/

  /*if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }*/

  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <div>No Data Found</div>
          ) : (
            data.map((v, i) => (
              <tr className="table-body" key={i}>
                <td>{v?.username || ""}</td>
                <td>{v?.attempts || 0}</td>
                <td>{v?.points || 0}</td>
                <td>{v?.achived || ""}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable; 
