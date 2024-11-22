// import React from 'react';
// import './scores.css';

// // export function Scores(){

// //   return (<main className="container-fluid bg-secondary text-center">
// //     <table className="table table-warning table-striped-columns">
// //       <thead className="table-dark">
// //         <tr>
// //           <th>#</th>
// //           <th>Name</th>
// //           <th>Score</th>
// //           <th>Date</th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         <tr>
// //           <td>1</td>
// //           <td>도윤 이</td>
// //           <td>34</td>
// //           <td>May 20, 2021</td>
// //         </tr>
// //         <tr>
// //           <td>2</td>
// //           <td>Annie James</td>
// //           <td>29</td>
// //           <td>June 2, 2021</td>
// //         </tr>
// //         <tr>
// //           <td>3</td>
// //           <td>Gunter Spears</td>
// //           <td>7</td>
// //           <td>July 3, 2020</td>
// //         </tr>
// //       </tbody>
// //     </table>
// //   </main>);
// // }

// export function Scores({ scores }) {
//   const scoreRows = [];
  
//   if (scores.length) {
//     for (const [i, score] of scores.entries()) {
//       scoreRows.push(
//         <tr key={i}>
//           <td>{i + 1}</td> {/* Row number */}
//           <td>{score.name.split('@')[0]}</td> {/* Extract before '@' */}
//           <td>{score.score}</td>
//           <td>{score.date}</td>
//         </tr>
//       );
//     }
//   } else {
//     scoreRows.push(
//       <tr key="0">
//         <td colSpan="4">Be the first to score</td>
//       </tr>
//     );
//   }

//   return (
//     <table className="scores-table">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Name</th>
//           <th>Score</th>
//           <th>Date</th>
//         </tr>
//       </thead>
//       <tbody>{scoreRows}</tbody>
//     </table>
//   );
// }


import React from 'react';

import './scores.css';

export function Scores() {
  const [scores, setScores] = React.useState([]);

  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.
  React.useEffect(() => {
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      setScores(JSON.parse(scoresText));
    }
  }, []);

  // Demonstrates rendering an array with React
  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score}</td>
          <td>{score.date}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
  }

  return (
    <main className='container-fluid bg-secondary text-center'>
      <table className='table table-warning table-striped-columns'>
        <thead className='table-dark'>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id='scores'>{scoreRows}</tbody>
      </table>
    </main>
  );
}