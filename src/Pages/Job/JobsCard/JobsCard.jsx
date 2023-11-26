import {
  faCalendarDay,
  faHourglass1,
  faLocationDot,
  faMoneyBill1,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const JobsCard = ({ job }) => {
  const {
    companyName,
    companyLogo,
    stipend,
    workFrom,
    jobTitle,
    experience,
    startDate,
    _id,
  } = job;
  return (
    <div className="border-spacing-16 shadow-xl p-5 rounded">
      {/* here take the company name and the logo  */}
      <div className="flex justify-between mb-2 items-center ">
        <div>
          <h1 className="text-lg font-bold w font-sans">{jobTitle}</h1>
          <p className="font-sans  mt-3">{companyName}</p>
        </div>
        <div>
          <img src={companyLogo} className="w-20 h-12" alt="" />
        </div>
      </div>
      {/* 1st end  */}

      {/* this is for work from */}
      <div>
        <h1>
          <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
          {workFrom}
        </h1>
      </div>

      {/* this is  for $ start date EXPERIENCE  make them flex */}
      <div className="flex justify-between mt-5 mb-5">
        <div>
          <h2>
            <FontAwesomeIcon icon={faCalendarDay} className="mr-1" />
            Start Date
          </h2>
          <p> {startDate}</p>
        </div>
        <div>
          <h1>
            <FontAwesomeIcon icon={faMoneyBill1} className="mr-1" />
            CTC(ANNUAL)
          </h1>
          <p>{stipend}</p>
        </div>
        <div>
          <h1>
            {" "}
            <FontAwesomeIcon icon={faHourglass1} className="mr-1" />
            EXPERIENCE
          </h1>
          <p>{experience}</p>
        </div>
      </div>

      <Link to={`/jobInfo/${_id}`}>
        <button className="btn btn-warning sticky ">View Details</button>
      </Link>
    </div>
  );
};

export default JobsCard;
