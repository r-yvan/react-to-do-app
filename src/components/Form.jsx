import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [activities, setActivities] = useState([]);

  axios
    .get("http://localhost:3000/api/activities")
    .then((result) => setActivities(result.data))
    .catch((err) => console.log(err.message));

  return (
    <div>
      <div className="font-body bg-slate-200 h-full p-8 ml-2 rounded-lg overflow-scroll scroll-none">
        <h1 className="text-5xl pl-32 font-semibold mb-4">Add Activity</h1>
        <form
          onSubmit={() =>
            axios.post("http://localhost:3000/api/activities", {
              id: activities.length + 1,
              description: description,
              time: time,
            })

          }
        >
          <div>
            <label htmlFor="activity" className="font-normal">
              Description
            </label>
            <br />
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              name="activity"
              className="h-32 w-width-2 rounded-xl py-3 px-3 outline-none"
            />
          </div>
          <div className="mt-5">
            <label htmlFor="time" className="font-normal">
              Time
            </label>
            <br />
            <input
              onChange={(e) => setTime(e.target.value)}
              type="text"
              name="time"
              className="h-12 w-width-2 rounded-xl outline-0 px-3"
            />
          </div>
          <button
            type="submit"
            className="drop-shadow hover:scale-a-little-bit ease-out duration-200 rounded-full bg-green-600 px-5 py-2 font-bold text-white mt-6 ml-60"
          >
            Add Activity
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
