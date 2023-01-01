import { useState } from 'react';
import { useAppContext } from "../context/appContext"
import BarChartComponent from './BarChart'
import AreaChartComponent from './AreaChart'
import Wrapper from '../assets/wrappers/ChartsContainer'

const ChartsContainer = () => {
  const {monthlyApplications: data} = useAppContext()
  const [barChart, setBarChart] = useState(true)
  
  return (
    <Wrapper>
      <h2>Monthly Applications</h2>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}  
      </button>  
      {barChart  
        ? <BarChartComponent data={data}/>
        : <AreaChartComponent data={data}/>
      }
    </Wrapper>
  )
}
export default ChartsContainer