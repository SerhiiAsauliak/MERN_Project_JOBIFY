import { useAppContext } from "../../context/appContext"
import { useEffect } from 'react';
import Loading from './../../components/Loading';
import StatsContainer from './../../components/StatsContainer';
import ChartsContainer from "../../components/ChartsContainer";

const Stats = () => {
  const {showStats, isLoading, monthlyApplications} = useAppContext()
  useEffect(() => {
    showStats()
    // eslint-disable-next-line
  }, [])

  if(isLoading) {
    return <Loading center/>
  }

  return (
    <>
      <StatsContainer/>
      {monthlyApplications.length > 0 && <ChartsContainer/>}
    </>
  )
}
export default Stats