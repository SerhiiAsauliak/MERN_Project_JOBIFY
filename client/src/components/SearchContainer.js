import { FormRow, FormRowSelect } from '.'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/SearchContainer'

const SearchContainer = () => {
  const {
    isLoading,
    search,
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
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  }
  const handleSubmit =(e) => {
    e.preventDefault()
    clearFilters()
  }

  return (
    <Wrapper>
      <form className='form'>
        <h4>search form</h4>
        {/* search position */}
        <div className='form-center'>
          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}
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