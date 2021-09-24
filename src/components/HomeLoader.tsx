import React from "react";

const HomeLoader: React.FC = () => {

  return(
    <div className="animate-pulse grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-6 -mt-9">
      <div className="border border-yellow-400 bg-card shadow-yellow rounded-md p-3 w-full mx-auto">
        <div className="flex space-x-3">
          <div className="rounded-lg bg-yellow-500 h-16 w-16 my-auto"></div>
          <div className="flex-1 space-y-3 py-1">
            <div className="mx-auto h-4 bg-yellow-500 rounded w-4/5"></div>
            <div className="space-y-1">
              <div className="mx-auto h-2 bg-yellow-500 rounded w-3/4"></div>
              <div className="mx-auto h-2 bg-yellow-500 rounded"></div>
              <div className="mx-auto h-2 bg-yellow-500 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-yellow-400 bg-card shadow-yellow rounded-md p-3 w-full mx-auto">
        <div className="animate-pulse flex space-x-3">
          <div className="rounded-lg bg-yellow-500 h-16 w-16 my-auto"></div>
          <div className="flex-1 space-y-3 py-1">
            <div className="mx-auto h-4 bg-yellow-500 rounded w-4/5"></div>
            <div className="space-y-1">
              <div className="mx-auto h-2 bg-yellow-500 rounded w-3/4"></div>
              <div className="mx-auto h-2 bg-yellow-500 rounded"></div>
              <div className="mx-auto h-2 bg-yellow-500 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-yellow-400 bg-card shadow-yellow rounded-md p-3 w-full mx-auto">
        <div className="animate-pulse flex space-x-3">
          <div className="rounded-lg bg-yellow-500 h-16 w-16 my-auto"></div>
          <div className="flex-1 space-y-3 py-1">
            <div className="mx-auto h-4 bg-yellow-500 rounded w-4/5"></div>
            <div className="space-y-1">
              <div className="mx-auto h-2 bg-yellow-500 rounded w-3/4"></div>
              <div className="mx-auto h-2 bg-yellow-500 rounded"></div>
              <div className="mx-auto h-2 bg-yellow-500 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default HomeLoader