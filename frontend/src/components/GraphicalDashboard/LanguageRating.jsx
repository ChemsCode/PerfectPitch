import React from "react";
import { IoLanguage } from "react-icons/io5";

function LanguageRating({ clarity, coherence, grammar }) {
  return (
    <div className="col-span-1 row-span-1 shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300 h-full w-full justify-around bg-white">
      <div className="text-center font-medium">
        <h1
          className="flex items-center justify-center"
          style={{ fontSize: "5rem" }}
        >
          {<IoLanguage />}
        </h1>
        <p className="py-2 border-b mx-8 mt-8">Language Proficiency</p>
        <div className="gap-8 sm:grid sm:grid-cols-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500">
              Clarity
            </dt>
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                {/** la couleur change pas*/}
                <div
                  className="bg-indigo-600 h-2.5 rounded "
                  style={{ width: String(clarity * 10) + "%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 ">
                {clarity}
              </span>
            </dd>
          </dl>

          <dl>
            <dt className="text-sm font-medium text-gray-500">
              Coherence
            </dt>
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                <div
                  className="bg-indigo-600 h-2.5 rounded "
                  style={{ width: String(coherence * 10) + "%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500">
                {coherence}
              </span>
            </dd>
          </dl>

          <dl>
            <dt className="text-sm font-medium text-gray-500 ">
              Grammar
            </dt>
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5 mr-2">
                <div
                  className="bg-indigo-600 h-2.5 rounded"
                  style={{ width: String(grammar * 10) + "%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500">
                {grammar}
              </span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default LanguageRating;
