import React from 'react'
import './table.css'

const Table = () => {
  return (
    <>
      <div className='bg-red-500'>
        <div className="w-full h-3/4 overflow-hidden flex flex-row justify-center ">
          <table className="w-5/6 h-full table-auto ">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2">AQI</th>
                <th className="px-4 py-2">Remark</th>
                <th className="px-4 py-2">Color Code</th>
                <th className="px-4 py-2">Possible Health Impact</th>
              </tr>
            </thead>
            <tbody className="bg-gray-100 border-solid">
              <tr>
                <td>0-50</td>
                <td>Good</td>
                <td className='Good'></td>
                <td>Minimal impact</td>
              </tr>
              <tr>
                <td>51-100</td>
                <td>Satisfactory</td>
                <td className='Satisfactory'></td>
                <td>Minor breathing discomfort to sensitive people</td>
              </tr>
              <tr>
                <td>101-200</td>
                <td>Moderate</td>
                <td className='Moderate'></td>
                <td>Breathing discomfort to the people with lungs, asthma and heart diseases</td>
              </tr>
              <tr>
                <td>201-300</td>
                <td>Poor</td>
                <td className='Poor'></td>
                <td>Breathing discomfort to most people on prolonged exposure</td>
              </tr>
              <tr>
                <td>301-400</td>
                <td>Very Poor</td>
                <td className='Very-Poor'></td>
                <td>Respiratory illness on prolonged exposure</td>
              </tr>
              <tr>
                <td>401-500	</td>
                <td>Severe</td>
                <td className='Severe'></td>
                <td>Affects healthy people and seriously impacts those with existing diseases</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>


    </>
  )
}

export default Table;
