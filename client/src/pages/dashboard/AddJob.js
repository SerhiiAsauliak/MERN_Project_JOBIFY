import { FormRow, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import FormRowSelect from '../../components/FormRowSelect';

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!position || !company || !jobLocation){
      displayAlert()
    }
    
    if(isEditing){
      editJob()
      return
    }
    createJob()
  }

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({name, value})
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>{isEditing ? "edit-job" : "add job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* jobLocation */}
          <FormRow
            labelText="Job Location"
            type="text"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* job type */}
          <FormRowSelect
            labelText='status' 
            name='status' 
            value={status} 
            handleChange={handleJobInput} 
            list={statusOptions}
          />
          {/* job status */}
          <FormRowSelect
            labelText='job Type' 
            name='jobType' 
            value={jobType} 
            handleChange={handleJobInput} 
            list={jobTypeOptions}
          />
          <div className="btn-container">
            <button
              className="btn btn-block submit-btn"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button 
              className="btn btn-block submit-btn"
              type="button"
              onClick={(e) => {
                e.preventDefault()
                clearValues()
              }
              }>
                clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}
export default AddJob