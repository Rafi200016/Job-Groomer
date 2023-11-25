const JobInfoCart = ({ dataOfJob }) => {
  const {
    companyName,
    companyLogo,
    location,
    jobTitle,
    duration,
    stipend,
    startDate,
    experience,
    workFrom,
    aboutTheWork,
    skill,
    whoApply,
  } = dataOfJob;
  return (
    <div>
      <h1>{companyName}</h1>
    </div>
  );
};

export default JobInfoCart;
