const Search = () => {
  return (
    <div className="flex items-center justify-center bg-orange-300">
      {/*  <div className="p-5">
        <input
          type="text"
          placeholder="Salary"
          className="input input-bordered input-success input-md w-full max-w-xs p-4"
        />
      </div> */}
      <div className="p-5">
        <input
          type="text"
          placeholder="Post"
          className="input input-bordered input-success input-md w-full max-w-xs p-4"
        />
      </div>
      <div className="p-5">
        <input
          type="text"
          placeholder="Location"
          className="input input-bordered input-success input-md w-full max-w-xs p-4"
        />
      </div>
      <div>
        <button className="btn btn-neutral hover:bg-orange-300 hover:text-black ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
