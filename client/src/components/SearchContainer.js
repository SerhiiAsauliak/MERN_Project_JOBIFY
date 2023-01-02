import { FormRow, FormRowSelect } from '.'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/SearchContainer'
import { useState, useMemo } from 'react';

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('')

  const {
    isLoading,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    jobTypeOptions,
    handleChange,
    clearFilters,
  } = useAppContext()

  const handleSearch = (e) => {
    handleChange({ name: e.target.name, value: e.target.value })
  }
  const handleSubmit =(e) => {
    e.preventDefault()
    setLocalSearch('')
    clearFilters()
  }

  const debounce = () => {
    let timeoutId
    return (e) => {
      setLocalSearch(e.target.value)
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        handleChange({ name: e.target.name, value: e.target.value })
      }, 1000)
    }
  }

  const optimizedDebounce = useMemo(() => debounce(), [])

  return (
    <Wrapper>
      <form className='form'>
        <h4>search form</h4>
        {/* search position */}
        <div className='form-center'>
          <FormRow
            type='text'
            name='search'
            value={localSearch}
            handleChange={optimizedDebounce}
          >
          </FormRow>
          {/* search by status */}
          <FormRowSelect 
            labelText='Status'
            name='searchStatus' 
            value={searchStatus} 
            handleChange={handleSearch} 
            list={['all', ...statusOptions]}
          >
          {/* search by type */}
          </FormRowSelect>
          <FormRowSelect 
            labelText='Type'
            name='searchType' 
            value={searchType} 
            handleChange={handleSearch} 
            list={['all', ...jobTypeOptions]}
          >
          </FormRowSelect>
          {/* sort */}
          <FormRowSelect 
            labelText='Sort'
            name='sort' 
            value={sort} 
            handleChange={handleSearch} 
            list={sortOptions}
          >
          </FormRowSelect>
          <button 
            className='btn btn-block btn-danger'
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  )
}
export default SearchContainer