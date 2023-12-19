import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-semibold uppercase text-black">Users</h1>
      </div>
      <table class="w-full border border-slate-400 border-spacing-2 text-left">
        <thead>
          <tr>
            <th class="border border-slate-300 ">Song</th>
            <th class="border border-slate-300 ">Artist</th>
            <th class="border border-slate-300 ">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 ">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td class="border border-slate-300 ">Malcolm Lockyer</td>
            <td class="border border-slate-300 ">1961</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
